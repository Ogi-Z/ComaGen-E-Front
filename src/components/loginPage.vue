<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Email" class="input-field" required />
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" class="input-field" required />
      </div>
      <div class="form-actions">
        <router-link to="/register" class="button secondary">Register</router-link>
        <router-link to="/forgot-password" class="button secondary">Forgot Password</router-link>
        <button type="submit" class="button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("Login attempt with:", this.email, this.password);
      // Implement actual login logic with API call here
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
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

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button, .button.secondary {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.button {
  background-color: #4caf50;
  color: white;
}

.button.secondary {
  background-color: #f4f4f4;
  color: #333;
}
</style>
