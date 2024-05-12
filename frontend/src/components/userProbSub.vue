<template>
    <div class="problem-submission-container">
      <h2>Adding Usability Problem</h2>
      <form @submit.prevent="submitProblem">
        <div class="form-group">
          <label for="software">Software:</label>
          <select id="software" v-model="problem.software" class="input-field">
            <option disabled value="">Choose a software</option>
            <option>Udemy</option>
            <option>Coursera</option>
          </select>
        </div>
        <div class="form-group">
          <label for="method">Evaluation Method:</label>
          <select id="method" v-model="problem.method" class="input-field">
            <option>User Testing</option>
            <option>Heuristic Evaluation</option>
          </select>
        </div>
        <div class="form-group">
          <label for="criteria">Usability Criteria:</label>
          <select id="criteria" v-model="problem.criteria" class="input-field">
            <option>Effectiveness</option>
            <option>Efficiency</option>
            <option>Satisfaction</option>
          </select>
        </div>
        <div class="form-group">
          <label for="details">Problem Details:</label>
          <textarea id="details" v-model="problem.details" class="input-field" rows="4"></textarea>
        </div>
        <button type="button" @click="addImage" class="button">Add Image</button>
        <div class="form-actions">
          <button type="button" @click="cancel" class="button secondary">Cancel</button>
          <button type="submit" class="button">Add Finding</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProblemSubmissionPage',
    data() {
      return {
        problem: {
          software: '',
          method: '',
          criteria: '',
          details: ''
        }
      }
    },
    methods: {
      submitProblem() {
        console.log('Problem submitted:', this.problem);
        // Here, you would typically handle the submission e.g., send it to a backend
      },
      addImage() {
        console.log('Add image clicked');
        // Trigger file upload or image addition logic
      },
      cancel() {
        this.$router.go(-1); // Go back to previous page
      }
    }
  }
  </script>
  
  <style scoped>
  .problem-submission-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .input-field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
  }
  
  .button.secondary {
    background-color: #ccc;
    color: black;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
  }
  </style>
  