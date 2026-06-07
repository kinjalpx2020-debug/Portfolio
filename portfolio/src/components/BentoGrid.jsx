import React from 'react';

export default function BentoGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
      {children}
    </div>
  );
}