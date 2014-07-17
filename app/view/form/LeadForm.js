Ext.define('Ik.view.form.LeadForm', {
   extend: 'Ext.form.Panel',
   xtype: 'ikLeadForm',
   requires: 'Ik.view.form.LeadFormController',
   controller: 'leadForm',
   ikWidgetType: 'Lead',
   closable: true,
   defaults: {
      margin: 10,
      labelAlign: 'right'
   },
   glyph: 0xf118,
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
               emptyText: 'Lead Name...',
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