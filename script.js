/**
 * Created by Happy on 28/03/17.
 */


(function(){

    var app = angular.module('app', []);
    app.controller('loanCtrl', function($scope) {
        $scope.loanAmount = 0;
        $scope.interest=0;
        $scope.repay=0;
        $scope.showGraph = false;

        $scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {

                var c = document.getElementById("graphAreaCanvas");
                var ctx = c.getContext("2d");
                ctx.translate(10,200);
                ctx.font = "20px Arial";


                var height1 = 200;
                ctx.rect( 0, 0, 80, height1);
                ctx.fillStyle = "red";

                ctx.fill();

                var height = 250 - ($scope.interest/200)*100;

                ctx.beginPath();


                ctx.rect(100, 0, 80, $scope.interest);
                ctx.fill();

                ctx.textAlign = "center";
                ctx.fillText("Interest",80, height*1.1);
                ctx.fillStyle = "blue";

                ctx.fill();


                $scope.showGraph =true;
            }

        };

    });
})();


