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
        <router-link to="/forgot-password" class="forgot secondary router-link"
          >Forgot Password</router-link
        >
        <div class="form-actions">
          <router-link to="/owner_register" class="button router-link"
            >Register</router-link
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
        .post("http://127.0.0.1:5000/ownerlogin", {
          useremail: this.email,
          userpassword: this.password,
        })
        .then((response) => {
          console.log(response);
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
  background-color: #fff;
}
.forgot {
  color: #fff;
  font-size: 18px;
  margin-left: 60px;
}

.login-container {
  width: 550px;
  height: 310px;
  padding: 20px;
  border-radius: 15px;
  background-color: #436b1f79;
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

.input-field {
  width: 410px;
  height: 50px;
  padding: 10px 30px;
  border: none;
  border-radius: 67.5px;
  background-color: #ffffff;
  color: #a2b691;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 400;
  font-family: "Neucha", serif;
  margin-top: 30px;
  margin-left: 10%;
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 60px;
  margin-right: 60px;
}

.button {
  width: 126px;
  height: 48px;
  padding: 5px 25px;
  border: none;
  border-radius: 10px;
  background-color: #3c6b3d;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 24px;
}

.button:hover {
  background-color: #45a049;
}

.button.secondary {
  background-color: transparent;
  color: #ffffff;
  font-size: 18px;
}

.button.secondary:hover {
  background-color: #f5f5f5;
}

.router-link {
  text-decoration: none;
}
</style>
