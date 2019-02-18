<template>
  <div class="container-fluid">
    <!-- Tabela de pessoas -->
    <table class="table table-striped">
      <thead>
        <tr>
        <th scope="col">#ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Email</th>
        <th scope="col">Endereço</th>
        <th scope="col">Sexo</th>
        <th scope="col">Idade</th>
        <th scope="col">Status</th>
        <th scope="col">Editar/Deletar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in todasPessoas" :key="pessoa.id">
        <th scope="row">{{pessoa.id}}</th>
        <td>{{pessoa.nome}}</td>
        <td>{{pessoa.email}}</td>
        <td>{{pessoa.endereco}}</td>
        <td>{{pessoa.sexo}}</td>
        <td>{{pessoa.idade}}</td>
        <td v-if="pessoa.ativo==true">Ativo</td>
        <td v-else>Inativo</td>
          <b-button-group size="sm">
            <b-button show variant="primary" @click="selecionar(pessoa)">
              Editar
            </b-button>
            <b-button variant="danger" @click="deletar(pessoa.id)">
              Deletar
            </b-button>
          </b-button-group>
        </tr>
      </tbody>
    </table>
    <!-- Modal para cadastrar nova pessoa -->
    <div>
      <b-button show variant="primary" @click="modalShow = !modalShow">
        Cadastrar pessoa
      </b-button>
      <b-modal v-model="modalShow" title="Preenchimento de dados" hide-footer>
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
                          label="Endereço:">
              <b-form-input id="exampleInput2"
                            type="text"
                            v-model="form.endereco"
                            required
                            placeholder="Endereço">
              </b-form-input>
            </b-form-group>
            <!-- IDADE -->
            <b-form-group id="idade"
                          label="Idade:">
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
            <!-- STATUS -->
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
      </b-modal>
    </div>
  </div>
</template>

<script src='./TabelaPessoasController.js'></script>

<style>

</style>
