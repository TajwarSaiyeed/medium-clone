"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import PostItem from "@/components/post-item";
import { Spinner } from "@/components/ui/spinner";

const Posts = () => {
  const posts = useQuery(api.posts.getPosts);

  if (!posts) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
