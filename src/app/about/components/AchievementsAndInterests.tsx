import React from 'react';

function AchievementsAndInterests() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full mx-4 md:mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong className="text-blue-400">1st Prize in College Web Development Competition:</strong> Awarded for creating top-notch websites, showcasing strong skills and creativity in web development.
            </li>
            <li>
              <strong className="text-blue-400">2nd Prize in College Arduino Project Competition:</strong> Recognized for the "Coin-Inserted Charge Machine," showcasing technical skills and creativity in project execution.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Personal Interests</h2>
          <p>
            I am passionate about software development, programming, and mastering Data Structures. In my free time, I enjoy gaming and staying updated with the latest trends in technology and the gaming industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AchievementsAndInterests;
