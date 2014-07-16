Ext.define('Ik.store.Customer', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.Partner',
   
   source: 'Ik.store.Partner',
   
   filters: [
      {
         property: 'iscustomer',
         value: true
      }
   ]
   
});