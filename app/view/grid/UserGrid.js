Ext.define('Ik.view.grid.UserGrid', {
   extend: 'Ext.grid.Panel',
   xtype: 'ikUserGrid',
   requires: 'Ik.view.grid.UserGridController',
   store: 'Ik.store.User',
   controller: 'userGrid',
   closable: true,
   title: 'Users',
   glyph: 0xf007,
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         tbar: [
            {
               xtype: 'ikGridToolbar',
               ikWidgetType: 'User'
            }
         ],
         columns: [
            {text: 'Id', dataIndex: 'id', width: 40},
            {text: 'Username', dataIndex: 'username', flex: 1},
            {text: 'First Name', dataIndex: 'firstName', flex: 1},
            {text: 'Last Name', dataIndex: 'lastName', flex: 1},
            {text: 'Full Name', dataIndex: 'fullName', flex: 1},
            {text: 'Email', dataIndex: 'email', align: 'center', flex: 1}
         ]
      });

      me.callParent(arguments);
   }
   
});


