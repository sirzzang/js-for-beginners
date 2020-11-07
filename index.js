// Hello World
/*
alert('Working. JS. beautiful.'); // Hello World
console.log("Im working. Im JS. Im Beautiful. Im Worth it.");
*/

// DOM
/*
const title = document.getElementById('title');
console.log(title);
title.innerHTML = '바뀌었나요?';

console.dir(title);
title.style.backgroundColor = 'peru';
*/

// title에 클릭 이벤트리스너 적용
/*
const title = document.querySelector('#title');

console.log(title)
title.addEventListener('click', handleClick);
*/

// DOM 체크 후 이벤트리스너 적용
/*
const title = document.querySelector('#title');
const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = '#3498db'; //flatuicolor.com

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
};

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener('click', handleClick)
};

init();
*/

// 온라인, 오프라인 핸들링
/*
function handleOffline() {
    console.log('OMG... bye!');
}

function handleOnline() {
    console.log('welcome back!');
}

window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);
*/

// class name 변경: replacing className
/*
const title = document.querySelector('#title');
const CLICKED_CLASS = 'clicked';

function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = '';
    }
}

function init() {
    title.addEventListener('click', handleClick);
}

init();
*/

// class name 변경: classList 메소드 사용
const title = document.querySelector('#title');
const CLICKED_CLASS = 'clicked';

/*
function handleClick() {
    // const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS); //boolean
    //if (currentClass !== CLICKED_CLASS) {
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}
*/

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener('click', handleClick);
}

init();