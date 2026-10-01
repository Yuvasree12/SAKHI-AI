import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google GenAI on the server
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

interface SchemeAssistantRequestBody {
  query: string;
  language: 'ta' | 'en' | 'hi' | 'te';
}

const languageNames: Record<string, string> = {
  ta: 'Tamil (தமிழ்)',
  en: 'English',
  hi: 'Hindi (हिन्दी)',
  te: 'Telugu (తెలుగు)',
};

app.post('/api/scheme-assistant', async (req: Request, res: Response) => {
  const { query, language = 'en' } = req.body as SchemeAssistantRequestBody;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query is required' });
  }

  const targetLang = languageNames[language] || 'English';

  try {
    const prompt = `The user asked: "${query}"
Please provide an easy-to-understand explanation of the relevant Indian government scheme or service for women.
All fields in the JSON response must be in ${targetLang}.`;

    const systemInstruction = `You are "SAKHI AI" (Government Scheme Assistant for Women in India).
Your mission is to help women with NO prior digital or technical background understand and access essential government welfare schemes and financial benefits.

Target Language: You MUST answer entirely in ${targetLang}.
Tone: Respectful, warm, clear, and reassuring (as if speaking to an elder sister or mother).
Never use confusing bureaucratic or technical jargon.

Provide structured information with:
1. schemeName: Name of the scheme (in ${targetLang} with official/popular title).
2. officialName: Official name or acronym (e.g., PMMVY, KMUT, Ladli Behna, PMMY).
3. summary: 1-2 simple sentences explaining the scheme.
4. purpose: Why this scheme exists and how it protects women.
5. benefits: Clear financial or material benefits (e.g. ₹1,000/month, ₹5,000 pregnancy aid, free gas stove, subsidized loan).
6. financialAmount: Short badge text of the monetary benefit (e.g. "₹1,000 / மாதம்", "₹5,000 सहायता", "₹1,000 / Month").
7. eligibility: Array of 3-4 simple conditions on who can get it (age, marital status, income limit).
8. documents: Array of practical physical documents to carry (Aadhaar card, Ration card, Bank passbook, etc.).
9. applicationProcess: Array of 3-4 numbered steps to apply.
10. whereToApply: Exact physical office/place to go (e.g. Anganwadi center, Gram Panchayat, e-Seva / CSC center, Post Office, Bank branch).
11. nextStep: The single most urgent and actionable step the woman should do today/first.
12. spokenSummary: A warm, clear, natural spoken script in ${targetLang} to be read aloud via text-to-speech. DO NOT include markdown, asterisks, bullet marks, or special characters. Speak directly to her with warmth.
13. suggestedQuestions: Array of 3 short follow-up questions she might want to ask next in ${targetLang}.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            schemeName: { type: Type.STRING },
            officialName: { type: Type.STRING },
            summary: { type: Type.STRING },
            purpose: { type: Type.STRING },
            benefits: { type: Type.STRING },
            financialAmount: { type: Type.STRING },
            eligibility: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            documents: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            applicationProcess: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            whereToApply: { type: Type.STRING },
            nextStep: { type: Type.STRING },
            spokenSummary: { type: Type.STRING },
            suggestedQuestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: [
            'schemeName',
            'summary',
            'purpose',
            'benefits',
            'eligibility',
            'documents',
            'applicationProcess',
            'whereToApply',
            'nextStep',
            'spokenSummary',
          ],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response from AI model');
    }

    const parsedData = JSON.parse(text);
    return res.json(parsedData);
  } catch (error: any) {
    console.error('Error generating scheme response with Gemini:', error);

    // Provide helpful fallback response
    return res.status(500).json({
      error: 'Failed to generate response with AI',
      message: error.message || 'Unknown error occurred',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'sakhi-ai-backend' });
});

// Setup Vite middleware for development or static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve('dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`🌸 SAKHI AI Server is running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
