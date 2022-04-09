let model = { 
    tituloLista: 'Minha lista de Filmes',
    usuario: 'Amanda Marinho',
    apelido: 'Mandinha'
}

const app = Vue.createApp({
    data(){
        return model;
    },
    mounted: function () {
        console.log("Bem vindo a Vue!")
    }
});

let ListaFilmes = 

app.component(
    "ListaFilmes",
    {
    template: "#filme",
    data: function () {
        return {
            titulo: ' ',
            descricao: ' ',
            dono: 'Lista de ',
            items: [
                {
                    titulo: "Bastardos Inglórios",
                    descricao: "Filme sobre uma realidade alternativa da Segunda Guerra Mundial!"
                },
            ]
        }
    },
    methods: {
        addToList: function () {
            let obj = {
                titulo: this.titulo.trim(),
                descricao: this.descricao.trim()
            }
            this.items.push(obj)
            this.titulo = ""
            this.descricao = ""
        }
    },
   
    // camelCase em JavaScript irá virar Kebab-case no HTML
    props: ['usuarioLista', 'apelido']
})

app.mount("#app");