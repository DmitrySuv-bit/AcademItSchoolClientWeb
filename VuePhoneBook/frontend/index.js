import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss"

import "jquery/dist/jquery.min"
import "bootstrap/dist/js/bootstrap.bundle.min"


import Vue from "vue";

import PhoneBook from "./phone_book.vue";

new Vue ({
    el: "#app",

    components: {
        "phone-book": PhoneBook
    }
});