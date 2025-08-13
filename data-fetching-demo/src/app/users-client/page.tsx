'use client';
import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UserClientPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError('');
        setLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Error when fetching user');
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users . . . </div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <ul className="space-y-4 p-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 pg-white shadow-md rounded-lg text-gray-700"
          >
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">
              <div>Username: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserClientPage;
