import routePath from "@/router/routePath";
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
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = () => {
  return (
    <div className=" min-h-screen border-r-2 bg-white items-center">
      <div className="w-[18vw] flex  flex-col items-center">
        <ul className="px-4 text-black flex flex-col min-h-min pt-10 gap-y-1 ">
          <NavLink
            to={routePath.dashboard}
            className={({ isActive }) =>
              (isActive ? "bg-primary " : "") +
              `w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75 `
            }
          >
            <CircleUser strokeWidth={3} className="w-5 h-10 mr-2" /> Dashboard
          </NavLink>
          <NavLink
            to={routePath.userManagement}
            className={({ isActive }) =>
              (isActive ? "bg-primary " : "") +
              `w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75 `
            }
          >
            <CircleUser strokeWidth={3} className="w-5 h-10 mr-2" /> User
            Management
          </NavLink>

          <li className="w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75">
            <UsersRound strokeWidth={3} className="w-5 h-10 mr-2" />
            Guest Management
          </li>
          <li className="w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75">
            <ClipboardPen strokeWidth={3} className="w-5 h-10 mr-2" />
            Content Management
          </li>

          <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger className="w-full h-10 font-medium p-6 flex   hover:no-underline items-center text-center hover:bg-primary rounded  duration-75">
                <HandCoins strokeWidth={3} className="w-5 h-10 mr-2" /> Point
                Management
              </AccordionTrigger>
              <AccordionContent>
                <ul className="bg-primary/20 rounded-md" >
                  <li className="w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75">
                    <TicketCheck strokeWidth={3} className="w-5 h-10 mr-2" />
                    Coupon Management
                  </li>
                  <li className="w-full h-10 font-medium p-6 flex border-b  items-center text-center hover:bg-primary rounded  duration-75">
                    <TicketCheck strokeWidth={3} className="w-5 h-10 mr-2" />
                    Coupon Management
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <li className="w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75">
            <TicketCheck strokeWidth={3} className="w-5 h-10 mr-2" />
            Coupon Management
          </li>
          <li className="w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75">
            <LocateFixed strokeWidth={3} className="w-5 h-10 mr-1" />
            Location Management
          </li>
          <li className="w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75">
            <MessageCircleHeart strokeWidth={3} className="w-5 h-10 mr-2" />
            Feedback Mnagement
          </li>
        </ul>
        <ul className="w-4/5 mt-40">
          <li className="w-full h-10 font-medium p-6 flex  items-center justify-center hover:bg-primary rounded  duration-75">
            <FileBarChart strokeWidth={3} className="w-5 h-10 mr-2" />
            Reports
          </li>
          <li className="w-full h-10 font-medium p-6 flex  items-center justify-center *: hover:bg-primary rounded duration-75 ">
            <Wrench strokeWidth={3} className="w-5 h-10 mr-2" />
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
