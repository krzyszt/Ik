Ext.define('Ik.view.form.SupplierForm', {
   extend: 'Ext.form.Panel',
   xtype: 'ikSupplierForm',
   requires: 'Ik.view.form.SupplierFormController',
   controller: 'supplierForm',
   ikWidgetType: 'Supplier',
   closable: true,
   defaults: {
      margin: 10,
      labelAlign: 'right'
   },
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         items: [
            {
               xtype: 'hiddenfield',
               name: 'id',
               fieldLabel: 'Id'
            },
            {
               xtype: 'textfield',
               name: 'name',
               fieldLabel: 'Name',
               emptyText: 'Supplier Name...',
               ikTitle: true
            },
            {
               xtype: 'textfield',
               name: 'typeName',
               fieldLabel: 'Type',
               emptyText: 'Set Type...'
            },
            {
               xtype: 'textfield',
               name: 'status',
               fieldLabel: 'Status'
            }

         ]

      });

      me.callParent(arguments);
   }


});