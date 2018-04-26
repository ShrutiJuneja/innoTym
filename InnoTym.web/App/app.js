

var app = angular.module("InnoTymApp", ['ngRoute','LocalStorageModule']);

app.config(function ($routeProvider) {


    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "App/Views/login.html"
    });

    $routeProvider.when("/home", {
        controller: "HomeController",
        templateUrl: "App/Views/home.html"
    });

    $routeProvider.when("/doTransaction", {
        controller: "transactionController",
        templateUrl: "App/Transaction/doTransaction.html"
    });

    $routeProvider.when("/transactionList", {
        controller: "transactionController",
        templateUrl: "App/Transaction/transactionList.html"
    });

    $routeProvider.when("/addMoney", {
        controller: "addMoneyController",
        templateUrl: "App/Transaction/addMoney.html"
    });



    $routeProvider.otherwise({
        redirectTo: "/login"
    });


});





























//app.value("Greet", "Hello World!");

//app.factory('myFactory', function () {

// return "HELLO";
//});

//function myService() {

//    this.doIt = function (){
//        console.log('DONE');
//    }

//}

//app.service("myService", myService);


//app.constant("Number",123456);



//app.directive("customDirective", function () {

//return {
//template: "<h1> This Is a Calculator  </h1>"

// };

  
//});
