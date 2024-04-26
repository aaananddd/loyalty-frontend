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
    <div className=" min-h-screen border-r-2 bg-white   ">
      <div className="w-[18vw] flex  flex-col items-center sticky top-32  ">
        <ul className="px-4 text-black flex flex-col min-h-min  gap-y-1 ">
          <NavLink
            to={routePath.dashboard}
            className={({ isActive }) =>
              (isActive ? "bg-primary " : "") +
              `w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75 `
            }
          >
            <Home strokeWidth={3} className="w-5 h-10 mr-2" /> Dashboard
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

          <NavLink
            to={routePath.guestManagement}
<<<<<<< HEAD
            className={({ isActive }) => (isActive ? "bg-primary " : "") +
=======
            className={({ isActive }) =>
              (isActive ? "bg-primary " : "") +
>>>>>>> e3d74a43b5d1f20df88806d760df9e92a32c9b5a
              "w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75"
            }
          >
            <UsersRound strokeWidth={3} className="w-5 h-10 mr-2" />
            Guest Management
          </NavLink>

          <NavLink
            to={routePath.contentManagement}
            className={({ isActive }) =>
              (isActive ? "bg-primary" : "") +
              "w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75"
            }
          >
            <ClipboardPen strokeWidth={3} className="w-5 h-10 mr-2" />
            Content Management
          </NavLink>

          <Accordion type="single" collapsible>
            <AccordionItem className="border-none" value="item-1">
              <AccordionTrigger className="w-full h-10 font-medium p-6 flex   hover:no-underline items-center text-center hover:bg-primary rounded  duration-75">
                <div>
                  {" "}
                  <HandCoins strokeWidth={3} className="w-5 h-10 mr-2" />
                </div>{" "}
                Point Management
              </AccordionTrigger>
              <AccordionContent>
                <ul className="bg-primary/20 rounded-md">
                  <NavLink
                    to={routePath.earnPoint}
                    className={({ isActive }) =>
                      (isActive ? "bg-primary" : "") +
                      "w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75"
                    }
                  >
                    Earn Point
                  </NavLink>
                  <NavLink
                    to={routePath.burnPoint}
                    className={({ isActive }) =>
                      (isActive ? "bg-primary" : "") +
                      "w-full h-10 font-medium p-6 flex border-b  items-center text-center hover:bg-primary rounded  duration-75"
                    }
                  >
                    Burn Point
                  </NavLink>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <NavLink
            to={routePath.couponManagement}
            className={({ isActive }) =>
              (isActive ? "bg-primary" : "") +
              "w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75"
            }
          >
            <TicketCheck strokeWidth={3} className="w-5 h-10 mr-2" />
            Coupon Management
          </NavLink>
          <NavLink
            to={routePath.locationManagement}
            className={({ isActive }) =>
              (isActive ? "bg-primary" : "") +
              "w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75"
            }
          >
            <LocateFixed strokeWidth={3} className="w-5 h-10 mr-1" />
            Location Management
          </NavLink>
          <NavLink
            to={routePath.feedbackManagement}
            className={({ isActive }) =>
              (isActive ? "bg-primary" : "") +
              "w-full h-10 font-medium p-6 flex  items-center text-center hover:bg-primary rounded  duration-75"
            }
          >
            <MessageCircleHeart strokeWidth={3} className="w-5 h-10 mr-2" />
            Feedback Mnagement
          </NavLink>
        </ul>
        {/* <ul className="w-4/5 mt-40">
          <li className="w-full h-10 font-medium p-6 flex  items-center justify-center hover:bg-primary rounded  duration-75">
            <FileBarChart strokeWidth={3} className="w-5 h-10 mr-2" />
            Reports
          </li>
          <li className="w-full h-10 font-medium p-6 flex  items-center justify-center *: hover:bg-primary rounded duration-75 ">
            <Wrench strokeWidth={3} className="w-5 h-10 mr-2" />
            Settings
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
