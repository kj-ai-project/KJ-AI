export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    return res.status(200).json({
      reply: `KJ AI: நீங்கள் கேட்டது — ${message}`
    });

  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong"
    });
  }
}
