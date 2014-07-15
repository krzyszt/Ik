Ext.define('Ik.view.form.ContactForm', {
   extend: 'Ext.form.Panel',
   xtype: 'ikContactForm',
   requires: 'Ik.view.form.ContactFormController',

   controller: 'contactForm',
   ikWidgetType: 'Contact',

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
         xtype: 'displayfield',
         name: 'fullName',
         fieldLabel: 'Full Name',
         ikTitle: true
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