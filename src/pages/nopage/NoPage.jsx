import React from 'react';
import warning  from '/img/warning.png'

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-400">
      <img src={warning} alt="" />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <p className="text-lg text-gray-600">Return To <a href="/" className='text-blue-600 font-bold'>Home</a> Page</p>
    </div>
  );
};

export default NoPage