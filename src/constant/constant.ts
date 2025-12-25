
import kamkaj from "../assets/kamkaj.jpg";
import crmhub from "../assets/crmhub.jpg";
import eterna from "../assets/eterna.png";
import fixsavy from "../assets/fixsavy.png";
import xphyre from "../assets/xyphre.png";
import acton from "../assets/acton.png";
import { Github, Mail, Linkedin } from "lucide-react";

/**

Senior Full-Stack Developer Portfolio Configuration

Designed for: Zahoor Abbas
*/

const constantData = {
    name: "Zahoor Abbas",
    role: "Senior Full Stack Engineer",
    experties: 'Full Stack Developer | React Specialist | UI/UX Enthusiast',
    heroDescription: "Passionate about creating beautiful, functional, and user-friendly web applications. With expertise in modern web technologies and a keen eye for design, I bring ideas to life.",
    personalInfo: {
        name: "Zahoor Abbas",
        email: "zahoorabbas360@gmail.com",
        location: "Islamabad, Pakistan",
        phone: "+92 342 9493874"
    },
    aboutme: {
        description1: "With over several years of experience in the tech industry, I specialize in building robust and scalable web applications. My journey started with a curiosity for how things work on the internet, which evolved into a professional career in full-stack development.",
        description2: "I pride myself on writing clean, maintainable code and staying updated with the latest industry trends. Whether it's architecting a complex backend or crafting a pixel-perfect frontend, I approach every challenge with precision.",
        description3: "Collaboration is at the heart of my work process. I believe the best products are built when engineering meets design and user needs seamlessly.",
        description4: "When I'm not coding, you'll find me exploring new UI patterns, contributing to open-source projects, or mentoring junior developers in the community.",
        tilesData: [
            { title: "Clean Code", description: "Prioritizing readability and long-term maintainability in every repository.", icon: "Code2" },
            { title: "Modern UI/UX", description: "Crafting intuitive interfaces that provide exceptional user experiences.", icon: "Palette" },
            { title: "Performance", description: "Optimizing every kilobyte to ensure lightning-fast load times and smooth interactions.", icon: "Rocket" }
        ]
    },
    experiences: [
        {
            title: "Frontend Developer",
            company: "Xphyre Inc.",
            period: " Present",
            description:
                "Leading development of enterprise-level web applications using React and Next js. Mentoring junior developers and implementing best practices.",
            highlights: [
                "Architected and deployed microservices infrastructure",
                "Improved application performance by 40%",
                "Led frontend developers",
            ],
        },
        {
            title: "Full Stack Developer",
            company: "Remote (Project base)",
            period: "2025 - 2025",
            description:
                "Developed responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.",
            highlights: [
                "Built multiple production-ready applications",
                "Implemented CI/CD pipelines",
                "Reduced bugs by 30% through comprehensive testing",
            ],
        },
        {
            title: "Frontend Developer",
            company: "XtecSoft Pvt Ltd",
            period: "2023 - 2025",
            description:
                "Created engaging user interfaces and improved website performance. Worked closely with designers to implement pixel-perfect designs.",
            highlights: [
                "Redesigned company website, increasing conversions by 25%",
                "Implemented responsive design across all platforms",
                "Optimized load times by 50%",
            ],
        },
    ],

    skills: [
        {
            category: "Frontend Development",
            icon: "Code2",
            skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Material UI", "PWA",]
        },
        {
            category: "Backend & Database",
            icon: "Database",
            skills: ["Node.js", "Express", "Firebase", "Supabase", "MongoDB", "REST APIs",]
        },
        {
            category: "Tools & DevOps",
            icon: "Settings",
            skills: ["Git", "CI/CD", "Figma", "Agile", "Jira", "Trello", "Postman",]
        }
    ],
    education: [
        {
            degree: "Master in Computer Science (MCS)",
            institution: "University of Karachi",
            period: "2020 - 2023",
            description: "Focused on Software Engineering, Web Development, and Database Systems.",
            achievements: [
                "Developed multiple academic projects using MERN Stack",
                "Represented university in inter-department hackathons",
                "Member of Programming & Web Development Society"
            ],
        },
        {
            degree: "Associate Degree in computer Science (ADP-CS)",
            institution: "Government College University Faisalabad",
            period: "2018 - 2020",
            description: "Studied Computer Science fundamentals and programming basics.",
            achievements: [
                "Participated in coding competitions",
                "Top performer in Computer Science subjects"
            ],
        },
    ],
    certifications: [
        {
            title: "MERN Stack Development",
            organization: "Jawan Pakistan",
            year: "2022",
            duration: "1.5 Years",
            description: "Comprehensive training in MongoDB, Express.js, React, and Node.js, focusing on building scalable full-stack applications and RESTful APIs."
        },
        {
            title: "React Native Mobile Development",
            organization: "Jawan Pakistan",
            year: "2022",
            duration: "1.5 Years",
            description: "In-depth course on building cross-platform mobile applications for iOS and Android using React Native and mobile UI design principles."
        }
    ],
    projects: [
        {
            title: "EternaTrust Group",
            description:
                "Eterna Trust Group connects individuals and families with trusted insurance solutions by offering quotes and applications from multiple leading carriers.",
            technologies: [
                "Next.js",
                "Redux",
                "Tailwind",
                "JavaScript",
                "Responsive UI Design"
            ],
            liveUrl: "https://eternatrustgroup.com/",
            githubUrl: null,
            image: eterna,
        },
        {
            title: "Fixsavvy",
            description:
                "A service-based marketplace platform built using Next that connects customers with professional service providers for home maintenance, repair, cleaning, and other on-demand services across UK.",
            technologies: [
                "Next.js",
                "Redux",
                "Tailwind",
                "Charts",
                "Responsive UI Design"
            ],
            liveUrl: "https://www.fixsavvy.com/",
            githubUrl: null,
            image: fixsavy,
        },
        {
            title: "Xphyre",
            description:
                "Xphyre, Inc. is a diversified innovation company operating across insurance, telecom, gaming, health, and customer-engagement ecosystems. We build, scale, and support businesses that redefine how people connect, communicate, and experience technology.",
            technologies: [
                "Next.js",
                "Tailwind",
                "JavaScript",
                "Responsive UI Design"
            ],
            liveUrl: "https://xphyre.com/",
            githubUrl: null,
            image: xphyre,
        },
        {
            title: "Acton Senior Center (PWA)",
            description:
                "A  React-based PWA for a senior care center, I developed role-based features for drivers, cooks, and volunteers. The app managed time-dependent tasks like rides, meals, and daily activities, presenting them in a clear, easy-to-use interface designed for real-world use.",
            technologies: [
                "React.js",
                "Redux",
                "Material UI",
                "Responsive UI Design"
            ],
            liveUrl: "https://app.myseniorcenter.net/",
            githubUrl: null,
            image: acton,
        },
        {
            title: "Home Services Marketplace Platform",
            description:
                "A service-based marketplace platform built using an MVC architecture that connects customers with professional service providers for home maintenance, repair, cleaning, and other on-demand services across Pakistan.",
            technologies: [
                "HTML",
                "CSS",
                "Bootstrap5",
                "JavaScript",
                "Responsive UI Design"
            ],
            liveUrl: "https://www.kamkaj.pk",
            githubUrl: null,
            image: kamkaj,
        },
        {
            title: "CRM Hub Platform",
            description:
                "A centralized CRM platform designed to manage customers, leads, and business data through dashboards, analytics, and intuitive user interfaces.",
            technologies: [
                "React.js",
                "Redux",
                "Material UI",
                "Charts",
            ],
            liveUrl: null,
            // liveUrl: "https://crm-hub.azurewebsites.net/",
            githubUrl: null,
            image: crmhub,
        }
    ],
    socialLinks: [
        { icon: Github, href: "https://github.com/Zahoor-Baltee", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/zahoor-abbas-030837249/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:zahoorabbas360@gmail.com", label: "Email" }
    ]
};
export default constantData;