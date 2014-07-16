Ext.define('Ik.store.Supplier', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.Partner',
   
   source: 'Ik.store.Partner',
   
   filters: [
      {
         property: 'issupplier',
         value: true
      }
   ]
});