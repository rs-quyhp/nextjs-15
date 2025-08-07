import { Card } from '@/app/components/card';
import Link from 'next/link';

const NotificationsPage = () => {
  return (
    <Card>
      <div>
        <p>Archive Page</p>
        <Link href="/complex-dashboard/">Default</Link>
      </div>
    </Card>
  );
};

export default NotificationsPage;
