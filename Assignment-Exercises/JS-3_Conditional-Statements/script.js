function checkAge() {
    // write your code her

    let age = document.getElementById("ageInput").value; 
    
    // the if-else statement to check the age and display the result
    if (age <= 12 && age >= 0){
        document.getElementById("result").innerHTML = "Child";
    } else if(age >= 13 && age <= 19){
        document.getElementById("result").innerHTML = "Teenager";
    } else if(age >= 20){
        document.getElementById("result").innerHTML = "Adult";
    }else{
        document.getElementById("result").innerHTML = "Invalid age. Please enter a valid number.";
    }

}
