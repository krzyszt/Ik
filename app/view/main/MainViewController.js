Ext.define('Ik.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainView',
    
    control: {
      'ikMainTab': {
         add: 'onAddTab'
      },
      'grid': {
         itemdblclick: 'onMainGridItemDblClick'
      }
   },
   
   routes: {
       'leads': 'onLeads',
       'contacts': 'onContacts',
       'customers': 'onCustomers',
       'suppliers': 'onSuppliers',
       'users': 'onUsers'
    },
    
    
    
    onLeads: function() {
      var widgetType =  'Lead';
      this.addGridTab(widgetType);
      
    },
    onContacts: function() {
      var widgetType =  'Contact';
      this.addGridTab(widgetType);
      
    },
    onCustomers: function() {
      var widgetType =  'Customer';
      this.addGridTab(widgetType);
      
    },
    onSuppliers: function() {
      var widgetType =  'Supplier';
      this.addGridTab(widgetType);
      
    },
    onUsers: function() {
      var widgetType =  'User';
      this.addGridTab(widgetType);
      
    },
   
   addGridTab: function(widgetType){
      var widgetName = 'ik' + widgetType + 'Grid'; 
      var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
      var tab = Ext.ComponentQuery.query(widgetName)[0];
      if (!tab) {
         tab = Ext.widget(widgetName);
         tabs.add(tab);
         tabs.setActiveTab(tab);
      } else {
         tabs.setActiveTab(tab);
      } 
   },
   
    onAddTab: function(tabs, component, index, eOpts){
       tabs.setActiveTab(component);
    },
    
    onMainGridItemDblClick: function( view, record, itm, index, e, eOpts){
      
      var widgetType = view.ownerCt.down('ikGridToolbar').ikWidgetType;
      var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
      var tab = null;
      var widgetName;
      
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
   } 
});