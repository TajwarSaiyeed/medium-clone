"use client";
import { useAuth } from "@clerk/nextjs";

const RootPage = () => {
  const data = useAuth();
  const user = data.isSignedIn ? data.userId : null;

  if (!user) {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Medium Clone</h1>
        <p>Please sign in to view your messages.</p>
      </main>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Medium Clone</h1>
      <div>
        <p className="mb-2">Signed in as: {user}</p>
      </div>
    </main>
  );
};

export default RootPage;
