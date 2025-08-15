export interface Project {
  title: string;
  startDate: string;
  endDate: string;
  teamSize: number;
  tags: string[];
  description: string[];
  coverImage: string;
  links: { [key: string]: string };
}

// TODO: add at least the thesis project and this website
export const PROJECTS: Project[] = [
  {
    title: "Labcentric - Monitoring and Management System for Labs",
    coverImage: "labcentric.png",
    links: {
      website: "http://laboratorio-4.herokuapp.com/login",
    },
    startDate: "Oct 2020",
    endDate: "Jun 2021",
    teamSize: 8,
    tags: [
      "PHP",
      "Laravel",
      "Javascript",
      "HTML",
      "CSS",
      "PostgreSQL",
      "Python",
      "Flask",
      "OpenCV",
      "MQTT",
      "Node.js",
      "Raspberry Pi",
      "Docker",
      "Nginx",
      "Heroku",
      "Gitlab CI/CD",
    ],
    description: [
      "**Team leader** of a project developed for the [Dr. Ricardo Jorge National Health Institute](http://www.insa.pt).",
      "Developed a web app for management of reagents, samples, procedures and executions, results, and other important data for the institute.",
      "Developed a system that monitors user actions during a lab procedure, by identifying QR Codes on reagents and recognizing voice commands.",
      "Allowed users to configure input/output devices that best suit their needs, by designing an extensible and scalable pluginâ€based architecture.",
      "Integrated a CI/CD pipeline for linting, testing, and deploying the application on a Heroku server.",
    ],
  },
  {
    title: "Artwork Recognition using Bag of Words and CNNs",
    coverImage: "vcom2.png",
    links: {
      github:
        "https://github.com/EduRibeiro00/ArtworkRecognition-feup-vcom/tree/master/proj2",
    },
    startDate: "May 2021",
    endDate: "Jun 2021",
    teamSize: 4,
    tags: [
      "Python",
      "Jupyter Notebook",
      "Keras",
      "SKLearn",
      "Matplotlib",
      "Seaborn",
    ],
    description: [
      "Developed a system that can perform classification of images, applied in this case to the artwork collection dataset provided by the [Metropolitan Museum of Art in New York](https://www.kaggle.com/metmuseum/the-metropolitan-museum-of-art-open-access).",
      "Implemented several methods and techniques to solve the problem, like using a Bag of Words descriptor + classifier, and using Convolutional Neural Networks.",
      "Evaluated the performance of each method using relevant metrics, and discussed the results.",
    ],
  },
  {
    title: "Paper Parser for Design Pattern Repository",
    coverImage: "asso.png",
    links: {
      github: "https://github.com/EduRibeiro00/PatternParser-feup-asso",
    },
    startDate: "Mar 2021",
    endDate: "Jun 2021",
    teamSize: 5,
    tags: ["Typescript", "Node", "PostgreSQL", "MQTT", "Docker"],
    description: [
      "Developed a microservice, part of a design pattern repository application, that parses and extracts all relevant information that can be found on research papers about design patterns, such as the paper's title, authors, abstract, list of described patterns, and footer information.",
      "Allowed the support for different paper structures and types by implementing design patterns such as the Strategy and Builder patterns.",
      "Increased the reliability of the system and made it robust to crashes and failures by using a crash recoverImagey database, that ensures that if the parser starts processing a paper, it will eventually output its details.",
    ],
  },
  {
    title:
      "Photon - 3D Graph Visualizer of High Growth Opportunities on the Energy Market",
    coverImage: "lapd.png",
    links: {
      github: "https://github.com/EduRibeiro00/Photon-feup-lapd",
    },
    startDate: "Mar 2021",
    endDate: "May 2021",
    teamSize: 4,
    tags: ["Typescript", "Node", "React", "Neo4j", "Docker", "OWL", "Protégé"],
    description: [
      "Developed a tool capable of extracting and analyzing energy related data from various sources, detecting high growth opportunities within the energy market and industry, and showcase that information to the user in a 3D graph interface.",
      "Extracted the most up-to-date news and information about the energy market by using the Usearch API and social media APIs from Reddit and Twitter.",
      "Defined and collected data for several energy sectors by using the [Open Energy Ontology (OEO)](https://openenergy-platform.org/ontology/) to recognize energy-related areas and concepts.",
    ],
  },
  {
    title: "3D Data Acquisition using a Structured Light Technique",
    coverImage: "vcom1.png",
    links: {
      github:
        "https://github.com/EduRibeiro00/ArtworkRecognition-feup-vcom/tree/master/proj1",
    },
    startDate: "Mar 2021",
    endDate: "Apr 2021",
    teamSize: 4,
    tags: [
      "Python",
      "Jupyter Notebook",
      "OpenCV",
      "Numpy",
      "Matplotlib",
      "scikit-spacial",
    ],
    description: [
      "Developed system that calculates the 3D coordinates of points in an image lit by a shadow plane, by using structured light techniques.",
      "Implemented all necessary stages in the process, including the camera calibration process, the light projection system calibration, the edge and line detection algorithms and the final calculation of 3D coordinates.",
    ],
  },
  {
    title: "Intercompany Process Automator App",
    coverImage: "sinf.png",
    links: {
      github: "https://github.com/EduRibeiro00/CimbaIntercompany-feup-sinf",
    },
    startDate: "Set 2020",
    endDate: "Dec 2020",
    teamSize: 4,
    tags: [
      "Javascript",
      "React",
      "Bulma (SCSS)",
      "Node",
      "Docker",
      "PostgreSQL",
      "Primavera Jasmin API",
    ],
    description: [
      "Promoted automation of purchase/sales processes between companies by developing a web application that integrates with the [Primavera Jasmin API](https://www.jasminsoftware.pt/), that defines and handles all the transactions based on previously defined business processes.",
      "Offered overall view of transaction processes between companies by creating an interface that provides an overview of all related documents.",
    ],
  },
  {
    title:
      "Distributed Agent-Based Emergency Call System w/ Simulation & Visualization",
    coverImage: "aiad.gif",
    links: {
      github: "https://github.com/EduRibeiro00/EmergencyCallSystem-feup-aiad",
    },
    startDate: "Set 2020",
    endDate: "Dec 2020",
    teamSize: 3,
    tags: ["Java", "JADE", "SAJaS", "Repast"],
    description: [
      "Developed a multi-agent system capable of receiving emergency calls from a certain location, and selecting the best vehicles for the emergency.",
      "Developed a visualization tool that creates a map that shows all the vehicles in the system, the current emergencies and connections representing the allocation of a vehicle to an emergency.",
    ],
  },
  {
    title: "Covid Forecast Tool",
    coverImage: "iart.png",
    links: {
      github: "https://github.com/EduRibeiro00/CovidForecast-feup-iart",
    },
    startDate: "May 2020",
    endDate: "Jun 2020",
    teamSize: 3,
    tags: [
      "Python",
      "Jupyter Notebook",
      "SKLearn",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
      "Kaggle datasets",
    ],
    description: [
      "Extracted Covid-19 data from a Kaggle dataset that contained the confirmed, death, and recoverImageed cases for each day and for each country/region; developed and trained several regression models with the goal of successfully predicting Covid-19 cases and deaths.",
      "Used data visualization Python libraries to create graphs in order to better understand data patterns.",
      "Utilized the following models and methods: Neural Networks, Stochastic Gradient Descent, Support Vector Machines, K-Nearest Neighbours and Random Forest.",
      "The Kaggle dataset used can be found [here](https://www.kaggle.com/imdevskp/corona-virus-report?select=covid_19_clean_complete.csv).",
    ],
  },
  {
    title: "Statically Verified Tree Set Implementation",
    coverImage: "mfes.png",
    links: {
      github: "https://github.com/EduRibeiro00/TreeSetImpl-feup-mfes",
    },
    startDate: "Dec 2020",
    endDate: "Dec 2020",
    teamSize: 1,
    tags: ["Dafny"],
    description: [
      "Developed a statically verified implementation of a Tree Set (Sorted Set), using a Binary Search Tree, in the Dafny programming language.",
      "Implemented operations for insertion, deletion, checking if an element is in the set, returning a sorted sequence of all the elements, and more.",
    ],
  },
  {
    title: "Distributed Backup Service for the Internet",
    coverImage: "sdis.png",
    links: {
      github: "https://github.com/EduRibeiro00/DistBackupService-feup-sdis",
    },
    startDate: "May 2020",
    endDate: "Jun 2020",
    teamSize: 4,
    tags: ["Java", "Shell"],
    description: [
      "Developed a distributed peer-to-peer system in the Internet that allows the backup of a file divided in chunks in other peers; also allows the restoration and deletion of a file, and the reclaim of a peer's personal space.",
      "Protected the system against faults and raised its stability and scalability by using and implementing the Chord Protocol.",
      "Assured the privacy and integrity of the messages, and increased system security by implementing secure communication channels with JSSE.",
      "Achieved high degrees of concurrency and parallelism by using thread-pools and non-blocking I/O.",
    ],
  },
  {
    title: "NewsLab - Collaborative News",
    coverImage: "lbaw.png",
    links: {
      github: "https://github.com/EduRibeiro00/NewsLab-feup-lbaw",
    },
    startDate: "Mar 2020",
    endDate: "Jun 2020",
    teamSize: 4,
    tags: [
      "PHP",
      "Laravel",
      "Javascript",
      "HTML",
      "CSS",
      "PostgreSQL",
      "Docker",
    ],
    description: [
      "Developed a web app/platform to write and share news and opinions, enabling people to interact with the articles by rating and commenting.",
      "Performed various tasks regarding planning and specification, from developing frontend page mockups to designing the database structure.",
      "Adopted an Agile methodology to develop this project, working in iterations and selecting user stories to implement in each one.",
    ],
  },
  {
    title: "Java-- Compiler",
    coverImage: "comp.jpeg",
    links: {
      github: "https://github.com/EduRibeiro00/JMMCompiler-feup-comp",
    },
    startDate: "Mar 2020",
    endDate: "Jul 2020",
    teamSize: 4,
    tags: ["Java", "JavaCC", "Jasmin"],
    description: [
      "Developed a tool that serves as a compiler of .jmm files, written in the Java-- language, a subset of the Java language.",
      "Implemented various compilation stages, like the lexical and syntactic analysis, the semantic analysis, and the code generation phase.",
      "Worked on several compiler optimizations: liveness analysis, register allocation, constant propagation and folding, and dead code removal.",
    ],
  },
  {
    title: "OpenCX - Mobile App for Conferences",
    coverImage: "esof.png",
    links: {
      github: "https://github.com/EduRibeiro00/AMA-feup-esof",
    },
    startDate: "Oct 2019",
    endDate: "Jan 2020",
    teamSize: 4,
    tags: ["Flutter", "SQLite", "Gherkin", "Bluetooth"],
    description: [
      "Contributed to an open source project by developing a mobile app for conferences, that allows the user to see the conference's program and to make a custom schedule, receiving push notifications when an event is about to start and also allowing BT scanning for near-by events.",
    ],
  },
  {
    title: "Pharmacy Delivery Routing",
    coverImage: "plog.png",
    links: {
      github:
        "https://github.com/EduRibeiro00/PharmacyDeliveryRouting-feup-plog",
    },
    startDate: "Dec 2019",
    endDate: "Jan 2020",
    teamSize: 2,
    tags: ["Prolog"],
    description: [
      'CLI application for a "distribution company" that calculates the best routes for delivery trucks that need to go to certain pharmacies to deliver goods.',
      "The problem is an instance of the **Vehicle Routing Problem with Time Windows (VRP-TW)**; the goal is to generate the schedule of the distribution company, while minimizing both the number of trucks used and the overall distance traveled by the trucks.",
      "Done using Prolog and its **clpfd restrictions library**.",
    ],
  },
  {
    title: "The 7th Guest Infection",
    coverImage: "laig.png",
    links: {
      github: "https://github.com/EduRibeiro00/7thGuestInfection-feup-laig",
    },
    startDate: "Nov 2019",
    endDate: "Jan 2020",
    teamSize: 2,
    tags: [
      "Javascript",
      "WebCGF (WebGL library)",
      "Shaders (Vert and Frag)",
      "Prolog",
    ],
    description: [
      "Developed a fully playable version of the game [The 7th Guest: Infection](https://boardgamegeek.com/boardgame/284017/7th-guest-infection), with various game modes (Human vs Human, Human vs Computer), (Computer vs Computer).",
      "Implemented the game mechanics and various AI difficulties on a Prolog server.",
      "Developed a graphical interface with WebGL, using lighting, shaders, textures and animations, that communicates with the Prolog server.",
    ],
  },
  {
    title: "House Renting Web Application",
    coverImage: "ltw.png",
    links: {
      github: "https://github.com/EduRibeiro00/AgencyTravels-feup-ltw",
    },
    startDate: "Oct 2019",
    endDate: "Dec 2019",
    teamSize: 3,
    tags: ["HTML", "CSS", "Javascript", "PHP", "SQLite"],
    description: [
      "Developed an Airbnb-like web platform for house renting, using vanilla HTML, CSS, Javascript and PHP, using various web development techniques like AJAX.",
      "Had in mind web security principles and prevented various types of attacks and vulnerabilities, including XSS, CSRF and SQL injection.",
    ],
  },
  {
    title: "Security Van Routing",
    coverImage: "cal.png",
    links: {
      github: "https://github.com/EduRibeiro00/SecurityVanRouting-feup-cal",
    },
    startDate: "Mar 2019",
    endDate: "May 2019",
    teamSize: 3,
    tags: ["C++", "GraphViewer (Java API)"],
    description: [
      'Calculated paths for trucks with pick up and delivery of items along the way, tested in graphs with up to 21.2k nodes and 21.7k edges, by implementing various "shortest path" (and similar) algorithms (Dijkstra, Floydâ€Warshall, and more), and some heuristic algorithms.',
    ],
  },
  {
    title: "Personal Space Invader",
    coverImage: "psi.png",
    links: {
      github: "https://github.com/EduRibeiro00/personal-space-invader",
    },
    startDate: "Dec 2019",
    endDate: "Dec 2019",
    teamSize: 5,
    tags: ["Godot", "GDScript"],
    description: [
      'Game developed for the event RetroJam2019. The theme of the game jam was **"Space"**.',
      "The main character is in a club, having to avoid getting close to everyone else in order to not game over.",
    ],
  },
  {
    title: "Color Shooter",
    coverImage: "lcom.png",
    links: {
      github: "https://github.com/EduRibeiro00/ColorShooter-feup-lcom",
      demo: "https://drive.google.com/file/d/1aopUQvff6765TuItDO_DGXGs49jnRrn2/view?usp=sharing",
    },
    startDate: "Oct 2018",
    endDate: "Jan 2019",
    teamSize: 2,
    tags: ["C", "Minix OS"],
    description: [
      "Developed a Space Invaders style game, where the user had to shoot the different colored enemy ships with bullets of the same color.",
      "Developed a graphical interface for the game and added mouse and keyboard functionalities by programming various device drivers and computer peripherals (mouse, keyboard, timer, video card).",
    ],
  },
];
