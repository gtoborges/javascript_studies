<template>
  <div class="filho">
    {{contador}}
  </div>
</template>

<script>
export default {
  name: 'Filho1',
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
.filho {
  position: relative;
  background: #2c3e50;
  color: white;
  padding: 10px 10px 10px 10px;
  border-radius: 25px;
  margin: auto;
}
</style>
