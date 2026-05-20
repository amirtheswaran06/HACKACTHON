import express from "express";
import path from "path";
import cors from "cors";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dummy Recommendations API
app.post("/api/recommendations", async (req, res) => {
  try {
    res.json({
      recommendations: [
        {
          crop: "Rice",
          reason: "Suitable for current soil and season",
          expectedYield: "5 Tons/Acre"
        },
        {
          crop: "Maize",
          reason: "Good market demand and climate support",
          expectedYield: "4 Tons/Acre"
        }
      ],
      advice: "Use balanced fertilizers and monitor irrigation regularly.",
      precautions: [
        "Avoid overwatering",
        "Check pest activity weekly"
      ]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

// Dummy Market Insights API
app.post("/api/market-insights", async (req, res) => {
  try {
    res.json({
      trends: [
        { month: "Jan", yield: 12, price: 10 },
        { month: "Feb", yield: 19, price: 15 },
        { month: "Mar", yield: 15, price: 12 },
        { month: "Apr", yield: 25, price: 18 },
        { month: "May", yield: 22, price: 28 },
        { month: "Jun", yield: 30, price: 25 }
      ],
      summary:
        "Market prices are expected to rise gradually over the next few months.",
      alerts: [
        "Possible pest attack in nearby districts",
        "Rainfall expected next week"
      ]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate market insights" });
  }
});

// Vite middleware
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");

    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

setupVite().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});