// Correcting JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // GetElementById()
    var heading = document.getElementById('heading');
    heading.innerHTML = 'Welcome to DOM Manipulations';

    console.log(heading.getAttribute('id'));

    heading.setAttribute('class',heading);
    console.log(heading.getAttribute('class'));

    //remove attribute
    // heading.removeAttribute('class');

    // GetElementsByTagName()
    var paragraphs = document.getElementsByTagName('p');
    paragraphs[0].innerHTML = 'Why am I not clicked? 😢';

    // GetElementsByClassName()
    var greetings = document.getElementsByClassName('greeting');
    greetings[0].innerHTML = 'Hi there!';
    greetings[0].style.fontSize = '15px';
    greetings[0].style.color='red';
    var dropdown = document.getElementById('mood'); // Use getElementById, not getElementsById
    
    console.log(dropdown.parentNode);
    
    console.log(dropdown.childNodes);
    
    var newOption = document.createElement('option');
    newOption.value = '3';
    newOption.textContent = 'moody';
    
    dropdown.appendChild(newOption);
    //remove element
    // dropdown.removeChild(newOption);
    
    // QuerySelector
    var button = document.querySelector('#button');
    button.addEventListener('click', function() {
        paragraphs[0].innerHTML = 'Now I am clicked! &#128516;';
        greetings[0].style.color='green';
    });
    var divisions=document.querySelectorAll('div');
    console.log(divisions);

    var container=document.getElementsByClassName('card');

    container[0].addEventListener('mouseenter',function(){
        container[0].classList.add('scaled');
    });

    container[0].addEventListener('mouseleave',function(){
        container[0].classList.remove('scaled');
    });

    // document.addEventListener('keydown',function(event){
    //     if(event.keyCode===13)
    //         {
    //             paragraphs[0].innerHTML = 'Why am I not clicked? 😢';
    //         }
    // });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            paragraphs[0].innerHTML = 'Enter key pressed! &#128516;';
            greetings[0].style.color='green';
        }
    });

});

