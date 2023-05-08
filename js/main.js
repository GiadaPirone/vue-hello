const {createApp} = Vue
createApp({
    data(){
        return {
            messaggio: `Crea il tuo nome `,
            nome: "",
            cognome: "",
            cssNomeCognome: "nomeCognome",
            immagine: ` src="./img/360_F_40451937_qem3GxnnaboDzPjgvZpudRXKx1lcRyk8.jpg"`
        }
    }
}).mount(`#app`)