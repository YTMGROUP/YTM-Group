import type { TeamMember } from '@/types';
import { AkbarPhoto, AlmoPhoto, RooheePhoto , SuganPhoto, TeamPhoto} from '@/assets';

export const sampleTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Akbar Nathani',
    position: 'Mortgage Advisor',
    email: '',
    phone: '',
    shortBio: 'Certified Financial Planner with 12+ years of experience helping Australian families achieve their financial goals.',
    fullBio: 'Akbar is a Mortgage Advisor helping Australian families and investors achieve their property ownership goals. He structures tailored lending solutions, navigates complex financing scenarios, secures competitive interest rates, and streamlines application processes. This leads to successful property acquisitions and refinancing outcomes, delivered with personalised guidance and industry expertise.',
    photoUrl: AkbarPhoto,
    specializations: ['Home Loans', 'Asset Commercial Finance', 'SMSF Lending', 'Private Lending'],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '2',
    name: 'Almo Dhamani',
    position: 'Mortgage Consultant',
    email: '',
    phone: '',
    shortBio: 'Mortgage broker and lending specialist with extensive experience in residential and commercial lending.',
    fullBio: 'Almo is a Mortgage Advisor helping businesses and property investors access comprehensive lending solutions. He evaluates complex loan structures, negotiates with multiple lender panels, facilitates commercial transactions, and secures SMSF lending approvals. This leads to optimised financing outcomes and successful property investments, delivered with strategic insight and industry connections.',
    photoUrl: AlmoPhoto,
    specializations: ['Home Loans', 'Investment Property Loans'],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '3',
    name: 'Roohee Rahman',
    position: 'Mortgage Advisor',
    email: '',
    phone: '',
    shortBio: 'Qualified solicitor specializing in commercial law, property transactions, and business advisory.',
    fullBio: 'Roohee is a Legal Practitioner helping businesses and individuals navigate complex legal matters with confidence. She drafts comprehensive contracts, conducts property due diligence, manages regulatory compliance, and structures business acquisitions. This leads to legally sound transactions and protected business interests, delivered with meticulous attention to detail and practical commercial advice.',
    photoUrl: RooheePhoto,
    specializations: ['Home Loans', 'Investment Property Loans'],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '4',
    name: 'Sugan Kumar Kumanan',
    position: 'Financial Adviser',
    email: '',
    phone: '',
    shortBio: 'Experienced insurance broker specializing in comprehensive business protection and risk management.',
    fullBio: 'Sugan is a Financial Adviser helping businesses and individuals secure comprehensive insurance protection and financial security. They analyze risk exposures, design tailored coverage strategies, negotiate premium structures, and manage claims processes. This leads to optimal risk protection and financial peace of mind, delivered with thorough market knowledge and personalized service.',
    photoUrl: SuganPhoto,
    specializations: ['Superannuation', 'Tax Planning', 'Insurance', 'Estate Planning'],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '5',
    name: 'Niroshan Murrgiah',
    position: 'Compliance Manager',
    email: '',
    phone: '',
    shortBio: 'Property investment expert with extensive knowledge of commercial and residential real estate markets.',
    fullBio: 'Niroshan is a Compliance Manager helping property investors and businesses maintain regulatory excellence and risk mitigation. He monitors compliance frameworks, conducts risk assessments, implements governance protocols, and ensure regulatory adherence across all operations. This leads to protected business operations and maintained industry standards, delivered with systematic precision and proactive oversight.',
    photoUrl: TeamPhoto,
    specializations: [],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '6',
    name: 'Tash Amarasekera',
    position: 'Client Service Consultant',
    email: '',
    phone: '',
    shortBio: 'Strategic business consultant with expertise in operational efficiency and growth planning.',
    fullBio: 'Tash is a Client Service Consultant helping businesses and individuals receive exceptional support throughout their financial journey. He coordinates multi-service solutions, manages client communications, streamlines service delivery, and ensure seamless experiences across all touchpoints. This leads to enhanced client satisfaction and successful outcomes, delivered with proactive attention and personalized care.',
    photoUrl: TeamPhoto,
    specializations: [],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '7',
    name: 'Amit Chaudhary',
    position: 'Business Insurance Adviser',
    email: '',
    phone: '',
    shortBio: 'Dedicated client services professional ensuring exceptional customer experience and satisfaction.',
    fullBio: 'Amit is a Business Insurance Adviser helping companies and entrepreneurs protect their assets and operations against unforeseen risks. They assess business vulnerabilities, recommend comprehensive coverage solutions, coordinate policy implementations, and provide ongoing risk management support. This leads to robust business protection and operational continuity, delivered with industry expertise and responsive client service.',
    photoUrl: TeamPhoto,
    specializations: ['Public Liability'],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '8',
    name: 'Dinesh Loganathan',
    position: 'Legal Practitioner',
    email: '',
    phone: '',
    shortBio: 'Founding partner and managing director with over 20 years of experience in financial services leadership.',
    fullBio: 'Dinesh is a Legal Practitioner helping businesses and individuals navigate complex legal frameworks while driving strategic organizational growth. They provide executive legal counsel, oversee regulatory compliance, manage corporate governance, and facilitate strategic business decisions. This leads to legally sound business operations and sustainable organizational success, delivered with visionary leadership and comprehensive legal expertise.',
    photoUrl: TeamPhoto,
    specializations: ['Conveyancing', 'Commercial Contract', 'Dispute Resolution', 'Criminal/Traffic Law'],
    linkedInUrl: '',
    isActive: true
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return sampleTeamMembers.find(member => member.id === id);
}; 