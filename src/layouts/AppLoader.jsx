import React, { useState, useEffect } from "react";

export default function AppLoader() {
  const [loaderCounter, setLoaderCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoaderCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
  }, []);

  return (
    <div className="app_loader" data-loaded={`${loaderCounter >= 50}`}>
      <p className="bold-74">{loaderCounter}%</p>
    </div>
  );
}
