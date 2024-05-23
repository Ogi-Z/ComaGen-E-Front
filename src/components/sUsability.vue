<template>
  <div class="page-container">
    <div class="usability-container">
      <h2>Example Software</h2>
      <form @submit.prevent="addFinding" class="finding-form">
        <div class="form-group">
          <input
            type="date"
            v-model="newFinding.date"
            placeholder="Enter Date"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="newFinding.tester"
            placeholder="Tester Name"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            v-model="newFinding.finding"
            placeholder="Enter Finding"
            class="input-field"
            required
          />
        </div>
        <div class="form-group">
          <button type="submit" class="button">Add Finding</button>
        </div>
      </form>
      <div class="findings-list">
        <div v-for="finding in findings" :key="finding.id" class="finding-item">
          <div class="finding-info">
            <span><strong>Tester:</strong> {{ finding.tester }}</span>
            <span><strong>Date:</strong> {{ finding.date }}</span>
            <span><strong>Method:</strong> {{ finding.method }}</span>
            <p>{{ finding.finding }}</p>
          </div>
          <div class="finding-actions">
            <button @click="removeFinding(finding.id)" class="button remove-button">Remove</button>
          </div>
        </div>
      </div>
      <router-link to="/" class="button back-button">Back</router-link>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "SoftwareUsabilityPage",
  data() {
    return {
      newFinding: {
        date: "",
        tester: "",
        finding: "",
        method: "Heuristic Evaluation"
      },
      findings: [
        {
          id: 1,
          date: "12/12/2024",
          tester: "User",
          finding: "Example finding example finding example finding.",
          method: "Heuristic Evaluation"
        }
      ]
    };
  },
  methods: {
    addFinding() {
      const newId = this.findings.length + 1; // Simple ID generation
      const findingToAdd = { ...this.newFinding, id: newId };
      this.findings.push(findingToAdd);
      this.newFinding = { date: "", tester: "", finding: "", method: "Heuristic Evaluation" }; // Reset form
    },
    removeFinding(id) {
      this.findings = this.findings.filter(finding => finding.id !== id);
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

.usability-container {
  width: 80%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 15px;
  background-color: #b3c6a6; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', serif; 
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700; 
}

.finding-form, .findings-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
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
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.finding-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.finding-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.finding-actions {
  display: flex;
  gap: 10px;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px; 
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500; 
  font-size: 16px; 
}

.button:hover {
  background-color: #45a049;
}

.remove-button {
  background-color: #e74c3c;
}

.remove-button:hover {
  background-color: #c0392b;
}

.back-button {
  margin-top: 20px;
  background-color: #4CAF50;
}

.back-button:hover {
  background-color: #45a049;
}
</style>

  