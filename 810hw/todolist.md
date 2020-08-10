```js
//todolist
let tasks =[{
  name : '任务1',
  checked : false
},{
  name : '任务2',
  checked : true
},{
  name : '任务3',
  checked : false
},{
  name : '任务4',
  checked : false
},{
  name : '任务5',
  checked : true
},{
  name : '任务6',
  checked : false
}]
router.get('/todoList', async (ctx, next) => {
  ctx.state = {
    tasks
  }
  await ctx.render('todoList', ctx.state)
})
router.post('/checkTask', async (ctx, next) => {
  const { name, checked} = ctx.request.body;
  tasks.forEach((item)=>{
    if(item.name === name){
      item.checked = !item.checked
    }
  });
  console.log(tasks);
  ctx.response.body = { status : 'success'};
})
router.post('/addTask', async (ctx, next) =>{
  const { name } = ctx.request.body;
  tasks.push({
    name,
    checked : false
  });
  ctx.response.body = { status : 'success'};
})
router.post('/closeTask', async (ctx, next) =>{
  const { name } = ctx.request.body;
  let i = search(tasks,name);
  tasks.splice(i,1);
  // console.log(tasks)
  ctx.response.body={status:'success'}
})
function search(tasks,name){
  let i = tasks.length;
  while(i-=1){
    console.log(tasks[i].name);
    console.log('name',name);
      if (tasks[i].name === name){
         console.log('in');
         return i;
      }
  }
  return false;
}
```

```js
    var taskItems = document.getElementsByClassName("task-item");
    var inputEle = document.getElementsByClassName('task-input')[0];
    var taskListEle = document.getElementsByClassName("task-list")[0];
    var addBtn = document.getElementsByClassName('add-btn')[0];
    var close = document.getElementsByClassName("close");

    init();

    bindCloseEvent();

    addBtn.onclick = addTask;

    inputEle.onkeydown = function (e){
        if(e.keyCode === 13){
            addTask();
        };
    }

    function init(){
        for (var i = 0; i < taskItems.length; i++) {
            var span = createCloseSymbol()
            taskItems[i].appendChild(span);
        }
        bindCheckedEvent()
    }

    function bindCheckedEvent(){    
        for (var i = 0; i < taskItems.length; i++) {
            taskItems[i].onclick = function(){

                $.ajax({
                    type : 'post',
                    url : 'http://localhost:3000/checkTask',
                    data : {
                        name : this.getAttribute('task'),
                        checked : !this.classList.contains('checked')
                    },
                    success:(result)=>{
                        this.classList.toggle('checked');
                    },
                    error:(error)=>{

                    }
                })
            }
        }
    }

    function addTask() {
        var li = document.createElement("li");
        li.className = 'task-item';

        var inputValue = inputEle.value;

        if(inputValue === ''){
            return ;
        }

        $.ajax({
            type : 'post',
            url : 'http://localhost:3000/addTask',
            data : {
                name : inputValue
            },
            success : (result)=>{
                var text = document.createTextNode(inputValue);
                li.appendChild(text);
                taskListEle.appendChild(li); 

                inputEle.value = "";
                var span = createCloseSymbol();
                li.appendChild(span);
                li.onclick = function(){
                    this.classList.toggle('checked');
                }

                bindCloseEvent();
            },
            error : (error)=>{

            }
        })


        
    }

    function createCloseSymbol(){
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        return span;
    }


    function bindCloseEvent(){
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                //var parentEle = this.parentElement;
                // parentEle.remove();
                
                $.ajax({
                    type : 'post',
                    url : 'http://localhost:3000/closeTask',
                    data:{
                        name:this.parentElement.getAttribute('task'),
                    },
                    success:(result)=>{
                        var parentEle = this.parentElement;
                        console.log(parentEle);
                        parentEle.remove();
                    },
                    error:()=>{
                
                    }
                })


        
            }
        }
    }
```

