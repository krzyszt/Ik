Ext.define('Ik.view.main.MainView', {
   extend: 'Ext.container.Container',
   controller: 'mainView',
   viewModel: {
      type: 'main'
   },
   layout: {
      type: 'border'
   },
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         items: [
            {
               region: 'north',
               xtype: 'ikMainHeader'
            },
            {
               region: 'center',
               xtype: 'container',
               layout: {
                  type: 'vbox',
                  align: 'stretch'
               },
               items: [
                  {
                     xtype: 'ikMainToolbar'
                  },
                  {
                     xtype: 'container',
                     height: 1
                  },
                  {
                     xtype: 'container',
                     height: 50,
                     style: 'background-color: white',
                     hidden: true,
                     layout: {
                        type: 'fit'
                     },
                     items: [
                        {
                           xtype: 'container',
                           margin: 5,
                           border: '1px solid #d6e9c6',
                           layout: {
                              type: 'hbox',
                              align: 'middle'
                           },
                           style: 'background-color: #dff0d8;',
                           items: [
                              {
                                 xtype: 'container',
                                 margin: '0 0 0 10',
                                 html: '<span style="color: #3c763d; font-size: 14px;"><i class="fa fa-check"></i></span>'
                              },
                              {
                                 xtype: 'container',
                                 flex: 1,
                                 margin: '0 0 0 5',
                                 html: '<span style="color: #3c763d; font-size: 14px;">Welcome to message box</span>'
                              },
                              {
                                 xtype: 'container',
                                 width: 25,
                                 html: '<a href="#" style="color: #666; font-size: 14px; text-decoration: none"><i class="fa fa-times"></i></a>'
                              }
                           ]
                        }
                     ]
                  },
                  {
                     xtype: 'ikMainTab',
                     flex: 1
                  }
               ]

            },
            {
               region: 'west',
               xtype: 'ikMainSidebar'
            }
         ]


      });

      me.callParent(arguments);
   }
});
