const db=require('mongoose');

const DB_URL ='mongodb://localhost:27017/cst_blog';
db.Promise=global.Promise;
db.connect(DB_URL,{
    useMongoClient:true
})
db.connection.once('connected', function () {
    console.log("connected mongoodb!");
});
db.connection.on('error', function () {
    console.log('连接错误:');
});
db.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports=db;