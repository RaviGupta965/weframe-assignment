import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Accounts from "./component/Accounts";
import Controller from "./component/Controller";
export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-[76vw]">
          <Header />
          <Accounts />
          <Controller />
        </div>
      </div>
    </div>
  );
}
