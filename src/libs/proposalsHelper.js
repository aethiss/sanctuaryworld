export const getListProposalType = () => {
  return [
    { name: 'RESOURCES', color: '#99ccff' },
    { name: 'SKILL', color: '#ffcc66' },
    { name: 'ITEMS', color: '#d00636' },
    { name: 'ENEMIES', color: '#8b96a2' },
    { name: 'BOSS', color: '#49535d' },
    { name: 'ENDGAME', color: '#5bca61' },
    { name: 'CLANS', color: '#e5dd2b' },
    { name: 'DESIGN', color: '#6f30d4' },
    { name: 'PVP', color: '#969696' },
    { name: 'COOPERATIVE', color: '#836f6f' },
    { name: 'TRADING', color: '#399277' },
    { name: 'CRAFTING', color: '#488cd0' },
    { name: 'OTHER', color: '#949f19' },
  ].sort()
}
