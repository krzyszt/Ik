Ext.define('Ik.store.CustomerStore', {
   extend: 'Ext.data.ChainedStore',
   
   model: 'Ik.model.BpartnerModel',
   
   source: 'Ik.store.BpartnerStore',
   
   filters: [
      {
         property: 'iscustomer',
         value: true
      }
   ]
   
});