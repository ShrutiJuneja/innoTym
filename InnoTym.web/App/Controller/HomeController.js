app.controller('HomeController', function ($scope, $rootScope,$http) {

    
    
    alert("Home Controller");


    $rootScope.userDetails;

    $scope.user = [];

    $http.get("http://localhost/InnoTym.api/odata/users")
    .then(function (response) {
   $scope.user = response.data.value;
   }) ;

   

   


});

//$scope.message = 'HELLO WORLD';

//$scope.sum = 10;

//$scope.increment = function () {


//    $scope.sum = $scope.sum + 10;
//}

//$scope.ControllerName = "home";






















    //myService.doIt();

    //console.log(Greet);

    //console.log(myFactory);

    //console.log(Number);

   

    //alert("HELLO");

    //$scope.result = "";

    //$scope.calculateResult = function () {

    //    if ($scope.operation == 'Add') {
    //        $scope.result = $scope.Number1 + $scope.Number2;
    //    }
    //    else if ($scope.operation == 'Sub') {
    //        $scope.result = $scope.Number1 - $scope.Number2;
    //    } 
    //    else if ($scope.operation == 'Div') {
    //        $scope.result = $scope.Number1/$scope.Number2;
    //    } 
    //    else {
    //        $scope.result = $scope.Number1 / $scope.Number2;
    //    }

    //}

    //$scope.result = "";

    //$scope.AddNo = function () {

    //    $scope.result = $scope.Number1 + $scope.Number2;

    //}

    //$scope.SubNo = function () {

    //    $scope.result = $scope.Number1 - $scope.Number2;

    //}

    //$scope.DivNo = function () {

    //    $scope.result = $scope.Number1 / $scope.Number2;

    //}

    //$scope.MulNo = function () {

    //    $scope.result = $scope.Number1 * $scope.Number2;

    //}
   

