 const express=require('express');
 const multer=require('multer');
 const path=require('path');
 const fs=require('fs');
 const app=express();
 app.listen(8080);

 const upload=multer({dest:'uploads/'});
 app.use(express.static('./public'));

 app.post('/profile',upload.single('avatar'),(req,res,next)=>{
     let obj=req.file;
     console.log(obj);
     let oldName=obj.path;
     let oname=req.file.originalname;
     let extname=path.extname(oname);
     console.log(extname);
     let newName=obj.path+extname;
     fs.renameSync(oldName,newName);
     res.send(`文件上传成功，当前名称为${newName}`);
 });