<template>
    <div id="app">
      <div class="container-fluid row justify-content-center header">
          <ul class="list">
            <li class="media">
              <img src="./assets/irancho80_1.png">
            </li>
            <li class="media">
              <h1>Cadastro de pessoas</h1>
            </li>
            <li class="media">
              <img src="./assets/js80_1.png">
            </li>
            <li class="media">
              <img src="./assets/sql80_1.png">
            </li>
            <li class="media">
              <img src="./assets/sequelize80_1.png">
            </li>
            <li class="media">
              <img src="./assets/vue80_1.png">
            </li>
          </ul>
      </div>
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

h1{
  margin-top: 0.8rem;
  padding-left: 2rem;
  padding-right: 2rem;
  color: white;
}

.list {
  display: flex;
  margin-top: 0.8rem;
}

.header{
  background-color: #3d3d3d;
}
</style>