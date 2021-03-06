Ext.define('Ik.view.grid.LeadGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'ikLeadGrid',
   requires: 'Ik.view.grid.LeadGridController',
   store: 'Ik.store.Lead',
   controller: 'leadGrid',
   closable: true,
   title: 'Leads',
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         tbar: [
            {
               xtype: 'ikGridToolbar',
               ikWidgetType: 'Lead'
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


