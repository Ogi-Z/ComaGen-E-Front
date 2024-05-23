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
          <router-link to="/register" class="button secondary"
            >Register</router-link
          >
          <router-link to="/forgot-password" class="button secondary"
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
          }
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #f0f0f0; 
}

.login-container {
  width: 350px;
  padding: 20px;
  border-radius: 15px;
  background-color: #b3c6a6; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Times New Roman", serif;
  transform: translateY(-70px);
}

h2 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
  font-weight: 500; 
}

.form-group {
  margin-bottom: 15px;
}

.input-field {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 0 10px; 
  border: none;
  border-radius: 25px;
  background-color: white;
  color: #333;
  font-size: 14px;
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px; 
  background-color: #4caf50;
  color: white;
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
  color: #4caf50;
}

.button.secondary:hover {
  background-color: #f5f5f5;
}
</style>
