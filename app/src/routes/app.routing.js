"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home/home.component');
var meet_component_1 = require('../meet/meet.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'meet',
        component: meet_component_1.MeetComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map