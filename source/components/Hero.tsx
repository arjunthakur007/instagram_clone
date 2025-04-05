// rafce
import React from "react";

export const Hero = () => {
  const card = [
    {
      user: {
        image: "img",
        profile_name: "Arjun Thakur",
        song_name: "A Beautiful Day - U2",
      },

      media: {
        post_image: "https://example.com/sunset_photo.jpg",
      },

      reaction_section: {
        buttons: {
          like_icon: "❤️",
          comment_icon: "💬",
          dm_icon: "✈️",
          save_icon: "🔖",
          like_count: "123",
        },

        comment_section: {
          view_comments: "View all 15 comments",
          add_comment: "Add a comment...",
          emoji: "😊",
        },
      },
    },
  ];

  return (
    <div className="max-w-150 w-screen">
  <div className="w-full h-16 bg-amber-50"></div>

  {card.map((i, index) => (
    <div key={index} className="w-[300px] border border-gray-300 font-sans mx-auto my-5">
      <div className="p-2 flex items-center">
        <img
          src={i.user.image}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="m-0 font-bold">{i.user.profile_name}</p>
          <p className="m-0 text-xs text-gray-500">{i.user.song_name}</p>
        </div>
      </div>

      <img src={i.media.post_image} alt="Post" className="w-full block" />

      <div className="p-2">
        <div className="flex justify-between">
          <div>
            <span>{i.reaction_section.buttons.like_icon}</span>
            <span>{i.reaction_section.buttons.comment_icon}</span>
            <span>{i.reaction_section.buttons.dm_icon}</span>
            <span>{i.reaction_section.buttons.save_icon}</span>
          </div>
          <span>{i.reaction_section.buttons.like_count} likes</span>
        </div>

        <p className="m-1 text-sm text-gray-500">
          {i.reaction_section.comment_section.view_comments}
        </p>
        <p className="m-1 text-sm text-gray-500">
          {i.reaction_section.comment_section.add_comment} {i.reaction_section.comment_section.emoji}
        </p>
      </div>
    </div>
  ))}
</div>
  );
};
