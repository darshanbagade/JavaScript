

//generate random colors
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color= '#';
    for(let i = 0 ; i < 6 ; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    // console.log(color);
    return color;
}


let intervalId;
const changeColor = function(){
    const changeBackground = function(){
        document.querySelector('body').style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval(changeBackground, 700);
    }
}

const stopColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',changeColor);
document.querySelector('#stop').addEventListener('click',stopColor);