// export default function Comment(){
//     return(
//         <>
//         {/* Comments Section */}
//         <div className="mt-8">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comments</h2>

//           {/* Comments List */}
//           <div className="mb-4">
//             {comments.length === 0 ? (
//               <p className="text-gray-200">
//                 No comments yet. Be the first to comment!
//               </p>
//             ) : (
//               <ul>
//                 {comments.map((comment, index) => (
//                   <li
//                     key={index}
//                     className="border-b border-gray-300 py-2 text-gray-200"
//                   >
//                     {comment}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Add New Comment */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
//             <input
//               type="text"
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               placeholder="Write a comment..."
//               className="text-black flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none w-full sm:w-auto"
//             />
//             <button
//               onClick={handleAddComment}
//               className="mt-4 sm:mt-0 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100"
//             >
//               Add Comment
//             </button>
//           </div>
//         </div>
//         </>
//     )
// }