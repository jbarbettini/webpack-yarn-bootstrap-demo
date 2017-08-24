import _ from 'lodash';
import 'bootstrap';
import './stylesheets/style.scss';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Helloooooo', 'world'], ' ');
  element.className = "text-primary h1";

  return element;
}

document.body.appendChild(component());
