<template>
  <div class="home-container">
    <div class="text">
      <h1>Welcome to Comagen-E</h1>
      <p>
        At Comagen-E, we're dedicated to providing a comprehensive platform for
        software enthusiasts, developers, and users alike. Whether you're
        looking to discover potential defects in software, stay updated with the
        latest industry blogs, or engage with a vibrant community, you've come
        to the right place.
      </p>
      <h2>Discover Defects</h2>
      <p>
        Our platform allows users to share and discover potential defects, bugs,
        and issues in various software applications. With our user-friendly
        interface and powerful search functionality, you can easily find
        insights and solutions to common software problems. Whether you're a
        developer seeking to improve your code or a user troubleshooting an
        issue, our defect database has you covered.
      </p>
      <h2>Explore Engaging Blogs</h2>
      <p>
        Stay informed and entertained with our curated selection of blogs
        covering a wide range of software-related topics. From industry trends
        and best practices to in-depth technical analyses and tutorials, our
        blog section caters to both beginners and seasoned professionals. Dive
        into captivating content written by experts in the field and expand your
        knowledge at your own pace.
      </p>
      <h2>Start Exploring Today</h2>
      <p>
        Ready to embark on your software journey? Dive into our platform and
        discover a wealth of resources waiting for you. Whether you're here to
        find defects, read insightful blogs, or engage with our community, we're
        here to empower you every step of the way.
      </p>
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
.text {
  width: 50%;
}

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
  color: #3a5f3c;
  font-family: "Neucha", serif;
  margin-bottom: 20px;
}

h2 {
  color: #3a5f3c;
  font-family: "Neucha", serif;
  margin-top: 20px;
}

p {
  color: #666;
  font-family: "Neucha", serif;
  font-size: 20px;
  line-height: 1.6;
}
</style>
