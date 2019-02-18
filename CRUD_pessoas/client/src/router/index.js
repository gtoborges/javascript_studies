import Vue from 'vue'
import Router from 'vue-router'
import TabelaPessoas from '@/components/TabelaPessoas'
import ModalCadastro from '@/components/ModalCadastro'
import ModalEdit from '@/components/ModalEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabelaPessoas',
      component: TabelaPessoas
    },
    {
      path: '/',
      name: 'ModalCadastro',
      component: ModalCadastro
    },
    {
      path: '/',
      name: 'ModalEdit',
      component: ModalEdit
    }
  ]
})
