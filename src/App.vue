<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">实例一</router-link> |
      <router-link to="/about">实例二</router-link> |
      <router-link to="/pie">实例三</router-link> |
      <router-link to="/scatter">实例四</router-link> |
      <router-link to="/radar">实例五</router-link>  |
      <router-link to="/gauge">实例六</router-link> |
      <router-link to="/map">实例</router-link> 
    </div>
    <div class="app_body">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
.app_body{
  margin-top: 70px;
}
</style>
