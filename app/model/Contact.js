Ext.define('Ik.model.Contact', {
   extend: 'Ik.model.Base',
   
   fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'firstname',
            type: 'string'
        },
        {
            name: 'lastname',
            type: 'string'
        },
        {
            name: 'clientId',
            type: 'int',
            reference: 'Bpartner'
        },
        {
            name: 'contactFullname',
            type: 'string'
        }
    ]
   
});