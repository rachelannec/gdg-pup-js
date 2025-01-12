// your code starts here

document.addEventListener('DOMContentLoaded', (event) =>{
    
    event.preventDefault();
    let addButton = document.getElementById('button-add');
    let subtractButton = document.getElementById('button-subtract');
    let counterText = document.getElementById('counter-text');

    let counter = 0;
    function addOrSubtract(event){
        if(event.target === addButton){
            counter++;
        } else if(event.target === subtractButton){
            counter--;
        }
        
        console.log(counter.toString()); // to be logged in the console
        counterText.textContent = counter.toString(); // to display on the screen
    }

    addButton.addEventListener('click', addOrSubtract);   
    subtractButton.addEventListener('click', addOrSubtract);    // console.log(addOrSubtract);
    
})

