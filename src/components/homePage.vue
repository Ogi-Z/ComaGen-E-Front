<template>
  <div class="home-container">
    <h1>Information About Platform</h1>
    <p>
      This is the home page for the TermProject. Here you can find information
      about the platform and its features.
    </p>
    <p></p>
    <div v-if="user">
      <p>User ID: {{ user.id }}</p>
      <p>User Name: {{ user.name }}</p>
      <!-- Display other user properties as needed -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  name: "HomePage",
  data() {
    return {};
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  
}

h1 {
  color: #333;
  font-family: 'Neucha', serif;
  margin-bottom: 20px;
}

p {
  color: #666;
  font-family: 'Neucha', serif;
  font-size: 20px;
  line-height: 1.6;
}
</style>
