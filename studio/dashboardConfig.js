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
                  buildHookId: '5ed0a113bab88d6720b83f9e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qn7ky8ok',
                  apiId: '7c987737-46be-4347-a7cf-38df395524d5'
                },
                {
                  buildHookId: '5ed0a1141c6391c23acdd86d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7t9awvfu',
                  apiId: '0db85f8a-f150-4f96-9d8c-ef47e2a68ecd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/francisadhi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7t9awvfu.netlify.app', category: 'apps'}
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
