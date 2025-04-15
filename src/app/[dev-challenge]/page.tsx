import { ChevronRight, Calendar, Clock, Trophy, Users } from "lucide-react"
import Link from "next/link"

import { PageMaxWidth } from "@/components/page-max-width"
// import LeaderboardTable from "@/components/leaderboard-table"



const page = ({ params }: { params: { slug: string } }) => {

    // In a real app, you would fetch the task data based on the slug
  const task = {
    title: "Build a Web3 Wallet",
    date: "01 Oct, 2024",
    time: "Ended",
    level: "Amateur",
    prize: 50,
    maxWinners: 10,
    description:
      "Figma ipsum component variant main layer. Ipsum arrange hand flatten style. Variant figjam stroke fill underline overflow. Ellipse subtract layer duplicate boolean effect prototype line flatten. Stroke auto vector clip vector bold auto inspect. Layer distribute rotate connection plugin move pixel. Rectangle connection background vertical opacity editor ipsum scrolling create. Library union pen flatten rectangle layout. Text scale scale pixel font main pencil hand. Editor select shadow pencil underline. Variant reesizing link arrange prototype layout.\n\nPlugin selection bullet distribute slice scale text. List edit main ellipse rotate layer arrow list variant bullet.",
  }
  const steps = [
    "Strikethrough select reesizing community share pixel horizontal layer. Plugin figjam group pen rectangle prototype outline prototype rectangle. Bullet connection device undo connection style flatten. Effect team shadow slice thumbnail community reesizing. Plugin italic subtract group inspect.",
    "Auto polygon layer comment vector. Scrolling clip vertical blur inspect project vector select. Thumbnail overflow italic underline underline ipsum. Pencil selection vertical italic scale text. Flatten pixel outline invite subtract ipsum.",
    "Duplicate auto rectangle plugin thumbnail follower. Content plugin vector list bullet background asset italic. Selection thumbnail shadow main thumbnail create community bold invite background. Layout device rectangle team editor team. Reesizing content device main edit component. Create ellipse object shadow flows inspect pixel draft scale. Distribute reesizing community font figma. Flows overflow arrange overflow rotate vertical move fill.",
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Novice":
        return "bg-green-500"
      case "Amateur":
        return "bg-yellow-500"
      case "Pro":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }
  return (
    <div className="min-h-screen bg-black text-white pt-[100px]">
    <PageMaxWidth>
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-2 mb-4 hover:text-white ">
            <Link href="/" className="  flex items-center gap-1 text-gray-500">Tasks</Link>
            <span><ChevronRight /> </span>
            <Link href='/'>Build a Web3 Wallet</Link>
        
      </div>

      <div className="bg-gray-900 rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-4">{task.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{task.date}</span>
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{task.time}</span>
            </div>
            <div className={`${getLevelColor(task.level)} text-black px-2 py-0.5 rounded text-xs`}>{task.level}</div>

            <div className="md:ml-auto flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-gray-400" />
                <span>
                  Prize: <strong>{task.prize} Algos</strong>
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-gray-400" />
                <span>
                  Max winners: <strong>{task.maxWinners}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-gray-300">{task.description}</p>

            <ol className="list-decimal pl-5 mt-6 space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="text-gray-300">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <div className=" flex gap-2 items-center">
              <input
                type="text"
                placeholder="Submit Github Repository link"
                className=" bg-gray-800 rounded-2xl md:rounded-[32px] py-3 px-4 text-white pr-24 w-[75%] md:w-[85%] outline-none"
              />
              <button className=" bg-[#34C759] hover:bg-green-600 text-white text-sm flex-1 h-full rounded-2xl md:rounded-[32px] md:p-4 py-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageMaxWidth>
  </div>
  )
}

export default page