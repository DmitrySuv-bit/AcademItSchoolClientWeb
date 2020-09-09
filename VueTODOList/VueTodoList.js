Vue.component("todo-item", {
    data: function () {
        return {
            newText: this.item.text,
            isEditing: false,
            emptyNoteError: false
        };
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeItem: function () {
            this.$emit("remove-item", this.item);
        },
        editItem: function () {
            this.isEditing = true;
        },
        saveItem: function () {
            if (this.item.text.trim().length === 0) {
                this.emptyNoteError = true;
                return;
            }

            this.$emit("save-item", this.item);

            this.newText = this.item.text;

            this.isEditing = false;
            this.emptyNoteError = false;
        },
        cancelItem: function () {
            this.$emit("cancel-item", this.item, this.newText);

            this.emptyNoteError = false;
            this.isEditing = false;
        }
    },
    template: "#todo-item-template"
});

Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newItemText: "",
            isFormValidation: false
        };
    },
    methods: {
        addItem: function () {
            if (this.newItemText.trim().length === 0) {
                this.isFormValidation = true;
                return;
            }

            this.items.push({
                text: this.newItemText
            });

            this.newItemText = "";
            this.isFormValidation = false;
        },
        removeItem: function (item) {
            this.items = this.items.filter(function (e) {
                return e !== item;
            });
        },
        saveItem: function (item) {
            item.text = this.item.text;
        },
        cancelItem: function (item, newText) {
            item.text = newText;
        }
    },
    template: "#todo-list-template"
});

new Vue({
    el: "#app"
});