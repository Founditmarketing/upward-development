export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({error: 'Method Not Allowed'});
  }
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({ 
      error: "Configuration missing", 
      message: "Please configure GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in your environment variables." 
    });
  }

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`);
    const data = await response.json();
    
    if (data.status !== 'OK') {
      return res.status(500).json({ error: "Google API Error", message: data.error_message || data.status });
    }
    
    res.status(200).json(data.result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews", message: String(error) });
  }
}
