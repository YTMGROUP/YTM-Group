import type { TeamMember } from '@/types';
import { AkbarPhoto, AlmoPhoto, RooheePhoto , SuganPhoto, TeamPhoto} from '@/assets';

export const sampleTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Akbar Nathani',
    position: 'Mortgage Advisor',
    email: '',
    phone: '',
    shortBio: 'Mortgage adviser with 10+ years’ experience, known for efficient, clear guidance that simplifies complex lending and helps clients secure loans aligned with their long-term goals.',
    fullBio: 'Akbar Nathani is a mortgage adviser with over a decade of experience in the industry. Known for his acute understanding of time management, Akbar values efficiency and ensures his clients receive prompt and effective service. His expertise lies in navigating the complexities of mortgages with ease, simplifying options and clearly explaining lending structures. Akbar’s calm, organised approach helps clients feel supported at every stage of the process, from initial consultation through to settlement, ensuring they secure solutions aligned with their long-term financial goals.',
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
    shortBio: 'Seasoned mortgage consultant with a strong banking background, offering personalised, transparent guidance and deep insight into lending policies and loan structures.',
    fullBio: 'Almo Dhamani is a seasoned mortgage consultant with a wealth of experience from the banking world. With a strong commitment to providing personalised service, Almo aims to make the mortgage process effortless and transparent for his clients. His background in banking equips him with deep insights into lending policies, product structures, and financial solutions tailored to individual needs, helping clients secure the right loan with confidence.',
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
    shortBio: 'Mortgage adviser with an entrepreneurial background, providing proactive, commercially minded advice and clear guidance to first-home buyers, investors and business owners.',
    fullBio: 'Roohee Rahman is a mortgage adviser with a strong entrepreneurial background. Roohee brings valuable insights from her experience building and managing businesses, translating them into strategic, commercially minded advice for her clients in the mortgage space. Her proactive approach and business acumen enable her to offer innovative solutions that meet diverse financial needs, whether for first-home buyers, investors, or business owners. With a focus on clear communication and long-term client relationships, Roohee guides clients through the lending process with confidence and clarity.',
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
    shortBio: 'Financial Adviser helping businesses and individuals build long-term security through superannuation, tax-effective wealth and retirement planning, integrating insurance, tax and retirement strategies.',
    fullBio: 'Sugan is a Financial Adviser helping businesses and individuals build long-term financial security through comprehensive advice. He analyses risk exposures, structures superannuation investments, and designs tailored strategies for tax-effective wealth accumulation and retirement planning. By integrating insurance protection, tax planning, and retirement goals, he delivers optimal financial outcomes and peace of mind, backed by strong market knowledge and personalised service.',
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
    shortBio: 'Compliance Manager helping property investors and businesses manage regulatory risk, monitoring compliance frameworks and governance to protect operations and maintain industry standards.',
    fullBio: 'Niroshan is a Compliance Manager helping property investors and businesses maintain regulatory excellence and risk mitigation. He monitors compliance frameworks, conducts risk assessments, implements governance protocols, and ensures regulatory adherence across all operations. This leads to protected business operations and maintained industry standards, delivered with systematic precision and proactive oversight.',
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
    shortBio: 'Client Service Consultant providing proactive, personalised support, coordinating services and communications to deliver seamless experiences and successful outcomes.',
    fullBio: 'Tash is a Client Service Consultant helping businesses and individuals receive exceptional support throughout their financial journey. She coordinates multi-service solutions, manages client communications, streamlines service delivery, and ensures seamless experiences across all touchpoints. This leads to enhanced client satisfaction and successful outcomes, delivered with proactive attention and personalised care.',
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
    shortBio: 'In-house business insurance adviser with years of experience helping businesses manage risk through tailored liability, property and industry-specific cover.',
    fullBio: 'At YTM Group, we know that protecting your business is a top priority, and that’s why we have Amit Chaudhary, our dedicated in-house business insurance adviser. Amit brings years of experience and a deep understanding of the unique risks that businesses face, ensuring that your company is well protected against unforeseen challenges and disruptions. Amit’s expertise spans a wide range of business insurance solutions, from liability and property coverage to specialised policies tailored to your industry’s specific needs. He takes the time to understand how your business operates, identifies potential exposure points, and structures that aligns with your risk profile and budget.',
    photoUrl: TeamPhoto,
    specializations: ['Public Liability Insurance', 'Commercial Property Insurance', 'Cyber Liability Insurance'],
    linkedInUrl: '',
    isActive: true
  },
  {
    id: '8',
    name: 'Dinesh Loganathan',
    position: 'Legal Practitioner',
    email: '',
    phone: '',
    shortBio: 'In-house legal counsel and solicitor specialising in conveyancing, estate planning and asset protection',
    fullBio: 'We believe that quality financial advice includes sound legal advice, and Dinesh Loganathan is the cornerstone of that belief. As our in-house legal counsel and solicitor, Dinesh brings a wealth of knowledge and experience to our team, specialising in areas such as conveyancing, estate planning, and asset protection. He works closely with our advisers to ensure that every strategy is both financially effective and legally robust, helping clients structure their affairs with clarity and confidence. Dinesh’s expertise ensures that our clients are not only financially prepared but also legally protected',
    photoUrl: TeamPhoto,
    specializations: ['Conveyancing', 'Commercial Contract', 'Dispute Resolution', 'Criminal/Traffic Law'],
    linkedInUrl: '',
    isActive: true
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return sampleTeamMembers.find(member => member.id === id);
}; 