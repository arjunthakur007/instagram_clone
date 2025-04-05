"use client"

import { useRouter } from "next/navigation";
import React from "react";

const Map = () => {
  //   Sidebar items
  const router = useRouter()
  const sidebaritems = [
    {
      title: "Home",
      icon: <svg aria-label="Home" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Home</title><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>, // Or <HomeIcon /> from a library
      link: "/",
    },
    {
      title: "Search",
      icon: <svg aria-label="Search" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Search</title><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>, // Or <SearchIcon />
      link: "/search",
    },
    {
      title: "Explore",
      icon: <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>, // Or <ExploreIcon />
      link: "/explore",
    },
    {
      title: "Reels",
      icon: "🎬", // Or <ReelsIcon />
      link: "/reels",
    },
    {
      title: "Messages",
      icon: "💬", // Or <MessagesIcon />
      link: "/messages",
    },
    {
      title: "Notifications",
      icon: "🔔", // Or <NotificationsIcon />
      link: "/notifications",
    },
    {
      title: "Create",
      icon: "➕", // Or <CreateIcon />
      link: "/create-page",
    },
    {
      title: "Profile",
      icon: "👤", // Or <ProfileIcon />
      link: "/profile",
    },

    {
      title: "More",
      icon: "☰", // Or <FaEllipsisH /> from react-icons/fa or <MenuIcon /> from Material UI
      link: "/more", // Or the actual link path
    }

  ];

  return (
    <div>
      <div className="mb-8 max-w-56">
        {/* logo */}
        <div id="logo">
          <h1 className="text-3xl">Instagram</h1>
        </div>
      </div>

      {sidebaritems.map((i) => (
       <div className="max-w-56">
         <div onClick={() => router.push(i.link)} className="flex gap-4 w-full px-3 py-2 hover:bg-neutral-900 rounded-md transition-colors duration-300">
           <div className="text-lg"> {i.icon}</div>
           <div className="text-lg">{i.title}</div>
        </div>
       </div>
      ))}

    </div>
  );

  
};

export default Map;
