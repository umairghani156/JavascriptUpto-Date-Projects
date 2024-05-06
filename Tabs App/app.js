const btn = ["History","Vision","Goals"];
const btnParent = document.querySelector('.btns')
const ourObjects = [
    {
        heading: "History",
        description: "Lorem ipsum dolor, sit amet consectetur elit sit amet consectetur elit adipisicing . Recusandae animi, facere aliquid voluptatum veniam eveniet et. Ducimus, atque consequuntur. Explicabo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora praesentium perspiciatis quod et consequuntur, voluptatum aliquam natus? Dicta, quis eveniet?"
    },
    {
        heading: "Vision",
        description: "Tucked into the northern interior, the Albanian are equally part of the draw. Known, rather ominously, as the Accursed Mountains, this realm of jagged karst peaks is a dream for hikers, where lynxes roam spruce forests and wildflowers cover valley floors. Those looking to tackle the region’s challenging trails can set off on a new, eight-day, self-guided tour with Walks Worldwide"
    },
    {
        heading: "Goals",
        description: "Lorem ipsum dolor, sit amet consectetur elit adipisicing . Recusandae animi, facere aliquid voluptatum veniam eveniet et. Ducimus, atque consequuntur. Explicabo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora praesentium perspiciatis quod et consequuntur, voluptatum aliquam natus? Dicta, quis eveniet?voluptatum aliquam natus? Dicta, quis eveniet"
    },
]



function  myFunction() {
   const btnId = btn.map(function(button){
        btnParent.innerHTML += `<button id='${button}' onclick="my${button}()">${button}</button>
        `
        return button
    })
    return btnId
}
myFunction()
const subjectAbout = document.querySelector('.subjectAbout');
const ImgSrc = document.querySelector('img')
function myHistory() {
    ImgSrc.src = "./Assets/history.PNG"
    subjectAbout.innerHTML = `<h3>${ourObjects[0].heading}</h3>
    <p>${ourObjects[0].description}</p>`
}
myHistory()
function myVision() {
    ImgSrc.src = "./Assets/vision.jpg"
    subjectAbout.innerHTML = `<h3>${ourObjects[1].heading}</h3>
    <p>${ourObjects[1].description}</p>`
}
function myGoals() {
    ImgSrc.src = "./Assets/goal.jpg"
    subjectAbout.innerHTML = `<h3>${ourObjects[2].heading}</h3>
    <p>${ourObjects[2].description}</p>`
}