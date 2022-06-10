import Image from "next/image";
import team from "../data/team.json";

const Team = () => (
  <div id="team" className="pr-5 -mx-5 md:pr-0 lg:mx-0">
    <div className="flex justify-between pl-5 my-24 -mr-5 space-x-5 overflow-x-auto lg:px-0 lg:pl-0 md:my-28 md:mr-0 lg:overflow-hidden horizontal-list">
      {team.map((member) => (
        <div className="flex flex-col items-center" key={member.name}>
          <div className="relative flex mb-3">
            <div className="z-10 flex items-center justify-center w-32 h-32 border-4 rounded-full border-beige bg-tomato">
              <Image
                src={`/team/${member.name}.webp`}
                alt={`${member.name} memoji`}
                width={200}
                height={200}
              />
            </div>
            <div
              className={`w-32 h-32 -ml-12 border-4 rounded-full border-beige bg-pastel-${member.color}`}
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
  </div>
);

export default Team;
