import React from "react";

const Map = () => {
  //   Sidebar items
  const sidebaritems = [
    {
      title: "Home",
      icon: "🏠", // Or <HomeIcon /> from a library
      link: "/",
    },
    {
      title: "Search",
      icon: "🔍", // Or <SearchIcon />
      link: "/search",
    },
    {
      title: "Explore",
      icon: "🧭", // Or <ExploreIcon />
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
      link: "/create",
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
         <div className="flex gap-4 w-full px-3 py-2 hover:bg-neutral-900 rounded-md transition-colors duration-300">
           <div className="text-lg"> {i.icon}</div>
           <div className="text-lg">{i.title}</div>
        </div>
       </div>
      ))}

    </div>
  );

  
};

export default Map;
