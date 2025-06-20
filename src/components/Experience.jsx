import React from "react";

function Experience() {
  const clientReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechSolutions",
      text: "Muhammad Hassan turned our Figma designs into a fully responsive and high-performing frontend. His code is clean, structured, and perfectly matches the original UI.",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      text: "We handed over the design files and Muhammad Hassan handled the entire frontend development flawlessly. The end result was pixel-perfect and worked across all devices.",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Founder, GreenLife",
      text: "Working with Muhammad Hassan was effortless. He developed the frontend exactly as per the design specifications, using React and Tailwind. Highly professional work.",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div
      id="experiences"
      className="bg-[#11071f] py-16 px-4 sm:px-8 font-primary"
    >
      {/* Client Reviews Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-semibold text-white mb-10">
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="text-yellow-400 text-lg mb-2">
                {renderStars(review.rating)}
              </div>
              <p className="text-white/90 italic mb-6">"{review.text}"</p>
              <div className="flex items-center">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  {/* Position removed here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
