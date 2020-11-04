<template>
  <div class="hello">
    <div class="flexbox">
      <div>
        <h1>Total Matches</h1>
        <h3>{{ info.total_matches }}</h3>
      </div>
      <div>
        <h1>Total Over</h1>
        <h3>{{ info.over_bowled }}</h3>
      </div>
      <div>
        <h1>Total Runs</h1>
        <h3>{{ info.runs_scored }}</h3>
      </div>
      <div>
        <h1>Economy</h1>
        <h3>{{ info.economy }}</h3>
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
</style>
