const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; // 로컬 스토리지의 toDo 속성 키.

let toDos = []; // let 선언: 할 일 목록을 저장할 array.

function deleteToDo(event) {
    const btn = event.target; // 클릭 대상이 되는 버튼
    const li = btn.parentNode; // 버튼의 부모 요소인 li
    toDoList.removeChild(li); // li의 자식 요소를 지운다.
    const cleanToDos = toDos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
        // li의 id와 todo의 id가 같지 않은 것을 반환한다.
        // li의 id가 문자형이므로 정수로 바꿔 준다
    });
    toDos = cleanToDos; // todo 교체
    saveToDos(); // 바뀐 todo 저장
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // toDos 목록을 가져와서 로컬 스토리지에 저장한다.
}

function paintToDo(text) {
    const li = document.createElement("li"); // li 생성.
    const delBtn = document.createElement("button"); // 삭제를 위한 delete button 생성.
    const span = document.createElement("span"); // span 태그 생성.
    const newId = toDos.length + 1;
    delBtn.innerText = "❌"; // 삭제 버튼에 이모지 삽입.
    delBtn.addEventListener("click", deleteToDo); // 삭제 버튼 클릭 시 deleteToDo 함수 실행.
    span.innerText = text; // submit 시 생성되어서 올 currentValue.
    li.id = newId; // li에 id 속성 추가.
    li.appendChild(span); // li 아래에 span을 자식 요소로 넣는다.
    li.appendChild(delBtn); // li 아래에 delBtn을 자식 요소로 넣는다.
    toDoList.appendChild(li); // toDoList에 li를 자식 요소로 추가한다.
    const toDoObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObj); // 할 일 목록 array에 할 일 object를 넣는다.
    saveToDos(); // 로컬 스토리지에 저장한다.
}

function handleSubmit(event) {
    event.preventDefault(); // default 동작 설정 해제.
    const currentValue = toDoInput.value; // toDoForm 제출되었을 때의 값.
    paintToDo(currentValue); // paintToDo 함수 호출.
    toDoInput.value = ""; // submit 후 form의 input 초기화.
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); // 로컬 스토리지에서 toDo 속성값을 가져 온다.
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); // string 형태로 load된 할 일 목록을 JSON 형태로 파싱한다.
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
            // 각각의 toDo text에 대해 paintToDo 함수를 실행한다.
            // 위의 함수를 밖에 선언해도 무방하다.
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit); // toDoForm의 submit 이벤트 핸들링.
}

init();
