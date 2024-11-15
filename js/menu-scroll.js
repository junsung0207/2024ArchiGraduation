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
