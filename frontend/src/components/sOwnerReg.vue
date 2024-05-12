<template>
    <div class="registration-container">
      <form @submit.prevent="registerSoftwareOwner">
        <div class="form-group">
          <input type="text" v-model="softwareOwner.name" placeholder="Name Surname" class="input-field" required>
        </div>
        <div class="form-group">
          <input type="email" v-model="softwareOwner.email" placeholder="Email" class="input-field" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="softwareOwner.password" placeholder="Password" class="input-field" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="softwareOwner.confirmPassword" placeholder="Confirm Password" class="input-field" required>
        </div>
        <div class="form-group">
          <input type="text" v-model="softwareOwner.city" placeholder="City" class="input-field">
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
  </template>
  
  <script>
  export default {
    name: 'SoftwareOwnerRegistrationPage',
    data() {
      return {
        softwareOwner: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          city: '',
          gender: ''
        }
      }
    },
    methods: {
      registerSoftwareOwner() {
        // Burada form verileri ile kayıt işlemleri yapılacak
        console.log("Registering software owner:", this.softwareOwner);
        // Gerçek bir uygulamada burada API çağrısı yapılır
      }
    }
  }
  </script>
  
  <style scoped>
  .registration-container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  </style>
  