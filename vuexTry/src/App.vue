<template>
  <div id="app">
    <pai/>
  </div>
</template>

<script>
import Pai from './components/Pai'
export default {
  name: 'app',
  components: {
    'Pai': Pai
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.top {
  background: #2c3e50;
  border-radius: 25rem;
  margin: 10%;
  font-size: 1rem;
  color: white;
  padding: 50px 50px 50px 50px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
