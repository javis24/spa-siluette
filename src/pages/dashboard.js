// src/pages/dashboard.js
import Card from '../components/Card';
import '../app/globals.css';

const Dashboard = () => {
  const cardsData = [
    { title: "Card 1", description: "Descripción de la tarjeta 1" },
    { title: "Card 2", description: "Descripción de la tarjeta 2" },
    { title: "Card 3", description: "Descripción de la tarjeta 3" },
    { title: "Card 4", description: "Descripción de la tarjeta 4" },
    { title: "Card 5", description: "Descripción de la tarjeta 5" },
    { title: "Card 6", description: "Descripción de la tarjeta 6" },
    { title: "Card 7", description: "Descripción de la tarjeta 7" },
    { title: "Card 8", description: "Descripción de la tarjeta 8" },
    { title: "Card 9", description: "Descripción de la tarjeta 9" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
