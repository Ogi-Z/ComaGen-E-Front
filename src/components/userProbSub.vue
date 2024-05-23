<template>
  <div class="page-container">
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
          <textarea
            id="details"
            v-model="problem.details"
            class="input-field"
            rows="4"
          ></textarea>
        </div>
        <div class="form-group">
          <button type="button" @click="triggerFileInput" class="button">
            Add Image
          </button>
          <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            style="display: none"
          />
        </div>
        <div class="form-actions">
          <button type="button" @click="cancel" class="button secondary">
            Cancel
          </button>
          <button type="submit" class="button">Add Finding</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "UserProblemSubmissionPage",
  data() {
    return {
      problem: {
        software: "",
        method: "",
        criteria: "",
        details: "",
        image: null,
      },
    };
  },
  methods: {
    submitProblem() {
      console.log("Problem submitted:", this.problem);
      this.$router.push({ name: 'homePage' });
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image")) {
        this.problem.image = file;
        console.log("Image added:", file.name);
      } else {
        alert("Please select an image file.");
      }
    },
    cancel() {
      this.$router.go(-1);
    },
  },
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

.problem-submission-container {
  width: 600px;
  padding: 20px;
  border-radius: 15px;
  background-color: #b3c6a6; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', serif;
  transform: translateY(-60px); 
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700; 
}

.form-group {
  margin-bottom: 15px;
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

textarea.input-field {
  height: auto;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.button.secondary {
  background-color: #e74c3c;
}

.button.secondary:hover {
  background-color: #c0392b;
}
</style>

