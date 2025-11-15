import type { Bans, Picks } from "../../interfaces/draft/draft";

const isPickable = (id: string, picks: Picks, bans: Bans): boolean => {
    return !(picks.team1Picks.includes(id) ||
        picks.team2Picks.includes(id) ||
        bans.draftBans.includes(id) ||
        bans.houseBans.includes(id))
}

const pickBanClasses = (id: string, picks: Picks, bans: Bans, existing_classes: string): string => {
    let classes = existing_classes;
    classes = bans.draftBans.includes(id) ? 'banned' : classes;
    classes = bans.houseBans.includes(id) ? 'banned housebanned' : classes;
    classes = picks.team1Picks.includes(id) ? classes + 'team1pick' : classes;
    classes = picks.team2Picks.includes(id) ? classes + 'team2pick' : classes;
    classes = isPickable(id, picks, bans) ? classes + 'pickable' : classes;

    return classes;
  }

export {
    isPickable,
    pickBanClasses
};