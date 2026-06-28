import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// Data Analysis
import { Pandas } from "@/components/ui/svgs/pandas";
import { Numpy } from "@/components/ui/svgs/numpy";
import { Matplotlib } from "@/components/ui/svgs/matplotlib";
import { Seaborn } from "@/components/ui/svgs/seaborn";
import { Plotly } from "@/components/ui/svgs/plotly";
// Databases
import { Sql } from "@/components/ui/svgs/sql";
import { SqlServer } from "@/components/ui/svgs/sqlServer";
import { Mongodb } from "@/components/ui/svgs/mongodb";
// BI Tools
import { Powerbi } from "@/components/ui/svgs/powerbi";
import { Tableau } from "@/components/ui/svgs/tableau";
// AI / ML
import { Scikitlearn } from "@/components/ui/svgs/scikitlearn";
import { Regression } from "@/components/ui/svgs/regression";
import { Xgboost } from "@/components/ui/svgs/xgboost";
import { Kmeans } from "@/components/ui/svgs/kmeans";
// Excel
import { Excel } from "@/components/ui/svgs/excel";
import { PowerQuery } from "@/components/ui/svgs/powerQuery";
import { PivotTable } from "@/components/ui/svgs/pivotTable";
import { Vba } from "@/components/ui/svgs/vba";
import { Macros } from "@/components/ui/svgs/macros";

/**
 * Feature flag — controls how Work Experience is rendered.
 *  false → flat chronological list  (current / default layout)
 *  true  → entries grouped under category headings
 */
export const SHOW_WORK_BY_CATEGORY = true;

export const DATA = {
  name: "Shivam Raj Gupta",
  initials: "SG",
  url: "https://shivam-gupta25.vercel.app/",
  location: "New Delhi, India",
  description: "At the Intersection of Data Science, Machine Learning, Optimization, & Data Analytics to drive Better Decisions.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "ShivamWithSuit.png",
  hoverAvatarUrl: "me.png",
  skills: [
    {
      category: "Data Analysis",
      items: [
        { name: "Pandas", icon: Pandas },
        { name: "NumPy", icon: Numpy },
        { name: "Matplotlib", icon: Matplotlib },
        { name: "Seaborn", icon: Seaborn },
        { name: "Plotly", icon: Plotly },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "SQL", icon: Sql },
        { name: "SQL Server", icon: SqlServer },
        { name: "MongoDB", icon: Mongodb },
      ],
    },
    {
      category: "BI Tools",
      items: [
        { name: "Power BI", icon: Powerbi },
        { name: "Tableau", icon: Tableau },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { name: "Scikit-learn", icon: Scikitlearn },
        { name: "Regression Models", icon: Regression },
        { name: "XGBoost", icon: Xgboost },
        { name: "K-Means", icon: Kmeans },
      ],
    },
    {
      category: "Excel",
      items: [
        { name: "Advanced Excel", icon: Excel },
        { name: "Power Query", icon: PowerQuery },
        { name: "Pivot Tables", icon: PivotTable },
        { name: "VBA", icon: Vba },
        { name: "Macros", icon: Macros },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "guptashivam25oct@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shivamGupta-25",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivam-raj-gupta/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:guptashivam25oct@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  workData: {
    fullTime: [],

    internships: [
      {
        company: "Frost & Sullivan",
        href: "https://www.frost.com/",
        location: "Remote",
        title: "Growth Advisory",
        logoUrl: "/frost_sullivan_logo.png",
        start: "Apr 2026",
        end: "Present",
        description: `Automated **multi-sheet Excel workflows** using **VBA macros**, reducing manual effort and improving operational efficiency.

  Built a **Python web scraping pipeline** to extract and structure large-scale market data.`,
      },
      {
        company: "PrepRoute (Udhmodya Foundation, University of Delhi)",
        href: "#",
        location: "North Campus, New Delhi",
        title: "Business Analyst",
        logoUrl: "/preproute.jpg",
        start: "Aug 2025",
        end: "Feb 2026",
        description: `Built **Python scraping pipelines** analyzing **13k+ CUET YouTube videos**; used **NLP (N-grams)** and **engagement analytics** to uncover **funnel metrics (Views, engagement, interest)** and **high-performing CTAs**.
        
  Applied **time-series and seasonality analysis** to determine **optimal posting windows**, **exam-cycle demand spikes**, and **scalable content-growth strategy**.`,
      },
      {
        company: "Vice-Chancellor Internship (University of Delhi)",
        href: "https://www.du.ac.in/",
        location: "North Campus, New Delhi",
        title: "Data Management",
        logoUrl: "/Delhi_University.png",
        start: "Nov 2024",
        end: "May 2025",
        description: `Utilized **Advanced Excel (Power Query, LOOKUPs, data modeling functions)** to **_clean, transform, and validate institutional datasets_**, improving reporting accuracy and data reliability.
        
Streamlined **reporting workflows** and enhanced **data integrity** to support **administrative decision-making** and **performance monitoring**.`,
      },
      {
        company: "Shivaji College, University of Delhi",
        href: "https://www.shivajicollege.ac.in/",
        location: "New Delhi",
        title: "Administrative Intern",
        logoUrl: "/shivaji logo.png",
        start: "Jun 2024",
        end: "Jul 2024",
        description: `Assisted with daily **administrative tasks**, including **data preparation and management**.
Processed and managed **documentation** related to **admissions, recruitment and managing correspondence**`,
      },
    ],

    freelance: [
      {
        company: "Udgeet",
        href: "https://udgeet.in/",
        location: "Remote",
        title: "Web Developer",
        logoUrl: "/udgeet-Logo.png",
        start: "Jun 2024",
        end: "Apr 2025",
        description: `Designed and developed a fully functional website for the Literary Institution Udgeet. Utilized **WordPress with Elementor** to create a responsive and user-friendly interface, ensured website optimization for **performance, SEO, and mobile responsiveness**`,
      },
    ],
  },

  /** Flat list: used when SHOW_WORK_BY_CATEGORY === false */
  get work() {
    return [
      ...this.workData.fullTime,
      ...this.workData.internships,
      ...this.workData.freelance,
    ];
  },

  /** Grouped list: used when SHOW_WORK_BY_CATEGORY === true */
  get workByCategory() {
    return [
      { heading: "Full-time", entries: this.workData.fullTime },
      { heading: "Internships", entries: this.workData.internships },
      { heading: "Freelance", entries: this.workData.freelance },
    ].filter((g) => g.entries.length > 0);
  },
  education: [
    {
      school: "Department of Operational Research, University of Delhi",
      href: "https://du.ac.in/",
      degree: "Master of Operational Research",
      logoUrl: "/Delhi_University.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "Shivaji College, University of Delhi",
      href: "https://www.shivajicollege.ac.in/",
      degree: "Bachelor of Science (B.Sc) in Computer Science",
      logoUrl: "/shivaji logo.png",
      start: "2022",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
