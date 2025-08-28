import { auth, currentUser } from '@clerk/nextjs/server';

const DashboardPage = async () => {
  const user = await currentUser();
  const authObj = await auth();
  console.log({ user, authObj });
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
