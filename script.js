let htmlCode = document.querySelector("#html-code");
let cssCode = document.querySelector("#css-code");
let jsCode = document.querySelector("#js-code");
let output = document.querySelector("#output");

let textFields = [htmlCode, cssCode, jsCode];

textFields.forEach((item) => {
    item.addEventListener("keyup", renderCode)

});

function renderCode() {
   let HTML = htmlCode.value;
   let CSS = cssCode.value;
   let JS = jsCode.value;

   output.contentDocument.body.innerHTML = `${HTML} <style>${CSS}</style>`;
   output.contentWindow.eval(JS);
}