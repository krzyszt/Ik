/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Ik.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Ik',

    views: [
        'Ik.view.main.MainTab',
        'Ik.view.main.MainHeader',
        'Ik.view.main.MainSidebar',
        'Ik.view.main.Dashboard',
        'Ik.view.toolbar.MainToolbar',
        'Ik.view.grid.CustomerGrid',
        'Ik.view.form.CustomerForm'
    ],

    controllers: [
        'Root'
    ],

    stores: [
        'Ik.store.CustomerStore'
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
