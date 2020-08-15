module.exports =  (router) => {
  router.get('/food', async function (ctx, next) {
    ctx.body = 'this a foods response!'
  })
  
  router.post('/food', async function (ctx, next) {
    ctx.body = 'this a foods response!'
  })
  
}