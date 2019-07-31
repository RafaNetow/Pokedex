class Pokemon {
    constructor(data) {
        console.log(data.id);
        console.log(data.sprites.front_default)
        
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.type = data.types[0].type.name;
    }
  }
  
  export default Pokemon;