<template>
  <div class="container">
    <div class="emphasize container pb-2">
      <h1 class="text-center">Phone Book</h1>
      <div class="row">
        <div class="col-md-5">
          <form class="needs-validation" :class="{'was-validated': isInvalid}" novalidate>
            <div class="form-group">
              <label for="input_name">* Имя контакта:</label>
              <input v-model="name" type="text" class="form-control" id="input_name" required>
              <div class="invalid-feedback">
                Поле Имя не заполнено!
              </div>
            </div>
            <div class="form-group">
              <label for="input_surname">* Фамилия контакта:</label>
              <input v-model="surname" type="text" class="form-control" id="input_surname" required>
              <div class="invalid-feedback">
                Поле Фамилия не заполнено!
              </div>
            </div>
            <div class="form-group">
              <label for="input_phone">* Номер телефона контакта:</label>
              <input v-model="phone" type="number" class="form-control raz" id="input_phone" required>
              <div class="invalid-feedback">
                Поле Номер телефона не заполнено!
              </div>
            </div>
            <button type="button" class="btn btn-outline-primary" @click="addContact">Добавить</button>
            <button type="button" class="btn btn-outline-danger" @click="clearForm">Очистить</button>
            <div class="phone_matching_error mt-2 mb-0 alert alert-danger">
              Контакт с номером телефона <span id="repeatable_phone"></span> уже добавлен!
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
          <tr class="text-nowrap">
            <th class="text-center">№</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Номер телефона</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-cloak v-for="(contact, index) in contacts" class="text-nowrap">
            <th class="text-center">{{ index + 1 }}</th>
            <th>{{ contact.name }}</th>
            <th>{{ contact.surname }}</th>
            <th>{{ contact.phone }}</th>
            <th class="text-center">
              <div title="Подтвердите удаление">
              <button @click="removeContact" data-title="Подтвердите удаление" data-toggle="confirmation"
                      data-btn-ok-label="Удалить" data-btn-cancel-label="Отменить"
                      class="delete_button btn-block" type='button'>X</button>
              </div>
            </th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contacts: [],
      name: "",
      surname: "",
      phone: "",
      isInvalid: false
    }
  },

  methods: {
    addContact() {
      if (this.name.trim() === "" || this.surname.trim() === "" || this.phone.trim() === "") {
        this.isInvalid = true;
        return;
      }

      this.contacts.push({
        name: this.name,
        surname: this.surname,
        phone: this.phone
      });

      this.isInvalid = false;

      this.name = "";
      this.surname = "";
      this.phone = "";
    },
    clearForm() {
      this.isInvalid = false;

      this.name = "";
      this.surname = "";
      this.phone = "";
    },
    removeContact() {

    }

  }
}
</script>