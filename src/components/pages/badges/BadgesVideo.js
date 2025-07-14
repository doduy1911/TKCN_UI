// "use client"
// import { posts } from "@/config/data"
// import Image from "next/image"
// import Link from "next/link"

// const BadgesVideo = () => {
//   return (
//     <div className="grid grid-cols-4 gap-[30px] py-[30px]">
//       {posts?.map((post, index) => {
//         return (
//           <Link prefetch={false} href={`${post.url}`} key={index}>
//             <div className="min-h-[180px]">
//               <Image
//                 src={post.url}
//                 alt=""
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 className="m-[0px] p-[0px]"
//                 style={{ width: "100%", height: "180px", objectFit: "cover" }}
//               />
//             </div>
//             <div className="flex-1">
//               <h5 className="text-[1.15em] font-bold">
//                 {post?.name}
//               </h5>
//               <p className="m-[0px] p-[0px] text-[14px] opacity-80">
//                 {post?.describe?.split(" ").slice(0, 30).join(" ")}
//               </p>
//             </div>
//           </Link>
//         )
//       })}
//     </div>
//   )
// }

// export default BadgesVideo