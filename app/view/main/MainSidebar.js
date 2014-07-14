Ext.define('Ik.view.main.MainSidebar', {
   extend: 'Ext.panel.Panel',
   
   xtype: 'ikMainSidebar',
   
   title: 'Modules',
   
   layout: {
      type: 'accordion'
   },
   width: 250,
   split: true,
   collapsible: true,
   border: true,
   
   items: [
      {
         title: 'Hidden',
         hidden: true
      },
      {
         title: 'Dashboard',
         iconCls: 'fa fa-tachometer'
      },
      {
         title: 'Administration',
         iconCls: 'fa fa-cog'
      },
      {
         title: 'Sales Oportunities',
         iconCls: 'fa fa-user'
      },
      {
         title: 'Customers',
         iconCls: 'fa fa-users'
      },
      {
         title: 'Sales',
         iconCls: 'fa fa-credit-card'
      },
      {
         title: 'Purchasing',
         iconCls: 'fa fa-tag'
      },
      
      {
         title: 'Inventory',
         iconCls: 'fa fa-cubes'
      },
      {
         title: 'Reports',
         iconCls: 'fa fa-bar-chart-o'
      }
   ]
});


