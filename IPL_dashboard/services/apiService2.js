app.service("apiService", ["$http", function($http){
    this.getApiData = function(id, cb){
        $http({
            method: "GET",
            url: ("https://apis.ccbp.in/ipl/" + id)
        })
        .then(function(response){
            cb(response.data)
            console.log("Hello")
        }, function(err){
            console.log(err);
        })
    }
}])
