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
        <h2>
          Findings
          <v-form>
            <v-text-field
              class="searchbar"
              label="Search"
              variant="underlined"
              v-model="searched"
            ></v-text-field>
          </v-form>
        </h2>
        <div v-for="finding in filteredFindings" :key="finding[0]" class="item">
          <v-card
            v-if="finding[2] == searched || searched == ''"
            class="software-card"
          >
            <h3>
              {{ finding[2] }}
              <v-icon
                color="red"
                size="x-small"
                class="ml-5"
                icon="mdi-trash-can"
                @click="deleteFinding(finding[0])"
              ></v-icon>
            </h3>
            <p class="percent">
              <v-progress-circular
                v-if="getPercentage(finding[6], finding[7]) > 75"
                :modelValue="getPercentage(finding[6], finding[7])"
                color="#426B1F"
                :size="60"
                :width="10"
                >{{
                  getPercentage(finding[6], finding[7])
                }}</v-progress-circular
              >
              <v-progress-circular
                v-if="
                  getPercentage(finding[6], finding[7]) <= 75 &&
                  getPercentage(finding[6], finding[7]) >= 50
                "
                :modelValue="getPercentage(finding[6], finding[7])"
                color="#FFBD00"
                :size="60"
                :width="10"
                >{{
                  getPercentage(finding[6], finding[7])
                }}</v-progress-circular
              >
              <v-progress-circular
                v-if="getPercentage(finding[6], finding[7]) < 50"
                :modelValue="getPercentage(finding[6], finding[7])"
                color="#FF2A00"
                :size="60"
                :width="10"
                >{{
                  getPercentage(finding[6], finding[7])
                }}</v-progress-circular
              >
            </p>
            <h2>{{ finding[3] }}</h2>
            <p>{{ finding[4] }}</p>

            <v-row>
              <v-col>
                <v-btn class="button">Read More</v-btn>
              </v-col>

              <v-col>
                <v-icon
                  @click="like(finding[0])"
                  class="like"
                  color="green"
                  icon="mdi-thumb-up"
                ></v-icon>
                <p class="like">{{ finding[6] }}</p>
              </v-col>
              <v-col cols="3" class=""
                ><v-icon
                  @click="dislike(finding[0])"
                  class="dislike"
                  color="red"
                  icon="mdi-thumb-down"
                ></v-icon>
                <p class="dislike">{{ finding[7] }}</p>
              </v-col>
            </v-row>
          </v-card>
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
    this.getPercentage();
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
      searched: "",
    };
  },
  methods: {
    async deleteFinding(id) {
      try {
        await axios.delete(
          "http://127.0.0.1:5000/delete_softwareUsability/" + id
        );
        alert("Succsessfully Deleted");
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },

    getPercentage(like, dislike) {
      if (like + dislike === 0) {
        return "a";
      }
      const percentage = ((like / (like + dislike)) * 100).toFixed(0);
      return percentage;
    },

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
  height: 250px;
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
}
.item-info {
  display: flex;
  align-items: start;
  gap: 10px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  border-radius: 15px;
  padding: 25px;
}

.profile-info h2 {
  font-family: "Neucha";
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
  font-family: "Neucha";
  font-size: 22px;
  margin: 5px 0;
}

.findings-section {
  flex: 3;
  display: flex;
  flex-direction: column;
}

h2 {
  font-family: "Neucha";
  font-size: 30;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  color: #213d09;
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
  font-family: "Neucha";
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #426b1f;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  left: 3%;
}

.like {
  position: absolute;
  left: 83%;
  margin-top: 8px;
}

.dislike {
  position: absolute;
  left: 90%;
  margin-top: 8px;
}

.percent {
  position: absolute;
  right: 3%;
  top: 10%;
}

.software-card {
  background-color: #426b1f7d;
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.software-card h3 {
  font-family: "Neucha";
  font-size: 40px;
  margin-left: 25px;
  margin-right: 25px;
  color: #213d09;
}

.software-card p {
  font-family: "Neucha";
  font-size: 24px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  color: #000000;
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
