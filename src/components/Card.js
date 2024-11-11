// src/components/Card.js
const Card = ({ title, description }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };
  
  export default Card;
  