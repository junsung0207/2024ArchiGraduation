document.addEventListener("DOMContentLoaded", () => {
    const loading = document.querySelector(".loading"); // loading 요소
    const totalImages = 38; // 로드할 이미지의 총 개수

    // 스크롤 비활성화
    document.body.style.overflow = "hidden";

    // 모든 이미지 미리 로드
    let imagesLoaded = 0;
    for (let i = 0; i < totalImages; i++) {
        const img = new Image();
        img.src = `./img/posterMotion/PM${i}.jpg`; // 이미지 경로 설정
        img.onload = () => {
            imagesLoaded++;
            // 모든 이미지가 로드되면 loading 요소 숨기기 및 스크롤 활성화
            if (imagesLoaded === totalImages) {
                loading.style.display = "none";
                console.log("로딩완료")
                document.body.style.overflow = "auto"; // 스크롤 활성화

                // 로드 완료 이벤트 디스패치
                document.dispatchEvent(new Event("imagesLoaded"));
            }
        };
    }
});