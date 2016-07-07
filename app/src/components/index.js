import angular from 'angular';
import app from './app/app';
import char from './char/char';
import addChar from './add-char/add-char';

const components = angular.module('components', [])
.component('app', app)
.component('char', char)
.component('addChar', addChar);


export default components.name;
