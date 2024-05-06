const timer = document.querySelector('#timer');
setInterval(function(){
    const date = new Date();
    timer.textContent = date.toLocaleTimeString()
},1000)