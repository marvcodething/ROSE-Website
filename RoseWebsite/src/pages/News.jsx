import React, { useState, useEffect } from 'react';
import client from '../client'; // Adjust the path as necessary

const News = () => {
  const [allPostsData, setAllPostsData] = useState(null);

  useEffect(() => {
    client.fetch(
      `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset-> {
            _id,
            url
          }
        }
      }`
    )
    .then((data) => setAllPostsData(data))
    .catch(console.error);
  }, []);

  return (
    <div className="bg-white min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center">News</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">ROSE Updates</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData && allPostsData.map((post, index) => (
            <Link to={"/news/" + post.slug.current} key={post.slug.current}>
              <span className="bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-400" key={index}>
                <img className="w-full h-full rounded-r object-cover absolute" src={post.mainImage.asset.url} />
                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                  <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-white bg-opacity-75 rounded">{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;