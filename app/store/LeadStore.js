Ext.define('Ik.store.LeadStore', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.BpartnerModel',
   
   source: 'Ik.store.BpartnerStore',
   
   filters: [
      {
         property: 'islead',
         value: true
      }
   ]
});