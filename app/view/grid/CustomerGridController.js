Ext.define('Ik.view.grid.CustomerGridController',{
   extend: 'Ext.app.ViewController',
   
   alias: 'controller.customerGrid',
   
   control: {
      '#': {
         render: 'onGridRender'
      }
   },
   
   onGridRender: function(component, eOpts){
      component.getStore().load();
   }
   
});

