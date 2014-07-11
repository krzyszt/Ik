Ext.define('Ik.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    
    control: {
      'ikMainTab': {
         add: 'onAddTab'
      }
   },
   
    onAddTab: function(tabs, component, index, eOpts){
       tabs.setActiveTab(component);
    }
});