Ext.define('Ik.store.CustomerStore', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.Bpartner',
   
   source: 'Ik.store.BpartnerStore',
   
   filters: [
      {
         property: 'iscustomer',
         value: true
      }
   ]
   
});