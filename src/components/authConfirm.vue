<template>
  <div class="auth-container">
    <h1>Authentication</h1>
    <p>Please enter the code sent to your email address to proceed.</p>
    <form @submit.prevent="confirmCode">
      <input type="text" v-model="authCode" placeholder="Enter your code here" required>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'AuthConfirmPage',
  setup() {
    const authCode = ref('');
    const router = useRouter();

    const confirmCode = () => {
      if (authCode.value === '123456') {
        router.push('/');
      } else {
        alert('Invalid code, please try again.');
      }
    };

    return { authCode, confirmCode };
  }
}
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 10px;
  background-color: white;
}
.auth-container h1 {
  color: black;
}
.auth-container p {
  color: black; 
}
input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  color: rgb(0, 0, 0);
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
