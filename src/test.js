function isTestable(target){
	target.isTestable = true
}

@isTestable
class MyTestableClass {}
var i = 1
let j = i * 2
let o = j + i
console.log(MyTestableClass.isTestable)
console.warn(o)
