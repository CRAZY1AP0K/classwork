const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list')

myButton.disabled = true;
   

function isEmpty () {
  if(nameInput.value != '') {
    myButton.disabled = false;
  } else {
    myButton.disabled = true;
  }
}
 nameInput.addEventListener('keyup', isEmpty )
 

myButton.addEventListener('click', ()=> {
  let newItem = document.createElement('li');
  // добавить текстовое содержимое 
  newItem.textContent = nameInput.value;
  // parent.appendChild(item) - добавить item в конец  parent
  list.appendChild(newItem);
  //  newItem.classList.add('item')    добавить Элементу newitem класс item
  newItem.classList.add('item');


 // добавить кнопку удаления 
  const deleteButton = document.createElement('button');
  newItem.appendChild(deleteButton);
  deleteButton.textContent = ' ×';

    deleteButton.addEventListener('click', ()=> {
      list.removeChild(newItem);
    })

    // очистка поля для ввода
      nameInput.value = '';
      // проверка на пустоту и блокировка кнопки добавить, если поле пустое 
      isEmpty();
})