document.addEventListener("DOMContentLoaded", function () {
    // noinspection ES6ConvertVarToLetConst
    var addTodoButton = document.querySelector(".container button[name=add_button]");
    // noinspection ES6ConvertVarToLetConst
    var newTodoTextField = document.querySelector(".container input[name=note_entry]");
    // noinspection ES6ConvertVarToLetConst
    var todoList = document.getElementById("todo_list");

    addTodoButton.addEventListener("click", function () {
        // noinspection ES6ConvertVarToLetConst
        var text = newTodoTextField.value;

        if (text === "") {
            return alert("Введите заметку!!!");
        }

        // noinspection ES6ConvertVarToLetConst
        var todoItem = document.createElement("li");

        todoItem.className = "container";

        switchToViewMode();

        function switchToViewMode() {
            todoItem.innerHTML = "<input class='text_style' type='text' name='text' readonly/>" +
                "<div class='align-right'>" +
                "<button class='button_style' type='button' name='edit_button'>Редактировать</button>" +
                "<button class='button_style' type='button' name='delete_button'>Удалить</button></div>";

            todoItem.querySelector(".text_style").value = text;

            todoItem.querySelector(".container button[name=delete_button]")
                .addEventListener("click", function () {
                    todoItem.parentNode.removeChild(todoItem);
                });

            todoItem.querySelector(".container button[name=edit_button]")
                .addEventListener("click", function () {
                    todoItem.innerHTML = "<input class='text_style' type='text' name='text'/>" +
                        "<div class='align-right'>" +
                        "<button class='button_style' type='button' name='save_button'>Сохранить</button>" +
                        "<button class='button_style' type='button' name='cancel_button'>Отмена</button></div>";

                    todoItem.querySelector(".text_style").value = text;

                    todoItem.querySelector(".container button[name=save_button]")
                        .addEventListener("click", function () {
                            text = todoItem.querySelector(".text_style").value;
                            switchToViewMode();
                        });

                    todoItem.querySelector(".container button[name=cancel_button]")
                        .addEventListener("click", function () {
                            switchToViewMode();
                        });
                });
        }

        todoList.appendChild(todoItem);

        newTodoTextField.value = "";
    });
});