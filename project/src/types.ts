export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  category: 'rights' | 'mutual-aid' | 'zines' | 'security' | 'organize';
  link: string;
  icon: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  city: string;
  skills: string;
  solidarityAgreement: boolean;
}