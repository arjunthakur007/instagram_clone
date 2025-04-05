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
    <div className="max-w-150 w-screen ">
      <div className="w-full h-16 bg-amber-50"></div>

      {card.map((i) => (
         <div style={{ width: '300px', border: '1px solid #ccc', fontFamily: 'sans-serif', margin: '20px auto' }}>
         <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
           <img
             src={i.user.image}
             alt="Profile"
             style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
           />
           <div>
             <p style={{ margin: 0, fontWeight: 'bold' }}>{i.user.profile_name}</p>
             <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>{i.user.song_name}</p>
           </div>
         </div>
   
         <img src={i.media.post_image} alt="Post" style={{ width: '100%', display: 'block' }} />
   
         <div style={{ padding: '10px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
             <div>
               <span>{i.reaction_section.buttons.like_icon}</span>
               <span>{i.reaction_section.buttons.comment_icon}</span>
               <span>{i.reaction_section.buttons.dm_icon}</span>
               <span>{i.reaction_section.buttons.save_icon}</span>
             </div>
             <span>{i.reaction_section.buttons.like_count} likes</span>
           </div>
   
           <p style={{ margin: '5px 0', fontSize: '14px', color: '#888' }}>
             {i.reaction_section.comment_section.view_comments}
           </p>
           <p style={{ margin: '5px 0', fontSize: '14px', color: '#888' }}>
             {i.reaction_section.comment_section.add_comment} {i.reaction_section.comment_section.emoji}
           </p>
         </div>
       </div>
      ))}
    </div>
  );
};
