document.cookie = "name=tejasvi; SameSite=None; Secure; expires=Sat 29 Jun 2024 12:30:00 GMT";
document.cookie = "age=21; SameSite=None; Secure";

function showCookies() {
    const output = document.getElementById("cookies");
    console.log(document.cookie);
    output.textContent = `> ${document.cookie}`;
}
  
function clearOutputCookies() {
    const output = document.getElementById("cookies");
    output.textContent = "";
}

//this function is used to check whether we have any cookie with a name age if it is present then it returns its value
function showCookieValue() {
    var cookieValue = document.cookie.split(';').find((row) => row.trim().startsWith("age="))?.split("=")[1];
    console.log(cookieValue);
    var setcookie = document.getElementById('cookie-value');
    setcookie.textContent = `Cookie Value: ${cookieValue}`;
}

//if we what cookie do be created only once

function doOnce()
{
    if(!(document.cookie.split(";").find((row)=>row.trim().startsWith("gender="))))
        {
            document.cookie="gender=female;samesit=none; secure";
            const onlyonce=document.getElementById("do-once");
            onlyonce.textContent="Cookie created";
            console.log("cookie created");
        }
        else{
            const onlyonce=document.getElementById("do-once");
            onlyonce.textContent="Cookie is already created";
            console.log("Cookie is already created");

        }
}

// Reset the previous cookie changing the name value of cookie from tejasvi to teju

function resetOnce()
{
    document.cooke="name=Teju ;expires=sat 23 jun 2024 12:30:00 GST;sanmesite=none;secure";
    let resetonce=document.getElementById("reset-once");
    resetonce.textContent="Cookie reset";
    console.log(resetonce);
}

//Check a cookie existence to check for the name cookie 
function checkACookieExists()
{

    if(document.cookie.split(";").some((item)=>item.trim().startsWith("name")))
        {
            const cookieexists=document.getElementById("a-cookie-existence");
            console.log("Cookie exists");
            cookieexists.textContent="Cookie exists";
        }
        else{
            const cookieexists=document.getElementById("a-cookie-existence");
            console.log("Cookie does not exists");
            cookieexists.textContent="Cookie does not  exists";
        }
}


// Check that a cookie has a specific value to check whether the age value in the cookie is 21 or not 

function checkCookieHasASpecificValue()
{
    if(document.cookie.split(";").some((item)=>item.includes("age=21")))
        {
            const cookiehasvalue=document.getElementById("a-specific-value-of-the-cookie");
            cookiehasvalue.textContent="cookie with this specific value exist";
            console.log("cookie with this specific value exist");
        }
        else{
            const cookiehasvalue=document.getElementById("a-specific-value-of-the-cookie");
            cookiehasvalue.textContent="cookie with this specific value doesnot exist";
            console.log("cookie with this specific value doesnot exist");

        }
}