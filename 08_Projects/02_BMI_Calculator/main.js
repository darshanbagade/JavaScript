const form = document.querySelector('form');
// const height =parseInt(document.querySelector('#height').value);
//this usecase will give empty string as value because it is called before the form is submitted

form.addEventListener('submit',function(e){
    e.preventDefault();
    // it stops the default behaviour of the form

    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const result =document.querySelector('#result');
    const message =document.querySelector('#message');
   
    message.innerHTML = ''; // Clear previous messages

    if(height <= 0 || isNaN(height) ){
        result.innerHTML = `<span>Please Enter valid height</span>`;
    }
    else if(weight <= 0 || isNaN(weight)){
        result.innerHTML = `<span>Please Enter valid weight</span>`;
    }
    else{
        const bmi= (weight/(height*height/10000)).toFixed(2); // toFixed(2) is used to round off the value to 2 decimal places
        result.innerHTML = `Result : ${bmi}`;

        if(bmi < 18.6){
            message.innerHTML = "Under Weight";
        }else if(bmi >= 18.6 && bmi<=24.9){
            message.innerHTML = "Normal range";
        }
        else if(bmi > 24.9){
            message.innerHTML = "Over Weight";
        }
    }    
})