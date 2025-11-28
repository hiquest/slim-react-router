import React, { useContext } from 'react';
import { RouterContext } from './context';
import { SwitchProps, RouteProps } from './types';
import { matchPath } from './utils';

export const Switch: React.FC<SwitchProps> = ({ children }) => {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error('Switch must be used within a Router');
  }

  const { location } = context;

  // Find the first child that matches the current location
  let matchedElement: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (matchedElement === null && React.isValidElement(child)) {
      const { path, exact } = child.props as RouteProps;

      if (path) {
        const paths = Array.isArray(path) ? path : [path];
        const hasMatch = paths.some(p =>
          matchPath(location.pathname, { path: p, exact: exact || false })
        );

        if (hasMatch) {
          matchedElement = child;
        }
      } else {
        // Route without path always matches (can be used as fallback)
        matchedElement = child;
      }
    }
  });

  return matchedElement;
};
