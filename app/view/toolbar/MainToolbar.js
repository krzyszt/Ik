Ext.define('Ik.view.toolbar.MainToolbar', {
   extend: 'Ext.container.Container',
   requires: [
      'Ik.view.toolbar.MainToolbarController'
   ],
   controller: 'mainToolbar',
   
   xtype: 'ikMainToolbar',
   height: 30,
   padding: '7 7 7 20',
   style: 'background-color: white;',
   layout: {
      type: 'hbox'
   },
   defaults: {
      margin: '0 0 0 14'
   },
   initComponent: function() {
      var me = this;

      Ext.applyIf(me, {
         items: [
            {
               xtype: 'container',
               html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-dashboard fa-lg"></i><span> Dashboard</span></a>',
               listeners: {
                  click: {
                     element: 'el',
                     fn: function() {
                        var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
                        var tab = Ext.ComponentQuery.query('ikDashboard')[0];
                        if (!tab) {
                           tab = Ext.widget('ikDashboard');
                           tabs.add(tab);
                           tabs.setActiveTab(tab);
                        } else {
                           tabs.setActiveTab(tab);
                        }
                     }
                  }
               }
            },
            {
               xtype: 'container',
               html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-smile-o"></i><span> Leads</span></a>',
               listeners: {
                  click: {
                     element: 'el',
                     fn: function() {
                        var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
                        var tab = Ext.ComponentQuery.query('ikLeadGrid')[0];
                        if (!tab) {
                           tab = Ext.widget('ikLeadGrid');
                           tabs.add(tab);
                           tabs.setActiveTab(tab);
                        } else {
                           tabs.setActiveTab(tab);
                        }
                     }
                  }
               }
            },
            {
               xtype: 'container',
               html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-user"></i><span> Contacts</span></a>',
               listeners: {
                  click: {
                     element: 'el',
                     fn: function() {
                        var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
                        var tab = Ext.ComponentQuery.query('ikContactGrid')[0];
                        if (!tab) {
                           tab = Ext.widget('ikContactGrid');
                           tabs.add(tab);
                           tabs.setActiveTab(tab);
                        } else {
                           tabs.setActiveTab(tab);
                        }
                     }
                  }
               }
            },
            {
               xtype: 'container',
               html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-group"></i><span> Customers</span></a>',
               listeners: {
                  click: {
                     element: 'el',
                     fn: function() {
                        var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
                        var tab = Ext.ComponentQuery.query('ikCustomerGrid')[0];
                        if (!tab) {
                           tab = Ext.widget('ikCustomerGrid');
                           tabs.add(tab);
                           tabs.setActiveTab(tab);
                        } else {
                           tabs.setActiveTab(tab);
                        }
                     }
                  }
               }
            },
            {
               xtype: 'container',
               html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-truck"></i><span> Suppliers</span></a>',
               listeners: {
                  click: {
                     element: 'el',
                     fn: function() {
                        var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
                        var tab = Ext.ComponentQuery.query('ikSupplierGrid')[0];
                        if (!tab) {
                           tab = Ext.widget('ikSupplierGrid');
                           tabs.add(tab);
                           tabs.setActiveTab(tab);
                        } else {
                           tabs.setActiveTab(tab);
                        }
                     }
                  }
               }
            },
            {
               xtype: 'container',
               html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-user"></i><span> Users</span></a>',
               listeners: {
                  click: {
                     element: 'el',
                     fn: function() {
                        var tabs = Ext.ComponentQuery.query('ikMainTab')[0];
                        var tab = Ext.ComponentQuery.query('ikUserGrid')[0];
                        if (!tab) {
                           tab = Ext.widget('ikUserGrid');
                           tabs.add(tab);
                           tabs.setActiveTab(tab);
                        } else {
                           tabs.setActiveTab(tab);
                        }
                     }
                  }
               }
            },
         ]

      });

      me.callParent(arguments);
   }
});