import Meme from "../metier/meme.js"

export default class MemeEditor{
    
    currentMeme = new Meme();
    #domNode =  undefined;
    #promise = undefined;
    #addFormsEvents = () => {};
    
    loadMeme =  (meme) => {
    }

    loadEditor() {
        if (this.#promise === undefined)
            {
                this.#promise = fetch("/templates/Modal/MemeEditor/MemeEditor.html")
                .then((r) => r.text())
                .then((r) => {
                    const d = document.createElement("div");
                    d.innerHTML = r;
                    this.#domNode = d;
                    return r;
                });
            }
        this.#promise.then(() => {
            this.#addFormsEvents();
            this.loadMeme(meme);
            const main = document.querySelector("#main");
            main.innerHTML = "";
            main.append(...this.#domNode.children);
        });
    }


}