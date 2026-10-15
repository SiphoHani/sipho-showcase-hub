import { describe, expect, it } from 'vitest';
import { projects, technicalSkills, businessSkills, tools, linkedin, contactDetails, qualification, certificates } from '../lib/portfolio';
describe('supplied portfolio facts',()=>{
 it('uses the email from the original CV',()=>{expect(contactDetails.email).toBe('sihlezasithebe@gmail.com');});
 it('uses the phone from the original CV',()=>{expect(contactDetails.phone).toBe('072 946 4238');expect(contactDetails.phoneHref).toBe('tel:+27729464238');});
 it('uses the qualification award date and credits',()=>{expect(qualification.date).toBe('25 July 2025');expect(qualification.credits).toBe(32);});
 it('uses the Google certificate completion dates',()=>{expect(certificates.filter(c=>c.issuer==='Google · Coursera').map(c=>c.date)).toEqual(['14 October 2026','14 October 2026']);});
 it('uses the SANCS participation date',()=>{expect(certificates[0]?.date).toBe('April 2026');});
 it('uses the exact supplied LinkedIn profile',()=>{expect(linkedin).toBe('https://www.linkedin.com/in/sipho-hani-sithebe-064988362');});
 it('includes the six requested projects',()=>{expect(projects.map(p=>p.name)).toEqual(['Personal Portfolio Website','Banking Analytics Dashboard','Customer Management Application','Collections Management System','Cybersecurity Awareness Platform','Task Management System']);});
 it('does not claim concept projects are completed',()=>{expect(projects.filter(p=>p.status==='Live').map(p=>p.id)).toEqual([1]);});
 it('lists all fourteen supplied technology skills',()=>{expect(technicalSkills).toHaveLength(14);expect(technicalSkills).toContain('Cybersecurity Fundamentals');});
 it('includes supplied professional tools',()=>{expect(tools).toEqual(['Microsoft Excel','Microsoft Word','Outlook','CRM Systems','Avaya','CAMS','XDS','LSI']);expect(businessSkills).toContain('Debt Recovery');});
});
