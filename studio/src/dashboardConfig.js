export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f7344bbc2c56dc45223f648',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wkig9i7n',
                  apiId: '67f8f5fc-fc9f-429c-a7d0-a4cf8342d938'
                },
                {
                  buildHookId: '5f7344bb4a0f9b9c6ca5f66a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ydta56ok',
                  apiId: 'bf9bf65d-d22e-408d-96ac-7768d72b47c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/itsyarl/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ydta56ok.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
