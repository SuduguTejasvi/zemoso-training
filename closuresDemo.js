function A(){
    var a=1;
    function B()
    {
        console.log(a);
    }
    return B;
}
var C=A();
C();


//Example of closures setTimeOut

function D()
{
    var i=5;
    setTimeout(()=>{
        console.log(i);
        },5000);
        i=9;
        console.log("Hello");
}

D();



function E()
{
    for(var i=1;i<5;i++)
        {
            setTimeout(()=>{
                console.log(i);
                },5000);
        }
}

E();