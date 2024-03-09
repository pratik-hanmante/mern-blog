import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to='/dashboard?tab=profile'>
          <Sidebar.Item active icon={HiUser} label={"User"} labelColor="dark">
            Profile
          </Sidebar.Item>
          </Link>
          <Sidebar.Item active icon={HiArrowSmRight} classname="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
