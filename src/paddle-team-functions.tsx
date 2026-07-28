import type { PaddleTeamCardTypes } from "./types/paddle-team-card-types"
import { PaddleGatsbyImageType } from "./types/paddle-gatsby-image-type"

export const paddleTeamFunctions = (strapiExperienceGuidesImage: PaddleGatsbyImageType, allStrapiTeam: PaddleTeamCardTypes[]) => {
  const defaultGuideImage = strapiExperienceGuidesImage
  const teamCards = allStrapiTeam
    .map((team) => {
      const position = team.position?.trim()
      const excerpt = team.excerpt?.trim()
      const hometown = team.hometown?.trim()

      return {
        ...team,
        title: position ? `${team.title} - ${position}` : team.title,
        excerpt: excerpt || hometown || "",
        hasProfileImage: Boolean(team.image?.localFile),
        image: team.image?.localFile ? team.image : defaultGuideImage,
      }
    })
    .sort((a, b) => {
      const orderA = typeof a.order === "number" ? a.order : Number.POSITIVE_INFINITY
      const orderB = typeof b.order === "number" ? b.order : Number.POSITIVE_INFINITY

      if (orderA !== orderB) {
        return orderA - orderB
      }

      return Number(b.hasProfileImage) - Number(a.hasProfileImage)
    })

  return teamCards
}