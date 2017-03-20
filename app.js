function todolist(){
    let item= document.getElementById("addTodoItem").value;
    let text=document.createTextNode(item);
	
    let newElement=document.createElement("li");
	newElement.appendChild(text);

    let bal=document.createElement('button');
	bal.textContent="Delete";
	bal.className="close";
	newElement.appendChild(bal);
	let order=document.getElementById("todoList");
	order.appendChild(newElement);
    bal.addEventListener('click',remove);
}

 var list = document.querySelector('ol');
 list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function reset() {   
     document.getElementById("addTodoItem").value = "";
}

function remove(){
let item=this.parentNode;
let parent=item.parentNode;
parent.removeChild(item);
}
