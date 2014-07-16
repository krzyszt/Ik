Ext.define('Ik.view.main.MainHeader', {
   extend: 'Ext.container.Container',
   xtype: 'ikMainHeader',
   height: 45,
   layout: {
      type: 'fit'
   },
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         items: [
            {
               xtype: 'container',
               layout: {
                  type: 'hbox',
                  align: 'stretch'
               },
               style: {
                  background: '#438eb9'
               },
               items: [
                  {
                     xtype: 'container',
                     margin: '0 20',
                     padding: 15,
                     html: '<span style="font-size: 18px; color: #fff"> <i class="fa fa-leaf fa-lg"></i> Ik Rest App <small> with ExtJS 5 </small></span>'
                  },
                  {
                     xtype: 'container',
                     flex: 1
                  },
                  {
                     xtype: 'container',
                     style: {
                        background: '#393939'
                     },
                     layout: {
                        type: 'fit'
                     },
                     padding: 12,
                     items: [
                        {
                           xtype: 'container',
                           html: '<a href="#" style="text-decoration: none"> <span style="font-size: 14px; color: #fff"> <i class="ace-icon fa fa-tasks"></i> 1</span></a>'
                        }
                     ]
                  },
                  {
                     xtype: 'container',
                     style: {
                        background: '#892e65'
                     },
                     layout: {
                        type: 'fit'
                     },
                     padding: 12,
                     items: [
                        {
                           xtype: 'container',
                           html: '<a href="#" style="text-decoration: none"> <span style="font-size: 14px; color: #fff"> <i class="ace-icon fa fa-bell"></i> 5</span></a>'
                        }
                     ]
                  },
                  {
                     xtype: 'container',
                     style: {
                        background: '#2e8965'
                     },
                     layout: {
                        type: 'fit'
                     },
                     padding: 12,
                     items: [
                        {
                           xtype: 'container',
                           html: '<a href="#" style="text-decoration: none"> <span style="font-size: 14px; color: #fff"> <i class="ace-icon fa fa-envelope"></i> 3</span></a>'
                        }
                     ]
                  },
                  {
                     xtype: 'container',
                     style: {
                        background: '#93cbf9'
                     },
                     width: 170,
                     layout: {
                        type: 'fit'
                     },
                     padding: 12,
                     items: [
                        {
                           xtype: 'container',
                           html: '<a href="#" style="text-decoration: none"> <span style="font-size: 14px; color: #fff">Welcome, User <i class="ace-icon fa fa-caret-down"></i> </span></a>'
                        }
                     ]
                  },
                  {
                     xtype: 'container',
                     width: 10
                  }
               ]
            }
         ]

      });

      me.callParent(arguments);
   }
});