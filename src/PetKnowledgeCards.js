import React from "react";

const PetKnowledgeCards = () => {
  const cards = [
    {
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      description:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always at the top of the cutest pets. Not only that, small, lovely, smart, friendly, and skillful...",
      image: "./petk1.jpg",
    },
    {
      title: "Dog Diet You Need To Know",
      description:
        "Dividing a dog’s diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet...",
      image: "./petk2.jpg",
    },
    {
      title:
        "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      description:
        "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog...",
      image: "./petk3.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 bg-yellow-200">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Left Label */}
        <div>
          <p className="text-xl font-semibold">You already know?</p>
          <h2 className="text-3xl font-bold">Useful Pet Knowledge</h2>
        </div>

        {/* View More Button */}
        <a
          href="https://www.petmd.com/dog/general-health"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out flex items-center"
        >
          View more <span className="ml-2">&gt;</span>
        </a>
      </div>

      {/* Card Grid Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetKnowledgeCards;
