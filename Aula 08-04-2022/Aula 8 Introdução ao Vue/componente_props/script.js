let dataComponente = {
    titulo: 'Filme',
    descricao: 'Descricao do Filme'
}

var MeuComponente = Vue.extend({
    data: function(){
        return dataComponente;
    },
    template: "#filmes",
    props:['usuario']
})

Vue.component('meu-componente', MeuComponente);

new Vue({
    el: "#app",
    data:{
        nomeUsuario: "Mr. Anderson"
    }
})