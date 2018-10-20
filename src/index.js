var _ = require('lodash');
import './index.css';
import HaiXing from './haixing.jpg';
import Data from './my.xml';
function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myImage = new Image();
    myImage.src = HaiXing;
    element.appendChild(myImage);
    console.log(Data);
    return element;
}

document.body.appendChild(component());