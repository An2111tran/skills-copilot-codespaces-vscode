function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller : 'skillsMemberCtrl',
        controllerAs : 'vm',
        bindToController: true,
        scope : {
            member : 'm'
        }
    };
}
