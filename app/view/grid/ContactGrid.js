Ext.define('Ik.view.grid.ContactGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'ikContactGrid',
   requires: 'Ik.view.grid.ContactGridController',
   store: 'Ik.store.Contact',
   controller: 'contactGrid',
   closable: true,
   title: 'Contacts',
   glyph: 0xf007,
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         tbar: [
            {
               xtype: 'ikGridToolbar',
               ikWidgetType: 'Contact'
            }
         ],
         columns: [
            {text: 'Id', dataIndex: 'id', width: 40},
            {text: 'First Name', dataIndex: 'firstName', flex: 1},
            {text: 'Last Name', dataIndex: 'lastName', flex: 1},
            {text: 'Full Name', dataIndex: 'fullName', flex: 1},
            {text: 'Email', dataIndex: 'email', align: 'center', flex: 1},
            {text: 'Business Partner', dataIndex: 'partnerName', align: 'center', flex: 1}
         ]
      });

      me.callParent(arguments);
   }
   
});


