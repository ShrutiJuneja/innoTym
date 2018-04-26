app.controller('headerController', function ($scope, $rootScope, $location, userService , localStorageService) {

    $scope.logOut = function () {
        localStorageService.remove('userData');
        $rootScope.userDetails = {};         
        $location.path('/login');

    }
   

        if (localStorageService.get('userData')) {
            $rootScope.userDetails = localStorageService.get('userData');
        }


        $scope.deleteUser = function () {

            userService.deleteUser($rootScope.userDetails.userId).then(function (result) {
                alert("User Successfully Deleted");
                $location.path('/login');

            })

        }

});