
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cell = document.getElementById('cell');
const slides = cell.querySelectorAll('.txt_area');
let currentSlide = 0;
const slidesPerView = 4; // 화면에 보여지는 슬라이드 수

prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentSlide > 0) {
        currentSlide--;
        moveSlider();
    }
});

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentSlide < slides.length - slidesPerView) {
        currentSlide++;
        moveSlider();
    }
});

function moveSlider() {
    const slideWidth = slides[currentSlide].offsetWidth;
    const newPosition = -currentSlide * slideWidth;
    cell.style.transform = `translateX(${newPosition}px)`;

    // 현재 슬라이드가 처음이나 마지막 슬라이드인지 확인하여 버튼 활성/비활성화
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - slidesPerView;
}

// 창 크기 변경 시 슬라이드 이동 함수 다시 호출
window.addEventListener('resize', moveSlider);

// 초기화
moveSlider();