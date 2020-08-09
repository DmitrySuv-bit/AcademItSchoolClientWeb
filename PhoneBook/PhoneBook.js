$(document).ready(function () {
    var addNoteButton = $("#add_button");
    var clearNoteButton = $("#clear_button");
    var newNameTextField = $("#inputName");
    var newSurnameTextField = $("#inputSurname");
    var newPhoneTextField = $("#inputPhone");
    var table = $(".table > tbody");
    var noteNumber = 1;
    var forms = $(".needs-validation");
    var bol = false;

    clearNoteButton.click(function () {
        clear()
    });

    addNoteButton.click(function () {
        addValidated();

        var textName = newNameTextField.val();
        var textSurname = newSurnameTextField.val();
        var textPhone = newPhoneTextField.val();

        if (textName === "" || textSurname === "" || textPhone === "") {
            return;
        }

        function visible() {
            table.find("tr").each(function () {
                if ($(this).find(".phone_column").text() === textPhone) {
                    bol = true;
                }
            });

            return bol;
        }

        if (visible()) {
            $(".phone_matching_error").show();

            bol = false;
        } else {
            $(".phone_matching_error").hide();

            var tableItem = $("<tr></tr>");

            switchToViewMode();

            table.append(tableItem);

            clear();
        }


        function switchToViewMode() {
            tableItem.html("<td class='text-center note_number'></td> <td class='name_column'></td>" +
                "<td class='surname_column'></td><td class='phone_column'></td>" +
                "<td class='text-center'><button data-title='Подтвердите удаление' data-toggle='confirmation' " +
                "data-btn-ok-label='Удалить' data-btn-cancel-label='Отменить' class='delete_button btn-block' " +
                "type='button'>X</button></td>");

            tableItem.find(".note_number").text(noteNumber);

            ++noteNumber;

            tableItem.find(".name_column").text(textName);

            tableItem.find(".surname_column").text(textSurname);

            tableItem.find(".phone_column").text(textPhone);

            tableItem.find(".delete_button").on("confirmed.bs.confirmation", function () {
                tableItem.remove();

                noteNumber = 1;

                table.find("tr").each(function () {
                    $(this).find(".note_number").text(noteNumber);

                    ++noteNumber;
                });
            }).confirmation();
        }
    });

    function clear() {
        newNameTextField.val("");
        newSurnameTextField.val("");
        newPhoneTextField.val("");

        removeValidated()
    }

    function addValidated() {
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('click', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }

    function removeValidated() {
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('click', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.remove('was-validated');
            }, false);
        });
    }

});