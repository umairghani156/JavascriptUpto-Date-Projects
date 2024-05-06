const btn = document.getElementsByTagName('button');
const bdy = document.querySelector('body');
const h2 = document.querySelector('h2');
const colors = document.getElementById('colors');
const changeIntoArr = [...btn]
changeIntoArr.forEach((button) =>{
    button.addEventListener('click',function(ele){
        console.log(ele);
        console.log(ele.target);
        colors.textContent = ele.target.id
        if(ele.target.id == 'grey'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.fontSize = '40px';
            colors.textContent = ele.target.id
        }
        if(ele.target.id == 'red'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.color = 'white'
            h2.style.fontSize = '20px'
        }
        if(ele.target.id == 'blue'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.color = 'white'
            h2.style.fontSize = '40px'
        }
        if(ele.target.id == 'green'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.color = 'white'
        }
        if(ele.target.id == 'orange'){
            bdy.style.backgroundColor = ele.target.id
        }
        if(ele.target.id == 'crimson'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.color = 'white'
            h2.style.fontSize = '40px'
        }
        if(ele.target.id == 'white'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.color = 'black'
        }
        if(ele.target.id == 'pink'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.color = 'black'
            h2.style.fontSize = '20px'
        }
        if(ele.target.id == 'orangered'){
            bdy.style.backgroundColor = ele.target.id
            h2.style.color = 'white'
        }
    })
})