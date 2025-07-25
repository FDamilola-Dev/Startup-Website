

const TalentCards =({ image, name, role }) => {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <img src={image} alt={name} />
      </div>
      <h4 className="team-card-name">{name}</h4>
      <p className="team-card-role">{role}</p>
    </div>
  );
}


export default TalentCards