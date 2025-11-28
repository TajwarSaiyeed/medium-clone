import Post from "@/components/post";

type Params = Promise<{
  slug: string;
}>;

const PostPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  return <Post slug={slug} />;
};

export default PostPage;
