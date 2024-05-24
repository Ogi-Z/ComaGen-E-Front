<template>
  <div class="page-container">
    <div class="login-container">
      <form @submit.prevent="login">
        <div class="form-group">
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="input-field"
            required
          />
        </div>
        <div class="form-actions">
          <router-link to="/register" class="button router-link"
            >Register</router-link
          >
          <router-link
            to="/forgot-password"
            class="button secondary router-link"
            >Forgot Password</router-link
          >
          <button type="submit" class="button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await axios
        .post("http://127.0.0.1:5000/login", {
          useremail: this.email,
          userpassword: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            const userId = response.data[1].id;
            console.log(userId);
            this.$store.dispatch("fetchUser", userId);
            router.push("/");
            alert("Login successful");
          }
        })
        .catch((error) => {
          if (error.response.status == 401) {
            alert("User is not verified");
          } else if (error.response.status == 409) {
            alert("Invalid password");
          } else if (error.response.status == 404) {
            alert("No user with that email exists");
          }
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");

* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
  font-family: "Inter", sans-serif;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-container {
  width: 500px;
  height: 220px;
  padding: 20px;
  border-radius: 15px;
  background-color: #b3c6a6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Neucha", serif;
  transform: translateY(-100px);
}

h2 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 500;
  font-family: "Neucha", serif;
}

.form-group {
  margin-bottom: 15px;
}

.input-field {
  width: 408px;
  height: 50px;
  padding: 10px 30px;
  margin: 0 10px;
  border: none;
  border-radius: 67.5px;
  background-color: #ffffff;
  color: #a2b691;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 400;
  font-family: "Neucha", serif;
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background-color: #3c6b3d;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 16px;
}

.button:hover {
  background-color: #45a049;
}

.button.secondary {
  background-color: transparent;
  color: #133314;
}

.button.secondary:hover {
  background-color: #f5f5f5;
}

.router-link {
  text-decoration: none;
}
</style>
