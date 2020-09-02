Vue.component("todo-item", {
    data: function () {
        return {
            newText: this.item.text,
            beingEdited: false,
            emptyNoteError: false
        }
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
            this.beingEdited = true;
        },
        saveItem: function () {
            if (this.item.text.trim().length === 0) {
                this.emptyNoteError = true;
                return;
            }

            this.newText = this.item.text;
            this.beingEdited = false;
            this.emptyNoteError = false;
        },
        cancelItem: function () {
            this.item.text = this.newText;
            this.emptyNoteError = false;
            this.beingEdited = false;
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
        }
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
        }
    },
    template: "#todo-list-template"
});

new Vue({
    el: "#app"
});