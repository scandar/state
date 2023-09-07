import { useState } from "./state";

export const useCount = (value: number) => {
  const [count, setCount] = useState(value);

  return [count, setCount] as const;
};
