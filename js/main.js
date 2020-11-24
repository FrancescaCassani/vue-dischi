
const spotify = new Vue ({
  el: "#spotify",
    data: {
      albums: [],
      //Variabile per scelta genere musicale
      activeGenre: 'all'
  },
  created(){  
      //Call API
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( result => {
        console.log(result.data);

        this.albums = result.data.response; 
      })
      .catch( error => {
        console.log(error);
      });
  },
  methods: {
    getGenre() {
      //Call API
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( result => {
        //Variabile a cui assegno i dati API
        let albumsList = result.data.response;

        //La funzione si attiva solo se clicco sul genere musicale. 
        //Versione funzione ESTESA
        if(this.activeGenre !== 'all') {
          albumsList = albumsList.filter( (element) => {
            return element.genre.toLowerCase() === this.activeGenre
          });
        }

        //Funzione versione IMPLICITA
        // if(this.activeGenre !== 'all') {
        //   albumsList = albumsList.filter(element => 
        //     element.genre.toLowerCase() === this.activeGenre);
        // }

        this.albums = albumsList;
        
      })
      .catch( error => {
        console.log(error);
      });
    }
  }
});




