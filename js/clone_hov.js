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

