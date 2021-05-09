import { Link } from 'react-router-dom';

const Card = ({ title, tags, imgURL, description, _id }) => (
  <div className='card'>
    <div className='card-header'>
      <img src={imgURL} alt={title} />
    </div>
    <div className='card-body'>
      <h2>{title}</h2>
      <ul className='card-tags'>
        {tags.map((tag, index) => {
          {
            if (index < 4) {
              return <li>{tag}</li>;
            }
          }
        })}
      </ul>
      <p>
        {description.length > 300 ? description.slice(0, 200) : description}
        <Link to={`recipe/${_id}`}>... Read More</Link>
      </p>
    </div>
  </div>
);

export default Card;
