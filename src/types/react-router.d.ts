import * as React from 'react';
import { RouteComponentProps } from 'react-router';

declare module 'react-router' {
  export interface RouteProps {
    children?: React.ReactNode | ((props: RouteComponentProps) => React.ReactNode);
  }
}
