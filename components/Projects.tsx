import ProjectCard from "./ProjectCard";

const projectData = [
  {
    name: "The Mandalorian API",
    description:
      "A REST API that provides quotes from The Mandalorian TV series and its spin-off shows, The Book of Boba Fett, and Ahsoka. It also offers information about characters and planets. Additionally, the API includes protected endpoints for administrators to create, edit, and delete quotes, characters, and planets. The API, the Postgres database and Nginx reverse proxy are running in Docker containers on a Digital Ocean droplet. Built using Kotlin and Ktor.",
    image: "/projects/the-mandalorian-api.jpeg",
    link: "https://the-mandalorian.dev/swagger",
    github: "https://github.com/nisarg-dave/the-mandalorian-api",
  },
  {
    name: "Football Central",
    description:
      "A website that displays fixtures, standings and results of the top 6 Football leagues in Europe. Furthermore, it displays tweets about the latest transfers and it also includes a blog written by my friend about FC Barcelona. Built using Next.js, Typescript, Sanity CMS, Zustand state management library and Tailwind CSS.",
    image: "/projects/football-central.png",
    link: "https://football-central.vercel.app/",
    github: "https://github.com/nisarg-dave/football-central",
  },
  {
    name: "The Entity",
    description:
      "A text-based riddles game inspired by the rogue AI from Mission Impossible Dead Reckoning Part One called The Entity. The riddles are generated by Google's Gemini Pro LLM. Built using Next.js, Tailwind CSS, shadcn/ui, Zustand state management library and Google's Gemini API.",
    image: "/projects/the-entity.png",
    link: "https://the-entity.vercel.app/",
    github: "https://github.com/nisarg-dave/the-entity",
  },
  {
    name: "Notes App",
    description:
      "A web app that allows users to perform CRUD operations on notes and tags. Built using React, Typescript, TailwindCSS, GraphQL, Pothos, Prisma and Postgres database.",
    image: "/projects/notes-app.png",
    link: "https://notes-app-client-0quq.onrender.com/",
    github: "https://github.com/nisarg-dave/notes-app",
  },
  {
    name: "The Prem",
    description:
      "A web app that displays standings, fixtures and live scores of the Premier League. Built using the MEVN (Mongo, Express, Vue and Node.js) stack. The Vue frontend, Express backend server and Nginx reverse proxy are running in Docker containers on an AWS EC2 instance.",
    image: "/projects/the-prem.png",
    link: "http://www.the-prem.com/",
    github: "https://github.com/nisarg-dave/premier-league-app",
  },
  {
    name: "Fantasy Premier League Reminder Lamdba Function",
    description:
      "A serverless function, running on AWS Lambda, to remind my friends to make changes to their Fantasy Premier League teams before each matchweek's deadline. Built using Node.js, Puppeteer and the Serverless Framework.",
    image: "/projects/lamdba-function.png",
    github:
      "https://github.com/nisarg-dave/fantasy-premier-league-reminder-serverless",
  },
  {
    name: "Chess Game",
    description:
      "A Chess game built using Java and the JFrame and JPanel libraries.",
    image: "/projects/java-chess-game.png",
    github: "https://github.com/nisarg-dave/java-chess-game",
  },
  {
    name: "Kotlin Tic Tac Toe",
    description: "A terminal based Tic Tac Toe game written in Kotlin.",
    image: "/projects/kotlin-tic-tac-toe.png",
    github: "https://github.com/nisarg-dave/kotlin-tic-tac-toe",
  },
  {
    name: "Parking Ticket Machine",
    description: "A terminal based parking ticket machine written in Java.",
    image: "/projects/parking-ticket-machine.png",
    github: "https://github.com/nisarg-dave/parking-ticket-machine",
  },
  {
    name: "Chat IO",
    description:
      "A real-time chat application built using React, Pocketbase and Chakra UI.",
    image: "/projects/chat-io.png",
    link: "https://chat-io-six.vercel.app/",
    github: "https://github.com/nisarg-dave/chat-io",
  },
  {
    name: "Tic Tac Toe",
    description: "A Tic Tac Toe app built using React and Typescript.",
    image: "/projects/tic-tac-toe.png",
    link: "https://tic-tac-toe-zeta-rust.vercel.app/",
    github: "https://github.com/nisarg-dave/tic-tac-toe",
  },
  {
    name: "Twitter Clone",
    description:
      "A Twitter clone built using Next.js, Typescript, Sanity CMS and Tailwind CSS. Followed tutorial by Sonny Sangha.",
    image: "/projects/twitter-clone.png",
    link: "https://twitter-clone-ten-ivory.vercel.app/",
    github: "https://github.com/nisarg-dave/twitter-clone",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix Clone built using React, Redux and Firebase. Followed tutorial by Sonny Sangha.",
    image: "/projects/netflix-clone.png",
    link: "https://netflix-react-clone-45c78.web.app/",
    github: "https://github.com/nisarg-dave/netflix-react-app",
  },
  {
    name: "The Vault",
    description:
      "A web-based data entry application for the West Australian Institute of Sport's (WAIS) pole vault coaches. This was a project that I was a part of in a multimember team during the Coders for Causes winter and summer project periods in 2021. Built using Vue.js, Django and Docker.",
    image: "/projects/thevault.webp",
    link: "https://wais-vault.azurewebsites.net/",
    github: "https://github.com/codersforcauses/wais",
  },
];

function Projects() {
  return (
    <section className="mx-4 mb-16">
      <h2 className="section-title mb-8 xl:mb-10 text-center mx-auto">
        My Projects
      </h2>
      <p className="subtitle text-center">
        Hover over the images to view the links
      </p>
      <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projectData.map((data, index) => {
          return <ProjectCard key={index} project={{ ...data }} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
