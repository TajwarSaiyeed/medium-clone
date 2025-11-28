import CreateForm from "@/components/create-form";

const WriteBlog = () => {
  return (
    <div className="container max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Write a Story</h1>
      <p className="text-muted-foreground mb-8">
        Start your blog post here. Share your ideas with the world.
      </p>
      <CreateForm />
    </div>
  );
};

export default WriteBlog;
