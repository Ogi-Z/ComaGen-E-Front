<template>
  <div class="page-container">
    <div class="software-listing-container">
      <div
        v-for="software in softwarelist"
        :key="software[1]"
        class="software-card"
      >
        <h3>{{ software.name }}</h3>

        <button class="button">Read More</button>
      </div>
    </div>
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
  height: 100vh;
  background-color: white;
}

.software-listing-container {
  width: 80%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 15px;
  background-color: #fcfcfc;
  font-family: "Neucha", serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-150px);
}

.software-card {
  background-color: #426b1f7d;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 200px;
}

.software-card h3 {
  font-weight: 700;
  margin-bottom: 10px;
  color: #000000;
}

.software-card p {
  margin-bottom: 20px;
  color: #ffffff;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background-color: #426b1f;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  top: 50%;
  left: 88%;
}

.button:hover {
  background-color: #45a049;
}
</style>
