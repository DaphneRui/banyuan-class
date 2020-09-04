controlHeader();

$(window).scroll(function(){

    controlHeader();
})

$('.header-right-a').click(function(event){

    event.preventDefault();

    let href = $(this).attr('href');

    if($(`.${href}`).length > 0){
        $('html, body').stop().animate({
            /* scrolltop动画，跳转到对应元素的最顶端 */
            scrollTop: $(`.${href}`).offset().top
        }, 500,'linear');
    }
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
let guide = document.getElementsByClassName('header-right')[0]

btnEle.onclick = function(){

    if(guide.style.display == 'flex'){
        guide.style.display = 'none'
    }else{
        guide.style.display = 'flex'
    }
    

}



window.onload = function(){

    setTimeout (function(){
        let ele = document.getElementsByClassName('preload')[0]
        ele.className = ''
    },50)
    
}