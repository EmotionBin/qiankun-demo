<template>
  <div>
    <!-- 标题栏 -->
    <header class="mainapp-header">
      <h1>QianKun</h1>
    </header>
    <div class="mainapp-main">
      <!-- 侧边栏 -->
      <ul class="mainapp-sidemenu">
        <li @click="push('/vue2')">Vue2</li>
        <li @click="push('/vue3')">Vue3</li>
      </ul>
      <!-- 子应用  -->
      <main id="subapp-container"></main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    push(subapp) {
      history.pushState(null, subapp, subapp);
    },
  },
  mounted() {
    history.pushState(null, '/vue2', '/vue2');
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
