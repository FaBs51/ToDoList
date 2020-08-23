const listinput = document.querySelector('.listInput');
const addBtn  = document.querySelector('.addBtn');
const list = document.querySelector('.list');

//eventlistener

addBtn.addEventListener('click',addinput);
list.addEventListener('click',deleteCheck);

//function
function addinput(){
    //adding Div to ul
    const listDiv = document.createElement('div');
    listDiv.classList.add('listDiv');
    //Making A li
    const newList = document.createElement('li');
    newList.classList.add('listitem');
    newList.innerText= listinput.value;
    listDiv.appendChild(newList);

    //making a completed button
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('completedBtn');
    completedBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    listDiv.appendChild(completedBtn); 

    //making a trash button
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trashBtn');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    listDiv.appendChild(trashBtn); 
    //appending everything to the div 
    list.appendChild(listDiv);
    // clearing the value on adding
    listinput.value= '';
}

function deleteCheck(j){
    const item = j.target;
    const todo = item.parentElement;
    //delete
    if(item.classList[0] === 'trashBtn'){
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    if(item.classList[0] === 'completedBtn'){
        todo.classList.toggle('completed');
    }
}
