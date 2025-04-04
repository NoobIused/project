var button = document.getElementById("jumpbutton")
var frame = document.getElementById("frame")
var iframecount = 1
var cover = document.getElementById("cover")
var information = document.getElementById("info")

var hasseen = localStorage.getItem("hasplayed")

if (hasseen) {
    cover.style.display = "none"
    console.log("has seen")
}else{
    cover.style.animationName = "fadein"
    cover.style.animationDuration = "4s"
    cover.style.animationFillMode = "forwards"
    information.style.animationName = "fadein"
    information.style.animationDuration = "3s"
    information.style.animationDelay = "3s"
    information.style.animationFillMode = "forwards"

}


function jump() {
    iframecount ++;
    frame.src =  "/dialogues/"+ iframecount + ".html"
    console.log("/dialogues/"+iframecount + ".html")
  

    switch (iframecount) {
        case 2:
            button.innerHTML = "huh?"
            break;
        case 3:
            button.innerHTML = "😐"
            break;
        case 4:
            button.innerHTML = "thats nice"
            break;
        case 5:
            button.innerHTML = "..."
            break;
        case 6:
            button.innerHTML = "bruh"
            break;                  
        case 7:
            cover.style.animationName = "fadeout"
            cover.style.animationDuration = "5s"
            information.style.animationName = "fadeout"
            information.style.animationDuration = "5s"
            cover.addEventListener('animationend', () => {
                cover.style.display = "none";  // Hide the element after animation
                localStorage.setItem("hasplayed",true)        
                console.log("done!")
            });
            break;  
    }
}

