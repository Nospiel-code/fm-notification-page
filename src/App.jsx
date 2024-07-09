import { useState } from "react";
import "./App.css";

import Notification from "./Notification";
import Header from "./Header";

let data = [
  {
    id: "1",
    author: {
      name: "Mark Webber",
      src: "../public/images/avatar-mark-webber.webp",
      href: "#",
    },
    action: "reacted to your recent post",
    link: {
      text: "My first tournament today!",
      href: "#",
    },
    time: "1m ago",
    hasBeenRead: false,
  },
  {
    id: "2",
    author: {
      name: "Angela Gray",
      src: "../public/images/avatar-angela-gray.webp",
      href: "#",
    },
    action: "followed you",
    time: "5m ago",
    hasBeenRead: false,
  },
  {
    id: "3",
    author: {
      name: "Jacob Thompson",
      src: "../public/images/avatar-jacob-thompson.webp",
      href: "#",
    },
    action: "has joined your group",
    link: {
      text: "Chess Club",
      href: "#",
    },
    time: "1day ago",
    hasBeenRead: false,
  },
  {
    id: "4",
    author: {
      name: "Rizky Hasanuddin",
      src: "../public/images/avatar-rizky-hasanuddin.webp",
      href: "#",
    },
    action: "sent you a private message",
    time: "5d ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    hasBeenRead: true,
  },
  {
    id: "5",
    author: {
      name: "Kimberly Smith",
      src: "../public/images/avatar-kimberly-smith.webp",
      href: "#",
    },
    action: "commented on your picture",
    time: "1week ago",
    img: {
      src: "../public/images/image-chess.webp",
      href: "#",
      alt: "chess game",
    },
    hasBeenRead: true,
  },
  {
    id: "6",
    author: {
      name: "Nathan Peterson",
      src: "../public/images/avatar-nathan-peterson.webp",
      href: "#",
    },
    action: "reacted to your recent post",
    link: {
      text: "5 end-game strategies to increase your win rate",
      href: "#",
    },
    time: "1day ago",
    hasBeenRead: true,
  },
  {
    id: "7",
    author: {
      name: "Anna Kim",
      src: "../public/images/avatar-anna-kim.webp",
      href: "#",
    },
    action: "left the group",
    link: {
      text: "Chess Club",
      href: "#",
    },
    time: "2weeks ago",
    hasBeenRead: true,
  },
];

function App() {
  const [notifications, setNotifications] = useState(data);

  function markAllAsRead() {
    setNotifications((notifications) =>
      notifications.map((n) => ({ ...n, hasBeenRead: true })),
    );
  }

  function markNotificationAsRead(id) {
    setNotifications((notifications) =>
      notifications.map((n) => (n.id === id ? { ...n, hasBeenRead: true } : n)),
    );
  }

  return (
    <div>
      <div className="max-w-[48rem] gap-1 rounded-lg bg-secondary100 px-4 py-10 shadow-lg shadow-secondary300 md:px-8">
        <Header notifications={notifications} onMarkAllAsRead={markAllAsRead} />
        <main className="grid gap-2">
          {notifications.map((n) => (
            <Notification
              notificationObj={n}
              key={n.id}
              onMarkNotificationAsRead={markNotificationAsRead}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
