import template from './add-char.html';

export default {
  template,
  bindings: {
    // name: '<',
    // description: '<',
    // catchPhrase: '<'
    chars: '='
  },
  controller: ['characterService', controller]
};

function controller (characterService){
  this.newchar;

  this.submit = () => {
    characterService.add(this.newchar)
    .then(char => {
      this.newchar = {};
      this.chars.push(char);
    });
  };

};
