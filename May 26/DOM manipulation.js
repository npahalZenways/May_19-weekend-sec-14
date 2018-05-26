document.addEventListener('readystatechange', function(){
    
    console.log('called')

    if(document.readyState == 'complete'){
var para = document.getElementById('mypara');
var anchorArray = document.getElementsByTagName('a');

var input = document.querySelector('input')
console.log(input)

// events

// addEventListerner
/*
    syntax: element.addEventListener(event-name, callback)

*/
para.addEventListener('mouseenter', (e)=>{
    console.log(e)
    para.style.backgroundColor = 'green';
    para.style.color = 'white';
})

para.addEventListener('mouseleave', ()=>{
    para.style.backgroundColor = 'transparent';
    para.style.color = 'black';
})

setTimeout(function(){
    para.innerHTML = '<span>This is a span</span>';
    para.value = 'hello';
    console.log(document.readyState)
}, 1)

function printInConsole(p){
    anchorArray[0].setAttribute('href', 'https://www.w3schools.com')
}
}})