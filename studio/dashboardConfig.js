export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b1c109c75e1eb7ee75886a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r3w7tpme',
                  apiId: '7a6036ec-7049-47e0-924a-a35a99cedfba'
                },
                {
                  buildHookId: '60b1c10a6abff9ca017899c8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z2ctovvu',
                  apiId: '7c0ea6e9-5c4f-4d14-88d9-bbba0cc2c87c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amh22/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z2ctovvu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
