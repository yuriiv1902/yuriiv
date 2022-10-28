var scope = "";
function f1(){
    scope = "123";
    alert(scope);
}
function f2(){
    alert(scope);
}
f2();
f1();
f2();