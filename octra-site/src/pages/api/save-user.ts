import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { avatar, username } = req.body;

  if (!avatar || !username) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    await collection.updateOne(
      { username },
      { $set: { avatar, username } },
      { upsert: true }
    );

    res.status(200).json({ message: 'User saved successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
