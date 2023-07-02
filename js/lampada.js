const powerOn = document.getElementById("ligar");
const powerOff = document.getElementById("desligar");
const lamp = document.getElementById("lamp");

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isLampBroken()){
      lamp.src = "./img/ligada.jpg";
    }
}

function lampOff(){
    if(!isLampBroken()){
      lamp.src = "./img/desligada.jpg"; 
    }
}

function lampBroken(){
    if(!isLampBroken()){
      lamp.src = "./img/quebrada.jpg";
    }
}

powerOn.addEventListener("click",lampOn);
powerOff.addEventListener("click",lampOff);
lamp.addEventListener("mouseover",lampOn);
lamp.addEventListener("mouseleave",lampOff);
lamp.addEventListener("dblclick",lampBroken);