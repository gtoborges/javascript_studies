<template>
  <div>
    <div class="top">
      {{contador}}
    </div>
    <div class="filhos">
      <Filho1/>
      <Filho2/>
    </div>
    
  </div>
</template>

<script>
import Filho1 from '../components/Filho1'
import Filho2 from '../components/Filho2'

export default {
  name: 'Pai',
  components: {
    'Filho1': Filho1,
    'Filho2': Filho2,
  },
  data () {
    return{
      contador: 0
    }
  },
  created(){

  }
}
</script>

<style>
.top {
  background: #2c3e50;
  border-radius: 25px;
  margin: 10%;
  margin-bottom: 30px;
  font-size: 1rem;
  color: white;
  padding: 50px 50px 50px 50px;
}

.filhos {
  display: flex;
  padding: auto;
  align-content: center;
}
</style>
