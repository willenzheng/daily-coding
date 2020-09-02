const http=require('http');
const fs=require('fs');
//创建web服务器
const app=http.createServer();
//设置端口8080
app.listen(8080);

//接受浏览器的请求，通过事件
//事件：一旦触发，会自动执行回调函数
app.on('request',(req,res)=>{
    //根据请求的URL来做出响应
    if(req.url==='/list'){
        res.write('this is product list');
    }else if(req.url==='/index'){
        //设置响应的内容类型
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf-8'
        });
        res.write('<h2>这是首页</h2>');
    }else if(req.url==='/'){
        //同步读取1.html文件
        let data=fs.readFileSync('./1.html');
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf-8'
        });
        //把读取到的内容作为响应的内容
        res.write(data);
    }else if(req.url==='/study'){
        //跳转
        //302 Location
        res.writeHead(302,{
            Location:'http://www.tmooc.cn'
        });
    }else {
        res.writeHead(404);
        res.write('not found');
    }
    res.end();
});
