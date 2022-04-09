const app = Vue.createApp({
    data(){
        return {meuNome: "IFSP"}
    }
});

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
