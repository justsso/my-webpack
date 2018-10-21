var _ = require('lodash');
import PrintMe from './print';
import './style.css'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack', '@@@'], ' ');
    btn.innerText = 'Click me and check the  console!';
    btn.onclick = PrintMe;
    element.appendChild(btn);

    return element;
}

// document.body.appendChild(component());

let element = component();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');

        document.body.removeEventListener(element);
        element = component();
        document.body.appendChild(element);
    })
}