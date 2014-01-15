'use strict';
angular.module('superInput', [])
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
                        var ctrl = scope.form['holder'];
                        scope.form.$removeControl(ctrl);
                        element.find('input').attr('name',scope.data.id);
                        ctrl.$name = scope.data.id;
                        scope.form.$addControl(ctrl);

                    }
                }
            }
        }
    })