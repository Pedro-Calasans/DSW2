<template>
  <div class="container">
    <h1>Dados do funcionário</h1>
    <h4>Nome: {{ funcionario.nome }}</h4>
    <h4>Email: {{ funcionario.email }}</h4>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const funcionario = {
      nome: params.funcionarios, // recebe o valor do primeiro nível do path do link
      email: params.dados // recebe o valor do segundo nível do path do link
    };
    console.log(funcionario); // Para Debug
    return { funcionario };
  },
}
</script>

<style>
/*Movido para assets\css\style.css para que seja global ao app
/* .container {
  margin: 20px;
} */
</style>