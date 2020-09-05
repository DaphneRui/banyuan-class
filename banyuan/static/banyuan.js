controlHeader();

$(window).scroll(function(){

    controlHeader();
})

function removeClick(){
    $('.header-right-a').removeClass('click')
}

$('.header-right-a').each(function(){
    $(this).click(function(event){

        removeClick()

        event.preventDefault();

        let href = $(this).attr('href');

        if($(`.${href}`).length > 0){
            $('html, body').stop().animate({
                /* scrolltop动画，跳转到对应元素的最顶端 */
                scrollTop: $(`.${href}`).offset().top
                
            }, 500,'linear');
        }

        $(this).addClass('click')
    })
})

function controlHeader(){

    let scrollTop = document.documentElement.scrollTop;

    if(scrollTop > 20){
        $('.header').addClass('scroll');
    }else{
        $('.header').removeClass('scroll');
    }
}

let btnEle = document.getElementsByClassName('header-button')[0]
let guideEle = document.getElementsByClassName('header-right')[0]



btnEle.onclick = function(){

    if(guideEle.style.display == 'flex'){
        guideEle.style.display = 'none'
    }else{
        guideEle.style.display = 'flex'
    }

}

window.onresize = function(){
    let width = document.body.clientWidth
    if(width > 1024){
        guideEle.style.display =  'none'
    }
}


window.onload = function(){

    setTimeout (function(){
        let ele = document.getElementsByClassName('preload')[0]
        ele.className = ''
    },50)
    
}