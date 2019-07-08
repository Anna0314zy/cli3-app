<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div ref="container" id="container" class="app v-touch" :style="loadingStyles" v-swipe="swipe" swipe-direction="right"
    swipe-distance="300">
    <transition>
      <keep-alive>
        <router-view ref="page" v-if="$route.meta.keepAlive" v-scoll-positon></router-view>
      </keep-alive>
    </transition>
    <transition>
      <keep-alive>
        <router-view ref="page" v-if="!$route.meta.keepAlive" v-scoll-positon></router-view>
      </keep-alive>
    </transition>
    <div v-if="$route.meta.footer & !isapp" class="footer">
      <p-footer></p-footer>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>