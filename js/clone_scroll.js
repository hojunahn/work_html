// 스크롤시 화면 이동
const firstDiv = document.querySelector('.slider');
firstDiv.classList.add('active');
    

window.addEventListener('wheel', function(event) { 
event.preventDefault(); // 스크롤 이벤트의 기본 동작을 막음

if (event.deltaY > 0) {
    scrollToNextDiv();
} else {
    scrollToPrvDiv();
}
});

function scrollToNextDiv() {
    const currentDiv = document.querySelector('.active');
    const nextDiv = currentDiv.nextElementSibling;
    
    if (nextDiv !== null) {
        nextDiv.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        currentDiv.classList.remove('active');
        nextDiv.classList.add('active');
    } else {
        console.log("No next element found.");
    }
}

function scrollToPrvDiv() {
    const currentDiv = document.querySelector('.active');
    const prvDiv = currentDiv.previousElementSibling;
    
    if (prvDiv !== null) {
        prvDiv.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        currentDiv.classList.remove('active');
        prvDiv.classList.add('active');
    } else {
        console.log("No previous element found.");
    }
};