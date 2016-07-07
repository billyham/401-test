import template from './app.html';

export default {
  template,
  controller: ['characterService', controller]
};

function controller(characterService){
  this.chars = [];
  characterService.get()
  .then(data => {
    this.chars = data;
  });
}
