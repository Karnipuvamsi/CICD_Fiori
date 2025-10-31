sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project2/test/integration/pages/PeopleList",
	"project2/test/integration/pages/PeopleObjectPage"
], function (JourneyRunner, PeopleList, PeopleObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project2') + '/test/flp.html#app-preview',
        pages: {
			onThePeopleList: PeopleList,
			onThePeopleObjectPage: PeopleObjectPage
        },
        async: true
    });

    return runner;
});

