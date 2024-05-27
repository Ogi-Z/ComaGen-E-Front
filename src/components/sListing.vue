<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-form>
            <v-text-field
              class="searchbar"
              label="Search"
              variant="underlined"
              v-model="searched"
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>
      <v-col>
        <v-row
          class="d-flex justify-center"
          v-for="software in softwarelist"
          :key="software[1]"
        >
          <v-card
            v-if="software[2] == searched || searched == ''"
            class="software-card"
          >
            <h3>{{ software[2] }}</h3>
            <p class="percent">
              <v-progress-circular
                v-if="getPercentage(software[6], software[7]) > 75"
                :modelValue="getPercentage(software[6], software[7])"
                color="#426B1F"
                :size="60"
                :width="10"
                >{{
                  getPercentage(software[6], software[7])
                }}</v-progress-circular
              >
              <v-progress-circular
                v-if="
                  getPercentage(software[6], software[7]) <= 75 &&
                  getPercentage(software[6], software[7]) >= 50
                "
                :modelValue="getPercentage(software[6], software[7])"
                color="#FFBD00"
                :size="60"
                :width="10"
                >{{
                  getPercentage(software[6], software[7])
                }}</v-progress-circular
              >
              <v-progress-circular
                v-if="getPercentage(software[6], software[7]) < 50"
                :modelValue="getPercentage(software[6], software[7])"
                color="#FF2A00"
                :size="60"
                :width="10"
                >{{
                  getPercentage(software[6], software[7])
                }}</v-progress-circular
              >
            </p>
            <h2>{{ software[3] }}</h2>
            <p>{{ software[4] }}</p>

            <v-row>
              <v-col>
                <v-btn
                  class="button"
                  @click="
                    (dialog = true),
                      getComments(software[0]),
                      (this.title = software[2]),
                      (this.subtitle = software[3]),
                      (this.text = software[4])
                  "
                >
                  Read More
                </v-btn>

                <v-dialog v-model="dialog" width="auto">
                  <v-card class="software-card2" width="1000">
                    <h3>{{ this.title }}</h3>
                    <h2>{{ this.subtitle }}</h2>
                    <p>{{ this.text }}</p>
                    <h2>Comments:</h2>
                    <v-card class="item2" v-for="com in comments" :key="com[0]">
                      <p clas="comment">
                        {{ com[3] }}
                      </p>
                    </v-card>
                  </v-card>
                </v-dialog>
              </v-col>

              <v-col>
                <v-icon
                  @click="like(software[0])"
                  class="like"
                  color="green"
                  icon="mdi-thumb-up"
                ></v-icon>
                <p class="like">{{ software[6] }}</p>
              </v-col>
              <v-col cols="3" class=""
                ><v-icon
                  @click="dislike(software[0])"
                  class="dislike"
                  color="red"
                  icon="mdi-thumb-down"
                ></v-icon>
                <p class="dislike">{{ software[7] }}</p>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SoftwareListingPage",

  data() {
    return {
      title: "",
      subtitle: "",
      text: "",
      comments: [],
      percentage: 0,
      searched: "",
      dialog: false,
      softwarelist: [
        {
          user_id: 0,
          id: 0,
          name: "Udemy",
        },
        {
          user_id: 0,
          id: 0,
          name: "Araba",
        },
      ],
    };
  },
  mounted() {
    this.getSoftwareList();
    this.getPercentage();
  },
  methods: {
    async getComments(softid) {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/softwareUsabilityComments/` + softid
        );
        this.comments = response.data;
        console.log(this.comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
        this.comments = "";
      }
    },

    async dislike(id) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/dislike_softwareusability",
          {
            softwareusability_id: id,
          }
        );
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },

    async like(id) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/like_softwareusability",
          {
            softwareusability_id: id,
          }
        );
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },

    async getSoftwareList() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/softwareUsability"
        );
        this.softwarelist = response.data;

        console.log(this.softwarelist);
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },

    getPercentage(like, dislike) {
      if (like + dislike === 0) {
        return "a";
      }
      const percentage = ((like / (like + dislike)) * 100).toFixed(0);
      return percentage;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");

.software-listing-container {
  max-height: 500px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  font-family: "Neucha", serif;
}

.software-card {
  background-color: #426b1f7d;
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  min-width: 80%;
}

.software-card h3 {
  font-family: "Neucha";
  font-size: 40px;
  margin-left: 25px;
  margin-right: 25px;
  color: #213d09;
}

.software-card h2 {
  font-family: "Neucha";
  font-size: 30;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  color: #213d09;
}

.software-card p {
  font-family: "Neucha";
  font-size: 24px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  color: #000000;
}

.searchbar {
  margin-top: 10px;
  border-radius: 25px;
}

.v-text-field {
  width: 100%;
}

.button {
  font-family: "Neucha";
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #426b1f;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  left: 3%;
}

.item2 {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 10px;
  box-shadow: 0 0 5px rgba(243, 242, 242, 0.1);
  margin-bottom: 8px;
}

.software-card2 h3 {
  font-family: "Neucha";
  font-size: 40px;
  margin-left: 25px;
  margin-right: 25px;
  color: #213d09;
}
.software-card2 p {
  font-family: "Neucha";
  font-size: 24px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  color: #000000;
}

.software-card2 {
  background-color: #436b1f;
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.button2 {
  font-family: "Neucha";
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #609e29;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  left: 3%;
}

.software-card h2 {
  font-family: "Neucha";
  font-size: 30;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  color: #213d09;
}

.software-card2 h2 {
  font-family: "Neucha";
  font-size: 30;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-right: 25px;
  color: #c3daaf;
}

.like {
  position: absolute;
  left: 83%;
  margin-top: 8px;
}

.dislike {
  position: absolute;
  left: 90%;
  margin-top: 8px;
}

.button:hover {
  background-color: #45a049;
}

.percent {
  position: absolute;
  right: 3%;
  top: 10%;
}

.ratings {
  background-color: #426b1f;
}
</style>
