import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "service" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexerc ugit qui corporis",
    location: "China",
    duration: "6 days",
    cost: "$2,100",
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2024",
    title: "Jakata",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexerc ugit qui corporis",
    location: "indonesia",
    duration: "11 days",
    cost: "$1,400",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2024",
    title: "Explore Hong Kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexerc ugit qui corporis",
    location: "indonesia",
    duration: "8 days",
    cost: "$5,000",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2024",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexerc ugit qui corporis",
    location: "Kenya",
    duration: "20 days",
    cost: "$3,300",
  },
  {
    id: 5,
    img: tour5,
    date: "december 20th, 2024",
    title: "Zuma",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexerc ugit qui corporis",
    location: "Nigeria",
    duration: "15 days",
    cost: "$2,500",
  },
  {
    id: 6,
    img: tour6,
    date: "december 2th, 2024",
    title: "accra",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexerc ugit qui corporis",
    location: "Ghana",
    duration: "7 days",
    cost: "$800",
  },
];
