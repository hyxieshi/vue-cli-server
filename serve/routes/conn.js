const mysql=require('mysql')

//连接数据库
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'vuexms'
});

//暴露出去
module.exports=connection;
 