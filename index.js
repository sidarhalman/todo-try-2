const formContainer = document.getElementById("form-container");
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoListContainer = document.getElementById("todo-list-container");
const emptyAlert = document.getElementById("empty-alert");
const todoList = document.getElementById("todo-list");
const resultAlert  = document.getElementById("result-alert");
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
        deleteButton.id = "delete-button";
        deleteButton.style.border = "1px solid black"
        deleteButton.style.fontSize = "17px"
        deleteButton.style.margin = "0 5px 0 0";
        deleteButton.style.cursor = "pointer";
        listItem.appendChild(todoText);
        listItem.appendChild(deleteButton);
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        
        todoList.appendChild(listItem);
        emptyAlert.textContent ="";
        todoInput.value = "";
        resultAlert.textContent = "Great!! You added a todo!"
        resultAlert.style.background = "#D1E7DD";
        resultAlert.style.color = "#455132"
        let todos =[];
        if(localStorage.getItem("todos") === null)
        {
            todos =[];
        }
        else
        {
            todos = JSON.parse(localStorage.getItem("todos"))
        }
        todos.push(todo.textContent);

        localStorage.setItem("todos",JSON.stringify(todos));

    }
    else
    {
        resultAlert.textContent = "You wrote anything ://.."
        resultAlert.style.backgroundColor = "#F8D7DA";
        resultAlert.style.color = "#AF3129"
    };

}



todoList.addEventListener("click",deleteTodoFromUI)
function deleteTodoFromUI(event)
{
    const trgt = event.target;
    if(trgt.id !== "empty-alert" && trgt.id == "delete-button")
    {
        console.log("Delete Todo");
        trgt.parentElement.remove();
        resultAlert.textContent ="You deleted a Todo!"
        if(todoList.children.length === 0)
        {
            emptyAlert.textContent = "Your list is empty";
        }
    }
}





