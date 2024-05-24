<template>
  <div class="page-container">
    <div class="profile-container">
      <div class="profile-card">
        <div class="profile-info">
          <h2>{{ user[1].charAt(0) }}</h2>
          <p>
            <strong>{{ user[1] }} {{ user[2] }}</strong>
          </p>
        </div>
      </div>
      <div class="findings-section">
        <h2>Findings</h2>
        <div v-for="finding in filteredFindings" :key="finding[0]" class="item">
          <div class="item-info items">
            <h2 class="text">{{ finding[2] }}</h2>
            <span class="text">{{ finding[4] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserProfilePage",
  mounted() {
    this.getFindings();
    console.log(this.filteredFindings);
  },

  computed: {
    user() {
      if (this.$store.state.user) {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
        return this.$store.state.user;
      }
    },

    filteredFindings() {
      return this.newFinding.filter(
        (newFinding) => newFinding[1] === this.user[0]
      );
    },
  },

  data() {
    return {
      newFinding: [],
      userByID: "",
    };
  },
  methods: {
    addImage() {
      console.log("Add image to finding");
    },

    saveFinding() {
      console.log("Save finding:", this.newFinding);

      this.newFinding = "";
    },

    async getFindings() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/softwareUsability"
        );
        this.newFinding = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: white;
  height: 100vh;
  overflow-y: auto;
  font-family: "Times New Roman", serif;
}

.profile-container {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.profile-card,
.findings-section {
  background-color: #b3c6a6;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-card {
  flex: 1;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item-info {
  display: flex;
  align-items: start;
  gap: 10px;
  background-color: rgba(255, 255, 255, 1);
}

.profile-info h2 {
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 36px;
}
.item-avatar {
  width: 40px;
  height: 40px;
  background-color: rgba(66, 107, 31, 1);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
}
.profile-info p {
  margin: 5px 0;
}

.findings-section {
  flex: 3;
  display: flex;
  flex-direction: column;
}

h2 {
  font-weight: 700;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.actions {
  display: flex;
  gap: 10px;
}

.button {
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

.button:hover {
  background-color: #45a049;
}

.button.secondary {
  background-color: #e74c3c;
}

.button.secondary:hover {
  background-color: #c0392b;
}
.text {
  color: black;
  font-family: "Neucha", serif;
  margin-left: 3%;
}
</style>
