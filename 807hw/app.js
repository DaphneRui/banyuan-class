const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('koa2-cors');

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(cors({
    credentials: true,
  }))
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('index', ctx.state)
})

router.get('/', async (ctx, next) => {  // '/'写入路径
  // ctx.body = 'Hello World'

  //get传参
  // let { user,id,test } = ctx.request.query;  // /?user=123&id=222&test=333 ===> {user : xxx}
  // console.log(user);
  // console.log(id);
  // console.log(test);

  // ctx.state = {
  //   title: 'Koa2'
  // }
  //await ctx.render('index', ctx.state)

  //json
  // let obj = {
  //   a : 1,
  //   b : 2
  // };
  // ctx.response.body = obj;
  // let array = [1,2,3];
  // ctx.response.body = array;

  let { user,id } = ctx.request.query;
  let obj = {
    user,
    id
  };
  ctx.response.body = obj;


})

//post
router.post('/post', async (ctx,next) => {

  //console.log('post');

  //post传参
  const { name,password } = ctx.request.body;
  console.log(name);
  console.log(password);

  ctx.response.body = {
    // type:'post'

    name,
    password
  };

  //重定向
  //ctx.redirect('/redirect')

})

router.post('/form',async(ctx,next)=>{
  const { name,password } = ctx.request.body;
  console.log(name);
  console.log(password);
  ctx.respnse.body = {
    status : 'success'
  }
})

router.post('/checkName',async (ctx, next)=>{
  const { name } = ctx.request.body;

  console.log(name);
  const names = ['isen', 'lucy', 'tom'];
  let data = {};
  if(names.indexOf(name) === -1){
    data.include = false;
  }else{
    data.include = true;
  }

  console.log(data);// ==> {include : true || flase}
  ctx.response.body = data;
})


routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})



//写一个对应的get请求，路径为‘/add’，传入参数a与b，返回a与b的和
router.get('/add', async(ctx, next)=>{
  let{ a,b } = ctx.request.query;
  let obj = {
    "sum": Number(a) + Number(b)

  };
  ctx.response.body = obj;

})

//写一个对应的post的请求，路径为‘/isPrime’，传入任意一个数字，返回是不是一个质数，如果是返回：true
//如果不是，请返回false，并返回比他大的数字中，离他最近的那个质数
router.post('/isPrime', async (ctx, next) => {
  let  { number } = ctx.request.body;
  number = Number(number);
  const flag = isPrime(Number(number));
  let data = {};
  if(flag){
    data.isPrime = true;
  }else{
    data.isPrime = false;

    number++;
    while(!isPrime(number)){
      number++;
    }

    // for(let i = 0;i < 100000; i++){
    //   num++;
    //   if(isPrime(num)){
    //     break;
    //   }
    // }

    data.number = number;
  }
  
  ctx.response.body = data;

})
function isPrime(num){
  for(var i=2;i<num;i++){
    if(num%i==0){
      return  false;
    }     
  }
  return true;
} 


  



  

  

