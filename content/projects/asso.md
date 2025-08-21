---
title: Paper Parser for Design Pattern Repository
image: asso.png
links:
  github: https://github.com/EduRibeiro00/PatternParser-feup-asso
startDate: "2021-03"
endDate: "2021-06"
teamSize: 5
tags: [Typescript, Node, PostgreSQL, MQTT, Docker]
---
* Developed a microservice, part of a design pattern repository application, that parses and extracts all relevant information that can be found on research papers about design patterns, such as the paper's title, authors, abstract, list of described patterns, and footer information.
* Allowed the support for different paper structures and types by implementing design patterns such as the Strategy and Builder patterns.
* Increased the reliability of the system and made it robust to crashes and failures by using a crash recovery database, that ensures that if the parser starts processing a paper, it will eventually output its details.