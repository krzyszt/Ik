Ext.define('IkRest.view.grid.ClientGridController',{
   extend: 'Ext.app.ViewController',
   
   alias: 'controller.clientGrid',
   
   control: {
      '#': {
         render: 'onClientGridRender'
      }
   },
   
   onClientGridRender: function(component, eOpts){
      component.getStore().load();
   }
   
});

