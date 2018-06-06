const Router=require('koa-router')

const router = new Router({
    prefix:'/api'
});

const userAPI=require('../api/userAPI.js')

const deleteUser = userAPI.USER_DETELE_API

router.get('/dd',deleteUser)
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a usersd'
})

module.exports=router