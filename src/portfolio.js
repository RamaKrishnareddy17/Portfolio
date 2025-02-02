/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ramakrishna",
  title: "Hi all, I'm Ram",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 experienced in building scalable Web and AI-powered applications using Python, JavaScript, React.js, and Node.js."
  ),
  resumeLink: "./assets/RESUME.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RamaKrishnareddy17",
  linkedin: "https://www.linkedin.com/in/ramakrishna-reddy-vennam-7215a1222/",
  gmail: "vennamr43@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Turning Tech into Impact",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER EXPLORING AI AND CLOUD TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop and optimize scalable APIs and backend systems using Python, Django, Flask, and Node.js"
    ),
    emoji(
      "⚡ Build AI-driven applications leveraging Large Language Models (LLMs), LangChain, and Retrieval-Augmented Generation (RAG)"
    ),
    emoji(
      "⚡ Deploy cloud-based solutions with AWS, Azure, and Google Cloud, ensuring high performance and scalability"
    )
  ],
  display: true, // Set false to hide this section, defaults to true

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UNIVERSITY OF SOUTH FLORIDA",
      logo: require("./assets/images/USFLogo.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Collaborated on interdisciplinary research, focusing on Generative AI, automation, and system optimization.",
      descBullets: [
        "Conducted research on Generative AI models, improving text generation and retrieval efficiency",
        "Designed and implemented automation workflows to enhance AI-driven decision-making",
        "Applied Retrieval-Augmented Generation (RAG) techniques to improve AI model accuracy and responsiveness",
        "Developed and fine-tuned Large Language Models (LLMs) for real-world applications"
      ]
    },
    {
      schoolName: "Bharath Institute of Higher Education and Research",
      logo: require("./assets/images/BIHERLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      desc: "Gained hands-on experience in Software Engineering, Web Security, and Database Management.",
      descBullets: [
        "Developed multiple projects utilizing Python, and JavaScript frameworks."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Software Engineer",
      company: "SuperINTRO",
      companylogo: require("./assets/images/SuperINTROLogo.png"),
      date: "Nov 2023 – Present",
      desc: "Contributing to the development of AI-powered Social Agents for networking by designing scalable APIs, integrating advanced AI models, and optimizing backend systems for performance and reliability.",
      descBullets: [
        "Designed and implemented scalable APIs using Python, Django Rest Framework, and Flask.",
        "Integrated Large Language Models (LLMs) and OpenAI technologies for intelligent automation.",
        "Optimized backend systems using MongoDB, Firebase, and Node.js to enhance performance.",
        "Leveraged LangChain and Retrieval-Augmented Generation (RAG) to improve AI-driven decision-making.",
        "Deployed AI-powered solutions on Google Cloud Platform (GCP) using Docker for scalability.",
        "Collaborated with cross-functional teams to ensure seamless execution and continuous improvement."
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Sutherland Global Services",
      companylogo: require("./assets/images/SUTHERLANDLogo.png"),
      date: "March 2022 – Sep 2022",
      desc: "Developed and maintained scalable backend applications using Python, ensuring seamless system integration and performance.",
      descBullets: [
        "Collaborated with cross-functional teams to design and implement efficient backend solutions.",
        "Utilized Node.js and TypeScript for server-side development and API integration.",
        "Leveraged Next.js for optimized web applications and Docker for containerized deployments.",
        "Enhanced application scalability and performance by following modern development practices."
      ]
    },
    {
      role: "Junior Software Engineer",
      company: "Shiash Info solutions Private Limited",
      companylogo: require("./assets/images/SHIASHLogo.png"),
      date: "May 2021 – Mar 2022",
      desc: "Developed dynamic and responsive user interfaces using React.js and Next.js, ensuring seamless user experiences.",
      descBullets: [
        "Collaborated closely with designers and backend developers to build visually appealing and functional web applications.",
        "Optimized web performance and accessibility to enhance compatibility across various devices and browsers.",
        "Leveraged Microsoft SQL Server for efficient data management and implemented best practices in front-end development using HTML, CSS, and JavaScript."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/SuperINTROLogo.png"),
      projectName: "SuperINTRO",
      projectDesc: [
        "I will be instrumental in developing scalable, robust APIs and efficient backend systems using technologies like NoSQL databases (MongoDB, Firebase), Express.js, Next.js, Python, and frameworks such as Django Rest and Flask.",
        "I will also join an ambitious project to democratize Social AI agents for networking."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://superintro.me/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/SHIASHLogo.png"),
      projectName: "Shiash Info Solutions",
      projectDesc: [
        "Developed and maintained dynamic web applications for Shiash Info Solutions, focusing on web development, e-commerce solutions, and blog designing.",
        "Worked closely with designers and backend developers to build visually appealing and functional web applications.",
        "Optimized website performance, ensuring seamless user experience and efficient client communication."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shiash.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Badge and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cloud Skills Boost",
      subtitle:
        "Certified by Google Cloud for completing the Introduction to Generative AI program.",
      image: require("./assets/images/GEN AI.png"),
      imageAlt: "GEN_AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.cloudskillsboost.google/public_profiles/04440955-4785-459a-a308-76f9cb642752/badges/12301194?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        }
      ]
    },
    {
      title: "Google Cloud Skills Boost",
      subtitle:
        "Certified by Google Cloud for completing the Introduction to Responsible AI program.",
      image: require("./assets/images/ResponsibleAI.png"),
      imageAlt: "RESPONSIBLE_AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.cloudskillsboost.google/public_profiles/04440955-4785-459a-a308-76f9cb642752/badges/12268877?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle:
        "Understanding Core Cloud Concepts and Services with Microsoft Azure",
      image: require("./assets/images/MICRO AZURE.jpeg"),
      imageAlt: "RESPONSIBLE_AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/d4a69b65ba316ac33f297574162a45e6a4355235ae5a7f0445d773e83eaa4da0?trk=share_certificate&accountId=2343682&u=2343682&success=true&authUUID=qyo1tgeUTFuP%2FYUfDqw2rw%3D%3D"
        }
      ]
    },
    {
      title: "Artificial Intelligence Foundations: Machine Learning",
      subtitle: "Empowering Intelligent Systems with Data-Driven Insights",
      image: require("./assets/images/AI.jpeg"),
      imageAlt: "AI",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/d4a69b65ba316ac33f297574162a45e6a4355235ae5a7f0445d773e83eaa4da0?trk=share_certificate&accountId=2343682&u=2343682&success=true&authUUID=qyo1tgeUTFuP%2FYUfDqw2rw%3D%3D"
        }
      ]
    },
    {
      title: "Decision Intelligence",
      subtitle:
        "Decision Intelligence: Empowering Strategic Choices with Data-Driven Insights",
      image: require("./assets/images/DI.jpeg"),
      imageAlt: "DI",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/d4a69b65ba316ac33f297574162a45e6a4355235ae5a7f0445d773e83eaa4da0?trk=share_certificate&accountId=2343682&u=2343682&success=true&authUUID=qyo1tgeUTFuP%2FYUfDqw2rw%3D%3D"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 6562084865",
  email_address: "vennamr43@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
