const addBlockEl = document.querySelector('.add-block');
const formcontrolEl = document.querySelector('.add-input');
const itemsEl = document.querySelector('.items');



addBlockEl.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        const value = formcontrolEl.value;
        if (!isValid(value))
            return;

        createNode(value);
        formcontrolEl.value = '';
    }
})

function isValid(value) {

    if (value.trim() === '' || value.trim() === null) {
        alert("내용을 입력하세요.");
        return false;
    }
    return true;
}

function createNode(text) {
    const itemEl = document.createElement('div');
    const fragmentEl = document.createElement('div');
    const todoEl = document.createElement('input');
    const editEl = document.createElement('div');
    const a1El = document.createElement('a');
    const a2El = document.createElement('a');

    itemEl.className = 'item';
    fragmentEl.className = 'fragment';
    editEl.className = 'edit';

    todoEl.setAttribute("readonly", true)
    a1El.setAttribute("href", "javascript:void(0)");
    a2El.setAttribute("href", "javascript:void(0)");

    a1El.innerHTML = "edit";
    a2El.innerHTML = "delete";
    todoEl.value = text;

    a2El.addEventListener('click',(e)=>{
        const itemEl = e.target.parentNode.parentNode;
        itemEl.remove();
    })


    itemEl.appendChild(todoEl);
    editEl.appendChild(a1El);
    editEl.appendChild(a2El);
    itemEl.appendChild(fragmentEl);
    itemEl.appendChild(editEl);

    itemsEl.appendChild(itemEl);
}