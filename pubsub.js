(function(angular){
  "use strict";

  /*
   * taken from https://davidwalsh.name/pubsub-javascript
   */

  angular.module("ngpubsub", ["ng"])
    .factory("ng-pubsub", ngPubsub);

  //ngPubsub.$inject = ["ng"];

  function ngPubsub(){
    /*static vars*/
    var topics = {};

    function Pubsub(){}

    Pubsub.publish = publish;
    Pubsub.subscribe = subscribe;

    function publish(topic, args){
      /*
        info => JSON object argument
      */
      if(!topics.hasOwnProperty(topic)) return;

      topics[topic].forEach(function(item) {
      	item(args != undefined ? args : {});
      });
    }

    function subscribe(topic, listener){
      if(!topics.hasOwnProperty(topic)) topics[topic] = [];

      var index = topics[topic].push(listener) -1;

      // Provide handle back for removal of topic
      return {
        remove: function() {
          delete topics[topic][index];
        }
      };
    }

    return Pubsub;
  }
})(window.angular);
