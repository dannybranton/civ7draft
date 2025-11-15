import type { DraftMeta, Bans, Picks } from "../../interfaces/draft/draft";

const isPickable = (id: string, picks: Picks, bans: Bans, draftMeta: DraftMeta): boolean => {
    return draftMeta.draftStatus == 'IN_PROGRESS' &&
        !(picks.team1Picks.includes(id) ||
        picks.team2Picks.includes(id) ||
        bans.draftBans.includes(id) ||
        bans.houseBans.includes(id))
}

const pickBanClasses = (id: string, picks: Picks, bans: Bans, draftMeta: DraftMeta, enablePickBans: boolean, proposedPickBan: string, existing_classes: string): string => {
    let classes = existing_classes;
    classes = bans.draftBans.includes(id) ? classes + ' banned' : classes;
    classes = bans.houseBans.includes(id) ? classes + ' banned housebanned' : classes;
    classes = picks.team1Picks.includes(id) ? classes + ' team1pick' : classes;
    classes = picks.team2Picks.includes(id) ? classes + ' team2pick' : classes;
    classes = enablePickBans && isPickable(id, picks, bans, draftMeta) ? classes + ' pickable' : classes;
    classes = id == proposedPickBan ? classes + ' proposed' : classes;

    return classes;
  }

export {
    isPickable,
    pickBanClasses
};