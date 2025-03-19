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

// 전시교육_슬라이드
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// 소식 탭
$(function(){
    $('.information_board li p').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on')
    });
});

// aos
AOS.init();


//   AOS.init({
//     duration: 800,  // 애니메이션 지속 시간 (밀리초)
//     easing: 'ease-in-out',  // 애니메이션의 이징 함수
//     delay: 200,  // 애니메이션 지연 시간 (밀리초)
//     offset: 120,  // 스크롤 감지의 시작 위치 (픽셀)
//   });

// 섹션이동시 메뉴색 바뀜
$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    let sections = [
        { min: 601, max: 1500, index: 1 },
        { min: 1501, max: 4400, index: 2 },
        { min: 4401, max: 7560, index: 3 },
        { min: 7561, max: 8400, index: 4 },
        { min: 8401, max: 10000, index: 5 }
    ];

    $(".gnb li").removeClass("on"); // 모든 li에서 'on' 제거

    sections.forEach(section => {
        if (scrollTop >= section.min && scrollTop <= section.max) {
            $(".gnb li:nth-child(" + section.index + ")").addClass("on");
        }
    });
});

// svg 애니메이션
document.addEventListener("DOMContentLoaded", function () {
    const heartLine = document.querySelector(".heart_line");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heartLine.classList.add("visible");
            }
        });
    }, {
        rootMargin: "-200px 0px 0px 0px", // 뷰포트에 살짝이라도 들어오면 감지
        threshold: 0.3 // 아주 조금이라도 보이면 애니메이션 실행
    });

    if (heartLine) {
        observer.observe(heartLine);
    }
});

// 클릭하면 부드럽게 화면 이동하기
const scrollPositions = [800, 1630, 4500, 7650, 8450];

$(".gnb li a").click(function(e){
    e.preventDefault(); // 기본 링크 동작 방지

    let index = $(this).parent().index(); // 클릭한 a 태그의 부모 li의 인덱스 가져오기
    let targetPosition = scrollPositions[index]; // 목표 위치
    let currentPosition = $(window).scrollTop(); // 현재 스크롤 위치

    let distance = Math.abs(targetPosition - currentPosition); // 이동 거리
    let speed = 0.5; // 픽셀당 밀리초 (조정 가능)
    let duration = distance * speed; // 거리 기반 지속 시간

    $("html, body").animate({
        scrollTop: targetPosition
    }, duration);
});