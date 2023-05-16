// import React, { useState } from 'react';
// import '../Booking.css'
// function Blog() {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       title: 'The Best Places to Travel in 2021',
//       date: 'January 15, 2021',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate turpis quis mauris elementum, non efficitur sapien consequat. Fusce at mollis elit. Nullam tincidunt lobortis urna, id scelerisque elit bibendum vel. Vestibulum congue lectus non felis ultricies ultricies. Sed rutrum metus vel elit malesuada, eget ultrices metus fringilla. Proin auctor, metus nec tristique volutpat, leo elit pulvinar orci, id consectetur dui velit eu orci.'
//     },
//     {
//       id: 2,
//       title: '10 Tips for Traveling on a Budget',
//       date: 'February 10, 2021',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate turpis quis mauris elementum, non efficitur sapien consequat. Fusce at mollis elit. Nullam tincidunt lobortis urna, id scelerisque elit bibendum vel. Vestibulum congue lectus non felis ultricies ultricies. Sed rutrum metus vel elit malesuada, eget ultrices metus fringilla. Proin auctor, metus nec tristique volutpat, leo elit pulvinar orci, id consectetur dui velit eu orci.'
//     },
//     {
//       id: 3,
//       title: 'The Top 5 Beaches in the World',
//       date: 'March 20, 2021',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate turpis quis mauris elementum, non efficitur sapien consequat. Fusce at mollis elit. Nullam tincidunt lobortis urna, id scelerisque elit bibendum vel. Vestibulum congue lectus non felis ultricies ultricies. Sed rutrum metus vel elit malesuada, eget ultrices metus fringilla. Proin auctor, metus nec tristique volutpat, leo elit pulvinar orci, id consectetur dui velit eu orci.'
//     }
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   function handleSearch(event) {
//     setSearchTerm(event.target.value);
//   }

//   const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

//   return (
//     <div>
//       <h1>Blog</h1>
//       <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
//       <div className="blog">
//         {filteredPosts.map(post => (
//           <div className="blog-post" key={post.id}>
//             <a href={`/blog/${post.id}`}>
//               <h2>{post.title}</h2>
//               <p>{post.content.substring(0, 100)}...</p>
//               <div className="meta">
//                 <span>{post.date}</span>
//                 <span>{post.comments} comments</span>
//               </div>
//             </a>
//             <div className="share-buttons">
//               <button>Share on Facebook</button>
//               <button>Share on Twitter</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;