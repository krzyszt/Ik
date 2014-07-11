Ext.define('Ik.view.toolbar.MainToolbar', {
   extend: 'Ext.container.Container',
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
         html: '<a href="#" style="color: #4c8fbd; font-size: 14px; text-decoration: none"><i class="fa fa-group"></i><span> Customers</span></a>',
         listeners: {
            click: {
               element: 'el',
               fn: function() {
                  var tabs = Ext.ComponentQuery.query('ikMaintab')[0];
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

   ]

});