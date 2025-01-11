// your code starts here

document.addEventListener('DOMContentLoaded', (event) =>{
    
    event.preventDefault();
    let addButton = document.getElementById('add-button');
    let subtractButton = document.getElementById('subtract-button');
    let counterText = document.getElementById('counter-text');

    let counter = 0;
    function addOrSubtract(event){
        if(event.target === addButton){
            counter++;
        } else if(event.target === subtractButton){
            counter--;
        }
        
        console.log(counter.toString());
        counterText.textContent = counter.toString();
    }

    addButton.addEventListener('click', addOrSubtract());   
    subtractButton.addEventListener('click', addOrSubtract());    // console.log(addOrSubtract);
    
})

