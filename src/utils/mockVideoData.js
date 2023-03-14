let videoData = [
  { id: 1, name: "New" },
  { id: 2, name: "Music" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Gaming" },
  { id: 5, name: "News" },
  { id: 6, name: "Entertainment" },
];

let sideBarData = [
  {
    "id": 1,
    "name": "Home",
    "icon": "home",
    "url": "/",
    "is_active": true
  },
  {
    "id": 2,
    "name": "Trending",
    "icon": "trending_up",
    "url": "/trending",
    "is_active": false
  },
  {
    "id": 3,
    "name": "Subscriptions",
    "icon": "subscriptions",
    "url": "/subscriptions",
    "is_active": false
  },
  {
    "id": 4,
    "name": "Library",
    "icon": "video_library",
    "url": "/library",
    "is_active": false
  },
  {
    "id": 5,
    "name": "History",
    "icon": "history",
    "url": "/history",
    "is_active": false
  },
  {
    "id": 6,
    "name": "Your Videos",
    "icon": "video_call",
    "url": "/your_videos",
    "is_active": false
  },
  {
    "id": 7,
    "name": "Watch Later",
    "icon": "watch_later",
    "url": "/watch_later",
    "is_active": false
  }
];

export {videoData, sideBarData};
