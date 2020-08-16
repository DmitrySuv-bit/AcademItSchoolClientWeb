Vue.component("todo-item", {
    data: function () {
        return {
            newText: this.item.text,
            isEdited: false
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
            this.item.text = this.newText;
            this.isEdited = false;
        },
        cancelItem: function () {
            return this.isEdited = false;
        }
    },
    template: "#todo-item-template"
});

Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newItemText: ""
        }
    },
    methods: {
        addItem: function () {
            if (this.newItemText.trim().length === 0) {
                return;
            }

            this.items.push({
                text: this.newItemText
            });

            this.newItemText = "";
        },
        removeItem: function (item) {
            this.items = this.items.filter(function (e) {
                return e !== item;
            })
        }
    },
    template: "#todo-list-template"
})

new Vue({
    el: "#app"
});