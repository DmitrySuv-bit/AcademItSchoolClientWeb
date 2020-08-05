document.addEventListener("DOMContentLoaded", function () {
    var addTodoButton = document.getElementById("add_button");
    var newTodoTextField = document.querySelector(".input_field");
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
            todoItem.innerHTML = "<input class='note_text' type='text' readonly/> " +
                "<button class='button edit_button' type='button'>Редактировать</button> " +
                "<button class='button delete_button' type='button'>Удалить</button>";

            todoItem.querySelector(".note_text").value = text;

            todoItem.querySelector(".delete_button")
                .addEventListener("click", function () {
                    todoItem.parentNode.removeChild(todoItem);
                });

            todoItem.querySelector(".edit_button")
                .addEventListener("click", function () {
                    todoItem.innerHTML = "<input class='note_text' type='text'/> " +
                        "<button class='button save_button' type='button'>Сохранить</button> " +
                        "<button class='button cancel_button' type='button'>Отмена</button>";

                    todoItem.querySelector(".note_text").value = text;

                    todoItem.querySelector(".save_button")
                        .addEventListener("click", function () {
                            if (todoItem.querySelector(".note_text").value.length === 0) {
                                todoItem.parentNode.removeChild(todoItem);
                            }

                            text = todoItem.querySelector(".note_text").value;
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