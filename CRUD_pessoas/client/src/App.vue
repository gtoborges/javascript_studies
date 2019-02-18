<template>
    <div id="app">
      <tabelaPessoas/>
    </div>
</template>

<script>
import TabelaPessoas from './components/TabelaPessoas'

export default {
  name: 'App',
  components: {
    'tabelaPessoas': TabelaPessoas
  }
}

</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>
