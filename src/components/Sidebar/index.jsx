import {
  CircleUser,
  ClipboardPen,
  FileBarChart,
  HandCoins,
  Home,
  LocateFixed,
  MessageCircleHeart,
  TicketCheck,
  UsersRound,
  Wrench,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[21%] min-h-screen border-2 bg-white items-center">
      <div className="w-full flex  flex-col items-center">
        <ul className="w-[81%] text-black flex flex-col min-h-min pt-10 ">
          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <Home strokeWidth={3} className=" w-5 mr-2 " /> Dashboard
          </li>
          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <CircleUser className="w-5 h-10 mr-2" /> User Management
          </li>
          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <UsersRound className="w-5 h-10 mr-2" />
            Guest Management
          </li>
          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <ClipboardPen className="w-5 h-10 mr-2" />
            Content Management
          </li>
          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <HandCoins className="w-5 h-10 mr-2" /> Point Management
          </li>
          <ul className="mt-10">
            <li>Earn Point</li>
            <li>Burn Point</li>
          </ul>

          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <TicketCheck className="w-5 h-10 mr-2" />
            Coupon Management
          </li>
          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <LocateFixed className="w-5 h-10 mr-1" />
            Location Management
          </li>
          <li className="w-full h-10 font-bold p-6 flex  items-center text-center hover:bg-[#FFD700] rounded  duration-75">
            <MessageCircleHeart className="w-5 h-10 mr-2" />
            Feedback Mnagement
          </li>
        </ul>
        <ul className="w-4/5 mt-40">
          <li className="w-full h-10 font-medium p-6 flex  items-center justify-center hover:bg-[#FFD700] rounded  duration-75">
            <FileBarChart strokeWidth={3} className="w-5 h-10 mr-2" />
            Reports
          </li>
          <li className="w-full h-10 font-medium p-6 flex  items-center justify-center *: hover:bg-[#FFD700] rounded duration-75 ">
            <Wrench strokeWidth={3} className="w-5 h-10 mr-2" />
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
