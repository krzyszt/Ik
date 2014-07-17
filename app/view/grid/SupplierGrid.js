Ext.define('Ik.view.grid.SupplierGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'ikSupplierGrid',
   requires: 'Ik.view.grid.SupplierGridController',
   store: 'Ik.store.Supplier',
   controller: 'supplierGrid',
   closable: true,
   title: 'Suppliers',
   glyph: 0xf0d1,
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         tbar: [
            {
               xtype: 'ikGridToolbar',
               ikWidgetType: 'Supplier'
            }
         ],
         columns: [
            {text: 'Id', dataIndex: 'id', width: 40},
            {text: 'Name', dataIndex: 'name', flex: 1},
            {text: 'Type', dataIndex: 'typeName', align: 'center'},
            {text: 'Status', dataIndex: 'status', align: 'center'}
         ]
      });

      me.callParent(arguments);
   }
});


