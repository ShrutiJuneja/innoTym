app.factory('userService', function ($http) {

    var userServicefactory = {};

    //function to get user==============================(GET)=====================================================

    userServicefactory.getUsers = function (filter) {
            if (!filter)
            filter = "";
        return $http.get("http://localhost/InnoTym.api/odata/users" + filter);

    }


    //function to create user==========================(POST)=====================================================

    userServicefactory.createUsers = function (model) {

        return $http.post("http://localhost/InnoTym.api/odata/users", model);

    }

    //function to update User====================================(PUT)==========================================


    userServicefactory.updateUser = function (model) {

        return $http.put("http://localhost/InnoTym.api/odata/users(" + model.userId + ")", model);

    }

    //function to delete User====================================(DELETE)==========================================


    userServicefactory.deleteUser = function (userId) {

        return $http.delete("http://localhost/InnoTym.api/odata/users(" + userId +")");

    }


    return userServicefactory;

});