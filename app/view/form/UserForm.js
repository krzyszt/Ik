Ext.define('Ik.view.form.UserForm', {
   extend: 'Ext.form.Panel',
   xtype: 'ikUserForm',
   requires: [
      'Ik.view.form.UserFormController'
   ],
   controller: 'contactForm',
   ikWidgetType: 'User',
   closable: true,
   defaults: {
      margin: 10,
      labelAlign: 'right'
   },
   
   initComponent: function() {
      var me = this;
      var store = Ext.create('Ik.store.User');

      Ext.applyIf(me, {
         items: [
            {
               xtype: 'hiddenfield',
               name: 'id',
               fieldLabel: 'Id'
            },
            {
               xtype: 'displayfield',
               name: 'username',
               fieldLabel: 'Username',
               ikTitle: true
            },
            {
               xtype: 'displayfield',
               name: 'fullName',
               fieldLabel: 'Name'
            },
            {
               xtype: 'textfield',
               name: 'firstName',
               fieldLabel: 'First Name',
               emptyText: 'First Name...'
            },
            {
               xtype: 'textfield',
               name: 'lastName',
               fieldLabel: 'Last Name',
               emptyText: 'Last Name...'
            },
            {
               xtype: 'textfield',
               name: 'email',
               fieldLabel: 'Email',
               emptyText: 'Email...'
            }
         ]
      });

      me.callParent(arguments);
   }

});