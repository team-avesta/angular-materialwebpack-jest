'use strict';

import './sidenav.scss';
export default function(app) {
    app
        .controller('sidenavCtrl', controller)

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
            sub_menu: [{
                id: 11,
                name: '2 Column',
                icon: 'view_stream',
                sref: 'login'
            }, {
                id: 12,
                name: 'Dialog',
                icon: 'card_membership',
                sref: 'main.layouts.dialog'
            }, {
                id: 13,
                name: 'Grid',
                icon: 'view_stream',
                sref: 'main.layouts.grid'
            }, {
                id: 14,
                name: 'Form',
                icon: 'person',
                sref: 'main.layouts.form'
            }, {
                id: 15,
                name: 'Report Table',
                icon: 'people',
                sref: 'main.layouts.report'
            }]
        }];

        vm.onSelectMenu = function(menu) {
            $state.go(menu.sref);
        };
    }
}