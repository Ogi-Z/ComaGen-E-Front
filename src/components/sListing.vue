<template>
    <div class="software-listing-container">
      <div v-for="software in softwareList" :key="software.id" class="software-card">
        <h3>{{ software.name }}</h3>
        <p>{{ software.description }}</p>
        <router-link :to="{ name: 'SoftwareDetails', params: { softwareId: software.id } }" class="read-more-button">Read More</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SoftwareListingPage',
    data() {
      return {
        softwareList: [
          { id: 1, name: 'Example Software', description: 'Description about software. Description about software. Description about software.' },
          { id: 2, name: 'Another Software', description: 'Another description about software. More details about what it does and its features.' }
          // Add more software entries as needed
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .software-listing-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  
  .software-card {
    width: 45%; /* Adjust based on desired layout */
    background-color: #f4f4f4;
    margin: 10px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .software-card h3 {
    color: #333;
  }
  
  .software-card p {
    color: #666;
    font-size: 14px;
  }
  
  .read-more-button {
    display: inline-block;
    margin-top: 10px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  </style>
  