<template>
  <div class="registration-container">
    <h2>User Registration</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <input
          type="text"
          v-model="user.name"
          placeholder="Name"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="user.surname"
          placeholder="Surname"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          v-model="user.email"
          placeholder="Email"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="user.password"
          placeholder="Password"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="user.confirmPassword"
          placeholder="Confirm Password"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="user.city"
          placeholder="City"
          class="input-field"
        />
      </div>
      <div class="form-group">
        <select v-model="user.gender" class="input-field">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button type="submit" class="button">Register</button>
    </form>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "UserRegistrationPage",
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        gender: "",
      },
    };
  },
  methods: {
    async registerUser() {
      router.push("/authConfirm");
      await axios.post("http://127.0.0.1:5000/add_user", {
        username: this.user.name,
        usersurname: this.user.surname,
        useremail: this.user.email,
        userpassword: this.user.password,
        usercity: this.user.city,
        role_id: "0",
      });
    },
  },
};
</script>

<style scoped>
.registration-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}
h2 {
  color: black;
}
.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
}

.button {
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
}
</style>
