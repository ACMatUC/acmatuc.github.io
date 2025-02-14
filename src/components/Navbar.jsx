import acmWideTransparent from "../assets/acm-wide-transparent.png";
import acmWideTransparentBlack from "../assets/acm-wide-transparent-black.png";
import { useState } from "react";
import { DiscordOutlined, InstagramOutlined, MenuOutlined, XOutlined, CloseOutlined, LinkedinFilled } from "@ant-design/icons";

const links = [
  ["Resources", "/resources"],
  ["Executives", "/executives"],
  ["Members", "/members"],
  ["Meetings", "/meetings"],
  ["Blog", "/blog"],
];

const socials = [
  {icon: <InstagramOutlined className="text-2xl" />, link: "https://instagram.com/acmuc", color: "text-white hover:bg-instagram"},
  {icon: <DiscordOutlined className="text-2xl" />, link: "https://discord.gg/6aYBT6s", color: "text-white hover:bg-discord"},
  {icon: <XOutlined className="text-2xl transition-colors" />, link: "https://x.com/ACMatUCorg", color: "text-white hover:bg-white hover:text-black"},
  {icon: <LinkedinFilled className="text-2xl" />, link: "https://linkedin.com/company/acm-uc", color: "text-white hover:bg-linkedin"}
];

export default function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  return <><nav className="bg-neutral-800 w-full flex justify-between h-16 px-2">
    <span className="flex">
      <a href="/" className="relative w-max flex items-center hover:bg-red transition-colors group">
        <img src={acmWideTransparent.src} alt="ACM Logo" className="h-6 px-4 w-auto group-hover:opacity-0 transition-opacity" />
        <img src={acmWideTransparentBlack.src} alt="ACM@UC Logo" className="absolute top-5 left-4 h-6 w-auto opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    <menu className="flex gap-1 max-lg:hidden">
      {links.map(([name, link], i) =>
      (<li className="contents" key={i}>
        <a href={link} className="font-bold h-16 px-3 uppercase font-display flex justify-center items-center hover:bg-red transition-colors !text-white">{name}</a>
      </li>))}
    </menu>
    </span>
    <span className="flex">
    <ul className="flex gap-1 max-sm:hidden">
      {socials.map(({icon, link, color}, i) => 
      (<li key={i}>
        <a href={link} className={`h-16 w-16 flex justify-center items-center ${color} text-white hover:bg-opacity-80 transition-colors`}>
          {icon}
        </a>
      </li>))}
      <li>
    </li>
    </ul>
    <button className={`h-16 w-16 flex justify-center items-center lg:hidden group transition-colors ${isOpen ? "bg-red" : "hover:bg-red"}`} onClick={() =>setOpen(!isOpen)}>
      {isOpen ? <CloseOutlined className="text-white text-xl" /> : <MenuOutlined className={`text-white transition-colors text-xl`} />}
    </button>
    </span>
  </nav>

  {/* Mobile Navbar Dropdown */}
  <div className={`${isOpen ? "h-full" : "h-0"} lg:hidden z-10 transition-[height] duration-300 absolute top-16 overflow-clip`}>
    <menu className={`w-screen bg-neutral-800 h-fit flex flex-col transition-transform duration-300`}>
      <div className="flex flex-col">
        {links.map(([name, link], i) =>
        (<li className="contents" key={i}><a href={link} className="font-bold h-16 w-full pl-6 flex items-center uppercase font-display hover:bg-red transition-colors !text-white">{name}</a></li>))}
      </div>
        <li className="contents sm:hidden">
          <menu className="flex gap-4 w-full justify-start">
            {socials.map(({icon, link, color}, i) => 
            (<li key={i}>
              <a href={link} className={`h-16 w-16 flex items-center justify-center ${color} hover:bg-opacity-80 transition-colors`}>
                {icon}
              </a>
            </li>))}
          </menu>
        </li>
    </menu>
  </div>
  </>
}
