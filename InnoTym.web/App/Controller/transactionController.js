app.controller('transactionController', function ($scope, $rootScope, transactionService, userService, $location) {

    alert("Transaction Controller");


    //======================================================= OBJECT ================================================================
    $scope.transactionData = {};

    //===============================================================================================================================

    $scope.transactionList = [];
    $scope.users = [];

   //================================================ GET TRANSACTION ================================================================
    $scope.getTransaction = function () {

       // ================================filter to get particular user ID record================
        var filter = "&$filter=";
        filter = filter + "userId eq " + $rootScope.userDetails.userId;
        //=======================================================================================

        transactionService.getTransactions(filter).then(function (results) {

            $scope.transactionList = results.data.value;
        }, function (error) {
            alert(error);
        });
    }

   //================================================ GET USERS ======================================================================
    $scope.getUser = function () {

        // ================================filter to get all user ID record====================
        var filter = "?$filter=";
        filter = filter + "userId ne " + $rootScope.userDetails.userId;
        //======================================================================================

        userService.getUsers(filter).then(function (results) {

            $scope.users = results.data.value;
        }, function (error) {
            alert(error);
        });
    }

    //=============================================== DO TRANSACTION ==================================================================

    $scope.doTransaction = function () {

        if (parseFloat($scope.transactionData.amount) <= parseFloat($rootScope.userDetails.amount)) {


            // debit transaction
            $scope.debitUserInitailAmount = $rootScope.userDetails.amount; //to store Initial Amount in Transaction Table
            $rootScope.userDetails.amount = (parseFloat($rootScope.userDetails.amount) - parseFloat($scope.transactionData.amount)).toString();
            $scope.debitUserDetails = $rootScope.userDetails;
            // Service call to debit amount
            userService.updateUser($scope.debitUserDetails).then(function (results) {

            // credit transaction
            $scope.creditUserInitialAmount = $scope.transactionData.refUser.amount;
            $scope.transactionData.refUser.amount = (parseFloat($scope.transactionData.refUser.amount) + parseFloat($scope.transactionData.amount)).toString();
            $scope.creditUserDetails = $scope.transactionData.refUser;
            // Service call to credit amount
            userService.updateUser($scope.creditUserDetails).then(function (result) {


                //Entry in transaction table for debit
                $scope.debitTransactionDetails = {
                    userId: $rootScope.userDetails.userId,
                    refId: $scope.transactionData.refUser.userId,
                    transType: 'Debit',
                    initialAmount: $scope.debitUserInitailAmount.toString(),
                    amount:$scope.transactionData.amount.toString()

                }

                transactionService.createTransactions($scope.debitTransactionDetails).then(function (res) {

                    //Entry in transaction table for credit
                    $scope.creditTransactionDetails = {
                        userId: $scope.transactionData.refUser.userId,
                        refId: $rootScope.userDetails.userId,
                        transType: 'Credit',
                        initialAmount: $scope.creditUserInitialAmount.toString(),
                        amount: $scope.transactionData.amount.toString()
                    }

                transactionService.createTransactions($scope.creditTransactionDetails).then(function (ress) {



                        alert("Transaction done Sucessfully");
                        $location.path('/transactionList');



                   }, function (err) {
                        alert(err);
                 });

                  }, function (erro) {
                    alert(erro);
                });

                  }, function (error) {
                    alert(error);
                });

                  },function (errorr) {
                    alert(errorr);
                });

        }

        else {
            alert('insufficent amount');
            }

    }

   

});