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
               glyph: 0xf067,
               handler: 'onNew',
               scale: 'medium'

            },
            {
               xtype: 'button',
               text: 'Edit',
               glyph: 0xf044,
               handler: 'onEdit',
               scale: 'medium'
            },
            {
               xtype: 'button',
               text: 'Copy',
               glyph: 0xf0c5,
//         disabled: true, 
               handler: 'onCopy',
               scale: 'medium'
            }
         ]
      });

      me.callParent(arguments);
      
   }

});