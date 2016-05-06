angular.module('app').directive("standardTransclude",transclude);

function transclude(){
    return {
        transclude:true,
        template: "<div><div ng-transclude></div><strong>That we have added to!</strong></div>"
    };
}