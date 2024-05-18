let todolist = JSON.parse(localStorage.getItem('todolist')) || [];

display(); 

function addtodo(){
  let  inputelement=document.querySelector('#todo-input');
  let dateelement=document.querySelector('#todo-date');
  let todoitem = inputelement.value;
  let tododate = dateelement.value;
  todolist.push({item:todoitem, duedate:tododate});
  localStorage.setItem('todolist',JSON.stringify(todolist));
  inputelement.value = '';
  dateelement.value='';
  display();
}

function display(){
  let containerElement=document.querySelector(".todo-container");

  let newHtml='';

  for(let i=0;i<todolist.length ;i++){
    let item=todolist[i].item;
    let duedate=todolist[i].duedate;
    newHtml +=`
    
      <span>${item}</span>
      <span>${duedate}</span>
      <button id="btn-delete" onclick=" todolist.splice(${i},1); localStorage.setItem('todolist',JSON.stringify(todolist)); display();">Delete</button>
    
    `;
  }
  containerElement.innerHTML=newHtml;
}