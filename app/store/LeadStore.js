Ext.define('Ik.store.LeadStore', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.Bpartner',
   
   source: 'Ik.store.BpartnerStore',
   
   filters: [
      {
         property: 'islead',
         value: true
      }
   ]
});