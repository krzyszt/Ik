Ext.define('Ik.view.toolbar.GridToolbar', {
   extend: 'Ext.toolbar.Toolbar',
   xtype: 'ikGridToolbar',
   requires: [
      'Ik.view.toolbar.GridToolbarController'
   ],
   controller: 'gridToolbar',
   layout: {
      type: 'hbox'
   },
   defaults: {
      margin: '0 0 0 10'
   },
   
   ikWidgetType: null,
   
   initComponent: function() {
      var me = this;
      Ext.applyIf(me, {
         items: [
            {
               xtype: 'container',
               html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-home fa-lg fa-fw"></i>Home</a>'
            },
            {
               xtype: 'container',
               html: '<span style="color: #555"> > </span>'
            },
            {
               xtype: 'container',
               html: '<a href="#" style="color: #555; font-size: 14px; text-decoration: none"> ' + me.ikWidgetType + '</a>',
               margin: '0 40 0 10'
            },
            {
               xtype: 'button',
               text: 'New',
               iconCls: 'fa fa-plus',
               handler: 'onNew'

            },
            {
               xtype: 'button',
               text: 'Edit',
               iconCls: 'fa fa-edit',
               handler: 'onEdit'
            },
            {
               xtype: 'button',
               text: 'Copy',
               iconCls: 'fa fa-copy',
//         disabled: true, 
               handler: 'onCopy'
            }
         ]
      });

      me.callParent(arguments);
      
   }

});