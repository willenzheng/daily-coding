let count=0;
let timer=setInterval(()=>{
    console.log('然哥');
    count++;
    if(count===3){
        clearInterval(timer);
    }
},1000)