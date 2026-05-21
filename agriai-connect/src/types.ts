export interface Recommendation {
  crop: string;
  reason: string;
  expectedYield: string;
}

export interface MarketData {
  month: string;
  yield: number;
  price: number;
}

export interface AIRecResponse {
  recommendations: Recommendation[];
  advice: string;
  precautions: string[];
}

export interface MarketInsightResponse {
  trends: MarketData[];
  summary: string;
  alerts: string[];
}
