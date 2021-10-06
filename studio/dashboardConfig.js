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
                  buildHookId: '615de9a216ba4d00ebe3713c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6qt7u4hg',
                  apiId: '97c611ab-0ea0-4142-abbe-16af25fb17b6'
                },
                {
                  buildHookId: '615de9a3c1f5b900a4eca353',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1vzhbfj1',
                  apiId: 'e0bd8db4-026f-4450-9f68-c181588ca387'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ojread/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1vzhbfj1.netlify.app', category: 'apps'}
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
