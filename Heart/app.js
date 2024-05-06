const dateTime = document.getElementById('dateTime');
const timer = document.getElementById('timer')
setInterval(function(){
    const date = new Date();
    timer.textContent = date.toLocaleTimeString();
    dateTime.textContent = date.toDateString()
},1000)
const gallery = document.querySelector('#gallery');
const myMobile2 = document.querySelector('.myMobile2')
const timerParent = document.querySelector('.timerParent')
const appImg = document.querySelector('.appImg')
const appImg2 = document.querySelector('.appImg2')
const appImg3 = document.querySelector('.appImg3')
const gallerySites = document.querySelector('.gallerySites')
gallery.addEventListener('click', function(){
      console.log('chl rha hn');
      myMobile2.style.display = 'none'
      gallerySites.style.display = 'block'
      
})
// Button Group 
const imgObjects = [
    {
        imgSrc: './images/1.jpg',
        category: 'photos'
    },
    {
        imgSrc: './images/2.jpg',
        category: 'explore'
    },
    {
        imgSrc: './images/3.jpg',
        category: 'photos'
    },
    {
        imgSrc: './images/4.jpg',
        category: 'explore'
    },
    {
        imgSrc: './images/5.jpg',
        category: 'photos'
    },
    {
        imgSrc: './images/6.jpg',
        category: 'albums'
    },
    {
        imgSrc: './images/7.jpg',
        category: 'explore'
    },
    {
        imgSrc: './images/8.jpg',
        category: 'albums'
    },
    {
        imgSrc: './images/15.jpg',
        category: 'albums'
    },
    {
        imgSrc: './images/16.jpg',
        category: 'albums'
    },
    {
        imgSrc: './images/9.jpg',
        category: 'explore'
    },
    {
        imgSrc: './images/10.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/11.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/12.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/13.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/14.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/15.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/16.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/17.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/18.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/19.jpg',
        category: 'photos'

    },
    {
        imgSrc: './images/20.jpg',
        category: 'photos'

    },
]
const btnGroup = document.querySelector('.btnGroup');
const btnName = ['Photos', 'Albums','Explore'];
const allImages = document.querySelector('.allImages');
btnName.forEach((button) => {
    btnGroup.innerHTML += `<button onclick="myHandler('${button.toLocaleLowerCase()}')">${button}</button>`
    
})
function myHandler(btnName){
    allImages.innerHTML = ""
    let filteredItems = imgObjects.filter((img) =>{
        if(img.category == btnName ){
            return true
        }
    })
    if(filteredItems == ""){
        filteredItems = imgObjects
    }
    filteredItems.forEach((img) => {
        allImages.innerHTML += `<img src="${img.imgSrc}" alt="" width="60px">`
    })
    
}
myHandler()

// setting JS start from here
const settingDetail = document.querySelector('.settingDetail');
const setting = document.getElementById('setting');
setting.addEventListener('click', function(){
       myMobile2.style.display = 'none'
      settingDetail.style.display = 'block'
})
// Google descriptions start from here

const googleDes = [
    {
        imgSrc: './images2/babar.jpg',
        descript: `Muhammad Rizwan, Shaheen Shah Afridi thank Azam after he steps down from
        Pakistan...`,
        logo: './snippingShot/1.PNG',
        channel: 'Sports',
        clName: 'manPic1'
    },
    {
        imgSrc: './images2/uk.jpg',
        descript: `This UK University Offers Various Scholarship For Postgraduate Students`,
        logo: './snippingShot/2.PNG',
        channel: 'NDTV',
        clName: 'manPic2'
    },
    {
        imgSrc: './images2/cyber.jpg',
        descript: `Claim your career in Cybersecurity. Free learning pathway to prep for an IT specialist certification -no e..`,
        logo: './snippingShot/3.PNG',
        channel: 'IT Team',
        clName: 'manPic3'
    },
    {
        imgSrc: './images2/js.jpg',
        descript: `Supercharge your coding Motivation: A complete Guide to modify VS Code looks!🚀`,
        logo: './snippingShot/4.PNG',
        channel: 'Coding Addict',
        clName: 'manPic4'
    },
    {
        imgSrc: './images2/running man.jpg',
        descript: `14 Best Exercises To Increase Your Stamina`,
        logo: './snippingShot/5.PNG',
        channel: 'Eat This Not That',
        clName: 'manPic5'
    },
]

const newsDescript = document.querySelector('#newsDescript');
googleDes.forEach( (value) => {
    newsDescript.innerHTML += `<div class="description">
    <div class="picAndDes">
        <div class=${value.clName}>

        </div>
        <p>${value.descript}</p>
    </div>
    <div class="tvChannel">
        <div class="channelName">
            <img src="${value.logo}" alt="">
            <p>${value.channel}</p>
        </div>
        <div class="extraDetail">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-share-nodes"></i>
            <i class="fa-solid fa-ellipsis fa-rotate-90"></i>
        </div>
    </div>
</div>`
})

// Google bar
const imgBar = document.querySelector('.imgBar');
const googleDetail = document.querySelector('.googleDetail')
imgBar.addEventListener('click', function(){
    myMobile2.style.display = 'none';
    googleDetail.style.display = 'block'
})