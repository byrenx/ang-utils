(function(window , angular, $){
  "use strict";

  angular.module("mod.notifBox", ["ng"])
    .service("notifBoxService", notifBoxService)

  function notifBoxService(){
    function notifBoxService(){}

    notifBoxService.info = info;
    notifBoxService.success = success;
    notifBoxService.warning = warning;
    notifBoxService.error = error;

    function notify(type, message, position){
      var alignment = position != undefined? position.split('-') : ['top', 'right'];
      $.notify(
        // options
        {'message': message},
        //settings
        {'type': type,
         'placement': {from: alignment[0],
                       align: alignment[1]}});
    }

    function info(message, position){
      return notify("info", message, position);
    }

    function success(message, position){
      return notify("success", message, position);
    }

    function warning(message, position){
      return notify("warning", message, position);
    }

    function error(message, position){
      return notify("danger", message, position);
    }

    return notifBoxService;
  }

})(window, window.angular, jQuery);
