sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project3/test/integration/pages/PeopleList",
	"project3/test/integration/pages/PeopleObjectPage"
], function (JourneyRunner, PeopleList, PeopleObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project3') + '/test/flp.html#app-preview',
        pages: {
			onThePeopleList: PeopleList,
			onThePeopleObjectPage: PeopleObjectPage
        },
        async: true
    });

    return runner;
});

