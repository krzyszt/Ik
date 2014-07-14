Ext.define('Ik.store.CustomerStore', {
   extend: 'Ext.data.Store',
  
//   autoLoad: true,
   
   proxy: {
      type: 'memory',
//     type: 'rest',
//     url: 'resources/customer',
     reader: {
        type: 'json',
//        rootProperty: 'list'
     }
   },
   
   model: 'Ik.model.CustomerModel',
   
   
   
   data: [
      { id: 1, name: 'New Modern Ltd', typeName: 'retailer', status: 'active' },
      { id: 2, name: 'Fabricon Ltd', typeName: 'retailer', status: 'active' },
      { id: 3, name: 'Vehicle Hire', typeName: 'wholesaler', status: 'inactive' },
      { id: 4, name: 'Ligth', typeName: 'retailer', status: 'active' },
      { id: 5, name: 'Render & Co', typeName: 'wholesaler', status: 'active' }
   ]
});