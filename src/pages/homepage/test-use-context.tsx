import React, { useContext } from 'react';

export interface Props {
  children: JSX.Element[] | JSX.Element;
}

const dataContext = React.createContext('');

const ProvideData = ({ children }: Props) => {
  const data = 'hate, hate, hate...';

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export const useFuckingData = () => {
  return useContext(dataContext);
};

export default ProvideData;
