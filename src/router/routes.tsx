import { PropsWithChildren } from 'react';
import { Route, Routes  } from 'react-router';

type RouterProps = PropsWithChildren<{
    path: string;
}>;

export const Router = ({ children, path }: RouterProps) => {
  return (
    <Routes>
      <Route path={path} element={children} />
    </Routes>
  );
};

export default Router;