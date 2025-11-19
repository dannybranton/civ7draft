export interface Bans {
  houseBans?: string[];
  draftBans?: string[];
  team1Bans?: string[];
  team2Bans?: string[];
}

export interface Picks {
  team1Picks?: string[];
  team2Picks?: string[];
}

export type COMPLETED = 'COMPLETED'
export type NOT_STARTED = 'NOT_STARTED'
export type IN_PROGRESS = 'IN_PROGRESS'
export type PAUSED = 'PAUSED'
export type PROGRESS_STATUS = NOT_STARTED | IN_PROGRESS | PAUSED | COMPLETED

export type CIVILIZATION = 'CIVILIZATION'
export type LEADER = 'LEADER'
export type MEMENTO = 'MEMENTO'
export type STAGE_SELECTION_TYPE = CIVILIZATION | LEADER | MEMENTO

export interface DraftMeta {
  draftStatus: PROGRESS_STATUS
  proposedPickBan?: string
  stageType: STAGE_SELECTION_TYPE
}