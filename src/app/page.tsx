import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Accounts from "./component/Accounts";
import Table from "./component/Table";
export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-[88vw]">
        <Header />
        <Accounts />
        <Table/>
      </div>
    </div>
  );
}
