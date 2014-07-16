Ext.define('Ik.view.grid.CustomerGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'ikCustomerGrid',
   requires: 'Ik.view.grid.CustomerGridController',
   store: 'Ik.store.Customer',
   controller: 'customerGrid',
   closable: true,
   title: 'Customers',
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         tbar: [
            {
               xtype: 'ikGridToolbar',
               ikWidgetType: 'Customer'
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


