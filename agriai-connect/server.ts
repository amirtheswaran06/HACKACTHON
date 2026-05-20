import express from "express";
import path from "path";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Gemini Initialization
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// AI endpoints
app.post("/api/recommendations", async (req, res) => {
  try {
    const { soilType, season, location } = req.body;
    const prompt = `As an expert agricultural scientist, provide crop recommendations and farming advice for:
    Soil: ${soilType}
    Season: ${season}
    Location: ${location}

    Provide the response in JSON format with the following structure:
    {
      "recommendations": [
        { "crop": "string", "reason": "string", "expectedYield": "string" }
      ],
      "advice": "string",
      "precautions": ["string"]
    }`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  crop: { type: Type.STRING },
                  reason: { type: Type.STRING },
                  expectedYield: { type: Type.STRING }
                }
              }
            },
            advice: { type: Type.STRING },
            precautions: { type: Type.ARRAY, items: { type: Type.STRING } }
          }
        }
      }
    });

    res.json(JSON.parse(result.text || "{}"));
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

app.post("/api/market-insights", async (req, res) => {
  try {
    const { crop } = req.body;
    const prompt = `Predict market trends and insights for ${crop} in the current agricultural context. 
    Provide historical context and 6-month prediction data for yield (tons) and price index.
    Return JSON format: 
    {
      "trends": [
        { "month": "string", "yield": number, "price": number }
      ],
      "summary": "string",
      "alerts": ["string"]
    }`;

    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            trends: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  month: { type: Type.STRING },
                  yield: { type: Type.NUMBER },
                  price: { type: Type.NUMBER }
                }
              }
            },
            summary: { type: Type.STRING },
            alerts: { type: Type.ARRAY, items: { type: Type.STRING } }
          }
        }
      }
    });

    res.json(JSON.parse(result.text || "{}"));
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Failed to generate market insights" });
  }
});

// Vite middleware for development
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}

setupVite().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
