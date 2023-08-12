const Card = ({ children }) => {
  return (
    <div
      className='card text-bg-light m-3 text-center'
      style={{ maxWidth: '18rem' }}
    >
      {children}
    </div>
  );
};
export default Card;
