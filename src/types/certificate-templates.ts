export type CertificateType = 'secretariat' | 'campus-ambassador' | 'delegate';
export type SecretariatLevel = 'secretariat' | 'best-secretariat' | 'outstanding-secretariat';
export type CampusAmbassadorLevel = 'ambassador' | 'best-ambassador' | 'outstanding-ambassador';
export type DelegateLevel = 'delegate' | 'best-delegate' | 'outstanding-delegate';

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  description: string;
  icon: string;
  fields: CertificateField[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  levels: string[];
}

export interface CertificateField {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'select' | 'date';
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export const CERTIFICATE_TEMPLATES: Record<CertificateType, CertificateTemplate> = {
  secretariat: {
    id: 'secretariat',
    name: 'Secretariat Certificate',
    type: 'secretariat',
    description: 'Certificate for secretariat members. Award for organizational excellence.',
    icon: '📋',
    fields: [
      {
        id: 'name',
        label: 'Recipient Name',
        name: 'recipientName',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name',
      },
      {
        id: 'school',
        label: 'School/Organization',
        name: 'school',
        type: 'text',
        required: true,
        placeholder: 'Enter school or organization name',
      },
      {
        id: 'level',
        label: 'Certificate Level',
        name: 'level',
        type: 'select',
        required: true,
        options: ['Secretariat', 'Best Secretariat', 'Outstanding Secretariat'],
      },
      {
        id: 'date',
        label: 'Issue Date',
        name: 'issueDate',
        type: 'date',
        required: true,
      },
    ],
    colors: {
      primary: '#10b981',
      secondary: '#06b6d4',
      accent: '#8b5cf6',
    },
    levels: ['Secretariat', 'Best Secretariat', 'Outstanding Secretariat'],
  },
  'campus-ambassador': {
    id: 'campus-ambassador',
    name: 'Campus Ambassador Certificate',
    type: 'campus-ambassador',
    description: 'Certificate for campus ambassadors. Recognition of student leadership.',
    icon: '🎓',
    fields: [
      {
        id: 'name',
        label: 'Recipient Name',
        name: 'recipientName',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name',
      },
      {
        id: 'school',
        label: 'School/Organization',
        name: 'school',
        type: 'text',
        required: true,
        placeholder: 'Enter school or organization name',
      },
      {
        id: 'level',
        label: 'Certificate Level',
        name: 'level',
        type: 'select',
        required: true,
        options: ['Ambassador', 'Best Ambassador', 'Outstanding Ambassador'],
      },
      {
        id: 'date',
        label: 'Issue Date',
        name: 'issueDate',
        type: 'date',
        required: true,
      },
    ],
    colors: {
      primary: '#f59e0b',
      secondary: '#06b6d4',
      accent: '#ec4899',
    },
    levels: ['Ambassador', 'Best Ambassador', 'Outstanding Ambassador'],
  },
  delegate: {
    id: 'delegate',
    name: 'Delegate Certificate',
    type: 'delegate',
    description: 'Certificate for conference delegates. Participation and recognition.',
    icon: '🤝',
    fields: [
      {
        id: 'name',
        label: 'Recipient Name',
        name: 'recipientName',
        type: 'text',
        required: true,
        placeholder: 'Enter recipient name',
      },
      {
        id: 'school',
        label: 'School/Organization',
        name: 'school',
        type: 'text',
        required: true,
        placeholder: 'Enter school or organization name',
      },
      {
        id: 'level',
        label: 'Certificate Level',
        name: 'level',
        type: 'select',
        required: true,
        options: ['Delegate', 'Best Delegate', 'Outstanding Delegate'],
      },
      {
        id: 'date',
        label: 'Issue Date',
        name: 'issueDate',
        type: 'date',
        required: true,
      },
    ],
    colors: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#10b981',
    },
    levels: ['Delegate', 'Best Delegate', 'Outstanding Delegate'],
  },
};

export function getTemplateByType(type: CertificateType): CertificateTemplate {
  return CERTIFICATE_TEMPLATES[type];
}

export function getTemplateFields(type: CertificateType): CertificateField[] {
  return CERTIFICATE_TEMPLATES[type].fields;
}

export function getLevels(type: CertificateType): string[] {
  return CERTIFICATE_TEMPLATES[type].levels;
}
