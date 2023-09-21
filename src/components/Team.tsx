import TeamCard from "@/app/views/TeamCard";

const Team = () => {
  return (
    <div className="flex flex-col items-center mt-16 max-w max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center w-3/5">
        <h1 className="text-[64px] font-bold mb-10">Gallery</h1>
        <p className="text-[24px] text-center leading-[31px] tracking-[-0.48px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
          volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat,
          viverra magna risus.{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-6 gap-y-3">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default Team;
