Ext.define('Ik.view.grid.LeadGridController',{
   extend: 'Ext.app.ViewController',
   
   alias: 'controller.leadGrid',
   
   control: {
      '#': {
         render: 'onGridRender'
      }
   },
   
   onGridRender: function(component, eOpts){
      component.getStore().getSource().load();
   }
   
});

