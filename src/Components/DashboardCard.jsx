import Card from './Card';

const DashboardCard = ({ theText, theVal, type }) => {
  return (
    <>
      <Card>
        <div className='card-body'>
          <h5 className='card-title'>
            <span className={`text-${type}`}>{theVal}</span>
          </h5>
          <p className='card-text'>{theText}</p>
        </div>
      </Card>
    </>
  );
};
export default DashboardCard;
