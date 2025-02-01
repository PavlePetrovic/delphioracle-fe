import { useEffect, useState } from "react";

export const useDebounce = (input: any, delay: number) => {
  const [value, setValue] = useState<any>(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(input);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, delay]);

  return value;
};
