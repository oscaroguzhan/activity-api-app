import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Spinner from './Spinner';
const Activity = ({ isLoading, items }) => {
   // console.log(items);
  return isLoading ? (
    <Spinner/>
  ) : (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
      <p> Turn over the card to see activity</p>
      <ArrowForwardIosIcon id="arrow"/>
      </div>
      <div className='card-back'>
        <h1>{items.activity}</h1>
        <ul>
          <li>
            <strong>Activity Type:</strong> {items.type}
          </li>
          <li>
            <strong>Participants:</strong> {items.participants}
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Activity;
