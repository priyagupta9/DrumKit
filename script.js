"use strict";

// alert("hhh");

const drums = document.querySelectorAll(".drum");

drums.forEach((drumActive) => {
    drumActive.addEventListener("click",()=>{
        let drumLetter = drumActive.textContent;
        makeSound(drumLetter);

        btnAnimate(drumLetter);
    });
});

//keydown Event
//it is used when any key is pressed
document.addEventListener("keydown", (event) =>{
     //here event.key is the pressed Key Name
    makeSound(event.key);

    btnAnimate(event.key);
});


//play sounds in js
// var audio = new Audio("./sounds/crash.mp3");
//         audio.play();

var sound=(s)=>{
var audio = new Audio(s);
audio.play();
}

var makeSound = (drumLetter)=>{ 
    switch(drumLetter) {
        case "w":sound("./sounds/tom-1.mp3");
        break;
        case "a":sound("./sounds/tom-2.mp3");
        break;
        case "s":sound("./sounds/tom-3.mp3");
        break;
        case "d":sound("./sounds/tom-4.mp3");
        break;
        case "j":sound("./sounds/crash.mp3");
        break;
        case "k":sound("./sounds/kick-bass.mp3");
        break;
        case "l":sound("./sounds/snare.mp3");
        break;
        default:console.log(drumActive);
    }
}
//button get flash when we click aur press key

function btnAnimate(currentKey){
    let activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(()=>{
        activeBtn.classList.remove("pressed");
    }, 100);

    //do operation after 0.1sec(1w00ms)
}

//jQuery is the most imp library of js
//CDN - Content Delivery Network