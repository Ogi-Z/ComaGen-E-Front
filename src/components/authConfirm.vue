<template>
  <div class="auth-container">
    <h1>Authentication</h1>
    <p>Please enter the code sent to your email address to proceed.</p>
    <form @submit.prevent="confirmCode">
      <input
        type="text"
        v-model="authCode"
        placeholder="Enter your code here"
        required
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  data() {
    return {
      authCode: "",
    };
  },

  methods: {
    confirmCode() {
      return axios
        .post(
          "http://127.0.0.1:5000/verify",
          {
            verificationkey: this.authCode,
          },
          {
            headers: {
              "Content-Type": "application/json", // Ensure the content type matches what the server expects
            },
          }
        )

        .then((response) => {
          
          if (response.status === 200) {
            router.push("/");
            alert("Successfully verified");
          }
        })
        .catch((error) => {
          
          if (error.response.status > 400 && error.response.status < 500) {
            alert("Invalid code, please try again.");
          }
        });
    },
  },

  name: "AuthConfirmPage",
};
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
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
