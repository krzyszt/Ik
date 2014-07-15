Ext.define('Ik.view.grid.ContactGridController', {
   extend: 'Ext.app.ViewController',
   alias: 'controller.contactGrid',
   control: {
      '#': {
         render: 'onGridRender'
      }
   },
   onGridRender: function(component, eOpts) {
      var me = this;
      var partnerStore;
      var contactStore = component.getStore();
      if (!Ext.getStore('Bpartner')) {
         partnerStore = Ext.create('Ik.store.BpartnerStore');
      } else {
         partnerStore = Ext.getStore('Bpartner');
      }

      if (partnerStore.getTotalCount() !== 0) {
         me.loadContactStore(contactStore, partnerStore);
      } else {
         partnerStore.load({
            callback: function() {
               me.loadContactStore(contactStore, partnerStore);
            }
         });
      }


   },
   loadContactStore: function(contactStore, partnerStore) {
      contactStore.load({
         callback: function() {
            contactStore.each(function(record) {
               var partnerId = record.get('partnerId');
               var partnerName = partnerStore.getById(partnerId).get('name');
               record.set('partnerName', partnerName);
            });
         }
      });
   }

});

