export const getPickOrder = (team1Name: string, team2Name: string, picksFirst: number) => {
  // Team 1 is Green Team, Team 2 is Blue Team
  // Team 1 Pick first

  let civilization_pick_stages_t1 = [
    [1, `${team1Name} ban a civilization`, 'CIVILIZATION'],
    [2, `${team2Name} ban a civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick a civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick a civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick a 2nd civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick a 2nd civilization`, 'CIVILIZATION'],
  ];

  const memento_ban_1_t1 = [
    [1, `${team1Name} ban a memento`, 'MEMENTO'],
    [2, `${team2Name} ban a memento`, 'MEMENTO'],
  ];

  const memento_ban_2_t1 = [
    [2, `${team2Name} ban a memento`, 'MEMENTO'],
    [1, `${team1Name} ban a memento`, 'MEMENTO'],
  ];

  const leader_pick_stages_t1 = [
    [2, `${team2Name} ban a leader`, 'LEADER'],
    [1, `${team1Name} ban a leader`, 'LEADER'],
    [2, `${team2Name} pick a leader`, 'LEADER'],
    [1, `${team1Name} pick a leader`, 'LEADER'],
    [2, `${team2Name} pick a second leader`, 'LEADER'],
    [1, `${team1Name} pick a second leader`, 'LEADER'],
  ];

  // Team 2 Pick first
  let civilization_pick_stages_t2 = [
    [2, `${team2Name} ban a civilization`, 'CIVILIZATION'],
    [1, `${team1Name} ban a civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick a civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick a civilization`, 'CIVILIZATION'],
    [2, `${team2Name} pick a 2nd civilization`, 'CIVILIZATION'],
    [1, `${team1Name} pick a 2nd civilization`, 'CIVILIZATION'],
  ];

  const memento_ban_1_t2 = [
    [2, `${team2Name} ban a memento`, 'MEMENTO'],
    [1, `${team1Name} ban a memento`, 'MEMENTO'],
  ];

  const memento_ban_2_t2 = [
    [1, `${team1Name} ban a memento`, 'MEMENTO'],
    [2, `${team2Name} ban a memento`, 'MEMENTO'],
  ];

  const leader_pick_stages_t2 = [
    [1, `${team1Name} ban a leader`, 'LEADER'],
    [2, `${team2Name} ban a leader`, 'LEADER'],
    [1, `${team1Name} pick a leader`, 'LEADER'],
    [2, `${team2Name} pick a leader`, 'LEADER'],
    [1, `${team1Name} pick a second leader`, 'LEADER'],
    [2, `${team2Name} pick a second leader`, 'LEADER'],
  ];

  let pick_stages = [];
  switch (picksFirst) {
    case 1:
        pick_stages = [ ...civilization_pick_stages_t1, ...memento_ban_1_t1, ...leader_pick_stages_t1, ...memento_ban_2_t1 ];
        break;
    case 2:
        pick_stages = [ ...civilization_pick_stages_t2, ...memento_ban_1_t2, ...leader_pick_stages_t2, ...memento_ban_2_t2 ];
        break;
    default:
        pick_stages = [ ...civilization_pick_stages_t1, ...memento_ban_1_t1, ...leader_pick_stages_t1, ...memento_ban_2_t1 ];
  }

  return pick_stages;
}

export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
