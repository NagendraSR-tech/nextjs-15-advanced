import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const authObj = await auth();
  const userObj = await currentUser(); //will return the backend user object of the currently active user

  console.log(authObj, userObj);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
