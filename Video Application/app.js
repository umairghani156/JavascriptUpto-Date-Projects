const videoTag = document.querySelector('video');
videoTag.setAttribute("onclick","zoomIn()")
const btnParent = document.querySelector('.btnParent')
const audio = document.querySelector('audio');
const container = document.querySelector('.container')
audio.src = "./Assets/anthem.mp3"
function myPlay(){
    videoTag.play()
    audio.play()
}
function pause(){
    videoTag.pause()
    audio.pause()
}

function zoomIn(){
    container.style.marginTop = "10px"
    videoTag.style.width = "1050px"
    btnParent.style.marginTop = "250px"
    btnParent.style.marginLeft = "240px"
    videoTag.setAttribute("onclick","zoomOut()")

}

function zoomOut(){
    videoTag.style.width = "600px";
    container.style.marginTop = "10%"
    btnParent.style.marginTop ="0";
    btnParent.style.marginLeft = "0";
    videoTag.setAttribute("onclick","zoomIn()")
}