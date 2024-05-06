const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.GroceryItems');
const btn2 = document.getElementById('btn-2');
function myHandler() {
    const li = input.value;
    if(input.value == ""){
        alert("Please enter a valid item's name")
    }else{
    ul.innerHTML += ` <ul>
    <li id='${li}'>${li} </li><li><span id="edit" onclick="editHandler('${li}')"><i class="fa-solid fa-pen-to-square"></i></span><span id="dlt" onclick="dltHandler('${li}')"><i class="fa-solid fa-trash"></i></span></span></li>

    </ul>`

    input.value = ""
    }
}
function editHandler(li) {
    const listItem = document.getElementById(li);
    input.value = listItem.textContent;
    btn.textContent = "Edit"
    console.log("chl rha hn", li);
    btn.setAttribute("onclick",`submitBtn('${li}')`)
}

function submitBtn(li) {
    const listItem = document.getElementById(li);
    const edit = document.getElementById('edit')
    listItem.innerText = input.value;
    btn.textContent = "Search";
    btn.setAttribute("onclick",`myHandler('${li}')`);
    input.value = ""
}
function dltHandler(li) {
    const listItem = document.getElementById(li);
    listItem.parentElement.remove()
}
function clearItems(){
    btn2.previousElementSibling.firstElementChild.remove();
}