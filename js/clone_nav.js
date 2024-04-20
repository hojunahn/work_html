
    // nav
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





    

        