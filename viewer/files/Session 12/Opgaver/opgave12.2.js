async function MakeButtons() {
    var buttonStart = document.createElement("button");
    var buttonClear = document.createElement("button");
    buttonStart.innerHTML = "Start";
    buttonClear.innerHTML = "Clear";
    let timer = document.createElement("h1");
    var startMili = Date.now();
    let setid = 0;
    buttonStart.onclick = async function() {
        setid = setInterval (function() {
            let now = Date.now();
            timer.innerHTML = now - startMili;
            document.body.appendChild(timer);
        }, 1);
    }
    document.body.appendChild(buttonStart);
    buttonClear.onclick = async function() {
        clearInterval(setid);
    }
    document.body.appendChild(buttonClear);
}

MakeButtons();