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
          label: 'Notice',
          path: '/category/notice'
        },
        {
          label: 'Dev Notes',
          path: '/category/dev-notes'
        },
        {
          label: 'Study',
          path: '/category/study',
          children: [
            {
              label: 'Javascript',
              path: '/category/study/javascript'
            },
            {
              label: 'ReactJS',
              path: '/category/study/reactjs'
            }
          ]
        },
        {
          label: 'Algorithm',
          path: '/category/algorithm',
          children: [
            {
              label: 'Hacker Rank',
              path: '/category/algorithm/hackerrank'
            },
            {
              label: 'Programmers',
              path: '/category/algorithm/programmers'
            }
          ]
        },
        {
          label: 'Books',
          path: '/category/books',
          children: [
            {
              label: 'dev',
              path: '/category/books/dev'
            },
            {
              label: 'other',
              path: '/category/books/other'
            }
          ]
        },
        {
          label: 'Hobbies',
          path: '/category/hobbies'
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
