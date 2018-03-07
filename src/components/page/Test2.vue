<template>
  <div>
    <div>User {{$route.params.id}}</div>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
      beforeRouteUpdate(to, from, next) {
        // react to route changes...
        // don't forget to call next()
        console.log({to, from, next})
      }

  }
</script>

<style scoped>

</style>
