Ext.define('Ik.store.SupplierStore', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.BpartnerModel',
   
   source: 'Ik.store.BpartnerStore',
   
   filters: [
      {
         property: 'issupplier',
         value: true
      }
   ]
});