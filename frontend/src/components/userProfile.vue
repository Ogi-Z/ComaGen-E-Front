<template>
    <div class="profile-container">
      <div class="profile-card">
        <div class="profile-info">
          <h2>{{ user.initials }}</h2>
          <p><strong>Software User</strong></p>
          <p>Attend Date: {{ user.attendDate }}</p>
          <p>Total Findings: {{ user.totalFindings }}</p>
        </div>
      </div>
      <div class="findings-section">
        <h2>Findings</h2>
        <textarea v-model="newFinding" placeholder="Enter new finding..."></textarea>
        <div class="actions">
          <button @click="addImage" class="button">Add Image</button>
          <button @click="saveFinding" class="button">Save</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfilePage',
    data() {
      return {
        user: {
          initials: 'A',
          attendDate: '12/02/2024',
          totalFindings: 12345
        },
        newFinding: ''
      }
    },
    methods: {
      addImage() {
        console.log('Add image to finding');
        // Trigger file upload or image addition logic
      },
      saveFinding() {
        console.log('Save finding:', this.newFinding);
        // Add logic to save the finding
        this.newFinding = ''; // Reset after save
      }
    }
  }
  </script>
  
  <style scoped>
  .profile-container {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #f4f4f4;
  }
  
  .profile-card {
    width: 30%;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    text-align: center;
  }
  
  .profile-info h2 {
    background-color: green;
    color: white;
    padding: 20px;
    border-radius: 50%;
    font-size: 48px;
    margin: auto;
  }
  
  .findings-section {
    width: 65%;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }
  
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
  }
  
  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
  }
  </style>
  