Vue.component("todo-item", {
    data: function () {
        return {
            newText: this.item.text,
            isEdited: false,
            isItemValidation: false
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
            this.isEdited = true;
        },
        saveItem: function () {
            if (this.newText.trim().length === 0) {
                this.isItemValidation = true;
                return;
            }

            this.item.text = this.newText;

            this.isEdited = false;
            this.isItemValidation = false;
        },
        cancelItem: function () {
            this.newText = this.item.text;

            this.isItemValidation = false;
            this.isEdited = false;
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
})

new Vue({
    el: "#app"
});