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
         ]
      });

      me.callParent(arguments);
   }
});