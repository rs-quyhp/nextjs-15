'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';
import { Roles } from '../../../types/globals.t';
import { revalidatePath } from 'next/cache';

export const setRole = async (formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== 'admin')
    throw new Error('Not Authorized');

  const client = await clerkClient();
  const id = formData.get('id') as string;
  const role = formData.get('role') as Roles;

  try {
    await client.users.updateUser(id, {
      publicMetadata: {
        role,
      },
    });
    revalidatePath('/admin');
  } catch {
    throw new Error('Can not update user role');
  }
};

export const removeRole = async (formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== 'admin')
    throw new Error('Not Authorized');

  const client = await clerkClient();
  const id = formData.get('id') as string;

  try {
    await client.users.updateUser(id, {
      publicMetadata: {
        role: null,
      },
    });

    revalidatePath('/admin');
  } catch {
    throw new Error('Can not remove user role');
  }
};
