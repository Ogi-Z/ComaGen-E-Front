<template>
  <div>
    <v-col>
      <v-row
        class="d-flex justify-center mt-6"
        v-for="software in softwarelist"
        :key="software[1]"
      >
        <v-card class="software-card">
          <h3>{{ software[2] }}</h3>
          <p>{{ software[4] }}</p>

          <button class="button">Read More</button>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SoftwareListingPage",
  data() {
    return {
      softwarelist: [
        {
          user_id: 0,
          id: 0,
          name: "Udemy",
        },
        {
          user_id: 0,
          id: 0,
          name: "Araba",
        },
      ],
    };
  },
  mounted() {
    this.getSoftwareList();
  },
  methods: {
    async getSoftwareList() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/softwareUsability"
        );
        this.softwarelist = response.data;

        console.log(this.softwarelist);
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
}

.software-listing-container {
  max-height: 500px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  font-family: "Neucha", serif;
}

.software-card {
  background-color: #426b1f7d;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 250px;
  max-width: 80%;
  min-width: 80%;
}

.software-card h3 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  color: #000000;
}

.software-card p {
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  color: #000000;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background-color: #426b1f;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  position: relative;

  left: 88%;
}

.button:hover {
  background-color: #45a049;
}
</style>
