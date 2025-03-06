// <!-- Initialize Swiper -->
// 캐릭터_스와이퍼
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 공간소개_탭
$(function(){
    $('.space_tap_slide li p').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on')
    });
});

// 공간소개_슬라이드
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3, // 한 화면에 보이는 슬라이드 수
    slidesPerGroup: 1, // 한 번에 이동할 슬라이드 수 (1로 설정)
    spaceBetween: 30,
    loop: false, // 루프 비활성화
    freeMode: false, // 스냅 활성화 (freeMode 비활성화)
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 80, // 드래그 핸들 크기 고정
        hide: false,
    },
});