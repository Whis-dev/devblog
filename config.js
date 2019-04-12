'use strict';

module.exports = {
  url: 'https://whisdev.netlify.com',
  title: 'Blog by Whis',
  subtitle: 'Junior Web Front End Developer',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'Categories',
      path: '/categories',
      children: [
        {
          label: 'blogInfo',
          path: '/category/blog-intro'
        }
      ]
    },
    {
      label: 'About me',
      path: '/pages/about'
    }
  ],
  author: {
    name: 'Whis',
    photo: '/photo.jpg',
    bio: 'Junior Web Front End Developer',
    contacts: {
      email: 'whisdevj@gmail.com',
      telegram: '#',
      twitter: '#',
      github: 'whis-dev',
      rss: '#',
      vkontakte: '#'
    }
  }
};
