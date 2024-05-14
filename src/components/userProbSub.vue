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
      <button type="button" @click="triggerFileInput" class="button">Add Image</button>
      <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" accept="image/*">
      <div class="form-actions">
        <button type="button" @click="cancel" class="button secondary">Cancel</button>
        <button type="submit" class="button">Add Finding</button>
      </div>
    </form>
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
        image: null,  // Store the selected image
      },
    };
  },
  methods: {
    submitProblem() {
      console.log("Problem submitted:", this.problem);
      // Handle the submission, e.g., send it to a backend
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); // Trigger the file input click
    },
    handleFileChange(event) {
      const file = event.target.files[0]; // Get the selected file
      if (file && file.type.startsWith('image')) {
        this.problem.image = file;
        console.log("Image added:", file.name);
        // Optionally, you can also read the file to display a preview or directly upload it
      } else {
        alert("Please select an image file.");
      }
    },
    cancel() {
      this.$router.go(-1); // Go back to previous page
    },
  },
};
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
  background-color: #4caf50;
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
