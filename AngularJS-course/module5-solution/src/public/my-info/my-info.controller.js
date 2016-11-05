(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','RegistrationService'];
function MyInfoController(MenuService, RegistrationService) {
  var myInfoCtrl = this;
  myInfoCtrl.user = RegistrationService.getUser();
  if(myInfoCtrl.user){
    var promise = MenuService.getMenuItem(myInfoCtrl.user.short_name);
    promise.then(function (response) {
      myInfoCtrl.item = response;
    });
  }
};

})();
