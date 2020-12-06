const body = document.querySelector("body"); // body에 background를 설정한다.

const IMG_NUMBER = 3; // 이미지 개수

function paintImage(imgNumber) {
    const image = new Image(); // 새로운 이미지
    image.src = `images/${imgNumber + 1}.jpg`; // 이미지 경로
    image.classList.add("backgroundImage"); // 클래스 속성 추가
    body.prepend(image); // body에 자식 요소 추가
}

function genRandom() {
    // 랜덤 넘버 설정
    const number = Math.floor(Math.random() * IMG_NUMBER); // 이미지 개수 중 무작위 숫자
    return number;
}

function init() {
    const randomNumber = genRandom(); // 무작위 숫자
    paintImage(randomNumber); // paint함수 실행
}

init();
