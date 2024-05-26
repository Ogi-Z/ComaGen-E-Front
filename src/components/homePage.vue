<template>
  <div class="home-container">
    <div class="text">
      <h1>Welcome to Comagen-E</h1>

      <p>
        Veniam enim elit ipsum fugiat sit occaecat. Ut voluptate ut elit quis
        sint et sint. Aliqua dolore enim pariatur consequat in mollit ex do.
        Commodo exercitation laboris dolore sunt cillum eiusmod officia anim
        sunt sint veniam occaecat. Adipisicing tempor eiusmod reprehenderit
        exercitation. Reprehenderit consectetur qui ad id duis cillum aliquip
        incididunt esse aliquip. Nulla enim qui laborum irure et mollit occaecat
        velit exercitation eu consequat et est. Dolore reprehenderit mollit
        incididunt Lorem consectetur magna sit mollit irure reprehenderit
        commodo occaecat cillum ex. Occaecat quis labore anim culpa nulla. Ad
        laborum deserunt deserunt consectetur ad ut nostrud qui dolore eiusmod.
        Cupidatat minim quis irure sit magna ex nostrud nisi veniam ex eu.
        Fugiat elit ex ullamco ipsum nostrud laboris officia commodo in labore
        cillum esse.
      </p>
      <h2>Discover Defects</h2>
      <p>
        Veniam enim elit ipsum fugiat sit occaecat. Ut voluptate ut elit quis
        sint et sint. Aliqua dolore enim pariatur consequat in mollit ex do.
        Commodo exercitation laboris dolore sunt cillum eiusmod officia anim
        sunt sint veniam occaecat. Adipisicing tempor eiusmod reprehenderit
        exercitation. Reprehenderit consectetur qui ad id duis cillum aliquip
        incididunt esse aliquip. Nulla enim qui laborum irure et mollit occaecat
        velit exercitation eu consequat et est. Dolore reprehenderit mollit
        incididunt Lorem consectetur magna sit mollit irure reprehenderit
        commodo occaecat cillum ex. Occaecat quis labore anim culpa nulla. Ad
        laborum deserunt deserunt consectetur ad ut nostrud qui dolore eiusmod.
        Cupidatat minim quis irure sit magna ex nostrud nisi veniam ex eu.
        Fugiat elit ex ullamco ipsum nostrud laboris officia commodo in labore
        cillum esse.
      </p>
      <h2>Explore Engaging Blogs</h2>
      <p>
        Veniam enim elit ipsum fugiat sit occaecat. Ut voluptate ut elit quis
        sint et sint. Aliqua dolore enim pariatur consequat in mollit ex do.
        Commodo exercitation laboris dolore sunt cillum eiusmod officia anim
        sunt sint veniam occaecat. Adipisicing tempor eiusmod reprehenderit
        exercitation. Reprehenderit consectetur qui ad id duis cillum aliquip
        incididunt esse aliquip. Nulla enim qui laborum irure et mollit occaecat
        velit exercitation eu consequat et est. Dolore reprehenderit mollit
        incididunt Lorem consectetur magna sit mollit irure reprehenderit
        commodo occaecat cillum ex. Occaecat quis labore anim culpa nulla. Ad
        laborum deserunt deserunt consectetur ad ut nostrud qui dolore eiusmod.
        Cupidatat minim quis irure sit magna ex nostrud nisi veniam ex eu.
        Fugiat elit ex ullamco ipsum nostrud laboris officia commodo in labore
        cillum esse.
      </p>
      <h2>Start Exploring Today</h2>
      <p>
        Veniam enim elit ipsum fugiat sit occaecat. Ut voluptate ut elit quis
        sint et sint. Aliqua dolore enim pariatur consequat in mollit ex do.
        Commodo exercitation laboris dolore sunt cillum eiusmod officia anim
        sunt sint veniam occaecat. Adipisicing tempor eiusmod reprehenderit
        exercitation. Reprehenderit consectetur qui ad id duis cillum aliquip
        incididunt esse aliquip. Nulla enim qui laborum irure et mollit occaecat
        velit exercitation eu consequat et est. Dolore reprehenderit mollit
        incididunt Lorem consectetur magna sit mollit irure reprehenderit
        commodo occaecat cillum ex. Occaecat quis labore anim culpa nulla. Ad
        laborum deserunt deserunt consectetur ad ut nostrud qui dolore eiusmod.
        Cupidatat minim quis irure sit magna ex nostrud nisi veniam ex eu.
        Fugiat elit ex ullamco ipsum nostrud laboris officia commodo in labore
        cillum esse.
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
  margin-top: 60px;
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
