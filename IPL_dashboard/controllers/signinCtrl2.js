app.controller('signinCtrl', [
    '$scope',  "signinService",
    function ($scope, signinService) {
        $scope.exuserName;
        $scope.userExists = false;
        $scope.exuserPassword;

        $scope.signIn = function(n, p){
            
            signinService.getUserData(function(data){
                console.log(data)
                for (let eObj of data){
                    console.log("Hello2");
                    if (eObj.name==n && eObj.password==p){
                        $scope.userExists = true;
                        alert("signin successful")
                        window.location.href = "index2.html#!/IPLdashboard";
                        break;
                    }else if(eObj.name==n && eObj.password!=p){
                        alert("Wrong password");
                        $scope.userExists = true;
                        break;
                            
                    }
                }
                if(!$scope.userExists){
                    alert("User not found");
                }
            
            })
        }
        
        
    },
    ]);
