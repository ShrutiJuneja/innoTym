app.factory('transactionService', function ($http) {

    var transactionServicefactory = {};

    //function to get transaction ==============================(GET)===========================================

    transactionServicefactory.getTransactions = function (filter) {
        if (!filter)
            filter = "";
        return $http.get("http://localhost/InnoTym.api/odata/Transactions?$expand=user" + filter);

    }


    //function to create transaction =============================== (POST)=====================================


    transactionServicefactory.createTransactions = function (model) {
       
        return $http.post("http://localhost/InnoTym.api/odata/Transactions" , model);

    }

   

    return transactionServicefactory;

});