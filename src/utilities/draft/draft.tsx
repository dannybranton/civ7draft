import type { DraftMeta, Bans, Picks } from "../../interfaces/draft/draft";

import { MILITARY_LEADERS, DEFAULT_TOTAL_TIME_FOR_PICK, DEFAULT_TOTAL_TIME_FOR_BAN_CIVILIZATION, DEFAULT_TOTAL_TIME_FOR_PICK_CIVILIZATION, DEFAULT_TOTAL_TIME_FOR_PICK_LEADER, DEFAULT_TOTAL_TIME_FOR_BAN_LEADER, DEFAULT_TOTAL_TIME_FOR_BAN_MEMENTO, DEFAULT_TOTAL_TIME_FOR_PICK_MEMENTO } from "./constants";

const isPickable = (id: string, team_number: number, picks: Picks, bans: Bans, draftMeta: DraftMeta): boolean => {
    return (draftMeta.draftStatus == 'IN_PROGRESS' || draftMeta.draftStatus == 'PAUSED') &&
        !(picks.team1Picks?.includes(id) ||
        picks.team2Picks?.includes(id) ||
        bans.draftBans?.includes(id) ||
        bans.houseBans?.includes(id) ||
        isForbiddenTooManyMilitary(id, team_number, picks, draftMeta)
        )
}

const isForbiddenTooManyMilitary = (id: string, team_number: number, picks: Picks, draftMeta: DraftMeta): boolean => {
    if (!MILITARY_LEADERS.includes(id)) {
        return false; //not a military leader
    }
    let militaryLeadersCount = 0;
    switch (team_number) {
        case 1:
            picks.team1Picks?.forEach((value) => {
                if (MILITARY_LEADERS.includes(value) && value !== id && value !== draftMeta.proposedPickBan){
                    militaryLeadersCount++;
                }
            });
            break;
        case 2:
            picks.team2Picks?.forEach((value) => {
                if (MILITARY_LEADERS.includes(value) && value !== id && value !== draftMeta.proposedPickBan){
                    militaryLeadersCount++;
                }
            });
            break;
    }
    return MILITARY_LEADERS.includes(id) && militaryLeadersCount >= 1;
}

const pickBanClasses = (id: string, team_number: number, picks: Picks, bans: Bans, draftMeta: DraftMeta, enablePickBans: boolean, proposedPickBan: string, existing_classes: string): string => {
    let classes = existing_classes;
    if (isForbiddenTooManyMilitary(id, team_number, picks, draftMeta) &&
        (draftMeta.draftStatus == 'IN_PROGRESS' || draftMeta.draftStatus == 'PAUSED') &&
        draftMeta.stageType == 'LEADER'
    ){
        classes = classes + ' banned twomilitarybanned'
    }

    classes = bans.draftBans?.includes(id) ? classes + ' banned' : classes;
    classes = bans.team1Bans?.includes(id) ? classes + ' team1ban' : classes;
    classes = bans.team2Bans?.includes(id) ? classes + ' team2ban' : classes;
    classes = bans.houseBans?.includes(id) ? classes + ' banned housebanned' : classes;
    classes = picks.team1Picks?.includes(id) ? classes + ' team1pick' : classes;
    classes = picks.team2Picks?.includes(id) ? classes + ' team2pick' : classes;
    classes = enablePickBans && isPickable(id, team_number, picks, bans, draftMeta) ? classes + ' pickable' : classes;
    classes = id == proposedPickBan ? classes + ' proposed' : classes;

    classes = (picks.team1Picks?.includes(id) || picks.team2Picks?.includes(id) || bans.draftBans?.includes(id)) ? classes + ' endscreen' : classes;

    classes = (picks.team1Picks?.includes(id) || picks.team2Picks?.includes(id) || bans.draftBans?.includes(id)) ? classes + ' displayable' : classes;

    return classes;
}

const getTotalTimeForPickBan = (draftMeta: DraftMeta, banning: boolean) => {
    let time = DEFAULT_TOTAL_TIME_FOR_PICK;
    switch (draftMeta.stageType) {
        case "CIVILIZATION":
            time = banning ? DEFAULT_TOTAL_TIME_FOR_BAN_CIVILIZATION : DEFAULT_TOTAL_TIME_FOR_PICK_CIVILIZATION
            break;
        case "LEADER":
            time = banning ? DEFAULT_TOTAL_TIME_FOR_BAN_LEADER : DEFAULT_TOTAL_TIME_FOR_PICK_LEADER
            break;
        case "MEMENTO":
            time = banning ? DEFAULT_TOTAL_TIME_FOR_BAN_MEMENTO : DEFAULT_TOTAL_TIME_FOR_PICK_MEMENTO
            break;
    }
    return time;
}

export {
    isPickable,
    pickBanClasses,
    getTotalTimeForPickBan
};