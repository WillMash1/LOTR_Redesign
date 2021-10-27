const track = document.querySelector('.carousel__track');
const slides =  Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slidewidth = slides[0].getBoundingClientRect().width;
const menLink = document.querySelector('#men__link');
//Arrange the slides next to one another
// slides[0].style.left = slidewidth * 0 + 'px';
// slides[1].style.left = slidewidth * 1 + 'px';
// slides[2].style.left = slidewidth * 2 + 'px';


const setSlidePosition = (slide, index) => {
    slide.style.left = slidewidth * index + 'px';
};


slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) =>{{
    
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}}

const updateDots =  (currentDot, targetDot) => {  currentDot.classList.remove('current-slide');
targetDot.classList.add('current-slide');
}


const hideShowArrows =  (slides, prevButton, nextButton, targetIndex)=>{

    if(targetIndex===0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length-1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }

}

prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const previousDot = currentDot.previousElementSibling;
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const nextIndex = slides.findIndex(slide => slide === previousSlide);
    if(currentIndex===0){
        console.log(currentSlide);
        moveToSlide(track, currentSlide, slides[slides.length-1] );
        updateDots(currentDot, dots[dots.length-1]);
    }
    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

})

//when i click right, move slides to the right
nextButton.addEventListener('click', e =>{
    //What slide are we on
    const currentSlide = track.querySelector('.current-slide');
    
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const currentIndex = slides.findIndex(slide => slide === currentSlide);

    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //Move the slide
    if(currentIndex===3){
        console.log(currentSlide);
        moveToSlide(track, currentSlide, slides[0] );
        updateDots(currentDot, dots[0]);
    }
    
    moveToSlide(track, currentSlide, nextSlide );
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

})

//When i click left, move slides to the left
// prevButton.addEventListener('click', e =>{
//     //What slide are we on
//     const currentSlide = track.querySelector('.current-slide')
    
    
//     const prevSlide = currentSlide.previousElementSibling;

//     const amountToMove = prevSlide.style.left;
    
//     //Move the slide
//     track.style.transform = 'translateX(-' + amountToMove + ')';
//     currentSlide.classList.remove('current-slide');
//     prevSlide.classList.add('current-slide');
// })



//when i click the nav indicators, move to that slide
dotsNav.addEventListener('click', e =>{
    //what indicator was clicked on?
    const targetDot = e.target.closest('button');

    console.log('test1');
    if(!targetDot) return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide );

    updateDots(currentDot, targetDot);

    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

// Target the left and right chevrons (perhaps using addevenlistern for hover) then use translateX transform property on them so they move when hovered over
//use queryselector to get the items ID. then change the content of ::afterr according to that id so that the right word appears below the link on hover



