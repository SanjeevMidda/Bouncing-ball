let rain = document.querySelector('.rain');

setInterval(moveRain, 1000);

function moveRain(){
   
    if(!rain.classList.contains('rainMove')){
        rain.classList.add('rainMove');
    }else{
        rain.classList.remove('rainMove');
    }
    // rain.classList.add('rainMove');
    // rain.classList.remove('rainMove');
}