import ProjectCard from "./ProjectCard";

const projectData = [
  {
    name: "Football Central",
    description: "Lorem Ipsium",
    image: "/projects/football-central.png",
    link: "https://football-central.vercel.app/",
    github: "https://github.com/nisarg-dave/football-central",
  },
  {
    name: "Notes App",
    description: "Lorem Ipsium",
    image: "/projects/notes-app.png",
    link: "https://notes-app-client-0quq.onrender.com/",
    github: "https://github.com/nisarg-dave/notes-app",
  },
  {
    name: "The Prem",
    description: "Lorem Ipsium",
    image: "/projects/the-prem.png",
    link: "http://www.the-prem.com/",
    github: "https://github.com/nisarg-dave/premier-league-app",
  },
  {
    name: "Fantasy Premier League Reminder Lamdba Function",
    description: "Lorem Ipsium",
    image: "/projects/lamdba-function.png",
    link: "https://github.com/nisarg-dave/fantasy-premier-league-reminder-serverless",
    github:
      "https://github.com/nisarg-dave/fantasy-premier-league-reminder-serverless",
  },
  {
    name: "Chess Game",
    description: "Lorem Ipsium",
    image: "/projects/java-chess-game.png",
    link: "https://github.com/nisarg-dave/java-chess-game",
    github: "https://github.com/nisarg-dave/java-chess-game",
  },
  {
    name: "Kotlin Tic Tac Toe",
    description: "Lorem Ipsium",
    image: "/projects/kotlin-tic-tac-toe.png",
    link: "https://github.com/nisarg-dave/kotlin-tic-tac-toe",
    github: "https://github.com/nisarg-dave/kotlin-tic-tac-toe",
  },
  {
    name: "Parking Ticket Machine",
    description: "Lorem Ipsium",
    image: "/projects/parking-ticket-machine.png",
    link: "https://github.com/nisarg-dave/parking-ticket-machine",
    github: "https://github.com/nisarg-dave/parking-ticket-machine",
  },
  {
    name: "Chat IO",
    description: "Lorem Ipsium",
    image: "/projects/chat-io.png",
    link: "https://chat-io-six.vercel.app/",
    github: "https://github.com/nisarg-dave/chat-io",
  },
  {
    name: "Tic Tac Toe",
    description: "Lorem Ipsium",
    image: "/projects/tic-tac-toe.png",
    link: "https://tic-tac-toe-zeta-rust.vercel.app/",
    github: "https://github.com/nisarg-dave/tic-tac-toe",
  },
  {
    name: "Twitter Clone",
    description: "Lorem Ipsium",
    image: "/projects/twitter-clone.png",
    link: "https://twitter-clone-ten-ivory.vercel.app/",
    github: "https://github.com/nisarg-dave/twitter-clone",
  },
  {
    name: "Netflix Clone",
    description: "Lorem Ipsium",
    image: "/projects/netflix-clone.png",
    link: "https://netflix-react-clone-45c78.web.app/",
    github: "https://github.com/nisarg-dave/netflix-react-app",
  },
  {
    name: "The Vault",
    description: "Lorem Ipsium",
    image: "/projects/thevault.webp",
    link: "https://wais-vault.azurewebsites.net/",
    github: "https://github.com/codersforcauses/wais",
  },
];

function Projects() {
  return (
    <section className="mx-4 mb-16">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        My Projects
      </h2>
      <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projectData.map((data, index) => {
          return <ProjectCard key={index} project={{ ...data }} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
