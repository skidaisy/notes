//调用example.js模块
var example_apply = require('./example')
//调用add方法
example_apply.add("skidaisy")
//实例化sum
var sum = new example_apply.sum()
sum.add(2,1)
sum.sub(2,1)