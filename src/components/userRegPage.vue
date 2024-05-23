<template>
 <div class="page-container">
  <div class="registration-container">
    <h2>User Registration</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <input
          type="text"
          v-model="user.name"
          placeholder="Name Surname*"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          v-model="user.email"
          placeholder="Email*"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="user.password"
          placeholder="Password*"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="user.confirmPassword"
          placeholder="Confirm Password*"
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
          required
        />
      </div>
      <div class="form-group">
        <select v-model="user.gender" class="input-field">
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <button type="submit" class="button">Register</button>
      </div>
    </form>
  </div>
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
      try {
        const response = await axios.post("http://127.0.0.1:5000/add_user", {
          username: this.user.name,
          useremail: this.user.email,
          userpassword: this.user.password,
          usercity: this.user.city,
          usergender: this.user.gender,
          role_id: "0",
        });
        // Kontrol amaçlı: Başarılı bir kayıt işlemi olduğunu varsayalım
        if (response && response.status === 200) {
          this.$router.push("/authConfirm");
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #f0f0f0; 
}

.registration-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  background-color: #b3c6a6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', serif; 
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

.button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 25px; 
  background-color: #367038; 
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500; 
  font-size: 16px; 
  
}

.button:hover {
  background-color: #45a049;
}

.form-group:last-child {
  text-align: center; 
}
</style>


