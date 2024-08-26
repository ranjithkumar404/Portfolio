import { v4 as uuid } from "uuid"

type Position =
  | "1st Place"
  | "2nd Place"
  | "3rd Place"
  | "Finalist"
  | "Participant"
  | "Project Pitching"
  | "Idea Pitching"
  | "Track Winners"

type Achievement = {
  id: string
  competition: string
  position: Position
  description: string
  date: string
  teamMembers: string[]
  organizer: string
}

export const achievements: Achievement[] = [
  {
    id: uuid(),
    competition: "AI Innovation Hackathon",
    position: "Finalist",
    description:
      "  We Developed a website that facilitate the migration of legacy code framework(VB)into modern technologies (Python) using Machine learnig algorithm(DeepQLearning) and we integrated our website with a Chatbot powered by GPT API for code documentation and error detection.",
    date: "February 2024",
    teamMembers: ["Keerthan M S", "Vishnu N Poojary", "Vishesh Hadimani"],
    organizer: "EG,Mangalore",
  }
]
