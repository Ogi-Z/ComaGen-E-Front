<template>
  <div class="page-container">
    <div class="registration-container">
      <form @submit.prevent="registerSoftwareOwner">
        <div class="form-group">
          <input
            type="text"
            v-model="softwareOwner.name"
            placeholder="Name Surname"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            v-model="softwareOwner.email"
            placeholder="Email"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="softwareOwner.password"
            placeholder="Password"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="softwareOwner.confirmPassword"
            placeholder="Confirm Password"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="softwareOwner.city"
            placeholder="City"
            class="input-field"
          />
        </div>
        <div class="form-group">
          <select v-model="softwareOwner.gender" class="input-field">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" class="button">Register</button>
      </form>
    </div>
  </div>
</template>

  
<script>
import router from "../router";
import axios from "axios";

export default {
  name: "SoftwareOwnerRegistrationPage",
  data() {
    return {
      softwareOwner: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        gender: ""
      }
    };
  },
  methods: {
    async registerSoftwareOwner() {
      try {
        const response = await axios.post("http://127.0.0.1:5000/add_user", {
          username: this.softwareOwner.name,
          useremail: this.softwareOwner.email,
          userpassword: this.softwareOwner.password,
          usercity: this.softwareOwner.city,
          usergender: this.softwareOwner.gender,
          role_id: "0"
        });
        // Kontrol amaçlı: Başarılı bir kayıt işlemi olduğunu varsayalım
        if (response && response.status === 200) {
          this.$router.push("/authConfirm");
        }
      } catch (error) {
        console.error("Error registering software owner:", error);
      }
    }
  }
};
</script>

  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.registration-container {
  width: 400px;
  padding: 20px;
  border-radius: 15px;
  background-color: #b3c6a6; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', serif;
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
  padding: 10px 20px;
  border: none;
  border-radius: 25px; 
  background-color: #4CAF50; 
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500; 
  font-size: 16px; 
}

.button:hover {
  background-color: #45a049;
}
</style>

  