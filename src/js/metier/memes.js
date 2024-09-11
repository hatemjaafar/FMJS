import { MEME } from "./meme.js";
export default class Memes extends Array {
  constructor() {
    super();
    
  }
  loadingAll() {
    this.splice(0);
    fetch(`${REST_ADR}${RESSOURCES_NAMES.memes}$`)
      .then((r) => r.json())
      .then((r) => {
        r.map((e) => {
            this.push(new Memes(e));
        });
      });
  }

  findById(id) {
    return super.find((e) => e.id === id);
  }
  find(){
    console.log('erreur dans la recherche');
  }
}
