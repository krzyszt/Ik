Ext.define('Ik.model.User', {
   extend: 'Ik.model.Base',
   
   fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'username',
            type: 'string'
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
           name: 'fullName',
           persist: false,
           depends: ['firstName', 'lastName'],
           convert: function(v,rec){
              return rec.get('firstName') + ' ' + rec.get('lastName');
           }
        }
    ]   
});