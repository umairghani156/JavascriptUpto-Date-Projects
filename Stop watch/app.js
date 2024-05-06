
 let sec = 0;
 let min = 0;
 let hour = 0;
const timerHeading = document.getElementById('timerHeading')
let timer = null;
function myWatch(){
    sec++
     if(sec == 59){
        min++;
        sec = 0
        if(min == 59){
            min = 0;
            hour++
        }
     }
     let h = hour < 10 ? "0" + hour : hour;
     let m = min < 10 ? "0" + min : min;
     let s = sec < 10 ? "0" + sec : sec;
     timerHeading.innerHTML = h+":"+m+":"+s
}

function playWatch(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(()=>{
        myWatch()
    },1000)
    console.log(timer);

}
function stopWatch(){
    console.log('chl');
    clearInterval(timer)
}
function resetWatch(){
    console.log('chl');
    clearInterval(timer);
    hour = 0;
    min = 0;
    sec = 0
    timerHeading.innerHTML = '00:00:00'
}