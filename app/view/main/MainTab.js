Ext.define('Ik.view.main.MainTab', {
   extend: 'Ext.tab.Panel',
   xtype: 'ikMainTab',
   controller: 'mainView',
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         tools:[
            {
               type: 'close',
               tooltip: 'Close All Tabs',
               callback: function(panel, tool, e){
                  panel.removeAll();
               }
            }
//            { 
//               type: 'minimize',
//               tooltip: 'minimize'
//            },
//            { 
//               type: 'maximize',
//               tooltip: 'maximize'
//            },
//            { 
//               type: 'restore',
//               tooltip: 'restore'
//            },
//            { 
//               type: 'toggle',
//               tooltip: 'toggle'
//            },
//            { 
//               type: 'gear',
//               tooltip: 'gear'
//            },
//            { 
//               type: 'prev',
//               tooltip: 'prev'
//            },
//            { 
//               type: 'next',
//               tooltip: 'next'
//            },
//            { 
//               type: 'pin',
//               tooltip: 'pin'
//            },
//            { 
//               type: 'unpin',
//               tooltip: 'unpin'
//            },
//            { 
//               type: 'right',
//               tooltip: 'right'
//            },
//            { 
//               type: 'left',
//               tooltip:'left'
//            },
//            { 
//               type: 'down',
//               tooltip: 'down'
//            },
//            { 
//               type: 'up',
//               tooltip: 'up'
//            },
//            { 
//               type: 'refresh',
//               tooltip: 'refresh'
//            },
//            { 
//               type: 'plus',
//               tooltip: 'plus'
//            },
//            { 
//               type: 'minus',
//               tooltip: 'minus'
//            },
//            { 
//               type: 'search',
//               tooltip: 'search'
//            },
//            { 
//               type: 'save',
//               tooltip: 'save'
//            },
//            { 
//               type: 'help',
//               tooltip: 'help'
//            },
//            { 
//               type: 'print',
//               tooltip: 'print'
//            },
//            { 
//               type: 'expand',
//               tooltip: 'expand'
//            },
//            { 
//               type: 'collapse',
//               tooltip: 'collapse'
//            }
         ]
      });

      me.callParent(arguments);
   }
});