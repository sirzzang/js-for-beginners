const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos'; // 로컬 스토리지의 toDo 속성 키.

function paintToDo(text) {
    const li = document.createElement('li'); // li 생성.
    const delBtn = document.createElement('button'); // 삭제를 위한 delete button 생성.
    delBtn.innerText = '❌'; // 삭제 버튼에 이모지 삽입.
    const span = document.createElement('span'); // span 태그 생성.
    span.innerText = text; // submit 시 생성되어서 올 currentValue.
    li.appendChild(span); // li 아래에 span을 자식 요소로 넣는다.
    li.appendChild(delBtn); // li 아래에 delBtn을 자식 요소로 넣는다.
    toDoList.appendChild(li); // toDoList에 li를 자식 요소로 추가한다.
}

function handleSubmit(event) {
    event.preventDefault(); // default 동작 설정 해제.
    const currentValue = toDoInput.value; // toDoForm 제출되었을 때의 값.
    paintToDo(currentValue); // paintToDo 함수 호출.
    toDoInput.value = ''; // submit 후 form의 input 초기화.
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS); // 로컬 스토리지에서 toDo 속성값을 가져 온다.
    if (toDos !== null) {
        // toDo가 없는 경우의 작업만 필요하다.
    } 
}

function init() {
    loadToDos(); 
    toDoForm.addEventListener('submit', handleSubmit) // toDoForm의 submit 이벤트 핸들링.
}

init();