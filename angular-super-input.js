'use strict';
angular.module('superInput', [])

angular.module('superInput')
    .directive('superInput', function(){
        return {
            templateUrl: 'template/_super-input.html',
            restrict: 'E',
            replace: true,
            scope: {
                model: '=',
                form: '='
            },
            compile: function(){
                return {
                    pre: function(scope,element,attrs){
                        scope.data ={
                            name: attrs.name,
                            id: attrs.name.replace(' ',''),
                            type: attrs.type || 'text',
                            required: attrs.required || 'false',
                            minlength: attrs.minlength || 0
                        }
                    },
                    post: function (scope,element,attrs){
                        var input = element.find('input'), // Gets the input element
                            ctrl = scope.form['holder']; // Gets the ctrl from the form
                        scope.form.$removeControl(ctrl); // Removes the current controller
                        input.attr('name',scope.data.id); // Attaches your name to the input
                        ctrl.$name = scope.data.id; // Changes the name of the input in the ctrl
                        ctrl.$setValidity('visited',true); // Says there is an error with 'visited' - i.e. input has not been visited
                        scope.form.$addControl(ctrl); // Adds the controller back to the from


                        // On blur of the input, say that there is not an error with 'visited' - i.e. that the input has been visited
                        input.bind('blur',function(){
                            ctrl.$setValidity('visited',false);
                            scope.$apply()
                        });
                    }
                }
            }
        }
    });