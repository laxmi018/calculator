const audio=document.getElementById('btn')

function appendCharacter(character){
    btn.play();
    const display=document.getElementById('display');
    if(display.innerText==='0'){
        display.innerText=character;
    }else{
        display.innerText += character;
    }
}

function clearDisplay(){
    btn.play();
    display.innerText='0';
}

function deleteLast(){
    btn.play();
    if(display.innerText.length>1){
        display.innerText=display.innerText.slice(0,-1);
    }else{
        display.innerText='0';
    }
}

function calculateResult(){
    btn.play();
    try{
        display.innerText=eval(display.innerText);
    }catch(error){
        display.innerText="Error"
    }
}