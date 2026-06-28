import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
// Data Analysis
import { Python } from "@/components/ui/svgs/python";
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
  url: "https://shivamgupta-25.vercel.app/",
  location: "New Delhi, India",
  description: "At the Intersection of Data Science, Machine Learning, Optimization, & Data Analytics to drive Better Decisions.",
  summary: `I'm a **<u>Master's student in Operational Research</u>** with a focus on **optimization**, **machine learning**, and **data-driven decision-making**. My work spans **combinatorial optimization** (MILP, TSP, heuristics using Gurobi and OR-Tools), **predictive modelling** (XGBoost, clustering), and applied analytics.

What I enjoy most is bridging the gap between **mathematical rigour** and **practical implementation** — turning a well-posed problem into working code and actionable insight.`,
  avatarUrl: "ShivamWithSuit.png",
  hoverAvatarUrl: "me.png",
  skills: [
    {
      category: "Data Analysis",
      items: [
        { name: "Python", icon: Python },
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
    /**
     * Full-time entries support an optional `roles` array for career
     * progression within the same company (newest role first).
     * When `roles` is present, the accordion expands to show a timeline
     * instead of a flat description.
     */
    fullTime: [
      /*
      {
        company: "TechCorp Solutions",
        href: "https://example.com",
        location: "New Delhi, India",
        logoUrl: "/frost_sullivan_logo.png",
        // title & dates reflect the most-recent role (shown in header)
        title: "Engineering Manager",
        start: "Jul 2019",
        end: "Present",
        description: "",            // unused when roles[] is present
        roles: [
          {
            title: "Engineering Manager",
            start: "Jan 2024",
            end: "Present",
            badge: "Current",
            description:
              "Leading a cross-functional team of **12 engineers** across Data & Platform squads. Defined the **OKR framework**, drove a **40 % reduction in incident MTTR**, and championed a culture of continuous improvement through weekly retrospectives and 1-on-1s.",
          },
          {
            title: "Senior Data Scientist",
            start: "Jun 2022",
            end: "Dec 2023",
            badge: null,
            description:
              "Architected an **end-to-end ML pipeline** (feature store → training → serving) that reduced model deployment time from 3 weeks to **2 days**. Built a churn-prediction model (XGBoost + SHAP) that saved **₹1.2 Cr ARR**.",
          },
          {
            title: "Data Scientist",
            start: "Mar 2021",
            end: "May 2022",
            badge: null,
            description:
              "Developed **ETL pipelines** in Python/PySpark, created Power BI dashboards consumed by 200+ stakeholders, and ran A/B tests that improved conversion rate by **8 %** on the checkout funnel.",
          },
          {
            title: "Software Developer",
            start: "Jul 2019",
            end: "Feb 2021",
            badge: "Started here",
            description:
              "Built and maintained **REST APIs** (Node.js + PostgreSQL), migrated a monolith to microservices using Docker & Kubernetes, and improved CI/CD pipeline build times by **35 %** with caching strategies.",
          },
        ],
      },
      {
        company: "DataVision Analytics",
        href: "https://example.com",
        location: "Mumbai, India",
        logoUrl: "/Delhi_University.png",
        title: "Lead Analyst",
        start: "Jan 2018",
        end: "Jun 2019",
        description: "",
        roles: [
          {
            title: "Lead Analyst",
            start: "Aug 2018",
            end: "Jun 2019",
            badge: "Promoted",
            description:
              "Supervised a team of 4 analysts, owned the **client reporting cadence**, and introduced **automated alerting** that reduced manual monitoring effort by 60 %.",
          },
          {
            title: "Junior Analyst",
            start: "Jan 2018",
            end: "Jul 2018",
            badge: "Started here",
            description:
              "Cleaned and modelled datasets in **Excel & SQL**, produced weekly KPI decks for C-suite stakeholders, and identified a data-quality issue saving the firm **₹15 L** in erroneous billing.",
          },
        ],
      },
      {
        company: "TalentXmind",
        href: "https://example.com",
        location: "Mumbai, India",
        logoUrl: "/Delhi_University.png",
        title: "Lead Analyst",
        start: "Jan 2018",
        end: "Jun 2019",
        description: "",
        roles: [],
      },
      */
    ],

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
      title: "Traveling Salesman Problem at Scale — MTZ MILP on Indian Road Network",
      href: "#",
      dates: "Jun 2025",
      active: true,
      description:
        `Solved the **asymmetric TSP across 1,000 Indian cities** as a **MTZ MILP in Gurobi 13**, using real driving distances from the OSRM API — not haversine approximations.

- Built a **1,000 x 1,000 OSRM distance matrix** via batched API calls; formulated with **~999K binary arc variables** and **~999K subtour-elimination constraints**
- Ran **7 experiments** (N ∈ {10 … 1,000}, 7,200 s limit) — proved **global optimality for N ≤ 50** (0.00% MIP gap); documented MTZ's weak LP relaxation as the bottleneck for N ≥ 250
- Deployed **interactive Folium / Leaflet.js tour maps** with live OSRM road geometry for all instances`,
      technologies: [
        "Python",
        "Gurobi 13 (gurobipy)",
        "OSRM API",
        "Folium",
        "NumPy",
        "Pandas",
        "Matplotlib",
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Projects/tsp_scaling_analysis.png",
      video: "",
    },
    {
      title: "Customer Lifetime Value Prediction",
      href: "#",
      dates: "Apr 2025",
      active: true,
      description:
        `End-to-end **CLV prediction pipeline** on **3,900+ e-commerce customers** combining RFM analysis, K-Means clustering, and XGBoost classification to identify high-value customer segments.

- Applied **RFM feature engineering** and **K-Means** to segment customers into 3 LTV tiers — uncovering a **20× revenue gap** between top and bottom clusters
- Trained an **XGBoost multi-class classifier** achieving **92% test accuracy** and **weighted F1-score of 0.92**
- Reached **96% precision** on the largest customer cluster, enabling targeted retention and upsell strategies`,
      technologies: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "K-Means",
        "Streamlit",
        "NumPy",
        "Pandas",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Demand Forecasting",
      href: "https://demandforecasting-app.streamlit.app/",
      dates: "Mar 2026",
      active: true,
      description:
        `End-to-end **retail demand forecasting pipeline** on **76K+ records** spanning 5 product categories, 4 regions, and 4 seasons — deployed as an interactive Streamlit app.

- Engineered **16 raw attributes** into predictive features including Sell-Through Rate, Discounted Price, and seasonal demand signals
- Tuned an **XGBoost Regressor** via RandomizedSearchCV (**25 iterations, 3-fold CV**) across 6 hyperparameters covering price, discount, inventory, promotion, and competitor pricing
- Delivered real-time demand predictions through a **Streamlit web application** for non-technical business users`,
      technologies: [
        "Python",
        "XGBoost",
        "Streamlit",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shivamGupta-25/Demand-Forecasting",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://demandforecasting.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Projects/DemandForecasting.png",
      video: "",
    },
    {
      title: "HR Analytics Dashboard - IIT Kanpur",
      href: "https://github.com/shivamGupta-25/Excel-PowerBI/tree/main/EICT%20IIT%20Kanpur%20Adv.%20Excel/Major%20Project/Power%20BI%20Project",
      dates: "Aug 2025",
      active: true,
      description:
        `Interactive Power BI dashboard monitoring **workforce KPIs across 1,470 employees** (attrition, income, tenure, overtime) to support data-driven HR planning.

- Performed **segmentation analysis** across department, age band, gender, and job satisfaction to surface high-risk attrition groups
- Built **DAX measures** for dynamic KPI calculations and Power Query pipelines for data transformation
- Enabled actionable insights to guide **retention strategy** and resource allocation decisions`,
      technologies: [
        "Advanced Excel",
        "Power Query",
        "Power BI",
        "DAX",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shivamGupta-25/Excel-PowerBI/tree/main/EICT%20IIT%20Kanpur%20Adv.%20Excel/Major%20Project/Power%20BI%20Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Projects/HRAnalyticsDashboard.jpg",
      video: "",
    },
    {
      title: "Adidas Sales Dashboard",
      href: "#",
      dates: "Aug 2025",
      active: true,
      description:
        `Excel-based interactive sales dashboard tracking **Adidas revenue, units sold, and operating margin** across regions, products, and retail channels.

- Built **dynamic pivot tables and charts** with slicers for real-time filtering by region, retailer, and product category
- Identified **top-performing regions and sales channels** to surface actionable growth opportunities
- Designed a clean, executive-ready layout optimised for non-technical stakeholders`,
      technologies: [
        "Advanced Excel",
        "Pivot Tables",
        "Pivot Charts",
        "Slicers",
        "Dashboard",
      ],
      links: [],
      image: "/Projects/AdidasSalesDashboard.png",
      video: "",
    },
    {
      title: "Computer Science Society Website – Shivaji College",
      href: "https://websters-shivaji.vercel.app/",
      dates: "Apr 2025",
      active: true,
      description:
        `Full-stack website for the Websters CS Society at Shivaji College, deployed on Vercel with event management and admin tooling.

- Built **event registration** with automated email notifications and backend duplicate-entry validation
- Designed a **secure admin dashboard** with REST APIs and **MongoDB** for real-time analytics
- Delivered a fully **responsive UI** using Next.js, TailwindCSS, and Shadcn UI`,
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shivamGupta-25/websters-shivaji",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://websters-shivaji.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Projects/WebstersWebsite.png",
      video: "",
    },
    {
      title: "Student Database Management System with User and Admin Dashboard",
      href: "https://github.com/shivamGupta-25/CustomTkinter-Database-Project-Version-2-SQLite-Integrated",
      dates: "Nov 2024",
      active: true,
      description:
        `A Python desktop application for student data management with dual-role access and secure authentication.

- Built **User & Admin Dashboards** with **CustomTkinter** for a modern, responsive GUI
- Integrated **SQLite** for lightweight local data storage and efficient CRUD operations
- Implemented **email-based OTP authentication** via smtplib for secure login and password recovery`,
      technologies: [
        "Python",
        "CustomTkinter",
        "SQLite",
        "smtplib"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shivamGupta-25/CustomTkinter-Database-Project-Version-2-SQLite-Integrated",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: [
        "/Projects/StudentDashoardApp_1.png",
        "/Projects/StudentDashoardApp_2.png",
        "/Projects/StudentDashoardApp_3.png",
      ],
      video: "",
    },
    {
      title: "Performance Analytics",
      href: "https://github.com/shivamGupta-25/Sales-Analysis-Using-Python",
      dates: "Apr 2024",
      active: true,
      description:
        `Analyzed **12 months of transactional sales data (180K+ records)** using Python to surface revenue drivers and demand patterns.

- Cleaned and consolidated raw data with **Pandas**; engineered time-based and location-based features
- Identified **peak sales periods**, top-performing regions, and optimal marketing windows
- Uncovered **product bundling opportunities** to support pricing and revenue optimization strategy`,
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "EDA"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shivamGupta-25/Sales-Analysis-Using-Python/blob/main/Sales_Analysis.ipynb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: [
        "/Projects/Performance Analytics_1.png",
        "/Projects/Performance Analytics_2.png",
        "/Projects/Performance Analytics_3.png",
        "/Projects/Performance Analytics_4.png"
      ],
      video: "",
    },
    {
      title: "Data Quality Improvement for Analytics",
      href: "https://github.com/shivamGupta-25/Nashville-Housing-Data-Cleaning-Using-SQL",
      dates: "Mar 2024",
      active: true,
      description:
        `Cleaned and standardized **56K+ Nashville housing records** using MS SQL Server to improve data consistency and downstream query performance.

- Normalized date formats, parsed raw addresses into atomic fields, and standardized categorical values
- Built a reusable **SQL data-cleaning pipeline** with CTEs, window functions, and string operations
- Removed duplicates and redundant columns, reducing dataset size by **∼18%**`,
      technologies: [
        "MS SQL Server",
        "ETL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/shivamGupta-25/Nashville-Housing-Data-Cleaning-Using-SQL",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Projects/Data Quality Improvement for Analytics.png",
      video: "",
    }
  ],
} as const;
