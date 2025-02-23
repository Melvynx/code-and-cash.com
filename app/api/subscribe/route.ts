import { NextRequest } from 'next/server';
import { z } from 'zod';

const Body = z.object({
  email: z.string(),
});

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { email } = Body.parse(body);

  try {
    await fetch('https://codelynx.dev/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email,
        groups: ['general', 'code-et-cash'],
      }),
    });
    return new Response('Success', { status: 200 });
  } catch {
    return new Response('Error', { status: 400 });
  }
};
