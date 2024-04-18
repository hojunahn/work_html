document.addEventListener("DOMContentLoaded", function() {
    const menuDivs = document.querySelectorAll('.menu_div');
    const afterNav = document.querySelector('.after_nav');

    menuDivs.forEach(menuDiv => {
        menuDiv.addEventListener('mouseenter', () => {
            afterNav.style.display = 'block';
        });

        menuDiv.addEventListener('mouseleave', () => {
            // 메뉴 아이템 또는 서브 메뉴에서 호버가 떨어질 때 숨김 처리
            setTimeout(() => {
                if (!afterNav.matches(':hover')) {
                    afterNav.style.display = 'none';
                }
            }, 300);
        });

        // after_nav에서 호버가 떨어질 때 숨김 처리
        afterNav.addEventListener('mouseleave', () => {
            afterNav.style.display = 'none';
        });
    });
});


// container 화면 버튼 슬라이드 
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const cell = document.getElementById('cell');
        const slideWidth = cell.children[0].offsetWidth;
        const slidesPerView = 4; // 한 화면에 보여질 슬라이드 개수
        const totalSlides = cell.children.length;
        let currentSlide = 0;

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                moveSlider();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentSlide < totalSlides - slidesPerView) {
                currentSlide++;
                moveSlider();
            }
        });

    // 마지막 슬라이드에 도달하면 다음 버튼 비활성화
        function moveSlider() {
            const newPosition = -currentSlide * slideWidth;
            cell.style.transform = `translateX(${newPosition}px)`;


            if (currentSlide >= totalSlides - slidesPerView) {
                nextButton.disabled = true;
            }else {
                nextButton.disabled = false;
            }

      // 첫 번째 슬라이드에 도달하면 이전 버튼 비활성화
            if (currentSlide <= 0) {
                prevButton.disabled = true;
            }else {
                prevButton.disabled = false;
            }
    }

    // 초기화
    moveSlider();

    
    // hover시 container 화면 이미지 변환
    const container = document.querySelector('.container');
    container.addEventListener('mouseout', () => {
    container.style.backgroundImage = `url('../img/hoverpage_main.jpg')`;
    });

    const txtAreas = document.querySelectorAll('.txt_area');

    txtAreas.forEach((txtArea, index) => {
        txtArea.addEventListener('mouseover', () => {
        container.style.backgroundImage = `url('../img/hoverpage${index + 1}.jpg')`;
    });
});