import angular from 'angular';
import characterService from './character-service';

const services = angular.module('services', [])
.service('characterService', characterService);

export default services.name;
