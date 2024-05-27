<template>
  <div class="page-container">
    <div class="registration-container">
      <form @submit.prevent="registerSoftwareOwner">
        <v-row>
          <v-col>
            <div class="form-group">
              <input
                type="text"
                v-model="softwareOwner.name"
                placeholder="   Name*"
                class="input-field"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="softwareOwner.surname"
                placeholder="   Surname*"
                class="input-field"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                v-model="softwareOwner.email"
                placeholder="   Email*"
                class="input-field"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="softwareOwner.password"
                placeholder="   Password*"
                class="input-field"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="softwareOwner.confirmPassword"
                placeholder="   Confirm Password*"
                class="input-field"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="softwareOwner.city"
                placeholder="   City*"
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
          </v-col>
          <v-col
            ><div class="form-group">
              <input
                type="text"
                v-model="softwareOwner.software"
                placeholder="   Software*"
                class="input-field"
              />
            </div>
            <div class="form-group">
              <textarea
                rows="10"
                cols="50"
                type="text"
                v-model="softwareOwner.owenership"
                placeholder="   Provide info about your ownership*"
                class="input-field"
              />
              <v-btn @click="registerSoftwareOwner()" class="button"
                >Register</v-btn
              >
            </div>
          </v-col>
        </v-row>
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
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
        city: "",
        gender: "",
        software: "",
        owenership: "",
      },
    };
  },
  methods: {
    async registerSoftwareOwner() {
      try {
        await axios.post("http://127.0.0.1:5000/add_softwareowner", {
          username: this.softwareOwner.name,
          usersurname: this.softwareOwner.surname,
          useremail: this.softwareOwner.email,
          userpassword: this.softwareOwner.password,
          ownersoftware: this.softwareOwner.software,
          usercity: this.softwareOwner.city,
          role_id: "1",
        });

        this.$router.push("/");
        alert("Registiration Complete");
      } catch (error) {
        console.error("Error registering software owner:", error);
      }
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.registration-container {
  width: 1029px;
  height: 488px;
  padding: 50px;
  border-radius: 15px;
  background-color: #b3c6a6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Neucha", serif;
  transform: translateY(-100px);
}

.form-group {
  margin-bottom: 15px;
}

.input-field {
  width: 408px;
  padding: 10px;
  margin: 0 10px;
  border: none;
  border-radius: 25px;
  background-color: white;
  color: #333;
  font-size: 16px;
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.button {
  padding: 10px 20px;
  width: 400px;
  height: 48px;
  border: none;
  border-radius: 15px;
  background-color: #367038;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Neucha";
  font-weight: 500;
  font-size: 16px;
  margin-left: 15px;
  margin-top: 28px;
}

.button:hover {
  background-color: #45a049;
}
</style>
