const formContainer = document.getElementById("form-container");
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoListContainer = document.getElementById("todo-list-container");
const emptyAlert = document.getElementById("empty-alert");
const todoList = document.getElementById("todo-list");
const resultAlert  = document.getElementById("result-alert");
console.log(resultAlert)
//---------------------------------- 

todoButton.addEventListener("click", addTodo);


function addTodo(event)
{ 

    if(todoInput.value !== "")
    {

        //create li element
        const todoText =document.createElement("span");
        const deleteButton = document.createElement("span");
        const listItem = document.createElement("li");
    
        todoText.textContent = todoInput.value;
        listItem.style.borderBottom = "1px solid #ddd"
        deleteButton.textContent = "X";
        deleteButton.style.border = "1px solid black"
        deleteButton.style.fontSize = "17px"
        deleteButton.style.margin = "0 5px 0 0";
        listItem.appendChild(todoText);
        listItem.appendChild(deleteButton);
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
    
        todoList.appendChild(listItem);
        emptyAlert.remove();
        todoInput.value = "";
        resultAlert.textContent = "Great!! You added a todo!"
        resultAlert.style.background = "#D1E7DD";
        resultAlert.style.color = "#455132"
        
        
    }
    else
    {
        emptyAlert.textContent = "You wrote anything ://.."
        emptyAlert.style.backgroundColor = "#F8D7DA";
        emptyAlert.style.color = "#AF3129"
    }
}
