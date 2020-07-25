document.addEventListener("DOMContentLoaded", function () {
    var addTodoButton = document.getElementById("add_button");
    var newTodoTextField = document.querySelector(".container input[name=note_entry]");
    var todoList = document.getElementById("todo_list");

    addTodoButton.addEventListener("click", function () {
        var text = newTodoTextField.value;

        if (text === "") {
            alert("Введите заметку!!!");
            return;
        }
        
        var todoItem = document.createElement("li");

        todoItem.className = "container";

        switchToViewMode();

        function switchToViewMode() {
            todoItem.innerHTML = "<input class='text_style' type='text' name='text' readonly/> " +
                "<button class='button edit_button' type='button' name='edit_button'>Редактировать</button> " +
                "<button class='button delete_button' type='button' name='delete_button'>Удалить</button>";

            todoItem.querySelector(".text_style").value = text;

            todoItem.querySelector(".delete_button")
                .addEventListener("click", function () {
                    todoItem.parentNode.removeChild(todoItem);
                });

            todoItem.querySelector(".edit_button")
                .addEventListener("click", function () {
                    todoItem.innerHTML = "<input class='text_style' type='text' name='text'/> " +
                        "<button class='button save_button' type='button' name='save_button'>Сохранить</button> " +
                        "<button class='button cancel_button' type='button' name='cancel_button'>Отмена</button>";

                    todoItem.querySelector(".text_style").value = text;

                    todoItem.querySelector(".save_button")
                        .addEventListener("click", function () {
                            text = todoItem.querySelector(".text_style").value;
                            switchToViewMode();
                        });

                    todoItem.querySelector(".cancel_button")
                        .addEventListener("click", function () {
                            switchToViewMode();
                        });
                });
        }

        todoList.appendChild(todoItem);

        newTodoTextField.value = "";
    });
});