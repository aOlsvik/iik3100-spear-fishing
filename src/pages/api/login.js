// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'spear.json');

  if (req.method === 'POST') {
    console.log(req.body);

    // Read the existing data
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read file' });
      }
      console.log(req.body);

      // Parse existing data or initialize to an empty array if file is empty
      let existingData = [];
      if (data) {
        try {
          existingData.push(JSON.parse(data));
        } catch (parseErr) {
          console.error(parseErr);
          return res.status(500).json({ error: 'Failed to parse existing data' });
        }
      }

      // Append new data
      existingData.push(req.body);

      // Write updated data back to file
      fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
          return res.status(500).json({ error: 'Failed to write to file' });
        }

        res.status(200).json({ message: 'Data appended successfully' });
      });
    });
  } else if (req.method === 'GET') {
    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
