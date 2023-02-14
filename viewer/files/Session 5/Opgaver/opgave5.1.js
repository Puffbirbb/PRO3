let timeInput = document.getElementById("tid");
timeInput.onclick = () => timeInput.value = Date();

let randomInput = document.getElementById("tal");
randomInput.onclick = () => randomInput.value = Math.random() * 100;

let rydButton = document.querySelector("button");

let nuller = function(){
    timeInput.value = null;
    randomInput.value = null;
}

rydButton.onclick = () => nuller();