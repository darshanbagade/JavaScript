const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const result =document.querySelector('#result');
    const message =document.querySelector('#message');

    if(height < 0 || isNaN(height)){
        result.innerHTML = `<span>Please Enter valid height</span>`;
    }
    else if(weight < 0 || isNaN(weight)){
        result.innerHTML = `<span>Please Enter valid weight</span>`;
    }
    else{
        const bmi= (weight/(height*height/10000)).toFixed(2)
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