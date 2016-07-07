import angular from 'angular';
import components from './components';
import services from './services';

const app = angular.module('app', [components, services]);

export default app;
