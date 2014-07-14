Ext.define('Ik.model.BpartnerModel', {
   extend: 'Ik.model.BaseModel',
   
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
           name: 'issuplier',
           type: 'boolean'
        }
    ]
   
});