import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center ">
      {/* Image Container */}
      <div className="mb-4 overflow-hidden rounded-full bg-gray-300 md:w-[235px] md:h-[235px]  w-[130px] h-[130px]">
        <Image src={image} alt={name} width={235} height={235} className="h-full w-full object-cover" />
      </div>

      {/* Name */}
      <h3 className="mb-1  font-semibold text-slate-900 text-[20px] md:text-[32px]">
        {name}
      </h3>

      {/* Role */}
      <p className="text-[16px] md:text-[24px] leading-[1.4] text-slate-500 font-avenir">
        {role}
      </p>
    </div>
  );
}

export default TeamMember;
