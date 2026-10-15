import { describe, expect, it } from 'vitest';
import { projects, technicalSkills, businessSkills, tools, linkedin } from '../lib/portfolio';
describe('supplied portfolio facts',()=>{
 it('uses the exact supplied LinkedIn profile',()=>{expect(linkedin).toBe('https://www.linkedin.com/in/sipho-hani-sithebe-064988362');});
 it('includes the six requested projects',()=>{expect(projects.map(p=>p.name)).toEqual(['Personal Portfolio Website','Banking Analytics Dashboard','Customer Management Application','Collections Management System','Cybersecurity Awareness Platform','Task Management System']);});
 it('does not claim concept projects are completed',()=>{expect(projects.filter(p=>p.status==='Live').map(p=>p.id)).toEqual([1]);});
 it('lists all fourteen supplied technology skills',()=>{expect(technicalSkills).toHaveLength(14);expect(technicalSkills).toContain('Cybersecurity Fundamentals');});
 it('includes supplied professional tools',()=>{expect(tools).toEqual(['Microsoft Excel','Microsoft Word','Outlook','CRM Systems','Avaya','CAMS','XDS','LSI']);expect(businessSkills).toContain('Debt Recovery');});
});
