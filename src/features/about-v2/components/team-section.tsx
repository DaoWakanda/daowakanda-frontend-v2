import TeamMember from "./team-member";


const teamMembers = [
  {
    name: 'Eyitayo Anjorin',
    role: 'Project Adviser',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028124/903709915ed2a37314b5adc0751b2f230078c20b_ainyiq.jpg',
  },
  {
    name: 'Inyang Andikan',
    role: 'Project Manager',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028123/fee01712d9f8fc1cfd599068298f1486e7a5632d_fkastl.jpg',
  },
  {
    name: 'Paul Ogwulumba',
    role: 'Smart Contract & Fullstack Dev.',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028122/4a82ed6ec13d99d8be1705f3112644c09bf537b2_vtdc6p.jpg',
  },
  {
    name: 'Sylva Maduneche',
    role: 'Frontend Dev.',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028123/ecca673026eb802e82ff2d61ab6b925725e7f91f_reftco.jpg',
  },
  {
    name: 'Adeyemi Sadiq',
    role: 'Frontend Dev.',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028123/ea08576cc10e1e7cb57bea257c83ad89c1fd0009_hchusc.jpg',
  },
  {
    name: 'Micah Tom',
    role: 'UI/UX Designer',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028123/1eb9b4acf67f4820b1f0b3ca10ec14863a1fff07_kdlfyq.png',
  },
  {
    name: 'Maduneche Samuel',
    role: 'Dev.',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028125/28853bbeacf9301395034be6e09b49bfdab83274_ohzz0f.jpg',
  },
  {
    name: 'Jamabo Abigail',
    role: 'Graphic Designer',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028122/b6a84adff7096474bd34b483f51bcd32be552511_hieitr.jpg',
  },
  {
    name: 'Isiaka Latifat',
    role: 'Community Manager',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028122/4e7b4d8ea4ce2867377fd250fef159a2e0451970_imvnq9.jpg',
  },
  {
    name: 'Philemon',
    role: 'Growth',
    image:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1772028125/7cada16863a9a115dcfe3f7cb0a4219cca7abc1f_mjdt9c.jpg',
  },
];

function TeamSection() {
  return (
    <section className="min-h-screen pt-[150px]  bg-[#F3F5FC] font-degularDisplay px-8 pb-16 md:px-6 md:pb-12">
      <div className="mx-auto max-w-7xl  lg:px-10">
        <h1 className="mb-4 lg:text-[60px] md:mb-8  font-extrabold leading-tight text-slate-900 md:text-4xl text-3xl">
          Meet the Team <span className="inline-block ">💜</span>
        </h1>
        <p className="mb-16 text-lg leading-relaxed text-slate-700 md:mb-12  md:text-[28px] font-avenir">
          We're a chill group just trying to keep
          <br />
          the community active and running
        </p>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 ">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
