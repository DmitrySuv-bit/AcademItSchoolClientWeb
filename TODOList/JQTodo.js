$(document).ready(function () {
    var addTodoButton = $("#add_button");
    var newTodoTextField = $(".input_field");
    var todoList = $("#todo_list");

    addTodoButton.click(function () {
        var text = newTodoTextField.val();

        if (text === "") {
            alert("Введите заметку!!!");
            return;
        }

        var todoItem = $("<li></li>");

        todoItem.addClass("container");

        switchToViewMode();

        function switchToViewMode() {
            todoItem.html("<input class='text_style' type='text' readonly/> " +
                "<button class='button edit_button' type='button'>Редактировать</button> " +
                "<button class='button delete_button' type='button'>Удалить</button>");

            todoItem.find(".text_style").val(text);

            todoItem.find(".delete_button").click(function () {
                todoItem.remove();
            });

            todoItem.find(".edit_button").click(function () {
                todoItem.html("<input class='text_style' type='text'/> " +
                    "<button class='button save_button' type='button'>Сохранить</button> " +
                    "<button class='button cancel_button' type='button'>Отмена</button>");

                todoItem.find(".text_style").val(text);

                todoItem.find(".save_button").click(function () {
                    text = todoItem.find(".text_style").val();
                    switchToViewMode();
                });

                todoItem.find(".cancel_button").click(function () {
                    switchToViewMode();
                });
            });
        }

        todoList.append(todoItem);

        newTodoTextField.val("");
    });
});