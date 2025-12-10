import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Building2 } from 'lucide-react';
import './Team.css';
import frankImg from '../../assets/1758947286900.jpg';
import dula from '../../assets/dula.png';
import ana from '../../assets/ana.jpg';
import randy from '../../assets/Randy.png';

const teamPhotos = [frankImg, dula, ana, randy ];
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string // Opcional por ahora
}

const Team: React.FC = () => {
  const { t } = useTranslation();
  const members = t('team.members', { returnObjects: true }) as TeamMember[];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        
        {/* Cabecera */}
        <div className="team-header">
          <h2 className="team-title text-gradient">{t('team.title')}</h2>
          <p className="team-subtitle">{t('team.subtitle')}</p>
        </div>

        {/* Grid de Miembros */}
        <div className="team-grid">
          {members.map((member, index) => (
            
            <div className="team-card" key={index}>
              <div className="member-photo-frame">
                {/* Placeholder: Si tienes fotos, cambia el src */}
                <img 
                  src={teamPhotos[index] || `https://ui-avatars.com/api/?name=${member.name}&background=0B2540&color=fff&size=256`} 
                  alt={member.name} 
                  className="member-photo" 
                />
                <div className="photo-overlay">
                  <div className="social-links">
                    <a href={member.linkedin} className="social-icon"><Linkedin size={20} /></a>
                  </div>
                </div>
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección Partners (Nexen Capital) */}
        <div className="partner-block">
          <p className="backed-label">{t('team.backed_by')}</p>
          <div className="partner-logo">
            <Building2 size={32} color="var(--scuti-navy)" />
            <span className="nexen-text">Nexen Capital</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;