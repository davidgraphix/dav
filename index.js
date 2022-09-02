
//**** this me doing console logging **/
console.log("Welcome to my js site");
console.log(2+2);
console.error('Error nothing was found')


//**** Keywords for declaring variables */
//const cannot be reassigned
//const 

//can be reassigned
//var

//let can be reassigned
//let


//** how to name variables */

//snake case
let our_site_heading = 'snake case variable';


//camel case
let ourNewSiteHeading = 'camel';
let myUserName = 'another example'


//pascal case
let OurSiteHeading = 'pascal';




//** using variables */
let name = "David";
let age = 15;

let greeting = "Hello";

//example of concatenation
console.log(greeting +" "+ name)

//example of concatenation
console.log(name + " is "+ age + " years old")


//*** referencing dom (document object model) elements ***/ 

//window is the hight member in the dom.
console.log(window)

//document is a child object of windows
console.log(window.document)



//accessing children objects of the dom

//by tag name. You will get an array containing elements with te particular tag name
let ourSiteHeading = window.document.getElementsByTagName('h1')
console.log(ourSiteHeading)
let allParagraph = window.document.getElementsByTagName('p')
console.log(allParagraph);

//by id
let ourFirstPara = document.getElementById('my-first-para');
console.log(ourFirstPara);

//by class
let secondList = document.getElementsByClassName('second-item');
console.log(secondList)

//query selector
let querySelectorElementByClassName = document.querySelector('.second-item')
let querySelectorElementById = document.querySelector('#my-second-para')
let querySelectorElementByTagName = document.querySelector('p')

console.log("by class name", querySelectorElementByClassName)
console.log("by id", querySelectorElementById);
console.log('by tag name', querySelectorElementByTagName)


//udpating the dom after getting an element

let ourFirstParaIWantToUpdate = document.getElementById('my-first-para'); //referencing
console.log(ourFirstParaIWantToUpdate.innerText)
ourFirstParaIWantToUpdate.innerText = 'The new test that we want to show' //updating it (here, we are updating the inner text)
ourFirstParaIWantToUpdate.style.color = 'blue'


//** event, dont bother now */
let intial = false;
count = 0;
let changer = document.getElementById('changer')
changer.addEventListener('click', ()=> {

    let ourFirstParaIWantToUpdate = document.getElementById('my-first-para'); //referencing
  
    if(intial){
        ourFirstParaIWantToUpdate.style.color = 'blue'
    }else {
        ourFirstParaIWantToUpdate.style.color = 'red'
    }
    intial = !intial
    ourFirstParaIWantToUpdate.innerText = count;
    count++;
    
})


//** Array */
let even = [2,4,6,8,10]

console.log(even)