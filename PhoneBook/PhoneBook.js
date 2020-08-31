$(document).ready(function () {
    var addNoteButton = $("#add_button");
    var clearNoteButton = $("#clear_button");
    var newNameTextField = $("#input_name");
    var newSurnameTextField = $("#input_surname");
    var newPhoneTextField = $("#input_phone");
    var table = $(".table > tbody");
    var forms = $(".needs-validation");
    var phoneMatchingError = $(".phone_matching_error");

    var isAddedPhone = false;
    var noteNumber = 1;

    clearNoteButton.click(function () {
        clearForm();
    });

    addNoteButton.click(function () {
        addValidated();

        var textName = newNameTextField.val();
        var textSurname = newSurnameTextField.val();
        var textPhone = newPhoneTextField.val();

        if (textName === "" || textSurname === "" || textPhone === "") {
            return;
        }

        function checkPhoneMatch() {
            table.find("tr").each(function () {
                if ($(this).find(".phone_column").text() === textPhone) {
                    isAddedPhone = true;
                }
            });

            return isAddedPhone;
        }

        if (checkPhoneMatch()) {
            $("#repeatable_phone").text(textPhone);

            phoneMatchingError.show();
            newPhoneTextField.val("");
            isAddedPhone = false;
        } else {
            phoneMatchingError.hide();

            var tableItem = $("<tr></tr>");

            switchToViewMode();

            table.append(tableItem);

            clearForm();
        }

        function switchToViewMode() {
            tableItem.html("<td class='text-center note_number'></td> <td class='name_column'></td>" +
                "<td class='surname_column'></td><td class='phone_column'></td>" +
                "<td class='text-center'><button title='Подтвердите удаление' data-toggle='confirmation' " +
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

    function clearForm() {
        newNameTextField.val("");
        newSurnameTextField.val("");
        newPhoneTextField.val("");

        phoneMatchingError.hide();

        removeValidated();
    }

    function addValidated() {
        forms.addClass("was-validated");
    }

    function removeValidated() {
        forms.removeClass("was-validated");
    }
});