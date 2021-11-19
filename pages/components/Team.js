import team from "../data/team.json";

const Team = () => (
  <div className="flex -mr-5 space-x-4 overflow-x-auto my-28 md:mr-0">
    {team.map((member) => (
      <div className="flex flex-col items-center" key={member.name}>
        <div className="relative flex mb-3">
          <div className="z-10 flex items-center justify-center w-32 h-32 border-4 rounded-full border-beige bg-tomato">
            <img src={`/team/${member.name}.webp`} alt="memoji" />
          </div>
          <div
            className={`w-32 h-32 -ml-12 border-4 rounded-full border-beige bg-pastel-${member.color}`}
          >
            <img src={`/team/${member.name}-pizza.png`} alt="funky pizza" />
          </div>
        </div>
        <a
          href={`https://twitter.com/${member.handler}`}
          className="mb-2 text-2xl font-semibold text-tomato hover:text-tomato/80"
        >
          @{member.handler}
        </a>
        <p className="text-sm font-medium text-darkRed">{member.role}</p>
      </div>
    ))}
  </div>
);

export default Team;
