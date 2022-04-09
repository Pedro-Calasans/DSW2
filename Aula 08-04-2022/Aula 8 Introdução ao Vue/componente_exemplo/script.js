// Model do Componente
let modelComponente = {
    titulo: 'Filme',
    descricao: 'Descricao do Filme'
}

const app = Vue.createApp({});

app.component(
    // O nome registrado
    'MeuComponente',
    // A implementação
    {
        data(){
            return modelComponente;
        },
        template: `<ul>
                     <li>{{titulo}}</li>
                     <li>{{descricao}}</li>
                   </ul>`
    }
);

app.mount("#app");