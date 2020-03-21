const headerHeight = document.querySelector('.header').offsetHeight;
const navMenu = document.querySelector('.navigation-list');

// Navigation Menu
document.addEventListener('scroll', onScroll);
function onScroll(event) {
    const currentPos = window.scrollY;
    const scrollBlocks = document.querySelectorAll(".wrapper");
    const links = navMenu.querySelectorAll('.navigation-item');

    scrollBlocks.forEach(item => {
        if (item.parentNode.offsetTop <= currentPos && (item.parentNode.offsetTop + item.parentNode.offsetHeight) > currentPos) {
            links.forEach(el => {
                el.classList.remove('active');
                if (item.parentNode.getAttribute('id') === el.innerHTML) {
                    el.classList.add('active');
                }
            })
        }
    });

    // if (!document.querySelector('.message-block').classList.contains('hidden'))
        // offScroll();
}

navMenu.addEventListener('click', (event) => {
    navMenu.querySelectorAll('.navigation-item').forEach(el => el.classList.remove('active'));

    event.target.classList.add('active');
    
    switch(navMenu.querySelector('.active').innerHTML) {
        case 'home': window.scrollTo(0,0); break;
        case 'services': window.scrollTo(0, document.querySelector(".services").offsetTop-headerHeight); break;
        case 'portfolio': window.scrollTo(0, document.querySelector(".portfolio").offsetTop-headerHeight); break;
        case 'about': window.scrollTo(0, document.querySelector(".about-us").offsetTop-headerHeight); break;
        case 'contact': window.scrollTo(0, document.querySelector(".get-quote").offsetTop-headerHeight); break;
    }
});

// Slider
const slides = document.querySelectorAll('.slider__item');
const slider = [];

for (let i=0; i<slides.length; i++) {
    slider.push(slides[i]);
    slides[i].remove();
}

let sliderContent = document.querySelector('.slider__content');
let step = 0;

sliderContent.append(slider[step]);

function prev() {
    step = (step==0)?slider.length-1:step-1;
    sliderContent.append(slider[step]);
    slider[step].style.left = -1020 + 'px';

    setTimeout(function() {
        slider[step].style.left = 0 + 'px';        
    }, 600);
}
function next() {    
    step = (step==slider.length-1)?0:step+1;
    sliderContent.append(slider[step]);
    slider[step].style.left = 1020 + 'px';

    setTimeout(function() {
        slider[step].style.left = 0 + 'px';        
    }, 600);
}
document.querySelector('.prev').onclick = prev;
document.querySelector('.next').onclick = next;


// Phone screens
function vertical() {
    document.querySelector('.y-screen').classList.toggle('hidden');
}

function horizontal() {
    document.querySelector('.x-screen').classList.toggle('hidden');
}

document.querySelector('.vertical').onclick = vertical; 
document.querySelector('.horizontal').onclick = horizontal;
document.querySelector('.x-screen').onclick = horizontal;
document.querySelector('.y-screen').onclick = vertical;


// Portfolio-item
const  portfolioContent = document.querySelector('.portfolio-content');

portfolioContent.addEventListener('click', function(event) {
    portfolioContent.querySelectorAll('.portfolio-item').forEach(item => item.style.border = '');
    portfolioContent.style.border = '';
    event.target.style.border = '5px solid #F06C64';
});


//Portfolio tags switching
const tags = document.querySelector('.portfolio-tags');
let portfolioImg = document.querySelectorAll('.portfolio-item');
let tmpArr = [], tmp;
for (let i=0; i<portfolioImg.length; i++)
    tmpArr.push(portfolioImg[i]);

tags.addEventListener('click', function(event) {
    tags.querySelectorAll('.tag').forEach(item => item.classList.remove('active-tag'));
    event.target.classList.add('active-tag');

    for (let i=0; i<portfolioImg.length; i++) {
        portfolioImg[i].remove();
    }
    for (let i=0; i<tmpArr.length-1; i+=2){
        tmp = tmpArr[i];
        tmpArr[i] = tmpArr[i+1];
        tmpArr[i+1] = tmp;
    }
    for (let i=0; i<tmpArr.length; i++) {
        portfolioContent.append(tmpArr[i]);
    }
});


// Form
const send = document.querySelector('.send');
const closeBtn= document.querySelector('.message-btn');
const eTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let subject, description;

function sendMes() {
    subject = document.querySelector('.subject').value.toString();
    description = document.querySelector('.description').value.toString();
    
    if (document.querySelector('.name').value=='' || document.querySelector('.email').value=='' || eTest(document.q0000uerySelector('.email').value.toString()))
        return ;
    
    document.querySelector('.subject-result').innerText = subject;
    document.querySelector('.describe-result').innerText = description;

    if (subject==='')
        document.querySelector('#theme').innerText = 'No subject';
    if (subject==='')
        document.querySelector('#description').innerText = 'No description';

    document.querySelector('.message-block').classList.remove('hidden');

    // setTimeout(function() {
        // send.addEventListener('click', sendMes);
    // }, 6000);
    // debugger;
}

function closeMes(){
    document.querySelector('.message-block').classList.add('hidden');
    document.querySelector('form').reset();
};

send.addEventListener('click', sendMes);
closeBtn.addEventListener('click', closeMes); 

