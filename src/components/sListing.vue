<template>
  <div class="page-container">
    <div class="software-listing-container">
      <div v-for="software in softwarelist" :key="software.id" class="software-card">
        <h3>{{ software.name }}</h3>
        <p>{{ software.description }}</p>
        <button class="button">Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SoftwareListingPage',
  data() {
    return {
      softwarelist: [
        {
          id: 1,
          name: 'Example Software 1',
          description: 'Description about software. Description about software.'
        },
        {
          id: 2,
          name: 'Example Software 2',
          description: 'Another description about software. More details about what it does and its features.'
        }
      ]
    };
  },
  mounted() {
    this.getSoftwareList();
  },
  methods: {
    async getSoftwareList() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/software');
        this.softwarelist.push(...response.data);
      } catch (error) {
        console.error('Error fetching software list:', error);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

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
  background-color: #b3c6a6;
  font-family: 'Times New Roman', serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-150px);
}

.software-card {
  background-color: #b3c6a6;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.software-card h3 {
  font-weight: 700;
  margin-bottom: 10px;
}

.software-card p {
  margin-bottom: 20px;
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
</style>
