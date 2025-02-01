import { useEffect } from "react";

// Custom hook to handle outside clicks
export const useOutsideClickHandler = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  // Callback function to be executed when a click occurs outside the element
  const handleClick = (event: MouseEvent) => {
    // Check if the ref exists and if the clicked target is not within the ref's element
    if (ref.current && !ref.current.contains(event.target as Node)) {
      // Call the provided callback function
      callback();
    }
  };

  // Attach event listener when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClick);

    // Clean up by removing event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback]); // Re-run the effect if ref or callback changes
};
