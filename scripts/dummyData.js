const fetch = require('node-fetch');

/* ================= CREATOR DATA =================*/

var creators = [
  {
    name: 'Addicted to CG',
    subscribers: 9242,
    user: 'Panagiotis Petridis'
  }
];

for(let creator of creators) {
  console.log(creator);
  fetch('http://localhost:4000/creators', {
    method: 'POST',
    body: JSON.stringify(creator),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}

/* ================= USER DATA =================*/

var users = [
  {
    username: 'Panagiotis Petridis',
    email: 'lpanagiotispetridisl@gmail.com',
    password: 'weqf123f1f'
  },
  {
    username: 'Wesley Henderson',
    email: 'Wesley.Henderson@gmail.com',
    password: 'f123f'
  },
  {
    username: 'centaurixon',
    email: 'centaurixon@gmail.com',
    password: '12fqwf123ffqwfeqw'
  },
  {
    username: 'scott lee',
    email: 'scott.lee@gmail.com',
    password: '12fwqef123fqwe'
  },
  {
    username: 'QTube',
    email: 'QTube@gmail.com',
    password: 'f123fqwe23f'
  },
  {
    username: 'Jenova Izq',
    email: 'lJenova.Izql@gmail.com',
    password: '213f123f123f'
  }
];

for(let user of users) {
  fetch('http://localhost:4000/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}

/* ================= VIDEO DATA =================*/

var videos = [
  {
    comments: [
      {username: 'Wesley Henderson', comment: 'hot tip: if you click exclude on the layer panel for the opposite layer then those shadows will be gone.'},
      {username: 'centaurixon', comment: 'nice tutorial. but I find it a bit annoying, if I want to learn something about layers, I don\'t really need to have explained how to add a cube, go to edit mode, adding loop cuts and stuff like that. you can show this stuff of a beginner\'s tutorial.'},
      {username: 'scott lee', comment: 'Extremely useful. I may need it soon.'},
      {username: 'QTube', comment: 'Very good and usful video.\ncan you please do the same with environment?'},
      {username: 'Jenova Izq', comment: 'awesome video friend, you made me subscribed. looking forward to learn from you.'}
    ],
    creator: 'Addicted to CG',
    likes: 369,
    dislikes: 54,
    views: 33875,
    shares: 200,
    tags: ['blender','layers', 'animation', 'tutorial'],
    title: 'Blender Render Layers Tutorial',
    description: 'Hi there! So of this video I will be showing you guys how cool render layers are and how you can use them. I will be using Cycles for this example but Blender Render also works with render layers. I am going over step by step on using the blende render layers, starting by setting up a demo scene (which you can also download if you want) as well as setting up the actual render layers. Using the blender render layers can be not only a huge time saver but also a very useful tool not only for beginners but also for professionals alike ( I sound like a salesman person don’t I? :’) ). Anyways I hope that by watching my “Blender Render Layers Tutorial” you learnt at least 1 new thing and if you didn’t I hope that you had fun watching me trying to explain things! :)',
    watch_time: 6.5,
    date: new Date(2016, 1, 15, 13, 00, 0)
  },
  {
    comments: [
      {username: 'Wesley Henderson', comment: 'hot tip: if you click exclude on the layer panel for the opposite layer then those shadows will be gone.'},
      {username: 'centaurixon', comment: 'nice tutorial. but I find it a bit annoying, if I want to learn something about layers, I don\'t really need to have explained how to add a cube, go to edit mode, adding loop cuts and stuff like that. you can show this stuff of a beginner\'s tutorial.'},
      {username: 'scott lee', comment: 'Extremely useful. I may need it soon.'},
      {username: 'QTube', comment: 'Very good and usful video.\ncan you please do the same with environment?'},
      {username: 'Jenova Izq', comment: 'awesome video friend, you made me subscribed. looking forward to learn from you.'}
    ],
    creator: 'Addicted to CG',
    likes: 2312,
    dislikes: 14124,
    views: 5125,
    shares: 5123,
    tags: ['blender','Text', '3D', 'animation', 'tutorial'],
    title: 'How to make cool 3D text of Blender',
    description: 'Hi there! So of this video I will be showing you guys how cool render layers are and how you can use them. I will be using Cycles for this example but Blender Render also works with render layers. I am going over step by step on using the blende render layers, starting by setting up a demo scene (which you can also download if you want) as well as setting up the actual render layers. Using the blender render layers can be not only a huge time saver but also a very useful tool not only for beginners but also for professionals alike ( I sound like a salesman person don’t I? :’) ). Anyways I hope that by watching my “Blender Render Layers Tutorial” you learnt at least 1 new thing and if you didn’t I hope that you had fun watching me trying to explain things! :)',
    watch_time: 8.5,
    date: new Date(2017, 1, 15, 13, 00, 0)
  },
  {
    comments: [
      {username: 'Wesley Henderson', comment: 'hot tip: if you click exclude on the layer panel for the opposite layer then those shadows will be gone.'},
      {username: 'centaurixon', comment: 'nice tutorial. but I find it a bit annoying, if I want to learn something about layers, I don\'t really need to have explained how to add a cube, go to edit mode, adding loop cuts and stuff like that. you can show this stuff of a beginner\'s tutorial.'},
      {username: 'scott lee', comment: 'Extremely useful. I may need it soon.'},
      {username: 'QTube', comment: 'Very good and usful video.\ncan you please do the same with environment?'},
      {username: 'Jenova Izq', comment: 'awesome video friend, you made me subscribed. looking forward to learn from you.'}
    ],
    creator: 'Addicted to CG',
    likes: 89456,
    dislikes: 5474,
    views: 334507875,
    shares: 232400,
    tags: ['blender','save money', 'money', 'rendering','animation', 'tutorial'],
    title: 'Save money when rendering overnight - Blender',
    description: 'Hi there! So of this video I will be showing you guys how cool render layers are and how you can use them. I will be using Cycles for this example but Blender Render also works with render layers. I am going over step by step on using the blende render layers, starting by setting up a demo scene (which you can also download if you want) as well as setting up the actual render layers. Using the blender render layers can be not only a huge time saver but also a very useful tool not only for beginners but also for professionals alike ( I sound like a salesman person don’t I? :’) ). Anyways I hope that by watching my “Blender Render Layers Tutorial” you learnt at least 1 new thing and if you didn’t I hope that you had fun watching me trying to explain things! :)',
    watch_time: 4.5,
    date: new Date(2017, 5, 10, 17, 00, 0)
  },
  {
    comments: [
      {username: 'Wesley Henderson', comment: 'hot tip: if you click exclude on the layer panel for the opposite layer then those shadows will be gone.'},
      {username: 'centaurixon', comment: 'nice tutorial. but I find it a bit annoying, if I want to learn something about layers, I don\'t really need to have explained how to add a cube, go to edit mode, adding loop cuts and stuff like that. you can show this stuff of a beginner\'s tutorial.'},
      {username: 'scott lee', comment: 'Extremely useful. I may need it soon.'},
      {username: 'QTube', comment: 'Very good and usful video.\ncan you please do the same with environment?'},
      {username: 'Jenova Izq', comment: 'awesome video friend, you made me subscribed. looking forward to learn from you.'}
    ],
    creator: 'Addicted to CG',
    likes: 512312,
    dislikes: 51235,
    views: 312353875,
    shares: 34123,
    tags: ['blender','tree', '3D', 'how-to', 'animation', 'tutorial'],
    title: 'Blender Tree Tutorial',
    description: 'Hi there! So of this video I will be showing you guys how cool render layers are and how you can use them. I will be using Cycles for this example but Blender Render also works with render layers. I am going over step by step on using the blende render layers, starting by setting up a demo scene (which you can also download if you want) as well as setting up the actual render layers. Using the blender render layers can be not only a huge time saver but also a very useful tool not only for beginners but also for professionals alike ( I sound like a salesman person don’t I? :’) ). Anyways I hope that by watching my “Blender Render Layers Tutorial” you learnt at least 1 new thing and if you didn’t I hope that you had fun watching me trying to explain things! :)',
    watch_time: 10.5,
    date: new Date(2016, 11, 29, 20, 20, 0)
  },
  {
    comments: [
      {username: 'Wesley Henderson', comment: 'hot tip: if you click exclude on the layer panel for the opposite layer then those shadows will be gone.'},
      {username: 'centaurixon', comment: 'nice tutorial. but I find it a bit annoying, if I want to learn something about layers, I don\'t really need to have explained how to add a cube, go to edit mode, adding loop cuts and stuff like that. you can show this stuff of a beginner\'s tutorial.'},
      {username: 'scott lee', comment: 'Extremely useful. I may need it soon.'},
      {username: 'QTube', comment: 'Very good and usful video.\ncan you please do the same with environment?'},
      {username: 'Jenova Izq', comment: 'awesome video friend, you made me subscribed. looking forward to learn from you.'}
    ],
    creator: 'Addicted to CG',
    likes: 745,
    dislikes: 4567,
    views: 4567,
    shares: 74,
    tags: ['blender','characters', 'modeling', 'addon','animation', 'tutorial'],
    title: 'How to make human characters of Blender',
    description: 'Hi there! So of this video I will be showing you guys how cool render layers are and how you can use them. I will be using Cycles for this example but Blender Render also works with render layers. I am going over step by step on using the blende render layers, starting by setting up a demo scene (which you can also download if you want) as well as setting up the actual render layers. Using the blender render layers can be not only a huge time saver but also a very useful tool not only for beginners but also for professionals alike ( I sound like a salesman person don’t I? :’) ). Anyways I hope that by watching my “Blender Render Layers Tutorial” you learnt at least 1 new thing and if you didn’t I hope that you had fun watching me trying to explain things! :)',
    watch_time: 5.5,
    date: new Date(2016, 4, 22, 11, 00, 0)
  },
  {
    comments: [
      {username: 'Wesley Henderson', comment: 'hot tip: if you click exclude on the layer panel for the opposite layer then those shadows will be gone.'},
      {username: 'centaurixon', comment: 'nice tutorial. but I find it a bit annoying, if I want to learn something about layers, I don\'t really need to have explained how to add a cube, go to edit mode, adding loop cuts and stuff like that. you can show this stuff of a beginner\'s tutorial.'},
      {username: 'scott lee', comment: 'Extremely useful. I may need it soon.'},
      {username: 'QTube', comment: 'Very good and usful video.\ncan you please do the same with environment?'},
      {username: 'Jenova Izq', comment: 'awesome video friend, you made me subscribed. looking forward to learn from you.'}
    ],
    creator: 'Addicted to CG',
    likes: 1234,
    dislikes: 123,
    views: 12341,
    shares: 1234,
    tags: ['blender','Hair', 'animation', 'tutorial'],
    title: 'How to make Hair of Blender',
    description: 'Hi there! So of this video I will be showing you guys how cool render layers are and how you can use them. I will be using Cycles for this example but Blender Render also works with render layers. I am going over step by step on using the blende render layers, starting by setting up a demo scene (which you can also download if you want) as well as setting up the actual render layers. Using the blender render layers can be not only a huge time saver but also a very useful tool not only for beginners but also for professionals alike ( I sound like a salesman person don’t I? :’) ). Anyways I hope that by watching my “Blender Render Layers Tutorial” you learnt at least 1 new thing and if you didn’t I hope that you had fun watching me trying to explain things! :)',
    watch_time: 6.5,
    date: new Date(2018, 8, 17, 18, 00, 0)
  },
  {
    comments: [
      {username: 'Wesley Henderson', comment: 'hot tip: if you click exclude on the layer panel for the opposite layer then those shadows will be gone.'},
      {username: 'centaurixon', comment: 'nice tutorial. but I find it a bit annoying, if I want to learn something about layers, I don\'t really need to have explained how to add a cube, go to edit mode, adding loop cuts and stuff like that. you can show this stuff of a beginner\'s tutorial.'},
      {username: 'scott lee', comment: 'Extremely useful. I may need it soon.'},
      {username: 'QTube', comment: 'Very good and usful video.\ncan you please do the same with environment?'},
      {username: 'Jenova Izq', comment: 'awesome video friend, you made me subscribed. looking forward to learn from you.'}
    ],
    creator: 'Addicted to CG',
    likes: 7475,
    dislikes: 4567,
    views: 457457,
    shares: 3456,
    tags: ['blender','hair', 'curly','animation', 'tutorial'],
    title: 'Blender Curly Hair Tutorial - Easy',
    description: 'Hi there! So of this video I will be showing you guys how cool render layers are and how you can use them. I will be using Cycles for this example but Blender Render also works with render layers. I am going over step by step on using the blende render layers, starting by setting up a demo scene (which you can also download if you want) as well as setting up the actual render layers. Using the blender render layers can be not only a huge time saver but also a very useful tool not only for beginners but also for professionals alike ( I sound like a salesman person don’t I? :’) ). Anyways I hope that by watching my “Blender Render Layers Tutorial” you learnt at least 1 new thing and if you didn’t I hope that you had fun watching me trying to explain things! :)',
    watch_time: 9.5,
    date: new Date(2019, 2, 19, 19, 19, 19)
  }
];

for(let video of videos) {
  fetch('http://localhost:4000/videos', {
    method: 'POST',
    body: JSON.stringify(video),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}