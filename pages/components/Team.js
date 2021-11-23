import Image from "next/image";
import team from "../data/team.json";

const Team = () => (
  <div className="flex justify-between -mr-5 space-x-5 overflow-x-auto my-28 md:mr-0">
    {team.map((member) => (
      <div className="flex flex-col items-center" key={member.name}>
        <div className="relative flex mb-3">
          <div className="z-10 flex items-center justify-center border-4 rounded-full w-28 h-28 border-beige bg-tomato">
            <Image
              src={`/team/${member.name}.webp`}
              alt={`${member.name} memoji`}
              width={200}
              height={200}
            />
          </div>
          <div
            className={`w-28 h-28 -ml-12 border-4 rounded-full border-beige bg-pastel-${member.color}`}
          >
            <Image
              src={`/team/${member.name}-pizza.png`}
              alt={`${member.name} funky pizza`}
              width={200}
              height={200}
            />
          </div>
        </div>
        <a
          href={`https://twitter.com/${member.handler}`}
          className="mb-2 text-2xl font-semibold text-tomato hover:text-tomato/60"
        >
          @{member.handler}
        </a>
        <p className="text-sm font-medium text-darkRed">{member.role}</p>
      </div>
    ))}
  </div>
);

export default Team;
