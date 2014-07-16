Ext.define('Ik.view.toolbar.GridToolbarController', {
   extend: 'Ext.app.ViewController',
   alias: 'controller.gridToolbar',
   
   requires: [
     'Ext.form.field.ComboBox',
     'Ext.form.FieldSet' 
   ],
   control: {
      '#': {
         render: 'onRender'
      }
   },
   onRender: function(component, eOpts) {
      

   },
   onNew: function(component, eOpts) {
      var widgetType = this.view.ikWidgetType;
      var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
      var tab = null;
      var widgetName;
      
      /** Searching for an empty(without id) form(xtype="form") of a particaular widgetType(like 'Client')
       *  if exists set active if does not exist create new empty form
       */
      var formArray = Ext.ComponentQuery.query('form');
      Ext.Array.each(formArray, function(item){
         if (item.ikWidgetType === widgetType && item.down('hiddenfield[name="id"]').getValue() === '') {
            tab = item;
            return false;
         }
      });
      if (tab === null) {
         widgetName = 'ik' + widgetType + 'Form';
         tab = Ext.widget(widgetName);
         tab.setTitle('New ' + widgetType);
         tabs.add(tab);
      } else {
         tabs.setActiveTab(tab);
      }
   },
   onEdit: function(component, eOpts) {
      var widgetType = this.view.ikWidgetType;
      var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
      var tab = null;
      var widgetName;
      var record = component.up('grid').getSelectionModel().getSelection()[0];
      
      /** Searching for an open(with id) form(xtype="form") of a particaular widgetType(like 'Client')
       *  if exists set active if does not exist create new empty form and load record
       */
      var formArray = Ext.ComponentQuery.query('form');
      Ext.Array.each(formArray, function(item){
         if (item.ikWidgetType === widgetType && item.down('hiddenfield[name="id"]').getValue() == record.get('id')) {
            tab = item;
            return false;
         }
      });
      if (tab === null) {
         widgetName = 'ik' + widgetType + 'Form';
         tab = Ext.widget(widgetName);
         tab.getForm().loadRecord(record);
         tabs.add(tab);
         tabs.setActiveTab(tab);
         tab.setTitle(widgetType + ': ' + tab.down('field[ikTitle="true"]').getValue());
      } else {
         tabs.setActiveTab(tab);
      }
      
   },
   onCopy: function(component, eOpts) {
      console.log('Copy button clicked');
   }
});

