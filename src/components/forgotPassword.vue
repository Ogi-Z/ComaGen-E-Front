<template>
    <div class="forgot-password-container">
      <h1>Reset Your Password</h1>
      <form @submit.prevent="resetPassword">
        <input type="password" v-model="oldPassword" placeholder="Old Password" required>
        <input type="password" v-model="newPassword" placeholder="New Password" required>
        <input type="password" v-model="confirmPassword" placeholder="Confirm New Password" required>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
import { ref } from 'vue'; // Import ref from vue
import { useRouter } from 'vue-router'; // Correctly import useRouter from vue-router

export default {
  name: 'ForgotPassword',
  setup() {
    const router = useRouter();
    const email = ref('');

    const sendResetEmail = () => {
      console.log('Sending password reset email to:', email.value);
      // Add your password reset logic here, typically an API call
      router.push('/login'); // Redirect to login page after action
    };

    return {
      email,
      sendResetEmail
    };
  }
}
</script>


  
  <style scoped>
  .forgot-password-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
  }
  h1{
    color: green;
  }
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  