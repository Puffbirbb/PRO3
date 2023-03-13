async function MakeButtons() {
    var buttonStart = document.createElement("button");
    var buttonClear = document.createElement("button");
    buttonStart.innerHTML = "Start";
    buttonClear.innerHTML = "Clear";
    let timer = document.createElement("h1");
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    let setid = 0;
    buttonStart.onclick = async function() {
        setid = setInterval (function() {
            seconds++;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
            timer.innerHTML = hours + ":" + minutes + ":" + seconds;
            document.body.appendChild(timer);
        }, 1000);
    }
    document.body.appendChild(buttonStart);
    buttonClear.onclick = async function() {
        clearInterval(setid);
    }
    document.body.appendChild(buttonClear);
}

MakeButtons();