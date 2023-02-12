
// detecting button press
var numberofdrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
    function handleclick()
    {
        var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    
    }
}
// keyboard press

    document.addEventListener("keypress",function(event)
    {
         makesound(event.key);
         buttonAnimation(event.key);
    });
    function makesound(key)
    {
        switch (key) {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                 var tom2=new Audio("sounds/tom-2.mp3");
                 tom2.play();
                    break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                 var carsh =new Audio("sounds/crash.mp3");
                 carsh.play();
                 break;
            case "k":
                 var kick=new Audio("sounds/kick-bass.mp3");
                 kick.play();
                 break;
            case "l":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            default:
               console.log("buttonInnerHTML");
           }
    
    
}
function buttonAnimation(currentkey)
{
  var activateButton=document.querySelector("."+currentkey);
  activateButton.classList.add("pressed");
  setTimeout(function()
  {
   activateButton.classList.remove("pressed");
  },100);
}

//  var audio=new Audio('sounds/crash.mp3');
// audio.play();