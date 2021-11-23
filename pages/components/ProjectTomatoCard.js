const ProjectTomatoCard = ({ title, text }) => {
  return (
    <div className="w-full text-white md:w-64 p-7 bg-tomato rounded-xl">
      <p className="mb-5 text-sm font-bold">{title}</p>
      <p className="text-6xl font-modak">{text}</p>
    </div>
  );
};

export default ProjectTomatoCard;
