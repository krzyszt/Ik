Ext.define('Ik.view.form.CustomerForm', {
   extend: 'Ext.form.Panel',
   xtype: 'ikCustomerForm',
   requires: 'Ik.view.form.CustomerFormController',

   controller: 'customerForm',
   ikWidgetType: 'Customer',

   closable: true,
   defaults: {
      margin: 10,
      labelAlign: 'right'
   },
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
         emptyText: 'Customer Name...',
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