import { UserButton } from "@clerk/nextjs";
// import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

export default async function Home() {
  // const { userId } = await auth();
  // if (!userId) redirect("/sign-in");
  return (
    <div className="flex justify-between">
      <p>welcome to your Dashboard</p>
      <UserButton afterSignOutUrl="/" />
      {/* only for part of UI component */}
      {/* <SignedIn>
        {" "}
        <p>my App</p>
        <UserButton afterSignOutUrl="/" />{" "}
      </SignedIn>
      <SignedOut>
        <p>you must be signed in to see this page</p>
        <SignInButton />
      </SignedOut> */}
    </div>
  );
}
