const projects = [
  {
    id: "convolutional-neural-network",
    title: "Convolutional Neural Network",
    tech: ["Java", "Git"],
    github: "https://github.com/braewest/Convolutional-Neural-Network",
    summary:
      "A convolutional neural network built in Java by manually implementing convolutional, pooling, and fully connected layers. Trained and evaluated on MNIST and Google Quick Draw, achieving ~99% classification accuracy.",
    description:
      "Built a convolutional neural network in Java by manually implementing convolutional, pooling, and fully connected layers, without using existing machine learning frameworks. Trained and evaluated models on the MNIST and Google Quick Draw datasets, demonstrating end-to-end data processing, training, and inference workflows.",
    highlights: [
      "Achieved ~99% classification accuracy on unseen test data by training the CNN on a labeled dataset and validating generalization using a held-out test set.",
      "Built a custom Matrix class to handle all linear algebra operations.",
      "Includes a drawing pad interface for testing predictions interactively.",
      "Model persistence — save and load trained weights between sessions.",
    ],
    images: [
      // { src: "/images/project-name/screenshot.png", caption: "Optional caption" },
    ],
  },
  {
    id: "dfa-parser",
    title: "Deterministic Finite Automaton Parser",
    tech: ["C++", "Git"],
    github: "https://github.com/braewest/DFA-parser",
    summary:
      "A deterministic finite automaton parser in C++ that processes formal language definitions and validates input sequences, built with a custom lexer for tokenizing DFA specifications.",
    description:
      "Developed a deterministic finite automaton parser in C++ to process formal language definitions and validate input sequences. Designed and implemented a custom lexer to tokenize DFA specifications, enabling reliable parsing and analysis of the automaton structure.",
    highlights: [
      "Custom lexer tokenizes DFA specifications covering states, alphabet, transition functions, start state, and accept states.",
      "Validates arbitrary input strings against the constructed automaton.",
      "Handles multiple DFA definitions and input sequences in a single run.",
    ],
    images: [
      // { src: "/images/project-name/screenshot.png", caption: "Optional caption" },
    ],
  },
  {
    id: "project-spyn",
    title: "Project Spyn",
    tech: ["MATLAB", "LEGO EV3"],
    github: "https://github.com/braewest/ProjectSpyn",
    summary:
      "An autonomous maze-navigating vehicle built with the LEGO EV3 kit, using a 360-degree rotating ultrasonic sensor to detect obstacles, guide pathfinding decisions, and map the maze layout in real time.",
    description:
      "Designed and built an autonomous maze-navigating vehicle, integrating hardware sensors with control logic. Implemented a 360-degree rotating sensor system to detect obstacles, guide pathfinding decisions, and map the maze layout as the vehicle navigates.",
    highlights: [
      "360-degree rotating ultrasonic sensor for full environmental awareness at each decision point.",
      "Dynamic maze mapping — builds a layout of the environment in real time rather than following a pre-defined route.",
      "Checkpoint stops simulating traffic and passenger pick-up scenarios.",
      "Manual control mode alongside autonomous mode for hybrid operation.",
    ],
    images: [
      // { src: "/images/project-name/screenshot.png", caption: "Optional caption" },
    ],
  },
];

export default projects;
