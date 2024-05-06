const inputBar = document.getElementById('inputBar');
const inputBar2 = document.getElementById('inputBar2');
function logInHandler(){
    if(inputBar.value !== 'umairahmed@gmail.com' || inputBar.value == '' || inputBar2.value == ''){
       alert('Plz fill the required field correctly')
    }else{
        window.location.href = '../Loader/index.html'
    }
}