var express = require('express');
var router = express.Router();

//引入连接数据库模块
const connection = require('./conn')

//连接数据
connection.connect((err) => {
    if (err) {
        // console.log(err)node
        throw err;
    }
})


/*接受登录请求*/
router.post('/checklogin', (req, res) => {
    /*接收用户名密码 */
    let { userId, passWord } = req.body;

    const sqlStr = `select * from users where  userId='${userId}' and passWord='${passWord}'`
    connection.query(sqlStr, (err,data) => {
        console.log(data)
        res.send(data)
    })
});



/*注册用户*/
router.post('/registerUser', (req, res) => {
    const sqlStr = 'insert into users(userId,passWord) values (?,?)'
    var params = req.body;
    connection.query(sqlStr, [params.userId, params.passWord], (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(data)
        }
    })
});

/**
 * 注册判断
 */
router.get('/isRegister', (req, res) => {
    let { userId } = req.query;
    const sqlStr = `select * from users where userId='${userId}'`
    connection.query(sqlStr, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(data)
        }
    })
});
/**
 * 更新密码
 */
router.post('/updatePwd', (req, res) => {
    let { userId, passWord } = req.body;
    const sqlStr = `update users set passWord='${passWord}'  where userId='${userId}'`
    connection.query(sqlStr, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(data)
        }
    })
});
module.exports = router;