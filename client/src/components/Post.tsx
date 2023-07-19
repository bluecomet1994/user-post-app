import { useState } from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";
import Image from "next/image";

const Post = (props: any) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="w-96 p-4 bg-white border-2 border-gray-300 my-8">
      <h1 className="font-bold text-2xl">Post Title - What is better than yours?</h1>
      <hr />
      <div className="flex justify-end items-center mb-4">
        <Image alt="user" src={'/man.jpg'} width={32} height={32} className="rounded-full" />
        <p className="text-sm">Morgan Mastrangelo</p>
      </div>
      <p className={`text-sm my-4 ${!showDetail && 'truncate'}`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor. Augue ut lectus arcu bibendum. Sit amet porttitor eget dolor morbi non arcu risus quis. Etiam dignissim diam quis enim. In nisl nisi scelerisque eu ultrices vitae. Suspendisse ultrices gravida dictum fusce ut placerat. Sit amet justo donec enim diam. Hac habitasse platea dictumst vestibulum rhoncus. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Bibendum neque egestas congue quisque egestas diam in.

      Ullamcorper dignissim cras tincidunt lobortis feugiat. Interdum velit euismod in pellentesque. Eu mi bibendum neque egestas congue quisque egestas diam. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Enim diam vulputate ut pharetra. Nulla aliquet enim tortor at auctor urna nunc id cursus. Maecenas ultricies mi eget mauris. Eget aliquet nibh praesent tristique magna sit. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Purus non enim praesent elementum facilisis leo vel fringilla est. Varius vel pharetra vel turpis nunc. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Curabitur vitae nunc sed velit dignissim sodales ut. Habitant morbi tristique senectus et netus et malesuada fames ac. Nibh praesent tristique magna sit amet. Est ultricies integer quis auctor elit sed vulputate mi. Scelerisque felis imperdiet proin fermentum leo vel. Rutrum tellus pellentesque eu tincidunt. Nunc faucibus a pellentesque sit.
      </p>

      <div className="flex justify-end">
        <button
          className="hover:text-blue-500"
          onClick={() => setShowDetail(prev => !prev)}
        >
          {showDetail ? 'Show less' : 'Show more'}
        </button>
      </div>

      <div className="flex">
        <LikeButton className="mx-2" />
        <UnlikeButton className="mx-2" />
      </div>
    </div>
  )
}

export default Post;