Ext.define('Ik.model.Contact', {
   extend: 'Ik.model.Base',
   
   fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'firstName',
            type: 'string'
        },
        {
            name: 'lastName',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'partnerId',
            type: 'int',
            reference: 'Partner'
        },
        {
           name: 'fullName',
           persist: false,
           depends: ['firstName', 'lastName'],
           convert: function(v,rec){
              return rec.get('firstName') + ' ' + rec.get('lastName');
           }
        }
    ]   
});