import { LanguageCode, SchemeInfo } from '../types';
import { CURATED_SCHEMES } from '../data/popularSchemes';

export async function fetchSchemeAnswer(query: string, language: LanguageCode): Promise<SchemeInfo> {
  try {
    const response = await fetch('/api/scheme-assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, language }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    if (data && data.schemeName) {
      return data as SchemeInfo;
    }
    throw new Error('Invalid data format received from server');
  } catch (error) {
    console.warn('API call failed, falling back to verified scheme database:', error);

    // Keyword matching fallback
    const lowerQuery = query.toLowerCase();
    let matchedKey = 'monthly_aid';

    if (
      lowerQuery.includes('maternity') ||
      lowerQuery.includes('pregnant') ||
      lowerQuery.includes('baby') ||
      lowerQuery.includes('பிரசவ') ||
      lowerQuery.includes('கர்ப்பிணி') ||
      lowerQuery.includes('மாதா') ||
      lowerQuery.includes('मातृत्व') ||
      lowerQuery.includes('गर्भवती') ||
      lowerQuery.includes('గర్భిణీ')
    ) {
      matchedKey = 'maternity';
    } else if (
      lowerQuery.includes('gas') ||
      lowerQuery.includes('cylinder') ||
      lowerQuery.includes('ujjwala') ||
      lowerQuery.includes('காஸ்') ||
      lowerQuery.includes('சிலிண்டர்') ||
      lowerQuery.includes('गैस') ||
      lowerQuery.includes('गैस सिलेंडर') ||
      lowerQuery.includes('గ్యాస్')
    ) {
      matchedKey = 'monthly_aid'; // Will provide curated details
    }

    const fallbackScheme = CURATED_SCHEMES[matchedKey]?.[language] || CURATED_SCHEMES['monthly_aid'][language];
    return fallbackScheme;
  }
}
