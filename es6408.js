//Outer function
function greet(name){
    //inner function
    function disPlayName(){
        console.log(`Hi ${name}`)
    }
    //disPlayName()
    //returning function
    return disPlayName
}
// greet('Mark')
const g1 = greet('Mark')
g1()