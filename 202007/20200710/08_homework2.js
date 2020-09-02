var count=1;
for(var year=2000;year<=2100;year++){
    if(year%4===0 && year%100!==0 || year%400===0){
        console.log(year);
        count++;
    }
    if(count>10){
        break;
    }
}