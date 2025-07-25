
import TalentCard from './TalentCards';

import pegImg from '../assets/cardImg1.svg';
import richardImg from '../assets/cardImg2.svg';
import alexandraImg from '../assets/cardImg3.svg';
import janetImg from '../assets/cardImg4.svg';

const Talents = () => {
  const team = [
    { image: pegImg, name: 'Peg Legge', role: 'CEO' },
    { image: richardImg, name: 'Richard Guerra', role: 'CTO' },
    { image: alexandraImg, name: 'Alexandra Stolz', role: 'Designer' },
    { image: janetImg, name: 'Janet Bray', role: 'Developer' },
  ];

  return (
    <section className="team">
      <p className="team-pretitle">TEAM</p>
      <h2 className="team-title">Our Talents</h2>
      <p className="team-subtitle">
        Lorem ipsum, dolor sit amet consectetur<br/>
        Suscipit nemo hic quos, ab,
      </p>

      <div className="team-grid">
        {team.map(member => (
          <TalentCard
            key={member.name}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>

      <button className="team-button">View Team</button>
    </section>
  );
}





export default Talents