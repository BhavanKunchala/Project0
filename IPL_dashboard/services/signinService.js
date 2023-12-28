app.service("signinService", ["$http", function($http){

    this.getUserData = function(cb){
        $http({
            method: "GET",
            url: ("http://localhost:3000/users")
        })
        .then(function(response){
            cb(response.data);
        }, function(err){
            console.log(err);
        });
    }
}])