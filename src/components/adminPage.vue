<template>
  <div class="page-container">
    <div class="admin-container">
      <section class="admin-section" id="registrations">
        <h2>Registration</h2>
        <div class="items" v-if="users.length > 0">
          <div v-for="user in filteredUsers" :key="user[0]" class="item">
            <div class="item-info">
              <div class="item-avatar">{{ user[1].charAt(0) }}</div>
              <span class="text">{{ user[1] }} {{ user[2] }}</span>
            </div>
            <div class="item-actions">
              <button @click="approveUser(user[0])" class="approve-btn">
                ✔
              </button>
              <button @click="rejectUser(user[0])" class="reject-btn">✘</button>
            </div>
          </div>
        </div>
      </section>

      <section class="admin-section" id="findings">
        <h2>Findings</h2>
        <div class="items">
          <div v-for="finding in findings" :key="finding[0]" class="item">
            <div class="item-info">
              <div class="item-avatar">{{ finding[2].charAt(0) }}</div>
              <span clasS="text">{{ finding[2] }}</span>
            </div>
            <div class="item-actions">
              <button @click="approveFinding(finding[0])" class="approve-btn">
                ✔
              </button>
              <button @click="rejectFinding(finding[0])" class="reject-btn">
                ✘
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="admin-section" id="accounts">
        <h2>Accounts</h2>
        <div class="items">
          <div v-for="user in users" :key="user[0]" class="item">
            <div class="item-info">
              <div class="item-avatar">{{ user[1].charAt(0) }}</div>
              <span class="text">{{ user[1] }} {{ user[2] }}</span>
            </div>
            <div class="item-actions">
              <button class="manage-btn">Manage</button>
            </div>
          </div>
        </div>
      </section>

      <section class="admin-section" id="blogs">
        <h2>Blogs</h2>
        <div class="items">
          <div v-for="blog in blogs" :key="blog[0]" class="item">
            <div class="item-info">
              <div class="item-avatar">{{ blog[2].charAt(0) }}</div>
              <span class="text">{{ blog[2] }}</span>
            </div>
            <div class="item-actions">
              <button @click="approveBlog(blog[0])" class="approve-btn">
                ✔
              </button>
              <button @click="rejectBlog(blog[0])" class="reject-btn">✘</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="action-buttons">
      <router-link to="/addNewSoftware" class="action-button"
        >Add New Software</router-link
      >
      <router-link to="/addNewBlog" class="action-button"
        >Add New Blog</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPage",
  mounted() {
    this.getBlogs();
    this.getRegs();
    this.getFindings();
  },

  computed: {
    filteredUsers() {
      return this.users.filter((user) => user[6] === 1 && user[8] === false);
    },
  },

  data() {
    return {
      topic: "",
      text: "",
      dialog: false,
      users: [],
      findings: [],
      accounts: [],
      blogs: [], // Yeni blog verileri için ekleme
    };
  },

  methods: {
    async getBlogs() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/unapprovedblogs"
        );
        this.blogs = response.data;
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },

    async getRegs() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/users");
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },

    async getFindings() {
      const response = await axios.get(
        "http://127.0.0.1:5000/unapprovedsoftwareusability"
      );

      this.findings = response.data;
    },

    async approveFinding(id) {
      try {
        await axios.post("http://127.0.0.1:5000/approvesoftwareusability", {
          softwareusability_id: id,
        });
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },

    async approveBlog(id) {
      try {
        await axios.post("http://127.0.0.1:5000/approveblog", {
          blog_id: id,
        });
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Newsreader:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");

* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
  font-family: "Neucha", serif;
}

.text {
  color: black;
  font-family: "Neucha", serif;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.admin-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: start;
  padding: 20px;
  font-family: "Neucha", serif;
}

.admin-section {
  width: 300px;
  background-color: rgba(66, 107, 31, 0.49);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.admin-section h2 {
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "Neucha", serif;
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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(243, 242, 242, 0.1);
}

.item-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.router-link {
  text-decoration: none;
}

.item-avatar {
  width: 40px;
  height: 40px;
  background-color: rgba(66, 107, 31, 1);
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
  background-color: rgba(66, 107, 31, 1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.approve-btn:hover,
.manage-btn:hover {
  background-color: rgba(69, 160, 73, 1);
}

.reject-btn {
  background-color: rgba(231, 76, 60, 1);
}

.reject-btn:hover {
  background-color: rgba(192, 57, 43, 1);
}

.action-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
}

.action-button {
  text-decoration: none;
  padding: 10px 20px;
  background-color: rgba(66, 107, 31, 1);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: rgba(69, 160, 73, 1);
}
</style>
