document.addEventListener("imagesLoaded", () => {
    const mainBackground = document.querySelector(".main-background");
    const mainContainer = document.querySelector(".main-container");
    const backgroundImage = document.querySelector(".background-image");
    const maincha1 = document.getElementById("Maincha1");
    const maincha2 = document.getElementById("Maincha2");
    const maincha3 = document.getElementById("Maincha3");
    const totalImages = 60; // 이미지의 총 개수
    const scrollThreshold = 5000; // 스크롤의 이미지 전환 범위 (5000)
    const startScroll = 2700; // 이미지 전환이 시작되는 스크롤 값


    // text 초기값들
    const maincha1FadeInStart = 300;
    const maincha1FadeInEnd = 1300;
    const maincha2FadeInStart = 1700;
    const maincha2FadeInEnd = 2700;
    
    // Maincha3 fade-in 및 fade-out 구간 설정
    const maincha3FadeDuration = 1000;
    const maincha3FadeInStart = startScroll + Math.floor((20 / (totalImages - 1)) * scrollThreshold); // PM24 등장 시점
    const maincha3FadeInEnd = maincha3FadeInStart + maincha3FadeDuration; // fade-in 종료 지점
    const maincha3FadeOutStart = maincha3FadeInEnd; // fade-out 시작 지점
    const maincha3FadeOutEnd = maincha3FadeOutStart + maincha3FadeDuration; // fade-out 종료 지점
    // ---

    //background fade out Animation
    const fadeOutStart = startScroll + scrollThreshold; // 배경이 사라지기 시작하는 지점 (7700)
    const fadeOutDuration = 500; // 배경이 사라지는 범위 (7700~X)
    const fadeOutEnd = fadeOutStart + fadeOutDuration; // 배경이 완전히 사라지는 지점 (8700)

    // 새로고침 시 페이지를 맨 위로 스크롤
    window.scrollTo(0, 0);

    // 초기 이미지 설정
    backgroundImage.src = `./img/posterMotion/PM0.webp`;
    

    window.addEventListener("scroll", () => {
        // 스크롤 값 계산
        const scrollTop = window.scrollY;

        // 이미지 전환 Animation
        if (scrollTop >= startScroll && scrollTop <= startScroll + scrollThreshold) {
            const scrollFraction = (scrollTop - startScroll) / scrollThreshold; // 0에서 1 사이로 변환
            // console.log("보정된 스크롤 값:", scrollFraction);
            // 이미지 인덱스 계산
            const imageIndex = Math.floor(scrollFraction * (totalImages - 1)); // 0부터 시작
            // 배경 이미지 업데이트
            backgroundImage.src = `./img/posterMotion/PM${imageIndex}.webp`;
        }

        

        // #Maincha1 fade in/out
        if (scrollTop >= maincha1FadeInStart && scrollTop <= maincha1FadeInEnd) {
            maincha1.style.opacity = (scrollTop - maincha1FadeInStart) / (maincha1FadeInEnd - maincha1FadeInStart);
        } else if (scrollTop < maincha1FadeInStart) {
            maincha1.style.opacity = 0;
        } else {
            maincha1.style.opacity = 1 - ((scrollTop - maincha1FadeInEnd) / 100);
        }

        // #Maincha2 fade in/out
        if (scrollTop >= maincha2FadeInStart && scrollTop <= maincha2FadeInEnd) {
            maincha2.style.opacity = (scrollTop - maincha2FadeInStart) / (maincha2FadeInEnd - maincha2FadeInStart);
        } else if (scrollTop < maincha2FadeInStart) {
            maincha2.style.opacity = 0;
        } else {
            maincha2.style.opacity = 1 - ((scrollTop - maincha2FadeInEnd) / 100);
        }

         // #Maincha3 fade in/out
         if (scrollTop >= maincha3FadeInStart && scrollTop <= maincha3FadeInEnd) {
            maincha3.style.opacity = (scrollTop - maincha3FadeInStart) / (maincha3FadeInEnd - maincha3FadeInStart);
        } else if (scrollTop > maincha3FadeOutStart && scrollTop <= maincha3FadeOutEnd) {
            maincha3.style.opacity = 1 - ((scrollTop - maincha3FadeOutStart) / (maincha3FadeOutEnd - maincha3FadeOutStart));
        } else if (scrollTop < maincha3FadeInStart) {
            maincha3.style.opacity = 0;
        } else if (scrollTop > maincha3FadeOutEnd) {
            maincha3.style.opacity = 0;
        }
        
        // 배경 점점 사라지게 설정
        if (scrollTop >= fadeOutStart && scrollTop <= fadeOutEnd) {
            const fadeOutFraction = (scrollTop - fadeOutStart) / fadeOutDuration;
            mainBackground.style.opacity = 1 - fadeOutFraction; // 점점 투명해짐
        } else if (scrollTop > fadeOutEnd) {
            mainBackground.style.opacity = 0; // 완전히 사라짐
        }

    });
});
