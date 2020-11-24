
const spotify = new Vue ({
  el: "#spotify",
    data: {
      albums: []
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
   
  }
});




