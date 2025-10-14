import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import react from "./react.png";
import nextjs from "./nextjs.png";
import flutter from "./flutter.png";
import dart from "./dart.png";
import postman from "./postman.png";
import ts from "./ts.png";
import js from "./js.png";
import tailwind from "./tailwind.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import { url } from "inspector";

export const assets = {
  react,
  nextjs,
  postman,
  ts,
  js,
  tailwind,
  flutter,
  dart,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Galaxy - Social Media",
    description: "Web Design",
    type: "web",
    bgImage: "/work-3.png",
    url: "https://galaxy-xi-three.vercel.app/",
  },
  {
    title: "AniPixel - Anime Tracker",
    description: "Web Design",
    type: "web",
    bgImage: "/work-4.png",
    url: "https://anipixel-six.vercel.app/search/anime",
  },
  {
    title: "Remembra - Relationship helper",
    description: "Web Design",
    type: "web",
    bgImage: "/remembra.png",
    url: "https://remembra.vercel.app/",
  },
  {
    title: "ToiWare - Restaurant Management",
    description: "Mobile App",
    type: "mobile",
    bgImage: "/work-1.png",
    images:[
      "/toiware/1.png",
      "/toiware/2.png",
      "/toiware/3.png",
      "/toiware/4.png",
    ]
  },
  {
    title: "Coin Saver - Expense Tracker",
    description: "Mobile App",
    type: "mobile",
    bgImage: "/work-2.png",
     images:[
      "/coin_saver/1.png",
      "/coin_saver/2.png",
      "/coin_saver/3.png",
      "/coin_saver/4.png",
      "/coin_saver/5.png",
    ]
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web Development",
    description:
      "Building responsive, fast, and modern websites with frameworks like React.js and Next.js. I focus on clean code, performance, and user-friendly design.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile apps with Flutter that run smoothly on both iOS and Android, delivering a consistent and engaging experience.",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX Implementation",
    description:
      "Turning Figma or custom designs into pixel-perfect, interactive interfaces while ensuring accessibility, usability, and responsiveness.",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Brand & Visual Design",
    description:
      "Designing visuals, layouts, and brand elements that support digital products, helping apps and websites stand out with a professional look.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Tech Stack",
    description: "JavaScript, TypeScript, Dart, React.js, Next.js, Flutter",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor degree in Pamukkale University",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 10 projects",
  },
];

export const toolsData = [
  assets.flutter,
  assets.dart,
  assets.react,
  assets.nextjs,
  assets.ts,
  assets.js,
  assets.tailwind,
  assets.postman,
  assets.git,
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
];
