import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountupCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="bg-purple-100 p-6 rounded-lg max-w-xs mx-auto text-center shadow-md"
    >
      {inView && <CountUp end={840} />}
    </div>
  );
};

export default CountupCard;
