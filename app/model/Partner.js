Ext.define('Ik.model.Partner', {
   extend: 'Ik.model.Base',
   
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
        },
        {
           name: 'iscustomer',
           type: 'boolean'
        },
        {
           name: 'issupplier',
           type: 'boolean'
        },
        {
           name: 'islead',
           type: 'boolean'
        }
    ]
   
});