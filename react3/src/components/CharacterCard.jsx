import "./styles.css";

const CharacterCard = (props) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img
        src={props.image}
        alt="Blue Footprint Guy"
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{props.name}</h2>
        
        <span className="status">
          <span className={`status__icon status__alive`}></span>
          {props.status}-{props.species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">{props.location}:</span>
        {/*<h3>{props.location}</h3>*/}
        <a href={props.url}>Earth</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={props.firstIn}>Earth</a>
      </div>
    </div>
  </article>
);

export default CharacterCard;
