Ext.define('Ik.view.grid.UserGridController',{
   extend: 'Ext.app.ViewController',
   
   alias: 'controller.userGrid',
   
   control: {
      '#': {
         render: 'onGridRender'
      }
   },
   
   onGridRender: function(component, eOpts){
      component.getStore().load();
   }
   
});

