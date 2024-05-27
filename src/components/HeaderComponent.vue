<template>
  <div class="header">
    <router-link to="/" class="logo" exact>Comagen-E</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/owner_register" v-if="!isLoggedIn"
        >Owner Register</router-link
      >
      <router-link to="/owner_login" v-if="!isLoggedIn"
        >Owner Login</router-link
      >
      <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
      <router-link to="/admin" v-if="role() == 2">Admin Panel</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/software-listing">Software Listing</router-link>
      <router-link to="/submit-problem" v-if="isLoggedIn && !isOwner"
        >Submit Problem</router-link
      >
      <router-link to="/owner-profile" v-if="isLoggedIn && isOwner"
        ><v-btn size="30px" icon="mdi-account-outline"></v-btn
      ></router-link>
      <router-link to="/user-profile" v-if="isLoggedIn && !isOwner"
        ><v-btn size="30px" icon="mdi-account-outline"></v-btn
      ></router-link>
      <router-link class="login" to="/login" v-if="!isLoggedIn"
        >Login</router-link
      >
      <router-link class="logout" to="/" @click="logOut()" v-if="isLoggedIn"
        >Logout</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.checkLoginStatus();
  },

  methods: {
    logOut() {
      // Perform actual logout logic here, such as clearing user state in Vuex
      this.$store.dispatch("logout");
      this.isLoggedIn = false;
      this.isOwner = false;
      location.reload();
    },
    role() {
      if (this.isLoggedIn) {
        if (this.user && this.user.length >= 7 && this.user[6] === 2) {
          return 2;
        } else if (
          this.owner &&
          this.owner.length >= 7 &&
          this.owner[6] === 2
        ) {
          return 2;
        } else {
          return 1;
        }
      } else {
        return -1;
      }
    },
    checkLoginStatus() {
      if (this.$store.state.user) {
        this.isLoggedIn = true;
        this.isOwner = false;
      } else if (this.$store.state.owner) {
        this.isLoggedIn = true;
        this.isOwner = true;
      } else {
        this.isLoggedIn = false;
        this.isOwner = false;
      }
    },
  },

  data() {
    return {
      isLoggedIn: false,
      isOwner: false,
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
    owner() {
      return this.$store.state.owner;
    },
  },

  watch: {
    "$store.state.user": "checkLoginStatus",
    "$store.state.owner": "checkLoginStatus",
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Neucha", serif;
}

.logo {
  font-family: "Newsreader";
  font-size: 32px;
  font-weight: 500;
  color: #3a5f3c;
  text-decoration: none;
  font-style: normal;
  margin-left: 60px;
  margin-top: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-right: 60px;
}

.login {
  color: #45a049 !important;
  font-weight: 600 !important;
}

.logout {
  color: #ff0000 !important;
  font-weight: 600 !important;
}

.nav-links a {
  font-size: 16px;
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: "Inter";
  margin-left: 15px;
}

.nav-links a:hover {
  color: #4caf50;
}

.nav-links .button {
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

.nav-links .button:hover {
  background-color: #45a049;
}
</style>
