//your JS code here. If required.
function hello(){
	console.log("alert"+"("+'"'+arguments.callee.name+'"'+")");
}

hello();