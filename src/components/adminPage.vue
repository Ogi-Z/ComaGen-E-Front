<template>
  <div class="page-container">
    <div class="admin-container">
      <section class="admin-section" id="registrations">
        <h2>Registration</h2>
        <div class="items">
          <div v-for="user in users" :key="user.id" class="item">
            <div class="item-info">
              <div class="item-avatar">{{ user.name.charAt(0) }}</div>
              <span>{{ user.name }}</span>
            </div>
            <div class="item-actions">
              <button @click="approveUser(user.id)" class="approve-btn">
                ✔
              </button>
              <button @click="rejectUser(user.id)" class="reject-btn">✖</button>
            </div>
          </div>
        </div>
      </section>

      <section class="admin-section" id="findings">
        <h2>Findings</h2>
        <div class="items">
          <div v-for="finding in findings" :key="finding.id" class="item">
            <div class="item-info">
              <div class="item-avatar">{{ finding.course.charAt(0) }}</div>
              <span>{{ finding.course }}</span>
            </div>
            <div class="item-actions">
              <button @click="approveFinding(finding.id)" class="approve-btn">
                ✔
              </button>
              <button @click="rejectFinding(finding.id)" class="reject-btn">
                ✖
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="admin-section" id="accounts">
        <h2>Accounts</h2>
        <div class="items">
          <div v-for="account in accounts" :key="account.id" class="item">
            <div class="item-info">
              <div class="item-avatar">{{ account.username.charAt(0) }}</div>
              <span>{{ account.username }}</span>
            </div>
            <div class="item-actions">
              <button class="manage-btn">Manage</button>
            </div>
          </div>
        </div>
      </section>

      <div class="action-buttons">
        <button @click="addNewSoftware" class="action-button">
          Add New Software
        </button>
        <button class="action-button" @click="dialog = true">
          Add New Blog
        </button>

        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-card-text
              ><div class="form-group">
                <v-text-field
                  v-model="topic"
                  placeholder="Topic"
                  class="input-field"
                  required
                />
              </div>
              <div class="form-group">
                <v-textarea v-model="text" label="Label"></v-textarea>
              </div>
            </v-card-text>
            <template v-slot:actions>
              <v-btn @click="dialog = false"> Cancel</v-btn>
              <v-btn @click="addNewBlog()"> Submit</v-btn>
            </template>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPage",
  data() {
    return {
      topic: "",
      text: "",
      dialog: false,
      users: [],
      findings: [],
      accounts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [usersResponse, findingsResponse, accountsResponse] =
          await Promise.all([
            axios.get("http://127.0.0.1:5000/users"),
            axios.get("http://127.0.0.1:5000/findings"),
            axios.get("http://127.0.0.1:5000/accounts"),
          ]);
        this.users = usersResponse.data;
        this.findings = findingsResponse.data;
        this.accounts = accountsResponse.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async approveUser(id) {
      try {
        await axios.post(`http://127.0.0.1:5000/users/${id}/approve`);
        this.fetchData();
      } catch (error) {
        console.error("Error approving user:", error);
      }
    },
    async rejectUser(id) {
      try {
        await axios.post(`http://127.0.0.1:5000/users/${id}/reject`);
        this.fetchData();
      } catch (error) {
        console.error("Error rejecting user:", error);
      }
    },
    async addNewBlog() {
      try {
        await axios.post("http://127.0.0.1:5000/add_blog", {
          user_id: 0,
          blog_id: 0,
          blog_category: this.topic,
          blog_text: this.text,
        });
      } catch (error) {
        console.error("Error adding a new blog", error);
      }

      this.dialog = false;
    },

    async addNewSoftware() {
      try {
        await axios.post("http://127.0.0.1:5000/software/add");
        this.fetchData();
      } catch (error) {
        console.error("Error adding new software:", error);
      }
    },
    async approveFinding(id) {
      try {
        await axios.post(`http://127.0.0.1:5000/findings/${id}/approve`);
        this.fetchData();
      } catch (error) {
        console.error("Error approving finding:", error);
      }
    },
    async rejectFinding(id) {
      try {
        await axios.post(`http://127.0.0.1:5000/findings/${id}/reject`);
        this.fetchData();
      } catch (error) {
        console.error("Error rejecting finding:", error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white; /* Arka plan rengi beyaz */
}

.admin-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  font-family: "Times New Roman", serif;
  transform: translateY(-150px);
}

.admin-section {
  width: 300px;
  background-color: #b3c6a6;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.admin-section h2 {
  text-align: center;
  color: #333;
  font-weight: 700;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.item-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-avatar {
  width: 40px;
  height: 40px;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
}

.item-actions {
  display: flex;
  gap: 10px;
}

.approve-btn,
.reject-btn,
.manage-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.approve-btn:hover,
.manage-btn:hover {
  background-color: #45a049;
}

.reject-btn {
  background-color: #e74c3c;
}

.reject-btn:hover {
  background-color: #c0392b;
}

.action-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
}

.action-button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #45a049;
}
</style>
