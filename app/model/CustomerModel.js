Ext.define('Ik.model.CustomerModel', {
   extend: 'Ext.data.Model',
   
   fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'status',
            type: 'string'
        },
        {
            name: 'typeId',
            type: 'int'
        },
        {
            name: 'typeName',
            type: 'string'
        }
    ]
   
});