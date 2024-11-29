import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About CryptoSim</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At CryptoSim, we're passionate about democratizing access to cryptocurrency trading education. 
          Our mission is to provide a risk-free environment where both beginners and experienced traders 
          can simulate crypto trading, learn market dynamics, and sharpen their skills without the fear 
          of losing real money.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Realistic crypto market simulations</li>
          <li>Real-time data from major cryptocurrency exchanges</li>
          <li>Educational resources and tutorials</li>
          <li>Portfolio tracking and performance analytics</li>
          <li>Community forums for discussion and strategy sharing</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=100&width=100" },
            { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=100&width=100" },
            { name: "Alice Johnson", role: "Head of Education", image: "/placeholder.svg?height=100&width=100" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or feedback? We'd love to hear from you! Reach out to us at{' '}
          <a href="mailto:info@cryptosim.com" className="text-blue-600 hover:underline">
            info@cryptosim.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;

