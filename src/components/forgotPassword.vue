<template>
    <div class="page-container">
      <div class="forgot-password-container">
        <h1>Reset Your Password</h1>
        <form @submit.prevent="resetPassword">
          <div class="form-group">
            <input
              type="password"
              v-model="oldPassword"
              placeholder="Old Password"
              class="input-field"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="newPassword"
              placeholder="New Password"
              class="input-field"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              v-model="confirmPassword"
              placeholder="Confirm New Password"
              class="input-field"
              required
            />
          </div>
          <div class="form-group">
            <button type="submit" class="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'ForgotPassword',
    setup() {
      const router = useRouter();
      const oldPassword = ref('');
      const newPassword = ref('');
      const confirmPassword = ref('');
  
      const resetPassword = () => {
        console.log('Resetting password for:', oldPassword.value);
        // Add your password reset logic here, typically an API call
        router.push('/login'); // Redirect to login page after action
      };
  
      return {
        oldPassword,
        newPassword,
        confirmPassword,
        resetPassword,
      };
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
  background-color: white;
}

.forgot-password-container {
  width: 350px;
  padding: 20px;
  border-radius: 15px;
  background-color: #b3c6a6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', serif; 
  transform: translateY(-100px); 
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700; 
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
