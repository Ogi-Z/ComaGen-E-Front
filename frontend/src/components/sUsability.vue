<template>
    <div class="usability-container">
      <h2>Example Software</h2>
      <form @submit.prevent="addFinding" class="finding-form">
        <input type="date" v-model="newFinding.date" placeholder="Enter Date" class="input-field">
        <input type="text" v-model="newFinding.tester" placeholder="Tester Name" class="input-field">
        <input type="text" v-model="newFinding.finding" placeholder="Enter Finding" class="input-field">
        <button type="submit" class="button">Add Finding</button>
      </form>
      <div class="findings-list">
        <div v-for="finding in findings" :key="finding.id" class="finding-item">
          <span>{{ finding.date }} - {{ finding.tester }} - {{ finding.method }}</span>
          <p>{{ finding.finding }}</p>
          <button @click="removeFinding(finding.id)" class="button remove-button">Remove</button>
        </div>
      </div>
      <router-link to="/" class="button back-button">Back</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SoftwareUsabilityPage',
    data() {
      return {
        newFinding: {
          date: '',
          tester: '',
          finding: '',
          method: 'Heuristic Evaluation'
        },
        findings: [
          { id: 1, date: '12/12/2024', tester: 'User', finding: 'Example finding example finding example finding.', method: 'Heuristic Evaluation' }
        ]
      }
    },
    methods: {
      addFinding() {
        const newId = this.findings.length + 1;  // Simple ID generation
        const findingToAdd = { ...this.newFinding, id: newId };
        this.findings.push(findingToAdd);
        this.newFinding = { date: '', tester: '', finding: '', method: 'Heuristic Evaluation' }; // Reset form
      },
      removeFinding(id) {
        this.findings = this.findings.filter(finding => finding.id !== id);
      }
    }
  }
  </script>
  
  <style scoped>
  .usability-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
  }
  
  .finding-form {
    margin-bottom: 20px;
  }
  
  .input-field {
    width: calc(33% - 10px);
    margin-right: 5px;
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
  
  .remove-button {
    background-color: #e53935; /* Red color for removal button */
  }
  
  .back-button {
    margin-top: 20px;
    background-color: #999; /* Different color for the back button */
  }
  </style>
  