Ext.define('Ik.view.grid.SupplierGridController',{
   extend: 'Ext.app.ViewController',
   
   alias: 'controller.supplierGrid',
   
   control: {
      '#': {
         render: 'onGridRender'
      }
   },
   
   onGridRender: function(component, eOpts){
//      component.getStore().getSource().load();
   }
   
});

