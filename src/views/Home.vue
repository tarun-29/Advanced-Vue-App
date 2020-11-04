<template>
  <div class="home">
    <div class="heading">IPL Stats (2008 - 2016)</div>
    <Overall />
    <h1>Team Overview</h1>
    <div class="team-scroll">
      <div class="team-list">
        <team-card v-for="team in teams" :team="team" :key="team.short"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Overall from "@/components/Overall.vue";
import TeamCard from "@/components/TeamCard.vue"
export default {
  name: "Home",
  components: {
    Overall,
    TeamCard
  },
  data(){
    return{
      teams : null
    }
  },
  mounted(){
    this.teams = this.$store.getters.teamDetails
    console.log("this.teams");
    console.log(this.teams);
  }
};
</script>

<style lang="scss" scoped>
.heading{
  font-size : 25px;
}
.team-scroll {
    display: block;
    width: 100%;
    height: 399px;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    margin-bottom: 0;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    & .team-list {
      overflow: hidden;
      float: left;
    }
  }
</style>
