app.controller("apiCtrl", [ "$scope",  "apiService", function($scope, apiService){
   var home = document.getElementById("home");
   var team_details = document.getElementById("teamDetails");
    $scope.show = true;

    $scope.getData = function(id){
        apiService.getApiData(id, function(apiData){
            $scope.data = apiData;
            $scope.PreTeamIdid = id;
            $scope.arr = apiData.recent_matches;
            home.classList.add("display");
            $scope.show = false;
        })
        
    }

    $scope.getPreviusData = function(){
        $scope.item = "";
    }


    $scope.changeOrder = function(x){
        $scope.orderByMe = x;
    }
    $scope.searchItem = function(i){
        if($scope.PreTeamIdid != i){
            $scope.item = i;
        }
        
    }
    $scope.filterBy = function(fi){
        
        if($scope.PreTeamIdid != fi){
            $scope.item = fi;
        }
        else if ($scope.PreTeamIdid == fi){
            $scope.item = "";
        }
    }

    $scope.back = function(){
        home.classList.remove("display");
        $scope.show = true;
    }
}])
