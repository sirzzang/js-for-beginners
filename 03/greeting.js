const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function saveName(text) {
    localStorage.setItem(USER_LS, text); // 로컬 스토리지에 이름을 저장한다.
}

function handleSubmit(event) {
    event.preventDefault(); // submit 기본 동작을 막는다.
    const currentValue = input.value; // input 파라미터의 현재 값을 받아 온다.
    saveName(currentValue); // 받아 온 유저의 이름을 저장한다.
    paintGreeting(currentValue); // 받아 온 유저의 현재 이름을 paintGreeting 함수에 넘긴다.
}

function askForName() {
    form.classList.add(SHOWING_CN); // form을 보여 준다.
    form.addEventListener('submit', handleSubmit); // form 제출 시 이벤트를 처리하도록 한다.
}

function paintGreeting(text) {
    greeting.classList.remove(SHOWING_CN); // user가 있으면 form 숨김.
    greeting.classList.add(SHOWING_CN); // user가 있으면 showing.
    greeting.innerText = `Hello ${text}`; // 보여준 뒤 인사!
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser); // user 정보 존재.
    }

}

function init() {
    loadName();
}

init();