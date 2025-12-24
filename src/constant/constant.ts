import kamkaj from "../assets/kamkaj.jpg"
import crmhub from "../assets/crmhub.jpg"
import eterna from "../assets/eterna.png"
import fixsavy from "../assets/fixsavy.png"
import xphyre from "../assets/xyphre.png"
import acton from "../assets/acton.png"

const constantData = {
    name: "Zahoor Abbas",
    personalInfo: {
        name: "Zahoor Abbas",
        email: "zahoorabbas360@gmail.com",
        secondEmail: "lthansava@gmail.com",
        phoneNumber1: "03429493874",
        phoneNumber2: "03555172195",
        address: {
            city: "Rawalpindi",
            state: "Punjab",
            country: "Pakistan"
        },
        Image: ""
    },
    socialLinks: [
        { icon: 'Github', href: "https://github.com", label: "GitHub" },
        { icon: 'Linkedin', href: "https://linkedin.com", label: "LinkedIn" },
        { icon: 'Twitter', href: "https://twitter.com", label: "Twitter" },
        { icon: 'Mail', href: "mailto:zahoorabbas360@gmail.com", label: "Email" },
    ],
    experties: 'Full Stack Developer | React Specialist | UI/UX Enthusiast',
    heroDescription: "Passionate about creating beautiful, functional, and user-friendly web applications. With expertise in modern web technologies and a keen eye for design, I bring ideas to life.",
    aboutme: {
        description1: "I'm a passionate developer with over 3 years of experience in building modern web applications. My journey in tech started with a curiosity about how websites work, and it has evolved into a career I truly love.",
        description2: "I specialize in React,JavaScript, TypeScript, and modern web technologies. I believe in writing clean, maintainable code and creating intuitive user experiences that make a difference.",
        description3: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts and mentoring.",
        description4: "I'm always excited to work on challenging projects and collaborate with talented teams to build something amazing.",
        tilesData: [
            { icon: "", title: "Clean Code", description: "Writing maintainable, scalable, and efficient code following best practices." },
            { icon: "", title: "UI/UX Design", description: "Creating beautiful and intuitive user interfaces with attention to detail." },
            { icon: "", title: "Fast Performance", description: "Optimizing applications for speed and delivering exceptional user experiences." }
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
            company: "Remote",
            // period: "2025 - 2025",
            description:
                "Developed responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.",
            highlights: [
                "Built 10+ production-ready applications",
                "Implemented CI/CD pipelines",
                "Reduced bugs by 30% through comprehensive testing",
            ],
        },
        {
            title: "Frontend Developer",
            company: "XtecSoft Pvt Ltd",
            // period: "2023 - 2025",
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
            category: "Frontend",
            skills: [
                "React",
                "TypeScript",
                "JavaScript",
                "Next.js",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "Redux",
                "Material UI",
                "PWA",
            ],
        },
        {
            category: "Backend",
            skills: [
                "Node.js",
                "Express",
                "Firebase",
                "Supabase",
                "MongoDB",
                "REST APIs",
                "Odata",
            ],
        },
        {
            category: "Tools & Others",
            skills: [
                "Git",
                // "Docker",
                // "AWS",
                "CI/CD",
                // "Jest",
                // "Webpack",
                "Figma",
                "Agile",
                "Jira",
                "Trello",
                "Postman",
            ],
        },
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
            degree: "Associate Degree in computer Science (ADP'cs)",
            institution: "Government College University Faisalabad",
            period: "2018 - 2020",
            description: "Studied Computer Science fundamentals and programming basics.",
            achievements: [
                "Participated in coding competitions",
                "Top performer in Computer Science subjects"
            ],
        },
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
            liveUrl: "https://crm-hub.azurewebsites.net/",
            githubUrl: null,
            image: crmhub,
        }
    ],
}
export default constantData