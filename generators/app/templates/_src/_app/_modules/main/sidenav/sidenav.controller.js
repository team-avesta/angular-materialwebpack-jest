'use strict';

import './sidenav.scss';
export default function(app) {
    app
        .controller('sidenavController', controller)

    function controller($state, $scope) {
        'ngInject';
        var vm = this;

        vm.sidemenu = [{
            id: 1,
            name: 'Home',
            icon: 'home',
            is_accordian: false,
            sref: 'main.home'
        }, {
            id: 2,
            name: 'Layouts',
            icon: 'note_add',
            is_accordian: true,
            subMenu: [{
                id: 11,
                name: '1 Column',
                icon: 'view_stream',
                sref: 'main.layouts.1column'
            }, {
                id: 12,
                name: '2 Column',
                icon: 'card_membership',
                sref: 'main.layouts.2column'
            }, {
                id: 13,
                name: '3 Column',
                icon: 'view_stream',
                sref: 'main.layouts.3column'
            }, {
                id: 14,
                name: 'Horizontal layouts',
                icon: 'person',
                sref: 'main.layouts.horcenter'
            }, {
                id: 15,
                name: 'Vertical Center',
                icon: 'people',
                sref: 'main.layouts.vercenter'
            }]
        }];

        $scope.$on('$stateChangeSuccess', vm.closeSidenav);

        vm.onSelectMenu = function(menu) {
            $state.go(menu.sref);
        };
    }
}