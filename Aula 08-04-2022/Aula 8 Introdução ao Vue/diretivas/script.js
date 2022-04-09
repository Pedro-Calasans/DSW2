let modelData = {
    imggato:"https://cdn2.thecatapi.com/images/zkq4FPHEc.jpg",
    tanahora: false,
    items: [
        {msg: "Mensagem 1"},
        {msg: "Mensagem 2"},
        {msg: "Mensagem 3"}
    ]
}

const app = Vue.createApp({
    data(){
        return modelData;
    },
    methods:{
        digaOi(){
            console.log("oi");
        }
    }
});

const modelComponente = {
    title: 'Filme',
    description: 'Descricao do Filme',
};

app.component(
    'MeuComponente',
    {
        data() {
            return modelComponente;
        },
        template: "#filmes",
        props: ["items"]
    }
);

app.component(
    'HelloComponente',
    {
        data(){
            return {msg: "Hello"};
        },
        template: "#hello",
        props: ['usuario']
    }
);

app.mount("#app");
