var i=0
function say(){
	console.log('然哥');
	i++;
	//打印完第3次，就不再往后执行
	if(i===3){
	return;
	}
	say();
}
say();