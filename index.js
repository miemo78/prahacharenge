const express =  require('express')

//サーバ1
const app1 = express()
const cookie1 = (req,res,next) =>{
    res.cookie("first-cookie","hoge",{

        httpOnly: true,
    });
    next();
};

app1.use(cookie1)
app1.use(express.static('statics'))
app1.listen(8000,() => console.log('Listening on port 8000...http://localhost:8000/test1.html'))

//サーバ2
const app2 = express()

const cookie2 = (req,res,next) =>{
    res.cookie("third-cookie","fuga",{
        httpOnly: true,
    });
    next();
};
app2.use(cookie2)
app2.use(express.static('statics'))
app2.listen(80,() => console.log('Listening on port 80...https://050a086837ab.ngrok.io'))
