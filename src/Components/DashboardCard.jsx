const DashboardCard = ({ theText, theVal, type }) => {
  return (
    <>
      <div
        className='card text-bg-light m-3 text-center'
        style={{ maxWidth: '18rem' }}
      >
        <div className='card-body'>
          <h5 className='card-title'>
            <span className={`text-${type}`}>{theVal}</span>
          </h5>
          <p className='card-text'>{theText}</p>
        </div>
      </div>
    </>
  );
};
export default DashboardCard;
