<template>
  <div class="admin-container">
    <section class="admin-section" id="registrations">
      <h2>Registration</h2>
      <div class="items">
        <div v-for="user in users" :key="user.id" class="item">
          <span>{{ user.name }}</span>
          <button @click="approveUser(user.id)">✔</button>
          <button @click="rejectUser(user.id)">✘</button>
        </div>
      </div>
      <div class="button-group"> <!-- Wrapper for buttons -->
        <button @click="addNewSoftware" class="action-button">Add New Software</button>
        <button @click="addNewBlog" class="action-button">Add New Blog</button>
      </div>
    </section>
    
    <section class="admin-section" id="findings">
      <h2>Findings</h2>
      <div class="items">
        <div v-for="finding in findings" :key="finding.id" class="item">
          <span>{{ finding.course }}</span>
          <button @click="approveFinding(finding.id)">✔</button>
          <button @click="rejectFinding(finding.id)">✘</button>
        </div>
      </div>
    </section>
    
    <section class="admin-section" id="accounts">
      <h2>Accounts</h2>
      <div class="items">
        <div v-for="account in accounts" :key="account.id" class="item">
          <span>{{ account.username }}</span>
          <button>Manage</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      users: [
        { id: 1, name: 'Software User P' },
        { id: 2, name: 'Software User C' },
        { id: 3, name: 'Software User K' }
      ],
      findings: [
        { id: 1, course: 'Udemy' },
        { id: 2, course: 'Coursera' }
      ],
      accounts: [
        { id: 1, username: 'User Name' }
      ]
    };
  },
  methods: {
    approveUser(id) {
      console.log('Approving user with id:', id);
    },
    rejectUser(id) {
      console.log('Rejecting user with id:', id);
    },
    addNewSoftware() {
      console.log('Adding new software');
    },
    addNewBlog() {
      console.log('Adding new blog');
    },
    approveFinding(id) {
      console.log('Approving finding with id:', id);
    },
    rejectFinding(id) {
      console.log('Rejecting finding with id:', id);
    }
  }
}
</script>

<style scoped>
.admin-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #f4f4f4;
}

.admin-section {
  width: 30%;
  background-color: #f9f9f9;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.admin-section h2 {
  color: #4CAF50;
}

.items .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid black;
}
.items .item span {
color: black; 
}

.button-group {
  display: flex; /* Makes buttons sit side-by-side */
  justify-content: space-around; /* Distributes space around buttons */
}

.action-button {
  flex-grow: 1; /* Allows buttons to grow and fill the space */
  margin: 5px; /* Adds space between buttons */
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}
</style>
