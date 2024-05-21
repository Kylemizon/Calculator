function add(){
    let a = 0;
    a = document.getElementById('add1').value;
    let b = 0;
    b = document.getElementById('add2').value;
    result = Number(a)+Number(b);
    document.getElementById("sum").value=result;
}
function sub(){
    let c = 0;
    c = document.getElementById('sub1').value;
    let d = 0;
    d = document.getElementById('sub2').value;
    result1 = Number(c)-Number(d);
    document.getElementById('sum1').value=result1;
}
function multi(){
    let e = 0;
    e = document.getElementById('mul1').value;
    let f = 0;
    f = document.getElementById('mul2').value;
    result2 = Number(e)*Number(f);
    document.getElementById('sum2').value=result2;
}
function div(){
    let g = 0;
    g = document.getElementById('div1').value;
    let h = 0;
    h = document.getElementById('div2').value;
    result3 = Number(g)/Number(h);
    document.getElementById('sum3').value=result3;
}