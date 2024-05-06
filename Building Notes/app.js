const btn = document.getElementById('btn');
const textArea = document.querySelector('.noteParent')

 function myHandler(){
   const check = 'hey'
     textArea.innerHTML += `<textarea name="NoteBook" id="noteBook" cols="37" rows="8"></textarea>
     <i class="fa-solid fa-trash" id=${check} onclick= "dltHandler('${check}')"></i>`
}

function dltHandler(check){
    const dlt = document.getElementById(check);
    const noteBook = document.getElementById('noteBook')
   console.log(dlt.parentElement.removeChild(noteBook));
   dlt.remove()
   btn.setAttribute('click','myHandler()')

 }