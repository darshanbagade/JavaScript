const time= document.querySelector('#time');
const date= document.querySelector('#date');


//it continues to update the given time
setInterval(function(){
    let clock = new Date();
    // console.log(date.toLocaleTimeString());
    time.innerHTML = clock.toLocaleTimeString();
    date.innerHTML = clock.toLocaleDateString();
},1000)
//1000ms =1s