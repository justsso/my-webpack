var _ = require('lodash');
import PrintMe from './print';


function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerText = 'Click me and check the  console!';
    btn.onclick = PrintMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());