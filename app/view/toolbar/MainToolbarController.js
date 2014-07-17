Ext.define('Ik.view.toolbar.MainToolbarController', {
   extend: 'Ext.app.ViewController',
   alias: 'controller.mainToolbar',
   control: {
      '#': {
         onAddTabToMainClick: 'onAddTab'
      }
   },
   
   
   onAddTab: function(route) {
      this.redirectTo(route);
//      var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
//      var widgetName = 'ik' + arg + 'Grid';
//      var tab = Ext.ComponentQuery.query(widgetName)[0];
//      if (!tab) {
//         tab = Ext.widget(widgetName);
//         tabs.add(tab);
//         tabs.setActiveTab(tab);
//      } else {
//         tabs.setActiveTab(tab);
//      }
   },
   

});

