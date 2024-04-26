import { Tabs } from "flowbite-react";
import { title } from "process";
import { HiAdjustments, HiClipboardList, } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Activity, Microscope, Stethoscope, Syringe, X } from "lucide-react";
import ServiceList from "./Service/ServiceList";
import ListCards from "./Docters/ListCards";

export default function TabbedItems() {

  const services = [{
    title: "Teleheath",
    image: "/docter.avif",
    slug: "teleheath"
  },

  {
    title: "Video Prescription",
    image: "/docter.avif",
    slug: "teleheath"
  },

  {
    title: "UIT Consult",
    image: "/docter.avif",
    slug: "teleheath"
  },

  {
    title: "Mental Health",
    image: "/docter.avif",
    slug: "teleheath"
  },

  {
    title: "ED Consult",
    image: "/docter.avif",
    slug: "teleheath"
  },

  {
    title: "Urgent Care",
    image: "/docter.avif",
    slug: "teleheath"
  },
  
]

  const tabs = [
    {
      title: "Populer Servies",
      icon: Stethoscope,
      component: <ServiceList data={services}/>,
      content: [],
    },

    {
      title: "Docters",
      icon: Microscope,
      component: <ListCards/>,
      content: [],
    },

    {
      title: "Specialists",
      icon: Activity,
      component: <ListCards className="bg-purple-900"/>,
      content: [],
    },

    {
      title: "Symptoms",
      component: <ListCards className="bg-pink-950"/>,
      icon: Syringe,
      content: [],
    },
  ];

  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
          {tab.component}
          </Tabs.Item>
      ))}
    </Tabs>
  );
}
