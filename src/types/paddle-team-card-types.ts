import { PaddleCardTypes } from './paddle-card-types'

export type PaddleTeamCardTypes = PaddleCardTypes & {
  order?: number | null
  position?: string | null
  hasProfileImage: boolean
  hometown?: string | null
  branches?: Array<{ slug?: string | null }> | null
}