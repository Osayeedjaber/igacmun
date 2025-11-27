export type CertificateCategory = 'secretariat' | 'campus_ambassador' | 'delegate';
export type CertificateRank = 'best' | 'outstanding' | 'standard';

// IGAC Brand Colors
export const IGAC_COLORS = {
  dark: '#000b07',
  darkAlt: '#001c14',
  cream: '#ffeccd',
  creamLight: '#faf4ea',
  gold: '#c9a227',
} as const;

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  type: CertificateCategory;
  ranks: CertificateRank[];
  requiredFields: string[];
  colors: {
    primary: string;
    accent: string;
    background: string;
  };
  icon: string;
}

export const CERTIFICATE_TEMPLATES: Record<CertificateCategory, CertificateTemplate> = {
  secretariat: {
    id: 'secretariat',
    name: 'Secretariat Certificate',
    description: 'For secretariat members and organizers',
    type: 'secretariat',
    ranks: ['best', 'outstanding', 'standard'],
    requiredFields: ['name', 'school', 'department', 'designation'],
    colors: {
      primary: IGAC_COLORS.gold,
      accent: IGAC_COLORS.cream,
      background: IGAC_COLORS.dark,
    },
    icon: '🎖️',
  },
  campus_ambassador: {
    id: 'campus_ambassador',
    name: 'Campus Ambassador Certificate',
    description: 'For campus ambassadors and representatives',
    type: 'campus_ambassador',
    ranks: ['best', 'outstanding', 'standard'],
    requiredFields: ['name', 'school'],
    colors: {
      primary: IGAC_COLORS.gold,
      accent: IGAC_COLORS.cream,
      background: IGAC_COLORS.dark,
    },
    icon: '🌟',
  },
  delegate: {
    id: 'delegate',
    name: 'Delegate Certificate',
    description: 'For delegates and participants',
    type: 'delegate',
    ranks: ['best', 'outstanding', 'standard'],
    requiredFields: ['name', 'school', 'committee', 'country'],
    colors: {
      primary: IGAC_COLORS.gold,
      accent: IGAC_COLORS.cream,
      background: IGAC_COLORS.dark,
    },
    icon: '🏅',
  },
};

export const RANK_LABELS: Record<CertificateRank, string> = {
  best: 'Best',
  outstanding: 'Outstanding',
  standard: 'Participation',
};

export const RANK_DESCRIPTIONS: Record<CertificateRank, string> = {
  best: 'Best - Award for exceptional excellence',
  outstanding: 'Outstanding - Award for remarkable achievement',
  standard: 'Participation - Certificate of participation',
};

/**
 * Helper to check if a category requires committee/country fields
 */
export function requiresCommitteeAndCountry(category: CertificateCategory): boolean {
  return category === 'delegate';
}

/**
 * Helper to check if a category requires department/designation fields
 */
export function requiresDepartmentAndDesignation(category: CertificateCategory): boolean {
  return category === 'secretariat';
}

/**
 * Helper to check if a category is campus ambassador (no extra fields needed)
 */
export function isCampusAmbassador(category: CertificateCategory): boolean {
  return category === 'campus_ambassador';
}

/**
 * Get display label for committee/department based on category
 */
export function getCommitteeLabel(category: CertificateCategory): string {
  return category === 'secretariat' ? 'Department' : 'Committee';
}

/**
 * Get display label for country/designation based on category
 */
export function getCountryLabel(category: CertificateCategory): string {
  return category === 'secretariat' ? 'Designation' : 'Country';
}

// Legacy type alias for backwards compatibility
export type CertificateType = CertificateCategory;
