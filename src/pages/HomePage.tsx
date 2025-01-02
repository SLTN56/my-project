import React from 'react';
import { Link } from 'react-router-dom';

// Sample event data (would typically come from an API)
const featuredEvents = [
  {
    id: '1',
    title: 'Live Concert: Afropop Fusion',
    category: 'Music',
    price: 9.99,
    thumbnail: '/api/placeholder/400/250',
    date: 'January 15, 2025',
  },
  {
    id: '2',
    title: 'Premier League Highlights',
    category: 'Sports',
    price: 4.99,
    thumbnail: '/api/placeholder/400/250',
    date: 'January 22, 2025',
  },
  {
    id: '3',
    title: 'State Procession Ceremony',
    category: 'Cultural',
    price: 7.99,
    thumbnail: '/api/placeholder/400/250',
    date: 'February 5, 2025',
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-anteli-primary to-anteli-secondary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stream Live Events, Anytime, Anywhere
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover incredible live sports, music, and cultural events from across Africa.
            Experience the excitement with Anteli's pay-per-view streaming.
          </p>
          <Link 
            to="/events" 
            className="bg-white text-anteli-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Events
          </Link>
        </div>
      </section>

      {/* Featured Events */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={event.thumbnail} 
                alt={event.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {event.category}
                  </span>
                  <span className="text-gray-500 text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-anteli-primary">
                    ${event.price}
                  </span>
                  <Link 
                    to={`/event/${event.id}`} 
                    className="bg-anteli-secondary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                  >
                    Watch Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How Anteli Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl font-bold text-anteli-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Events</h3>
              <p className="text-gray-600">
                Explore a wide range of live events from sports to music.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl font-bold text-anteli-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Purchase</h3>
              <p className="text-gray-600">
                Pay only for the events you want to watch with our secure payment system.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl font-bold text-anteli-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stream</h3>
              <p className="text-gray-600">
                Enjoy high-quality live streaming optimized for low-bandwidth connections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;