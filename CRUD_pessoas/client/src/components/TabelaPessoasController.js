import bModal from 'bootstrap-vue/es/components/modal/modal'
import bForm from 'bootstrap-vue/es/components/form/form'

export default {
  name: 'TabelaPessoas',

  async created () {
    let response = await this.$http.get('/find-all')
    this.todasPessoas = response.data
    console.log(this.todasPessoas)
  },
  data () {
    return {
      pessoa: {},
      todasPessoas: [],
      modalShow: false,

      form: {
        id: null,
        email: '',
        nome: '',
        endereco: '',
        idade: '',
        sexo: '',
        ativo: ''
      },
    }
  },
  components: {
    'b-modal': bModal,
    'b-form': bForm,
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.nome = ''
      this.form.endereco = ''
      this.form.idade = ''
      this.form.sexo = ''
      this.form.ativo = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    selecionar(pessoa) {
      this.form = pessoa
      this.modalShow = !this.modalShow
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      if(this.form.id){
        this.$http.put(`/update/${this.form.id}`, (JSON.stringify(this.form)))
      } else {
        this.$http.post('/insert', (JSON.stringify(this.form)))
      }
      location.reload() // recarrega a página
    },
    deletar (id) {
      this.$http.delete(`/delete/${id}`)
      alert(`Pessoa de ID ${id} deletado do banco de dados!`) // informa que houve o cadastro
      location.reload() // recarrega a página
    }
  }
}