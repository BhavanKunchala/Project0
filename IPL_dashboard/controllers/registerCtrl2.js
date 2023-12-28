app.controller('registerCtrl', [
    '$scope',  "registerService", "signinService",
    function ($scope, registerService, signinService) {
    
        $scope.userName;
        $scope.userEmail;
        $scope.userPassword;

        var userObj = {};
        $scope.userAlreadyExists = false;
        $scope.register = function(n, e, p){

            
            checkUser(n, e, p)
            console.log("ir");
            
            if(!$scope.userAlreadyExists && $scope.passwordcondmet){
                userObj.name = $scope.userName;
                userObj.email = $scope.userEmail;
                userObj.password = $scope.userPassword;
                console.log("reg");

                registerService.register(userObj, function(data){
                    console.log(data);
                    alert("Registered Successfully");
                    window.location.href = "index2.html#!/signin";
                });
            }
            }

            var checkUser = function(n, e, p){
                console.log("Hello1 cond");

                if(p.length < 6){
                    alert("Password must be atleast 6 characters long");
                    $scope.passwordcondmet = false;
                    return;
                }else{
                    $scope.passwordcondmet = true;
                }
                
                // console.log(n)
                signinService.getUserData(function(data){
                    
                for (let eObj of data){
                    if (eObj.name==n && eObj.email==e){
                        $scope.userAlreadyExists = true;
                        alert("User already registered");
                        break;
                    }else if(eObj.name!=n && eObj.email==e){
                        $scope.userAlreadyExists = true;
                        alert("This Email is Already Registered Use a different email address");
                        break;
                    }
                }

                
            })
            }

            $scope.signin = function(){
                window.location.href = "index2.html#!/"
            }
            
            

    },
    ]);