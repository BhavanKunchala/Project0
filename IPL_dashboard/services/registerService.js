app.service("registerService", ["$http", function($http){
   
    this.register = function(userObj, cb){
        $http({
            method: "POST",
            url: ("http://localhost:3000/users"),
            data: userObj
        })
        .then(function(response) {
            cb(response.data)
        }).then(function(err){
            console.log(err);
        })
    }

}])




