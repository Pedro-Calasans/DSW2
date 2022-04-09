let modelComponente = {
    titulo: 'Filme',
    descricao: 'Descricao do Filme'
}

const app = Vue.createApp({
    data(){
        return modelComponente;
    }
});

app.component(
    'MeuComponente',
    {
        data() {
            return modelComponente;
        },
        template: "#filmes"
    }
);

app.mount("#app");
