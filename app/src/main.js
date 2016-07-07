import angular from 'angular';
import simpsons from './simpsons';
import './css/main.css';

simpsons.value('apiUrl', 'http://localhost:3000/api');

angular.bootstrap(document, [simpsons.name]);
