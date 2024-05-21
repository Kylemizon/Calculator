function adde(add1,add2){
    return Number(add1) + Number(add2);
}
function sube(p1,p2){
    return Number(p1) - Number(p2);
}
function sub(){
    let num1= document.getElementById('sub1').value;
    let num2= document.getElementById('sub2').value;
    let result = sube(num1,num2);
    document.getElementById('sum1').value=result;
}
function mule(p1,p2){
    return Number(p1) * Number(p2);
}
function multi(){
    let num1= document.getElementById('mul1').value;
    let num2= document.getElementById('mul2').value;
    let result = mule(num1,num2);
    document.getElementById('sum2').value=result;
}
function dive(p1,p2){

    if (Number(p2) === 0) {
        return 'Error';
    } 
    else {
        return Number(p1) / Number(p2);
    }
}
function div(){
    let num1= document.getElementById('div1').value;
    let num2= document.getElementById('div2').value;
    let result = dive(num1,num2);
    document.getElementById('sum3').value=result;
}