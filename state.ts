export const useState = <T>(
  value: T
): [getState: () => T, setState: (v: T) => void] => {
  let data: T = value;
  const getState = () => data;
  const setState = (value: typeof data): void => {
    data = value;
  };

  setState(value);

  return [getState, setState];
};
