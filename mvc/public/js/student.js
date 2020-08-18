// 获取selector中option的方式
let nameEle = document.getElementsByClassName('name')[0]
let genderEle = document.getElementsByClassName('gender')[0]
let ageEle = document.getElementsByClassName('age')[0]
let majorEle = document.getElementsByClassName('major')[0]
let sendBtn = document.getElementsByClassName('send')[0]
let select = document.getElementsByClassName('student-select')[0]

function getGender(){

  const index = genderEle.selectedIndex

  const gender = genderEle.options[index]

  return  gender.value
}

function getMajor(){

  const index = majorEle.selectedIndex

  const major = majorEle.options[index]

  return  major.value
}

select.onchange = function(){
  const index = select.selectedIndex

  const gender = select.options[index]

  const value = gender.value
  // 获取select的值
  $.ajax({
    
    type:'get',
    url:'http://localhost:3000/student/getStudents',
    data:{
      gender:value
    },
    success:(result)=>{
      
      
      $('.student-list').html('')
      let html = ''
      result.students.forEach((item)=>{
        html+= `<div>
                  <span>${item.name} ${item.gender} ${item.age}岁 学习${item.major}</span>
                </div>`
      })
      $('.student-list').html(html)
      
    }
  })
}

sendBtn.onclick = function (){

  console.log({
    name:nameEle.value,
    gender:getGender(),
    age:ageEle.value,
    major:getMajor()
  })

  $.ajax({

    type:'post',
    url:'http://localhost:3000/student',
    data:{
      name:nameEle.value,
      gender:getGender(),
      age:ageEle.value,
      major:getMajor()
    },
    success:(result)=>{

      if(result.status === 'success'){
        //result ===> { status: 'success', students: []}
        console.log(result.students)
        $('.student-list').html('')
        //document.getElementsByClassName('student-list')[0].innerHTML('')
        let html = ''
        result.students.forEach((item)=>{
          let gender = item.gender == 1 ? '男' : '女'
          html+= `<div><span>${item.name} ${gender} ${item.age}岁 学习${item.major}  </span></div>`
        })
        $('.student-list').html(html)
        // document.getElementsByClassName('student-list')[0].innerHTML(html)
        // alert('存入成功')
      }else{

        alert(result.message)
      }
      
    }
  })
}


