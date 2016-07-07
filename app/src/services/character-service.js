characterService.$inject = ['$http', 'apiUrl'];

export default function characterService($http, apiUrl){

  const charUrl = apiUrl + '/characters';

  return {
    get(){
      return $http
      .get(charUrl)
      .then(result => {
        return result.data;
      });
    },
    add(character){
      return $http
      .post(charUrl, character)
      .then(result => result.data);
    }
  };
}
