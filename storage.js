// window.onstorage=(e)=>{
//     console.log(e);
//     alert("data changed");
// }

window.addEventListener('storage', function(event) {
    this.alert('data changed');
    console.log('Storage event detected!');
    console.log('Key:', event.key);
    console.log('Old Value:', event.oldValue);
    console.log('New Value:', event.newValue);
    console.log('Storage Area:', event.storageArea);
    console.log('URL:', event.url);
});


document.addEventListener('DOMContentLoaded',()=>{
    var localbtn=document.getElementsByClassName('localbtn');
    console.log(localbtn);
    localbtn[0].addEventListener('click',()=>
    {
        var key=prompt("Enter key value");
        var value=prompt("Enter value");
        localStorage.setItem(key,value);
        console.log(`Local key is ${key} value is ${value} `);
    });

});

function sessionbtn()
{
    var key=prompt("Enter key value");
    var value=prompt("Enter value");
    sessionStorage.setItem(key,value);
    console.log(` Session key is ${key} value is ${value} `);

}