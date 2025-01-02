import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AIVideoAnalysis } from '../components/AIVideoAnalysis';

const EventStreamPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<{
    title: string;
    videoSrc: string;
    price: number;
  } | null>(null);

  useEffect(() => {
    // Fetch event data from an API or some other data source
    const fetchEventData = async () => {
      // Sample data, replace with your actual API call
      setEvent({
        title: 'Live Concert: Afropop Fusion',
        videoSrc: '/path/to/event/video.mp4',
        price: 9.99,
      });
    };

    fetchEventData();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <AIVideoAnalysis videoSrc={event.videoSrc} />
        <div className="p-4">
          <p className="text-lg font-bold text-anteli-primary mb-4">
            Price: ${event.price}
          </p>
          <button className="bg-anteli-secondary text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Purchase Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventStreamPage;