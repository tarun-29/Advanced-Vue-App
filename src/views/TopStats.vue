<template>
  <div class="topstats">
    <Batsman/>
    <Bowlers/>
  </div>
</template>

<script>
import Batsman from "@/components/Batsman.vue"
import Bowlers from "@/components/Bowlers.vue"
export default {
  name: "TopStats",
  components: {
    Batsman,
    Bowlers
  }
}
</script>

<style lang="scss">
  .topstats{
    margin-top: 5px;
  }
</style>