import { Metadata } from 'next';
import { Counter } from './counter';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter',
};

const CounterPage = () => {
  return <Counter />;
};

export default CounterPage;
