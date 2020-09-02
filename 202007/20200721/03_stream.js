const fs=require('fs');
let rs=fs.createReadStream('./2.jpg');
// let i=0;
// rs.on('data',(chunk)=>{
//     // console.log(chunk);
//     i++;
//     // console.log(i);
// });
// rs.on('end',()=>{
//     console.log(i);
// });
let ws=fs.createWriteStream('./3.jpg');
rs.pipe(ws);
