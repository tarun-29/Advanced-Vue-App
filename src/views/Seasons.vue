<template>
  <div class="about">
    <h1>IPL {{year}}</h1>
    <div class="flex">
      <div>
        <season-awards :awards="this.seasonDetail.awards" />
      </div>
      <div>
        <season-result :result="this.seasonDetail.season_result" />
      </div>
      <div>
        <season-details :details="this.seasonDetail.match_details" />
      </div>
    </div>
    <h1>Select Year to View Details</h1>
    <div class="scroll">
      <div @click="say(data.year)" v-for="data in info" :key="data.year">
        <year-card
          :year="data.year"
          :match-played="data.matchPlayed"
          :background-color="data.backgroundColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import YearCard from "@/components/YearCard.vue";
import SeasonAwards from "@/components/SeasonAwards.vue";
import SeasonDetails from "@/components/SeasonDetails.vue";
import SeasonResult from "@/components/SeasonResult.vue";
import SeasonCard from "@/components/SeasonCard.vue";
export default {
  components: {
    YearCard,
    SeasonAwards,
    SeasonDetails,
    SeasonResult,
  },
  data() {
    return {
      info: null,
      seasonDetail: null,
      year : 2008
    };
  },
  mounted() {
    this.info = this.$store.getters.seasonDetails;
    this.seasonDetail = this.$store.getters.particularSeason(2008);
    this.year - 2008
    console.log("this.seasonDetail");
    console.log(this.seasonDetail);
  },
  methods: {
    say(msg) {
      console.log(msg);
      this.year = msg
      this.seasonDetail = this.$store.getters.particularSeason(msg);
      console.log(this.seasonDetail);
    },
  },
};
</script>


<style lang="css" scoped>
.scroll {
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
.scroll {
  -ms-overflow-style: none;
}

.flip-card {
  background-color: transparent;
  width: 200px;
  height: 200px;
  margin-right: 5px;
}

.flip-card-inner {
  position: relative;
  width: 200px;
  height: 200px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.flip-card:hover .flip-card-inner {
  cursor: pointer;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 200px;
  height: 200px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
}

.flip-card-front {
  /* background-color: #bbb; */
  color: black;
  border-radius: 3px;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
  border-radius: 3px;
}
.flex{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -50px;
}
.about{
  margin-top: -20px;
}
</style>
