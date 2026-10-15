import cvAsset from '@/assets/sipho-hani-sithebe-cv.pdf.asset.json';
import portraitAsset from '@/assets/sipho-portrait.jpg.asset.json';
import qualificationAsset from '@/assets/full-stack-qualification.pdf.asset.json';
import qualificationPreview from '@/assets/full-stack-qualification-preview.jpg.asset.json';
import sancsAsset from '@/assets/sancs-certificate.pdf.asset.json';
import sancsPreview from '@/assets/sancs-certificate-preview.jpg.asset.json';
import essentialsAsset from '@/assets/google-ai-essentials.pdf.asset.json';
import essentialsPreview from '@/assets/google-ai-essentials-preview.jpg.asset.json';
import productivityAsset from '@/assets/google-ai-productivity.pdf.asset.json';
import productivityPreview from '@/assets/google-ai-productivity-preview.jpg.asset.json';
export const contactDetails = { email: 'sihlezasithebe@gmail.com', phone: '072 946 4238', phoneHref: 'tel:+27729464238' };
export const cv = cvAsset;
export const portrait = portraitAsset;
export const qualification = { name: 'Certificate in Full Stack Development', issuer: 'FNB App Academy / ITVarsity', date: '25 July 2025', credits: 32, file: qualificationAsset, preview: qualificationPreview };
export const certificates = [
 {name:'Southern Africa-Netherlands Cyber Security School',issuer:'Stellenbosch University & The Hague Centre for Strategic Studies',date:'April 2026',topics:['Cybersecurity','Security Awareness','Malware Defence','Cyber Resilience','Network Protection'],copy:'Successfully completed the third edition of the Southern Africa–Netherlands Cyber Security School.',file:sancsAsset,preview:sancsPreview,verify:null},
 {name:'Google AI Essentials',issuer:'Google · Coursera',date:'14 October 2026',topics:['Introduction to AI','AI Productivity','Prompting','Responsible AI','Continuous Learning'],copy:'Completed the five-course specialization with hands-on practice in responsible AI use and productivity.',file:essentialsAsset,preview:essentialsPreview,verify:'https://coursera.org/verify/specialization/8D8Z63BUABFL'},
 {name:'Maximize Productivity With AI Tools',issuer:'Google · Coursera',date:'14 October 2026',topics:['AI Tools','Productivity','Workflow Improvement'],copy:'Completed the Google-authorized course on using AI tools to improve productivity.',file:productivityAsset,preview:productivityPreview,verify:'https://coursera.org/verify/OANWBCR4YYNV'},
 {name:'Cybersecurity Industry Challenge Participation',issuer:'Industry challenge',date:'30 April 2026',topics:['Industry collaboration','Cyber resilience','Critical infrastructure awareness','Digital risk management'],copy:'Collaborated with Group B21 on a digital assessment framework covering risk identification, security requirements, monitoring, and response. Participation is listed in the original CV.',file:null,preview:null,verify:null},
];
export const linkedin = 'https://www.linkedin.com/in/sipho-hani-sithebe-064988362';
export const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git', 'GitHub', 'APIs', 'Data Management', 'User Experience Design', 'Design Thinking', 'Backend Development Fundamentals', 'AI-Assisted Development', 'Cybersecurity Fundamentals', 'Security Awareness'];
export const businessSkills = ['Customer Service', 'Customer Retention', 'Collections', 'Debt Recovery', 'Stakeholder Management', 'Communication', 'Negotiation', 'Problem Solving', 'Team Collaboration', 'Compliance', 'Financial Services'];
export const tools = ['Microsoft Excel', 'Microsoft Word', 'Outlook', 'CRM Systems', 'Avaya', 'CAMS', 'XDS', 'LSI'];
export const experience = [
 {company:'DASH BPO',role:'Offshore Customer Retention & Collections Specialist',focus:['Customer retention','Collections support','Customer engagement','Revenue protection'],copy:'Supporting offshore customers with empathetic engagement, retention-focused conversations, and collections support.'},
 {company:'CARTRACK',role:'Collections Agent / Customer Service Agent',focus:['Exceeded targets','Customer satisfaction','Collections success','Customer retention'],copy:'Combined customer service and collections expertise to protect revenue while maintaining positive client relationships.'},
 {company:'NEDBANK',role:'Customer Service Consultant & Debt Recovery Specialist',focus:['Relationship management','Debt recovery','Compliance','Top performer recognition'],copy:'Delivered service excellence in financial services, managed customer relationships, and supported compliant debt recovery.'},
 {company:'DR BEYERS NAUDÉ SECONDARY SCHOOL',role:'Administration Assistant Intern',focus:['Administrative support','Data management','Office administration'],copy:'Built a foundation in professional administration, accurate data management, and day-to-day office support.'},
];
export const projects = [
 {id:1,name:'Personal Portfolio Website',category:'Web development',type:'Live portfolio',description:'A recruiter-focused professional profile connecting business experience with a growing technology skill set.',stack:['React','TypeScript','Tailwind CSS'],features:['Accessible, mobile-friendly design','Professional journey and skills','Project discovery and contact'],status:'Live'},
 {id:2,name:'Banking Analytics Dashboard',category:'Data & analytics',type:'Project concept',description:'An exploration of how financial data can become clear, actionable insights for banking teams.',stack:['JavaScript','Data Management','APIs'],features:['Financial data visualisation','Performance indicators','Responsive dashboard'],status:'Concept'},
 {id:3,name:'Customer Management Application',category:'Web development',type:'Project concept',description:'A customer-first application concept informed by real experience in client relationship management.',stack:['HTML','CSS','JavaScript'],features:['Customer profiles','Interaction history','Service follow-ups'],status:'Concept'},
 {id:4,name:'Collections Management System',category:'Data & analytics',type:'Project concept',description:'A structured collections workflow concept that balances operational clarity with respectful customer engagement.',stack:['JavaScript','APIs','Backend fundamentals'],features:['Account tracking','Follow-up workflows','Collections reporting'],status:'Concept'},
 {id:5,name:'Cybersecurity Awareness Platform',category:'Cybersecurity',type:'Project concept',description:'A learning platform concept that makes everyday digital risks and safer online habits easier to understand.',stack:['HTML','CSS','JavaScript'],features:['Security awareness modules','Knowledge checks','Digital safety resources'],status:'Concept'},
 {id:6,name:'Task Management System',category:'Web development',type:'Project concept',description:'A lightweight productivity application concept for organising tasks, priorities, and team workflows.',stack:['JavaScript','Responsive Design','UX Design'],features:['Task organisation','Priority management','Progress tracking'],status:'Concept'},
];
export function pageHead(title: string, description: string, path: string) { return {meta:[{title:`${title} | Sipho Hani Sithebe`},{name:'description',content:description},{property:'og:title',content:`${title} | Sipho Hani Sithebe`},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:path},{name:'twitter:card',content:'summary_large_image'}],links:[{rel:'canonical',href:path}]}; }
