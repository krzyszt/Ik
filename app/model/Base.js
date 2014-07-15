Ext.define('Ik.model.Base', {
   extend: 'Ext.data.Model',
   schema: {
      namespace: 'Ik.model',
      proxy: {
         type: 'ajax',
         url: 'data/{entityName:lowercase}.json',
         reader: {
            type: 'json',
            rootProperty: 'list'
         }
      }
   }
});