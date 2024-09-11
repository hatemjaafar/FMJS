import REST_ADR, { RESSOURCES_NAMES } from "../config/constante.js";
// import 'jquery/dist/jquery.js'
// import '../../styles/meme-editor.css'
export defaut class Meme {
  id;
  titre;
  text;
  x;
  y;
  fontWeight;
  fontSize;
  underline;
  italic;
  imageId;
  color;
  frameSizeX;
  frameSizeY;
  constructor(memeObjectJSON) {
     if (memeObjectJSON !== undefined ){
        return  Object.assign(this,memeFromJSON) 
     }
    }
  save() {
    const promise = fetch(
      `${REST_ADR}${RESSOURCES_NAMES.memes}${
        undefined !== this.id ? `/${this.id}` : ""
      }`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: undefined !== this.id ? "PUT" : "POST",
        body: JSON.stringify(this),
      }
    ).then((r) => r.json());
    promise.then((r) => Object.assign(this, r));
    return promise;
  }
}
