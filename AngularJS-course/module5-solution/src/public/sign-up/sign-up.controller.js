(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'RegistrationService'];
function SignUpController(MenuService, RegistrationService) {
  var signUpCtrl = this;
  signUpCtrl.submit = function (regForm) {
    var promise = MenuService.getMenuItem(signUpCtrl.user.short_name);
    promise.then(function (response) {

          signUpCtrl.completed = true;
          regForm.short_name.$setValidity('required', true);
          RegistrationService.setUser(signUpCtrl.user);
    })
    .catch(function (error) {

          signUpCtrl.completed = false;
          regForm.short_name.$setValidity('required', false);
    });

  };

}

})();
