<template>
  <div class="software-listing-container">
    <v-col class="">
      <v-row class="">
        <v-card
          v-for="software in softwareList"
          :key="software.id"
          class="software-card ml-10"
          @click="goTo(software.name)"
        >
          <h3>{{ software.name }}</h3>
          <p>{{ software.description }}</p>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "SoftwareListingPage",
  methods: {
    goTo(label) {
      router.push("/software-listing/" + label.replace(" ", "_").toLowerCase());
    },
  },
  data() {
    return {
      softwareList: [
        {
          id: 1,
          name: "Example Software",
          description:
            "Description about software. Description about software. Description about software.",
        },
        {
          id: 2,
          name: "Another Software",
          description:
            "Another description about software. More details about what it does and its features.",
        },
        {
          id: 3,
          name: "Another Software2",
          description:
            "Another description about software. More details about what it does and its features.",
        },
        {
          id: 4,
          name: "Another Software3",
          description:
            "Another description about software. More details about what it does and its features.",
        },
        // Add more software entries as needed
      ],
    };
  },
};
</script>

<style scoped>
.software-listing-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.software-card {
  width: 45%; /* Adjust based on desired layout */
  background-color: #f4f4f4;
  margin: 10px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.software-card h3 {
  color: #333;
}

.software-card p {
  color: #666;
  font-size: 14px;
}

.read-more-button {
  display: inline-block;
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}
</style>
