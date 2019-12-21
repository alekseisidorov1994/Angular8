import { Injectable } from '@angular/core';
export interface Post {
  id?: number;
  user?: any;
  content?: any;
  comments?: any;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
posts: Post[] = [
      {
        id: 0,
        user: {
          name: 'Alex',
          family: 'Smith',
          image: './assets/img/avatars/01.png'
        },
        content: {
          image: ['./assets/img/posts/man-in-forest.jpg'],
          description: 'Постоянно манящие в даль путешествия открывают безграничные возможности для самопознания.',
          tags: ['#forest', '#travel', '#journey', '#holiday']
        },
        comments: [
          {
            user: {
              name: 'Anna',
              family: 'Dell',
              image: './assets/img/avatars/02.png'
            },
            content: 'Красиво. '
          },
          {
            user: {
              name: 'Aleksey',
              family: 'Sidorov',
              image: './assets/img/avatars/06.jpg'
            },
            content: 'Согласен, очень круто '
          },
          {
            user: {
              name: 'Sasha',
              family: 'Sorova',
              image: './assets/img/avatars/03.png'
            },
            content: 'Давно уехал? '
          }
        ]
      },
      {
        id: 1,
        user: {
          name: 'Alex',
          family: 'Smith',
          image: './assets/img/avatars/01.png'
        },
        content: {
          image: ['./assets/img/posts/girl-pc.jpg'],
          description: 'Кодить - это просто)',
          tags: ['#js', '#jsnative', '#fanny', '#holiday']
        },
        comments: [
        {
          user: {
            name: 'Mark',
            family: 'Link',
            image: './assets/img/avatars/04.png'
          },
          content: 'ха-ха-ха. '
        },
        {
          user: {
            name: 'Mark',
            family: 'Link',
            image: './assets/img/avatars/04.png'
          },
          content: 'тоже так думаю)  '
        },
        {
          user: {
            name: 'Masha',
            family: 'Ford',
            image: './assets/img/avatars/05.png'
          },
          content: 'Html за час и норм? '
        },
      ]},
      {
          id: 2,
          user: {
            name: 'Alex',
            family: 'Smith',
            image: './assets/img/avatars/01.png'
          },
          content: {
            image: ['./assets/img/posts/second.jpg'],
            description: 'Лето самое лучшее время)',
            tags: ['#summer', '#smile', '#hat']
          },
          comments: [{
            user: {
              name: 'Masha',
              family: 'Ford',
              image: './assets/img/avatars/05.png'
            },
            content: 'А мне зима больше нравится '
          },
          {
            user: {
              name: 'Mark',
              family: 'Link',
              image: './assets/img/avatars/04.png'
            },
            content: 'Зимой тоже хорошо) '
          },
          {
            user: {
              name: 'Sasha',
              family: 'Sorova',
              image: './assets/img/avatars/03.png'
            },
            content: 'я за осень'
          }
        ]
      },
      {
          id: 3,
          user: {
            name: 'Alex',
            family: 'Smith',
            image: './assets/img/avatars/01.png'
          },
          content: {
            image: [
              './assets/img/posts/js-carousel/00.jpg',
              './assets/img/posts/js-carousel/01.jpg',
              './assets/img/posts/js-carousel/02.jpg',
              './assets/img/posts/js-carousel/03.jpg'
            ],
            description: 'Лето самое лучшее время)',
            tags: ['#summer', '#smile', '#hat']
          },
          comments: [{
            user: {
              name: 'Masha',
              family: 'Ford',
              image: './assets/img/avatars/05.png'
            },
            content: 'А мне зима больше нравится '
          },
          {
            user: {
              name: 'Mark',
              family: 'Link',
              image: './assets/img/avatars/04.png'
            },
            content: 'Зимой тоже хорошо) '
          },
          {
            user: {
              name: 'Sasha',
              family: 'Sorova',
              image: './assets/img/avatars/03.png'
            },
            content: 'я за осень'
          }
        ]
      }
    ];
}
