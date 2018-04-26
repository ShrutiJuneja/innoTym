app.controller('addMoneyController', function ($scope, $rootScope, userService) {


    alert("AddMoney Controller");

    $scope.Amount = "";

    $scope.AddMoney = function (Amount) {

        
        $rootScope.userDetails.amount = (parseInt($rootScope.userDetails.amount) + parseInt(Amount)).toString();
        userService.updateUser($rootScope.userDetails).then(function (results) {

            alert("Your Balance have been Updated Succesfully ! Your New balance is " + $rootScope.userDetails.amount);
        });


    }

});
 