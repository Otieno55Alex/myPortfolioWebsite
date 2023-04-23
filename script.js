let ButtonOne = document.getElementById('button1');
let ButtonTwo = document.getElementById('button2');
let ButtonThree = document.getElementById('button3');
let ButtonFour = document.getElementById('button4');
let ButtonFive = document.getElementById('button5');
let ButtonSix = document.getElementById('button6');
function changeColor() {
   
        event.target.style.backgroundColor = 'brown';
    
   
}
ButtonOne.onclick = changeColor;
ButtonTwo.onclick = changeColor;
ButtonThree.onclick = changeColor;
ButtonFour.onclick = changeColor;
ButtonFive.onclick = changeColor;
ButtonSix.onclick = changeColor;
//to change fotn size on mouse over

function changeFont() {
    event.target.style.fontSize = '20px';
};

ButtonOne.onmouseover = changeFont;
ButtonTwo.onmouseover = changeFont;
ButtonThree.onmouseover = changeFont;
ButtonFour.onmouseover = changeFont;
ButtonFive.onmouseover = changeFont;
ButtonSix.onmouseover = changeFont;
//to return font on mouse out
function returnFont() {
    event.target.style.fontSize = '18px'
};
ButtonOne.onmouseout = returnFont;
ButtonTwo.onmouseout = returnFont;
ButtonThree.onmouseout = returnFont;
ButtonFour.onmouseout = returnFont;
ButtonFive.onmouseout = returnFont;
ButtonSix.onmouseout = returnFont;

//to get photo elements 
let photoOne = getElementById('photo1')
let photoTwo = getElementById('photo2')
let photoThree = getElementById('photo3')
let photoFour = getElementById('photo4')
let photoFive = getElementById('photo5')
//function to
//setInterval(SwitchPhoto, 1000);
function SwitchPhoto(){
    photoOne.style.display.hidden = true ;
    photoOne.src = photoTwo;
    
}
ButtonOne.onclick = SwitchPhoto;
/*function startSwitch() {
    setInterval(SwitchPhoto, 1000);
}*/
//document.body.onload = SwitchPhoto;
