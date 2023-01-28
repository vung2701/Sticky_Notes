var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var textErea = document.querySelector("#note-text");
var overlay = document.querySelector(".overlay");

var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

var noteList = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

window.addEventListener("load", function(){
    loadNote();
})

xIcon.addEventListener("click", function(){
    typeNote();
})

checkIcon.addEventListener("click", function(){
    addNote();
})

function loadNote(){
    for( let note in noteList){
        noteMaker(noteList[note], note);
    }
}

function clearNote(){
    localStorage.clear();
    container2.innerHTML = '';
    noteList = [];
}

function typeNote() {
    if(container3.style.display == "block"){
        container3.style.display = "none";
        overlay.style.display = "none";
    } else {
         container3.style.display = "block";
        overlay.style.display = "block";
    }
}


function noteMaker(note, delThisIndex){
    var node0 = document.createElement("div");
    var node1 = document.createElement("h2");

    node1.setAttribute("style", "width: 250px;height: 250px;font-size: 26px;text-align: start;padding: 25px;margin-top: 10px;overflow: hidden;box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, .75);");
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color();
    node1.innerHTML = note;
    
    node0.addEventListener("dblclick", function(){
        console.log(123);
        noteList.splice(delThisIndex, 1);
        localStorage.setItem('items', JSON.stringify(noteList));
        window.location.reload();
    })
    node0.appendChild(node1);
    container2.appendChild(node0);

}

function addNote() {
    var noteText = document.querySelector("#note-text").value;

    noteList.push(noteText);
    localStorage.setItem('items', JSON.stringify(noteList));
    noteMaker(noteList[noteList.length-1], noteList.length-1);
    textErea.value = '';
    console.log(noteList)
}



function margin() {
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
    var random_rotate = ["rotate(3deg)","rotate(1deg)",
    "rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];
    
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
    var random_color = ["#c2ff3d","#ff3de8","#3dc2ff",
    "#04e022","#bc83e6","#ebb328"];

    if(i > random_color.length - 1){
        i = 0;
    }
    return random_color[i++];
}

