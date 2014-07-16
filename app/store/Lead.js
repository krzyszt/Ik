Ext.define('Ik.store.Lead', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.Partner',
   
   source: 'Ik.store.Partner',
   
   filters: [
      {
         property: 'islead',
         value: true
      }
   ]
});