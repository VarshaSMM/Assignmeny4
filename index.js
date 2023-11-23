(function () {
    document.addEventListener("DOMContentLoaded", webpage);
    function webpage(){
        const  body= document.querySelector('body');
        const main=document.createElement('main')
       const sectionOne = section1();
       const sectionTwo = section2();
       const sectionThree = section3();
       const sectionFour = section4();
       const sectionFive = section5();
       const sectionSix = section6();
       main.append(sectionOne,sectionTwo,sectionThree,sectionFour,sectionFive,sectionSix);
       body.append(main);
    }

  function section1(){
const section = document.createElement('section');
const h1= document.createElement('h1');

h1.innerText='Check the number is odd or even';
const div= document.createElement('div');
const label= document.createElement('label');
label.innerText='Enter a number';
const input = document.createElement('input');
input.id='inputvalue'
const div2=document.createElement('div');
div2.classList.add('div2');
const button= document.createElement('button');
button.innerText='Check';
const p= document.createElement('p');
p.id='para'
button.addEventListener('click',buttonListener);
div2.append(button);
div.append(label,input);
section.append(h1,div,div2,p);
return section;
}


function buttonListener() {
    const inputCall = document.getElementById('inputvalue');
    const number = inputCall.value;
    const result = document.getElementById('para');
    result.innerText = '';

    if (!isNaN(number)) {
       
        result.innerText = `The number ${number} is ${number % 2 === 0 ? 'even' : 'odd'}.`;
    } else {
        alert('Please enter a valid number.');
    }
}


function section2(){
    const section = document.createElement('section');
    const h1= document.createElement('h1');
h1.innerText='Find the factorial of the number';
const div= document.createElement('div');
const label= document.createElement('label');
label.innerText='Enter a number';
const input = document.createElement('input');
input.id='inputvalue2';
const div2=document.createElement('div');
div2.classList.add('div2');
const button= document.createElement('button');
button.innerText='Check';
const p= document.createElement('p');
p.id='para2'
button.addEventListener('click',buttonListener2);
div2.append(button)
div.append(label,input);
section.append(h1,div,div2,p);
    return section;
      }


      function buttonListener2() {
        const inputCall = document.getElementById('inputvalue2');
        const number = inputCall.value;
        const result = document.getElementById('para2');
        result.innerText = '';
   
        if (!isNaN(number)) {
            let num=1
           for(let i=1;i<=number;i++){
          num *= i;
         result.innerText = `The factorial of ${number} is ${num}`;
           }
        
        } else {
            alert('Please enter a valid number.');
        }
    }
    

 function section3(){
    const section = document.createElement('section');
    const h1= document.createElement('h1');
    h1.innerText='Hover on button';
    const div= document.createElement('div');
    const div2=document.createElement('div');
    div2.classList.add('div2');
    const button= document.createElement('button');

    button.innerText='Hover';
    const p= document.createElement('p');
    p.id='para3';
    button.addEventListener('mouseover',buttonListener3)
    div2.append(button)
    div.append(p);
    section.append(h1,div2,div);

    return section;
          }

          const hoverTexts = [
            ' Welcome! We\'re excited to have you with us.',
            'Explore our offerings and discover something new.',
            'Hello there! Thanks for visiting our site. Feel free to explore.',
            'Hey you! Welcome to the coolest place on the web. Enjoy your stay!',
            'Get ready for a positive and enjoyable experience.'
        ];
    
        let currentIndex = 0; // Initialize the index counter
    
        function buttonListener3() {
            const result = document.getElementById('para3');
            
            // Set the paragraph text to the current index text
            result.textContent = hoverTexts[currentIndex];
    
            // Increment the index for the next hover, and reset if it reaches the end
            currentIndex = (currentIndex + 1) % hoverTexts.length;
        }
    

   


    function section4() {
        const section = document.createElement('section');
        const h1 = document.createElement('h1');
        h1.innerText = 'Change background color';
        const div2=document.createElement('div');
        div2.classList.add('div2');
        const button = document.createElement('button');
            button.textContent='ADD';
            button.id='button4'
            button.addEventListener('click',buttonListener4);
            div2.append(button)
        section.append(h1,div2);

        return section;
    }
    const favoriteColors = ['white', 'lightblue', 'pink', 'lightseagreen', 'orange'];


    let colorIndex = 0; // Initialize the index counter

    function buttonListener4() {
       
        colorIndex = (colorIndex + 1) % favoriteColors.length;
        document.body.style.backgroundColor = favoriteColors[colorIndex];

    }


function section5(){
const section = document.createElement('section');
const h1 =document.createElement('h1');
h1.id='dateTime';
section.append(h1);
return section;
}
function updateDateTime() {
    const currentDate = new Date();
    const dateTimeElement = document.getElementById('dateTime');
    
    // Format the date and time as a string
    const dateTimeString = currentDate.toLocaleString();
    
    // Update the content of the 'dateTime' element
    dateTimeElement.textContent = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();


 

 function section6() {
    const object = {'Name': 'Varsha BC', 'Age': '21', 'Country': 'India'};
                
    const section = document.createElement('section');
    const h1= document.createElement('h1');

h1.innerText='Details of person';
section.append(h1)
    // Use Object.keys() to get an array of keys
    const keysArray = Object.keys(object);
    const valuesArray = Object.values(object);
    
    for (let i = 0; i < keysArray.length; i++) {
        const h3 = document.createElement('h3');
        h3.textContent = `${keysArray[i]}: ${valuesArray[i]}`;
        section.append(h3);
    }

    return section;
}



})();

