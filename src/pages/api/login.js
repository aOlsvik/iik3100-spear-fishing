// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {

  if (req.method === 'POST') {
    console.log(req.body);
    res.status(200).json({ status: 'success' });
  } else if (req.method === 'GET') {
    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
