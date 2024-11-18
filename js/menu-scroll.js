document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    // 특정 스크롤 값으로 이동
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", (event) => {
            const scrollValue = menuItem.getAttribute("data-scroll");
            window.scrollTo({
                top: parseInt(scrollValue, 10),
                behavior: "smooth",
            });
        });
    });

    // 현재 스크롤에 따라 메뉴 스타일 업데이트
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;

        menuItems.forEach((menuItem) => {
            // 각 메뉴의 스크롤 범위 가져오기
            const range = menuItem.getAttribute("data-range").split("-");
            const rangeStart = parseInt(range[0], 10);
            const rangeEnd = parseInt(range[1], 10);

            if (scrollTop < 7700) {
                menuItems.forEach((menuItem) => {
                    menuItem.style.opacity = 0.2; // 모든 메뉴를 연하게
                });
                return;
            }

            // 현재 스크롤이 해당 범위에 있는지 확인
            if (scrollTop >= rangeStart && scrollTop < rangeEnd) {
                menuItem.style.opacity = 1; // 현재 활성 메뉴
            } else {
                menuItem.style.opacity = 0.5; // 비활성 메뉴
            }
        });
    });
});

const arrow = document.querySelector(".scroll-arrow"); // 화살표 요소
const arrowtext = document.querySelector(".scroll-text");

// function scrollToPosition(targetScroll) {
//     const startScroll = window.scrollY; // 현재 스크롤 위치
//     const distance = Math.abs(targetScroll - startScroll); // 이동 거리 (절대값)
//     const speed = 0.5; // 픽셀당 이동 시간 (ms/px)
//     const duration = distance * speed; // 이동 시간 계산
//     let startTime = null;

//     function scrollAnimation(currentTime) {
//         if (!startTime) startTime = currentTime;
//         const elapsedTime = currentTime - startTime;
//         const progress = Math.min(elapsedTime / duration, 1); // 진행률 (0~1)
        
//         const easeInOut = progress < 0.5
//             ? 2 * progress * progress
//             : 1 - Math.pow(-2 * progress + 2, 2) / 2;

//         const currentScroll = startScroll + (targetScroll - startScroll) * easeInOut;
//         window.scrollTo(0, currentScroll);

//         if (progress < 1) {
//             requestAnimationFrame(scrollAnimation);
//         }
//     }

//     requestAnimationFrame(scrollAnimation);
// }

function scrollToTarget() {
    const targetScroll = 7700; // 이동할 위치
    // scrollToPosition(targetScroll);
}

// 화살표 표시/숨김 처리
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 3000) {
        // 8200 이상에서 화살표 숨기기
        arrow.style.display = "none";
        arrowtext.style.display = "none";
    } else if (scrollTop < 3000) {
        // 7700 아래로 스크롤 시 화살표 표시
        arrow.style.display = "block";
        arrowtext.style.display = "block";
    }
});
