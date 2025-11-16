import type { DraftMeta, Bans, Picks } from "../../interfaces/draft/draft";

const isPickable = (id: string, team_number: number, picks: Picks, bans: Bans, draftMeta: DraftMeta, proposedPickBan: string, militaryLeaders: string[] = []): boolean => {
    return draftMeta.draftStatus == 'IN_PROGRESS' &&
        !(picks.team1Picks.includes(id) ||
        picks.team2Picks.includes(id) ||
        bans.draftBans.includes(id) ||
        bans.houseBans.includes(id)) 
        && isMilitaryLeaderPickable(id, team_number, militaryLeaders, picks, proposedPickBan);
}

const isMilitaryLeaderPickable = (id: string, team_number: number, militaryLeaders: string[] = [], picks: Picks, proposedPickBan: string): boolean => {
    if (!militaryLeaders.includes(id)) {
        return true; //not a military leader
    }
    let foundMilitaryLeader = false;
    switch (team_number) {
        case 1:
          picks.team1Picks.map((value) => { 
            if (militaryLeaders.includes(value) && value !== id && value !== proposedPickBan) {
                foundMilitaryLeader = true;
            }
          });
        break;
        case 2:
          picks.team2Picks.map((value) => { 
            if (militaryLeaders.includes(value) && value !== id && value !== proposedPickBan) {
                foundMilitaryLeader = true;
            }
          });
          break;
        default:
            return false;
    }
    return !foundMilitaryLeader;
}

const pickBanClasses = (id: string, team_number: number, picks: Picks, bans: Bans, draftMeta: DraftMeta, enablePickBans: boolean, proposedPickBan: string, existing_classes: string, militaryLeaders?: string[]): string => {
    let classes = existing_classes;
    if (!isMilitaryLeaderPickable(id, team_number, militaryLeaders, picks, proposedPickBan)){
        classes = classes + ' banned twomilitarybanned'
    }

    classes = bans.draftBans.includes(id) ? classes + ' banned' : classes;
    classes = bans.houseBans.includes(id) ? classes + ' banned housebanned' : classes;
    classes = picks.team1Picks.includes(id) ? classes + ' team1pick' : classes;
    classes = picks.team2Picks.includes(id) ? classes + ' team2pick' : classes;
    classes = enablePickBans && isPickable(id, team_number, picks, bans, draftMeta, proposedPickBan, militaryLeaders) ? classes + ' pickable' : classes;
    classes = id == proposedPickBan ? classes + ' proposed' : classes;

    return classes;
  }

export {
    isPickable,
    pickBanClasses
};