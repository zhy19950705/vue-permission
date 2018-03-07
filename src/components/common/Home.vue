<template>
   <div class="wrapper">
     <v-head></v-head>
     <v-sidebar></v-sidebar>
     <div class="content">
       <transition name="move" mode="out-in">
         <router-view></router-view>
       </transition>
     </div>
   </div>
</template>

<script>
  import vHead from './Header'
  import vSidebar from './Sidebar'
  import store from '@/store'
    export default {
       components:{
         vHead,vSidebar
       },
       computed:{
         // routes(){
         //   return store.getters.routers
         // }
       }
    }
</script>

<style scoped>

</style>
