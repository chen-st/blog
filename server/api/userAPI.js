const db=require('../db/model.js');
const UserModel = db.userAPI;


let resObj=(code,msg,token,resData)=>{
    return {
        status:code,
        msg:msg,
        token:token,
        data:resData
    }
}

exports.USER_DETELE_API=async(ctx,next)=>{
    let getParams=ctx.request.query;
    try{
        await UserModel.findByIdAndRemove(getParams.id).exec()
        .then((data)=>{
            ctx.body=resObj(1,'删除成功')
        }).catch((e)=>{
            console.log(e)
            ctx.body=resObj(0,'发生错误',e)
        })
    }catch(e){
        ctx.body=resObj(0,'数据库错误',e.toString())
    }
//    ctx.body='dsdf'
}