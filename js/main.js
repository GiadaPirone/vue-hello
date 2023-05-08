const {createApp} = Vue
createApp({
    data(){
        return {
            messaggio: `Crea il tuo nome `,
            nome: "",
            cognome: "",
            cssNomeCognome: "nomeCognome"
        }
    }
}).mount(`#app`)