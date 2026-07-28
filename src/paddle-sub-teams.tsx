import type { PaddleTeamCardTypes } from "./types/paddle-team-card-types"

type SubTeam = {
  name: string
  order: number
  members: PaddleTeamCardTypes[]
}

export const paddleSubTeams = (teamCards: PaddleTeamCardTypes[]): SubTeam[] => [
  {
    name: "Guides",
    order: 1,
    members: teamCards.filter((team) => team.position?.trim().toLowerCase() === "guide"),
  },
  {
    name: "Shop Dogs",
    order: 2,
    members: teamCards.filter((team) => team.position?.trim().toLowerCase() === "shop dog"),
  },
]
  .filter((group) => group.members.length > 0)
  .sort((a, b) => a.order - b.order)