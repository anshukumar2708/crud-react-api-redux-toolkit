import UserList from "../components/user-list/user-list";

function Dashboard() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1140px] flex flex-col justify-start  items-start bg-blue-500 min-h-[100vh]">
          <div className="w-full p-2">
            <UserList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
