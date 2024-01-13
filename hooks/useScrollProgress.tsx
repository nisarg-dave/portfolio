import React, { useState, useEffect } from "react";

function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScollCompletion = () => {
      // returns the number of pixels that the document is currently scrolled vertically
      const currentProgress = window.scrollY;
      //  document.body.scrollHeight = measurement of the height of an element's content, including content not visible on the screen due to overflow
      // window.innerheight  returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", updateScollCompletion);

    // the return function is the cleanup function, or when the user leaves the page and the component will unmount.
    return () => window.removeEventListener("scroll", updateScollCompletion);
  }, []);
  return completion;
}

export default useScrollProgress;
