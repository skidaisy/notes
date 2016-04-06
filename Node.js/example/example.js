//创建example.js模块
//模块内方法
function add (parm){
	console.log("add：" + parm)
}
//提供对外接口
exports.add = add
//复杂点的例子
function sum(){
	var sum
	this.add = function(a,b){
		sum =  a + b
		console.log('sum(a+b) = ' + sum)
	}
	this.sub = function(a,b){
		sum =  a - b
		console.log('sum(a-b) = ' + sum)
	}
}
exports.sum = sum