export type Course = {
  title: string;
  code: string;
  term: string;
  institution: string;
  description: string;
  topics: string[];
  link?: string;
};

export const highlightedCourses: Course[] = [
  {
    title: "Operating Systems",
    code: "CS 481",
    term: "Fall 2025",
    institution: "University of New Mexico",
    description:
      "Built kernel-scale labs in C to understand processes, preemptive schedulers, deadlock avoidance, and virtual memory management.",
    topics: [
      "Operating Systems",
      "Systems Programming",
      "Low-Level Programming",
      "Performance Engineering",
    ],
    link: "https://catalog.unm.edu/23-24/#/courses/Byg4McEqi9?group=Computer%20Science&bc=true&bcCurrent=CS481%20-%20Computer%20Operating%20Systems&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Deep Reinforcement Learning",
    code: "CS 461",
    term: "Fall 2025",
    institution: "University of New Mexico",
    description:
      "Project-based study of sequential decision making where I trained agents with dynamic programming, deep Q-networks, and policy-gradient methods in PyTorch.",
    topics: [
      "Reinforcement Learning",
      "Machine Learning",
      "Algorithms",
    ],
  },
  {
    title: "Introduction to Database Management",
    code: "CS 464",
    term: "Spring 2025",
    institution: "University of New Mexico",
    description:
      "Designed normalized schemas, wrote complex SQL, tuned indexes, and built a transactional application on top of a relational DBMS.",
    topics: [
      "Databases",
      "Software Engineering",
      "Performance Engineering",
    ],
    link: "https://catalog.unm.edu/#/courses/BJeOJoEcj9?group=Computer%20Science&bc=true&bcCurrent=CS464%20-%20Introduction%20to%20Database%20Management&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Software Engineering",
    code: "CS 460",
    term: "Fall 2025",
    institution: "University of New Mexico",
    description:
      "Covered the full software lifecycle from requirements and architecture to testing strategies, delivering a semester-long team project with real stakeholders.",
    topics: [
      "Software Engineering",
      "Architecture & Design",
      "Project Leadership",
      "Testing",
    ],
    link: "https://catalog.unm.edu/catalogs/2023-2024/courses/CS/460.html",
  },
  {
    title: "Data Structures and Algorithms II",
    code: "CS 362",
    term: "Fall 2025",
    institution: "University of New Mexico",
    description:
      "Extended algorithm design skills with amortized analysis, disjoint sets, minimum spanning trees, shortest paths, and divide-and-conquer strategies.",
    topics: [
      "Algorithms",
      "Data Structures",
      "Graph Theory",
    ],
    link: "https://catalog.unm.edu/#/courses/ByxOG9Ncjq?group=Computer%20Science&bc=true&bcCurrent=CS362%20-%20Data%20Structures%20and%20Algorithms%20II&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Data Structures and Algorithms",
    code: "CS 361L",
    term: "Fall 2024",
    institution: "University of New Mexico",
    description:
      "Analyzed algorithm complexity while implementing balanced trees, hash tables, graph traversals, and comparison-based sorts in Java.",
    topics: [
      "Data Structures",
      "Algorithms",
    ],
    link: "https://catalog.unm.edu/#/courses/S1g8p9Vqj5?group=Computer%20Science&bc=true&bcCurrent=CS361L%20-%20Data%20Structures%20and%20Algorithms&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Declarative Programming",
    code: "CS 357",
    term: "Fall 2024",
    institution: "University of New Mexico",
    description:
      "Explored functional and logic paradigms with Haskell lab work on recursion, laziness, and type-driven program design.",
    topics: [
      "Functional Programming",
      "Programming Languages",
    ],
    link: "https://catalog.unm.edu/#/courses/Hy-91i4qj9?group=Computer%20Science&bc=true&bcCurrent=CS357L%20-%20Declarative%20Programming&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Introduction to Numerical Computing",
    code: "CS 375",
    term: "Spring 2024",
    institution: "University of New Mexico",
    description:
      "Implemented numerical methods—root finding, interpolation, numerical integration, and differential equation solvers—while analyzing stability and error.",
    topics: [
      "Numerical Methods",
      "Algorithms",
      "Mathematics & Proofs",
    ],
    link: "https://catalog.unm.edu/#/courses/H1mpyiE9j5?group=Computer%20Science&bc=true&bcCurrent=CS375%20-%20Introduction%20to%20Numerical%20Computing&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Design of Large Programs",
    code: "CS 351",
    term: "Spring 2025",
    institution: "University of New Mexico",
    description:
      "Led a multi-person Java/JavaFX codebase using agile ceremonies, design patterns, automated testing, and CI to deliver a production-ready simulator.",
    topics: [
      "Software Engineering",
      "Object-Oriented Design",
      "Architecture & Design",
      "Project Leadership",
    ],
    link: "https://catalog.unm.edu/#/courses/BJgK1j49s5?bc=true&bcCurrent=CS351L%20-%20Design%20of%20Large%20Programs&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Introduction to Computer Architecture and Organization",
    code: "CS 341L",
    term: "Spring 2025",
    institution: "University of New Mexico",
    description:
      "Studied CPU organization, pipelining, assembly, memory hierarchies, and device I/O by writing low-level C and assembly labs.",
    topics: [
      "Computer Architecture",
      "Low-Level Programming",
      "Systems Programming",
      "Performance Engineering",
    ],
    link: "https://catalog.unm.edu/#/courses/rkGfP9N9jq?group=Computer%20Science&bc=true&bcCurrent=CS341L%20-%20Introduction%20to%20Computer%20Architecture%20and%20Organization&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Data Organization",
    code: "CS 241L",
    term: "Fall 2024",
    institution: "University of New Mexico",
    description:
      "Focused on memory-resident and disk-based data layouts—linked versus contiguous structures, manual memory management, and cache-aware programming in C.",
    topics: [
      "Systems Programming",
      "Performance Engineering",
      "Data Structures",
    ],
    link: "https://catalog.unm.edu/23-24/#/courses/Bkyi5Ecoc?bc=true&bcCurrent=CS241L%20-%20Data%20Organization&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Intermediate Programming",
    code: "CS 251L",
    term: "Spring 2023",
    institution: "University of New Mexico",
    description:
      "Strengthened object-oriented design skills through Java projects that used standard libraries, GUIs, and unit testing to deliver polished applications.",
    topics: [
      "Object-Oriented Design",
      "Software Engineering",
      "Programming Languages",
    ],
    link: "https://catalog.unm.edu/23-24/#/courses/SJWKKE9jc?group=Computer%20Science&bc=true&bcCurrent=CS251L%20-%20Intermediate%20Programming&bcGroup=Computer%20Science&bcItemType=courses",
  },
  {
    title: "Discrete Mathematics",
    code: "CS 261",
    term: "Fall 2023",
    institution: "University of New Mexico",
    description:
      "Worked through proofs-driven foundations covering propositional logic, combinatorics, graph theory, induction, and algorithmic reasoning.",
    topics: [
      "Mathematics & Proofs",
      "Algorithms",
      "Graph Theory",
    ],
    link: "https://catalog.unm.edu/23-24/#/courses/r1yic4coq?group=Computer%20Science&bc=true&bcCurrent=CS261%20-%20Mathematical%20Foundations%20of%20Computer%20Science&bcGroup=Computer%20Science&bcItemType=courses",
  },
];
