const changes=document.getElementById("images");
// note;event works on getelementbyid only

changes.addEventListener("mouseover",(event)=>{
    event.target.style.color="black";
    
})

changes.addEventListener("mouseout",(event)=>{
    event.target.style.color="rgb(87, 179, 182)";
})

