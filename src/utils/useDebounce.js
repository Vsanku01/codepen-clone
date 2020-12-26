import React, { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // wait for 'delay' time passed as props before setting the debouncedValue.
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function , clear out the handler or more and more handlers get attached
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
