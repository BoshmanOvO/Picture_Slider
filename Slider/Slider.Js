const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');


let sectionIndex = 1;
let imglen = image.length;

for (let i = 0; i < imglen; i++) {
    const dot = document.createElement('div');  
    dot.className = "button";
    bottom.appendChild(dot);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.transform = 'scale(1.5)';
buttons[0].style.backgroundColor = 'white';

const resetButtons = function () {
    buttons.forEach(function (button) {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = 'transparent';
    });
};


buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        resetButtons();
        sectionIndex = index + 1;
        slider.style.transform = 'translateX(-' + (sectionIndex - 1) * 25 + '%' + ')';
        button.style.transform = 'scale(1.5)';
        button.style.backgroundColor = 'white';
    });
});


const nextSlide = function () {
    slider.style.transform = 'translateX(-' + (sectionIndex) * 25 + '%' + ')';
    sectionIndex++;
}; 
const prevSlide = function () {
    slider.style.transform = 'translateX(-' + (sectionIndex - 2) * 25 + '%' + ')';
    sectionIndex--;
}; 
const firstSlide = function () {
    slider.style.transform = 'translateX(0px)';
    sectionIndex = 1;
};
const lastSlide = function () {
    slider.style.transform = 'translateX(-' + (imglen - 1) * 25 + '%' + ')';
    sectionIndex = imglen;
}



const sync = function () {
    resetButtons();
    buttons[sectionIndex - 1].style.transform = 'scale(1.5)';
    buttons[sectionIndex - 1].style.backgroundColor = 'white';
};

right.addEventListener('click', function () {
    sectionIndex < imglen ? nextSlide() : firstSlide();
    sync();
});

left.addEventListener('click', function () {
    sectionIndex > 1 ? prevSlide() : lastSlide();
    sync();

});

