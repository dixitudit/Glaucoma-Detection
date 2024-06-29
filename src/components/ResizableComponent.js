import React, { useEffect, useRef } from 'react';
import resizeObserverErrorPolyfill from '../utils/resizeObserverErrorPolyfill';

const ResizableComponent = () => {
  const elementRef = useRef(null);

  const yourResizeHandler = () => {
    console.log('Element resized');
    // Your resize handling logic here
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        yourResizeHandler();
      });
    };

    const resizeObserver = new ResizeObserver(observerCallback);

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
    };
  }, []);

  // Call the resizeObserverErrorPolyfill to suppress ResizeObserver error
  useEffect(() => {
    resizeObserverErrorPolyfill();
  }, []);

  return (
    <div ref={elementRef} style={{ resize: 'both', overflow: 'auto', width: '200px', height: '200px', border: '1px solid black' }}>
      Resize me!
    </div>
  );
};

export default ResizableComponent;
