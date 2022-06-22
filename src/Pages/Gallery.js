import React from "react";
import Card from "./../Components/Card";
import FadeIn from './../Components/FadeIn';
import Settings from './../Settings/AnimationSettings';

const CardData = [
    {
      Id: 1,
      Title: "Portfolio Website",
      ImageFileName: "https://i.imgur.com/u14PeF9.png",
      Link: "https://i.imgur.com/u14PeF9.png",
      Description:
        "Using React/Tailwindcss and various other libaries I created a showcase of my current front-end/design skills.",
      HashTags: ["Design", "Front-end", "Development"],
      Type: "Web",
      Buttons: [
        {
          Title: "Github",
          ImageIcon: "FaGithub",
          href: "https://github.com/clibrando/portfolio"
        }
      ]
    },
    {
      Id: 2,
      Title: "Swan ST restaurants",
      ImageFileName: "https://i.imgur.com/6sGwZfD.png",
      Link: "https://i.imgur.com/6sGwZfD.png",
      Description:
        "Customized the website and plugins for Swan.st. Swan.St focused on highlighting the growing culinary options in Richmond,BC.",
      HashTags: ["Website Design", "Layout"],
      Type: "Web/Design",
      Buttons: [
        {
          Title: "Check it out Live!",
          ImageIcon: "FaDirections",
          href: "https://swan.st/"
        }
      ]
    },
    {
      Id: 3,
      Title: "Image Filtering project",
      ImageFileName: "https://i.imgur.com/heDORr5.png",
      Link: "https://i.imgur.com/heDORr5.png",
      Description:
        "Using plain javascript I filtered a photo collection based on tags.",
      HashTags: ["Design", "Front-end", "Development"],
      Type: "Web",
      Buttons: [
        {
          Title: "Try it on codesandbox",
          ImageIcon: "AiFillCodeSandboxSquare",
          href: "https://codesandbox.io/s/floral-filter-fb3wq5-fb3wq5?file=/index.html"
        }
      ]
    },
    {
      Id: 4,
      Title: "Animated Menu bar",
      ImageFileName: "https://i.imgur.com/sjPq0kT.png",
      Link: "https://i.imgur.com/sjPq0kT.png",
      Description:
        "Created a navigation bar using only javascript/css/html to try out css transitions",
      HashTags: ["Website Design", "CSS", "UX"],
      Type: "Web",
      Buttons: [
        {
          Title: "Try it on codesandbox",
          ImageIcon: "AiFillCodeSandboxSquare",
          href: "https://codesandbox.io/s/green-menu-tjoj9d-tjoj9d"
        }
      ]
    },
    {
      Id: 5,
      Title: "Animated Mobile Fold out",
      ImageFileName: "https://i.imgur.com/zwiSqGd.png?",
      Link: "https://i.imgur.com/zwiSqGd.png?",
      Description:
        "Created a navigation fold-out for mobiles and other ARM devices, using plain css/javascript",
      HashTags: ["Design", "App", "UI"],
      Type: "Web",
      Buttons: [
        {
          Title: "Try it on codesandbox",
          ImageIcon: "AiFillCodeSandboxSquare",
          href: "https://codesandbox.io/s/dreamy-feistel-wep1b9"
        }
      ]
    },
    {
      Id: 6,
      Title: "Animated Profile Dropdown",
      ImageFileName: "https://i.imgur.com/VlRMFaz.png",
      Link: "https://i.imgur.com/VlRMFaz.png",
      Description:
        "Created a fluid admin dashboard fold-out component, for managing user accounts",
      HashTags: ["Website Design", "Layout"],
      Type: "Web",
      Buttons: [
        {
          Title: "Try it on codesandbox",
          ImageIcon: "AiFillCodeSandboxSquare",
          href: "https://codesandbox.io/s/serverless-flower-mep90b"
        }
      ]
    },
    {
      Id: 7,
      Title: "YouGoto",
      ImageFileName: "https://i.imgur.com/3dexZ9x.png",
      Link: "https://i.imgur.com/3dexZ9x.png",
      Description:
        "Helped design UI for customization and plan web and mobile apps for TravelCentral24. Their website is YouGoto.com.",
      HashTags: ["Website Design", "App", "UX"],
      Type: "Design",
      Buttons: [
        {
          Title: "NDA: Not available",
          ImageIcon: "FaCopyright",
          Disabled: true
        }
      ]
    },
    {
      Id: 8,
      Title: "Search Education Australia",
      ImageFileName: "https://i.imgur.com/dGddxqw.jpg",
      Link: "https://i.imgur.com/dGddxqw.jpg",
      Description:
        "Design user experience and overall look-and-feel and manage SearchEducation platform for Australia.",
      HashTags: ["Design", "Project Management", "UI"],
      Type: "Web",
      Buttons: [
        {
          Title: "NDA: Not available",
          ImageIcon: "FaCopyright",
          Disabled: true
        }
      ]
    }
];

const Content = () => {
  return (
    <FadeIn duration={Settings.Gallery.PageFadeIn}>
      <div className="flex flex-wrap m-8 justify-center items-center">
        {CardData.map((item) => {
          return <Card key={item.Id} item={item} />;
        })}
      </div>
    </FadeIn>
  );
};

export default Content;
