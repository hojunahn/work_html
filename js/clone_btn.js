prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cell = document.getElementById('cell');
let totalSlides = cell.children.length;
let currentSlide = 0;

prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentSlide > 0) {
        currentSlide--;
        moveSlider();
    }
});

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentSlide < totalSlides - 4) {
        currentSlide++;
        moveSlider();
    }
});

// 슬라이드 이동 함수
function moveSlider() {
    const slideWidth = calculateSlideWidth();
    const newPosition = -currentSlide * slideWidth;
    cell.style.transform = `translateX(${newPosition}px)`;

  
}

// 슬라이드 너비 계산
function calculateSlideWidth() {
    return cell.clientWidth / 4; // 4는 slidesPerView 값
}

// 초기화
moveSlider();