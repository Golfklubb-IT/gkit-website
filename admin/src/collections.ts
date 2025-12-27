import { buildCollection } from 'firecms'

export const collections = [
  buildCollection({
    name: 'Home',
    path: 'content/home',
    icon: 'home',
    properties: {
      title: {
        dataType: 'string',
        title: 'Title',
        validation: { required: true },
      },
      description: {
        dataType: 'string',
        title: 'Description',
        columnWidth: 300,
      },
      hero_image: {
        dataType: 'string',
        title: 'Hero Image URL',
      },
      tagline: {
        dataType: 'string',
        title: 'Tagline',
      },
    },
  }),
  buildCollection({
    name: 'Solutions',
    path: 'content/solutions',
    icon: 'star',
    properties: {
      title: {
        dataType: 'string',
        title: 'Title',
        validation: { required: true },
      },
      description: {
        dataType: 'string',
        title: 'Description',
      },
      icon: {
        dataType: 'string',
        title: 'Icon (emoji or URL)',
      },
    },
  }),
  buildCollection({
    name: 'Apps',
    path: 'content/apps',
    icon: 'apps',
    properties: {
      name: {
        dataType: 'string',
        title: 'App Name',
        validation: { required: true },
      },
      description: {
        dataType: 'string',
        title: 'Description',
      },
      status: {
        dataType: 'string',
        title: 'Status',
        enumValues: {
          beta: 'Beta',
          active: 'Active',
          planned: 'Planned',
        },
      },
    },
  }),
]
