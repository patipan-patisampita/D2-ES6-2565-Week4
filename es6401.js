//1.Declarating Regular Function
function sayAsign(){
    console.log("Welcome to Thailand")
}
//2. Annonymous Fuction : 1.First class function 
//Can be assigned as a value to a variable.
let sayHello = function (){
        console.log("Welcome to Annonymous")
}
//3.passed as an argument to other functions
function addName(callback,name){
    callback()
    console.log(messgae)
    console.log(name)
}
//Call Function
//sayAsign()
//sayHello()
addName(sayHello,"Mark Zakerberg")