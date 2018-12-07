module.exports = {
    menus: [
      {
        key: 5,
        alias: 'home',
        name: 'Home',
        icon: 'home'
      },
      {
        key: 1,
        name: 'Pages',
        icon: 'database',
        child: [
          {
            alias: 'form',
            name: 'Form',
            key: 102
          },
          {
            alias: 'calendar',
            name: 'Calendar',
            key: 104
          },
          {
            alias: 'timeline',
            name: 'Timeline',
            key: 105
          },
          {
            alias: 'steps',
            name: 'Steps',
            key: 106
          }
        ]
      }
    ]
  }
