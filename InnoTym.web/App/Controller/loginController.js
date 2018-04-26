app.controller('loginController', function ($scope, $rootScope, userService, $location, localStorageService) {


    //====================================================OBJECT INISIALIZE=========================================================

    $scope.loginData = {};
    $scope.registerData = {};
    $rootScope.userDetails = {};
    $scope.showError = false;
    $scope.showLogin = true;
    $scope.showRegister = false;

    alert("Login Controller");

    //$scope.ControllerName = "login";
    //$rootScope.message = "Hello World !!!";

    //===================================================== SHOW/HIDE =====================================================

    $scope.showRegisterPanel = function () {
        $scope.showError = false;
        $scope.showLogin = false;
        $scope.showRegister = true;
    }

    $scope.showLoginPanel = function () {
        $scope.showError = false;
        $scope.showLogin = true;
        $scope.showRegister = false;
    }

  
    //========================================================= LOGIN ======================================================

    //$scope.login = function () {
    //    $scope.loginData;
    //    alert("Login");
    //}

    $scope.login = function () {
        $scope.loginData;
        userService.getUsers().then(function (results) {
            $scope.users = results.data.value;
            var status = 1;
            angular.forEach($scope.users, function (value, key) {
                if (value.email == $scope.loginData.Email && value.userPassword == $scope.loginData.Password){
                    alert("Login Successful");
                    localStorageService.set('userData', value);
                    $rootScope.userDetails = value;
                    $location.path('/transactionList');
                    status = 2;
                }

               
                else if (($scope.users.length - 1) == key && status == 1) {
                    $scope.showError = true;
                    //alert("Login Failed");
                }

            });

        }, function (error) {
            alert(error);
        });
    }

    //======================================================REGISTER===================================================

    //$scope.register = function () {
    //$scope.registerData;
    //}



    $scope.register = function () {
        userService.createUsers($scope.registerData).then(function (results) {
            alert("Registration Successful");
            $location.path('/home');
            $scope.registerData = {};
            $rootScope.userDetails = results.data;

        }, function (error) {
            $scope.showError = true;
            //alert("Registration Failed");
        });

    }


    //=======================================================================================================================





});



