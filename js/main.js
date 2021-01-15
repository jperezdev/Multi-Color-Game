/*
const btn = document.querySelector(".button");
function RandomColor(e){
    e.preventDefault();
    // Call the objects in the html file
    const asigColorFirst = document.querySelector(".item1");
    const asigColorSecound = document.querySelector(".item2");

    // list of random colors
    var ArrayColorList = ["blue","red","rose","pink"];
    var randomColor = Math.floor(Math.random() * ArrayColorList.length);
    var randomColorSecound = Math.floor(Math.random() * ArrayColorList.length);

    // Assigning a random color to an object
    
    asigColorFirst.style.background = ArrayColorList[randomColor];
    asigColorSecound.style.background = ArrayColorList[randomColorSecound];

    // Victory determiner

    var first  = ArrayColorList[randomColor];
    var secound = ArrayColorList[randomColorSecound];
    
    if(secound === first){
        document.querySelector(".resultTitle").innerHTML = "Winner!";
        document.querySelector(".instructions").innerHTML = "To win, both colors must be the same. To continue playing refresh the browser.";
    }

    else{
        document.querySelector(".resultTitle").innerHTML = "You lost the game";
        document.querySelector(".instructions").innerHTML = "To win, both colors must be the same. To continue playing refresh the browser.";
    }

}

btn.addEventListener("click",function(e){ RandomColor(e,this); },false);
*/


function RandomColor(){
    // Call the objects in the html file
    const asigColorFirst = document.querySelector(".item1");
    const asigColorSecound = document.querySelector(".item2");

    // list of random colors
    var ArrayColorList = ["blue","red","rose","pink"];
    var randomColor = Math.floor(Math.random() * ArrayColorList.length);
    var randomColorSecound = Math.floor(Math.random() * ArrayColorList.length);

    // Assigning a random color to an object
    
    asigColorFirst.style.background = ArrayColorList[randomColor];
    asigColorSecound.style.background = ArrayColorList[randomColorSecound];

    // Victory determiner

    var first  = ArrayColorList[randomColor];
    var secound = ArrayColorList[randomColorSecound];
    
    if(secound === first){
        document.querySelector(".resultTitle").innerHTML = "Winner!";
        document.querySelector(".instructions").innerHTML = "To win, both colors must be the same. To continue playing refresh the browser.";
    }

    else{
        document.querySelector(".resultTitle").innerHTML = "You lost the game";
        document.querySelector(".instructions").innerHTML = "To win, both colors must be the same. To continue playing refresh the browser.";
    }

}

RandomColor();