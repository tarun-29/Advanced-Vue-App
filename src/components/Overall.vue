<template>
  <div class="hello">
    <div class="flexbox" v-if="info!==null">
      <div>
        <h1>Total Matches</h1>
        <h2>{{ info.total_matches }}</h2>
      </div>
      <div>
        <h1>Total Over</h1>
        <h2>{{ info.over_bowled }}</h2>
      </div>
      <div>
        <h1>Total Runs</h1>
        <h2>{{ info.runs_scored }}</h2>
      </div>
      <div>
        <h1>Economy</h1>
        <h2>{{ info.economy }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overall",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    this.info = this.$store.getters.overView;
    console.log("this.info");
    console.log(this.info);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flexbox {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
}
h2{
  font-size: 50px;
  margin-top: -20px;
  color: greenyellow;
}
</style>
