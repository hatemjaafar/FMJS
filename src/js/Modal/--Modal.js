function Modal() {
  var domModal = null;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/templates/Modal/Modal.html");

  function onokclick(evt) {}
  /**
   *
   * @param {string} title
   * @param {string} message
   * @param {function} okCallback
   * @param {function} cancelCallback
   */
  this.show = function (title, message, okCallback, cancelCallback) {
    xhr.onreadystatechange = function (evt) {
      if (xhr.onreadystatechange > XMLHttpRequest.DONE) {
        console.log("before return");
        return;
      }
      if (evt.target.status >= 400) {
        console.log("error");
        return;
      }
      var baseElement = document.createElement("div");
      baseElement.innerHTML = evt.target.responseText;
      domModal = baseElement.firstChild;
      //modalthis.show(title, message, okCallback, cancelCallback);
      modalthis.show(title, message, okCallback, cancelCallback);
    };
    xhr.send();
    console.log("envoi xhr");
    return;
  };
  console.log("chargement dom");
}
this.close = function () {};

var modal = new Modal();
modal.show();
