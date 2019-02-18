<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <!-- NOME -->
      <b-form-group id="nome"
                    label="Nome:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.nome"
                      required
                      placeholder="Nome">
        </b-form-input>
      </b-form-group>
      <!-- EMAIL -->
      <b-form-group id="email"
                    label="Endereço de email:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Endereço de email">
        </b-form-input>
      </b-form-group>
      <!-- ENDEREÇO -->
      <b-form-group id="endereco"
                    label="Endereço:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.endereco"
                      required
                      placeholder="Endereço">
        </b-form-input>
      </b-form-group>
      <!-- IDADE -->
      <b-form-group id="idade"
                    label="Idade:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="number"
                      v-model="form.idade"
                      required
                      placeholder="idade">
        </b-form-input>
      </b-form-group>
      <!-- SEXO -->
      <b-form-group label="sexo">
        <b-form-radio-group id="sexo" v-model="form.sexo" name="sexo" required>
          <b-form-radio value="M">Masculino</b-form-radio>
          <b-form-radio value="F">Feminino</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <!-- ATIVO -->
      <b-form-group label="status">
        <b-form-radio-group id="status" v-model="form.ativo" name="status" required>
          <b-form-radio value="true">Ativo</b-form-radio>
          <b-form-radio value="false">Inativo</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <!-- BOTOES -->
      <b-button type="submit" variant="primary" v-b-tooltip.hover title="Confirmar cadastro">Cadastrar</b-button>
      <b-button type="reset" variant="danger" v-b-tooltip.hover title="Apagar tudo">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import bForm from 'bootstrap-vue/es/components/form/form'

export default {
  name: 'ModalCadastro',
  data () {
    return {
      form: {
        nome: '',
        email: '',
        endereco: '',
        idade: '',
        sexo: '',
        ativo: ''
      },
      show: true
    }
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.nome = ''
      this.form.email = ''
      this.form.endereco = ''
      this.form.idade = ''
      this.form.sexo = ''
      this.form.ativo = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))

      this.$http.post('/insert', (JSON.stringify(this.form)))

      // this.onReset()
      location.reload() // recarrega a página
    }
  },
  components: {
    'b-form': bForm
  }
}
</script>

<style>

</style>
