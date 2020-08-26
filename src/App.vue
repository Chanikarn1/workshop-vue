<template>
  <div id="app">
    <div class="header text-center p-2">

      <h1> <i class="fa fa-archive" aria-hidden="true"></i> Stock system</h1>
    </div>
    <router-view/>
   
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.header{
  background: #000;
  color:#fff
}
</style>
