(function() {
    'use strict';
    angular
      .module('thinkster.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication', 'Snackbar'];

    function RegisterController($location, $scope, Authentication, Snackbar) {
        var vm = this;
        vm.register = register;
        activate();

        function register() {
            Snackbar.show('#register()');
            Authentication.register(vm.email, vm.password, vm.username);
        }

        function activate() {
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }
    }
})();
