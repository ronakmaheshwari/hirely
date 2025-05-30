import Sidebar from "@/components/custom/Dashboards/Sidebar";
import Navbar from "../components/custom/utils/Navbar";
import UpdatedProfile from "@/components/custom/Dashboards/UpdateProfile";

export default function UpdateProfile() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar  type="login"/>
      
      <div className="flex w-full h-full bg-blue-50 p-4 gap-5 overflow-hidden">
        <Sidebar type="user" />

        <div className="flex-1 bg-white p-4 rounded-xl shadow-md overflow-y-auto">
          <UpdatedProfile />
        </div>
      </div>
    </div>
  );
}
