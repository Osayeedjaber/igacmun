export type CertificateType = 'secretariat' | 'campus_ambassador' | 'delegate';
export type CertificateRank = 'best' | 'outstanding' | 'standard';

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  type: CertificateType;
  ranks: CertificateRank[];
  requiredFields: string[];
  colors: {
    primary: string;
    accent: string;
    background: string;
  };
  icon: string;
}

export const CERTIFICATE_TEMPLATES: Record<CertificateType, CertificateTemplate> = {
  secretariat: {
    id: 'secretariat',
    name: 'Secretariat Certificate',
    description: 'For secretariat members and organizers',
    type: 'secretariat',
    ranks: ['best', 'outstanding', 'standard'],
    requiredFields: ['name', 'school', 'rank'],
    colors: {
      primary: '#059669',
      accent: '#10b981',
      background: '#f0fdf4',
    },
    icon: '🎖️',
  },
  campus_ambassador: {
    id: 'campus_ambassador',
    name: 'Campus Ambassador Certificate',
    description: 'For campus ambassadors and representatives',
    type: 'campus_ambassador',
    ranks: ['best', 'outstanding', 'standard'],
    requiredFields: ['name', 'school', 'rank'],
    colors: {
      primary: '#0891b2',
      accent: '#06b6d4',
      background: '#ecf9fd',
    },
    icon: '🌟',
  },
  delegate: {
    id: 'delegate',
    name: 'Delegate Certificate',
    description: 'For delegates and participants',
    type: 'delegate',
    ranks: ['best', 'outstanding', 'standard'],
    requiredFields: ['name', 'school', 'rank'],
    colors: {
      primary: '#7c3aed',
      accent: '#a855f7',
      background: '#faf5ff',
    },
    icon: '🏅',
  },
};

export const RANK_LABELS: Record<CertificateRank, string> = {
  best: 'Best',
  outstanding: 'Outstanding',
  standard: 'Secretariat',
};

export const RANK_DESCRIPTIONS: Record<CertificateRank, string> = {
  best: 'Best - Award for exceptional excellence',
  outstanding: 'Outstanding - Award for remarkable achievement',
  standard: 'Secretariat - Standard participation award',
};
