import { LanguageCode, LanguageConfig } from '../types';

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  {
    code: 'ta',
    speechCode: 'ta-IN',
    label: 'தமிழ்',
    englishLabel: 'Tamil',
    flag: '🇮🇳'
  },
  {
    code: 'en',
    speechCode: 'en-IN',
    label: 'English',
    englishLabel: 'English',
    flag: '🌐'
  },
  {
    code: 'hi',
    speechCode: 'hi-IN',
    label: 'हिन्दी',
    englishLabel: 'Hindi',
    flag: '🇮🇳'
  },
  {
    code: 'te',
    speechCode: 'te-IN',
    label: 'తెలుగు',
    englishLabel: 'Telugu',
    flag: '🇮🇳'
  }
];

export interface TranslationStrings {
  appName: string;
  appTitle: string;
  subtitle: string;
  tapToSpeak: string;
  stopListening: string;
  listening: string;
  processing: string;
  ready: string;
  answerReady: string;
  askInOwnLanguage: string;
  typeYourQuestion: string;
  placeholderInput: string;
  send: string;
  replayVoice: string;
  stopVoice: string;
  speedNormal: string;
  speedSlow: string;
  voiceGuidance: string;
  voiceGuidanceOn: string;
  voiceGuidanceOff: string;
  playInstructions: string;
  needHelp: string;
  helpline: string;
  quickQuestionsTitle: string;
  quickQuestionsSubtitle: string;
  stepSchemeName: string;
  stepPurpose: string;
  stepBenefits: string;
  stepEligibility: string;
  stepDocuments: string;
  stepProcess: string;
  stepWhereToApply: string;
  stepNextStep: string;
  askAnotherQuestion: string;
  clearChat: string;
  
  // Voice prompts (read aloud)
  welcomeVoicePrompt: string; // The exact instruction requested
  welcomeVoicePronounce: string; // Native script for authentic TTS pronunciation
  guideChooseLanguage: string;
  guideTapMic: string;
  guideQuestionUnderstood: string;
  guideSchemeInfo: string;
  guideNeedDocuments: string;
  guideNextStepIs: string;

  // Errors
  errorMicPermission: string;
  errorNotUnderstood: string;
  errorMicUnavailable: string;
  errorUnsupported: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationStrings> = {
  ta: {
    appName: 'SAKHI AI',
    appTitle: 'மகளிருக்கான அரசு திட்ட வழிகாட்டி',
    subtitle: '“உங்கள் குரல். உங்கள் மொழி. உங்கள் உரிமை.”',
    tapToSpeak: 'பேச தட்டவும்',
    stopListening: 'நிறுத்துக',
    listening: 'உங்கள் குரலைக் கேட்கிறது...',
    processing: 'விவரங்களை தேடுகிறது...',
    ready: 'பேச தயாராக உள்ளது',
    answerReady: 'பதில் தயாராக உள்ளது',
    askInOwnLanguage: 'உங்கள் தாய்மொழியில் கேள்வி கேளுங்கள்',
    typeYourQuestion: 'உங்கள் கேள்வியை எழுதுங்கள்',
    placeholderInput: 'இங்கே உங்கள் கேள்வியை தட்டச்சு செய்யவும்... (எ.கா: மகளிர் உரிமைத் தொகை)',
    send: 'அனுப்புக',
    replayVoice: 'பதிலை மீண்டும் கேள்',
    stopVoice: 'குரலை நிறுத்து',
    speedNormal: 'இயல்பான வேகம்',
    speedSlow: 'மெதுவான குரல் (0.8x)',
    voiceGuidance: 'குரல் வழிகாட்டுதல்',
    voiceGuidanceOn: 'குரல் வழிகாட்டி ஆன்',
    voiceGuidanceOff: 'குரல் வழிகாட்டி ஆஃப்',
    playInstructions: 'பயன்படுத்தும் முறையைக் கேள்',
    needHelp: 'மகளிர் உதவி எண்',
    helpline: '181 மகளிர் இலவச உதவி எண்',
    quickQuestionsTitle: 'பெண்கள் அதிகம் கேட்கும் திட்டங்கள்',
    quickQuestionsSubtitle: 'படம் அல்லது திட்டத்தை தொட்டு நேரடியாக தெரிந்து கொள்ளுங்கள்',
    stepSchemeName: '1. திட்டத்தின் பெயர்',
    stepPurpose: '2. திட்டத்தின் நோக்கம்',
    stepBenefits: '3. உங்களுக்கு கிடைக்கும் பயன்கள் & நிதி உதவி',
    stepEligibility: '4. யார் விண்ணப்பிக்கலாம்? (தகுதிகள்)',
    stepDocuments: '5. தேவைப்படும் சான்றிதழ்கள் & ஆவணங்கள்',
    stepProcess: '6. விண்ணப்பிக்கும் எளிய முறை',
    stepWhereToApply: '7. எங்கு சென்று விண்ணப்பிக்க வேண்டும்?',
    stepNextStep: '8. நீங்கள் முதலில் செய்ய வேண்டிய முக்கிய படி',
    askAnotherQuestion: 'மற்றொரு கேள்வி கேளுங்கள்',
    clearChat: 'புதிய உரையாடல்',

    // Exact prompt requested text:
    welcomeVoicePrompt: "Vanakkam. Ungalukku thevaiyana arasu thittathai patri therindhukolla, microphone button-ai press panni unga kelviyai pesunga. Neenga type panniyum kelkalaam.",
    welcomeVoicePronounce: "வணக்கம். உங்களுக்கு தேவையான அரசு திட்டத்தை பற்றி தெரிந்துகொள்ள, மைக்ரோஃபோன் பட்டனை அழுத்தி உங்கள் கேள்வியை பேசுங்கள். நீங்கள் டைப் செய்தும் கேட்கலாம்.",
    guideChooseLanguage: "முதலில், உங்கள் மொழியை தேர்ந்தெடுக்கவும்.",
    guideTapMic: "இப்போது மைக்ரோஃபோன் பட்டனை அழுத்தி உங்கள் கேள்வியை பேசுங்கள்.",
    guideQuestionUnderstood: "உங்கள் கேள்வி புரிந்து கொள்ளப்பட்டது.",
    guideSchemeInfo: "திட்டம் பற்றிய விவரங்கள் இதோ.",
    guideNeedDocuments: "அடுத்து, இந்த ஆவணங்கள் உங்களுக்கு தேவைப்படும்.",
    guideNextStepIs: "நீங்கள் செய்ய வேண்டிய அடுத்த முக்கியமான படி இதுவே.",

    errorMicPermission: "குரல் வழி கேள்வி கேட்க மைக்ரோஃபோன் அனுமதி தேவை. தயவுசெய்து அனுமதி வழங்கி மீண்டும் முயற்சிக்கவும்.",
    errorNotUnderstood: "உங்கள் கேள்வி சரியாக புரியவில்லை. தயவுசெய்து மெதுவாக மீண்டும் பேசுங்கள்.",
    errorMicUnavailable: "மைக்ரோஃபோன் தற்போது செயல்படவில்லை. நீங்கள் கீழே கேள்வியை தட்டச்சு செய்து அனுப்பலாம்.",
    errorUnsupported: "உங்கள் உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை. நீங்கள் டைப் செய்து பயன்படுத்தலாம்."
  },

  en: {
    appName: 'SAKHI AI',
    appTitle: 'Government Scheme Assistant for Women',
    subtitle: '“Your voice. Your language. Your rights.”',
    tapToSpeak: 'TAP TO SPEAK',
    stopListening: 'STOP LISTENING',
    listening: 'Listening to your voice...',
    processing: 'Finding scheme details...',
    ready: 'Ready to listen',
    answerReady: 'Answer ready',
    askInOwnLanguage: 'Ask your question in your own language.',
    typeYourQuestion: 'Type your question',
    placeholderInput: 'Type your question here... (e.g. Free ration, 1000 rupees woman scheme)',
    send: 'Send',
    replayVoice: 'Replay Voice Answer',
    stopVoice: 'Stop Voice',
    speedNormal: 'Normal Speed',
    speedSlow: 'Slow Voice (0.8x)',
    voiceGuidance: 'Voice Guidance',
    voiceGuidanceOn: 'Voice Guide ON',
    voiceGuidanceOff: 'Voice Guide OFF',
    playInstructions: 'Listen to How to Use',
    needHelp: 'Women Helpline',
    helpline: '181 Free Women Helpline',
    quickQuestionsTitle: 'Popular Schemes for Women',
    quickQuestionsSubtitle: 'Tap any card to ask and hear scheme details instantly',
    stepSchemeName: '1. Scheme Name',
    stepPurpose: '2. Purpose',
    stepBenefits: '3. Benefits & Financial Assistance',
    stepEligibility: '4. Who is Eligible?',
    stepDocuments: '5. Required Documents Checklist',
    stepProcess: '6. Application Steps',
    stepWhereToApply: '7. Where to Apply',
    stepNextStep: '8. Important Next Step (Do this first)',
    askAnotherQuestion: 'Ask Another Question',
    clearChat: 'New Conversation',

    // Exact prompt requested text:
    welcomeVoicePrompt: "Welcome. To learn about a government scheme, tap the microphone button and ask your question. You can also type your question.",
    welcomeVoicePronounce: "Welcome. To learn about a government scheme, tap the microphone button and ask your question. You can also type your question.",
    guideChooseLanguage: "First, choose your language.",
    guideTapMic: "Now tap the microphone and ask your question.",
    guideQuestionUnderstood: "Your question has been understood.",
    guideSchemeInfo: "Here is the information about the scheme.",
    guideNeedDocuments: "Next, you need these documents.",
    guideNextStepIs: "Your next step is...",

    errorMicPermission: "Microphone permission is required for voice input. Please allow microphone access and try again.",
    errorNotUnderstood: "I could not understand your question. Please try again slowly.",
    errorMicUnavailable: "Microphone is unavailable. You can type your question instead.",
    errorUnsupported: "Speech recognition is not supported in this browser. Please use the text input below."
  },

  hi: {
    appName: 'SAKHI AI',
    appTitle: 'महिलाओं के लिए सरकारी योजना सहायक',
    subtitle: '“आपकी आवाज़। आपकी भाषा। आपका अधिकार।”',
    tapToSpeak: 'बोलने के लिए दबाएं',
    stopListening: 'रोकें',
    listening: 'आपकी आवाज़ सुनी जा रही है...',
    processing: 'योजना की जानकारी खोजी जा रही है...',
    ready: 'सुनने के लिए तैयार',
    answerReady: 'उत्तर तैयार है',
    askInOwnLanguage: 'अपनी भाषा में अपना सवाल पूछिए।',
    typeYourQuestion: 'अपना सवाल लिखें',
    placeholderInput: 'यहाँ अपना सवाल लिखें... (जैसे: लाडली बहना योजना, मातृत्व सहायता)',
    send: 'भेजें',
    replayVoice: 'उत्तर दोबारा सुनें',
    stopVoice: 'आवाज़ रोकें',
    speedNormal: 'सामान्य आवाज़',
    speedSlow: 'धीमी आवाज़ (0.8x)',
    voiceGuidance: 'वॉइस गाइड',
    voiceGuidanceOn: 'वॉइस गाइड चालू',
    voiceGuidanceOff: 'वॉइस गाइड बंद',
    playInstructions: 'इस्तेमाल करने का तरीका सुनें',
    needHelp: 'महिला हेल्पलाइन',
    helpline: '181 निशुल्क महिला हेल्पलाइन',
    quickQuestionsTitle: 'महिलाओं के लिए प्रमुख सरकारी योजनाएं',
    quickQuestionsSubtitle: 'किसी भी योजना पर टैप करके तुरंत पूरी जानकारी सुनें',
    stepSchemeName: '1. योजना का नाम',
    stepPurpose: '2. योजना का उद्देश्य',
    stepBenefits: '3. मिलने वाले लाभ और आर्थिक सहायता',
    stepEligibility: '4. पात्रता (कौन आवेदन कर सकता है?)',
    stepDocuments: '5. आवश्यक दस्तावेज़ सूची',
    stepProcess: '6. आवेदन करने की सरल प्रक्रिया',
    stepWhereToApply: '7. आवेदन कहाँ करें?',
    stepNextStep: '8. आपका सबसे पहला और ज़रूरी कदम',
    askAnotherQuestion: 'दूसरा सवाल पूछें',
    clearChat: 'नई बातचीत',

    // Exact prompt requested text:
    welcomeVoicePrompt: "Namaste. Sarkari yojana ke baare mein jaanne ke liye microphone button dabakar apna sawaal poochiye. Aap apna sawaal type bhi kar sakti hain.",
    welcomeVoicePronounce: "नमस्ते. सरकारी योजना के बारे में जानने के लिए माइक्रोफ़ोन बटन दबाकर अपना सवाल पूछिए. आप अपना सवाल टाइप भी कर सकती हैं.",
    guideChooseLanguage: "पहले, अपनी भाषा चुनें।",
    guideTapMic: "अब माइक्रोफ़ोन बटन दबाकर अपना सवाल पूछिए।",
    guideQuestionUnderstood: "आपका सवाल समझ लिया गया है।",
    guideSchemeInfo: "योजना की पूरी जानकारी यहाँ है।",
    guideNeedDocuments: "आगे, आपको इन दस्तावेज़ों की आवश्यकता होगी।",
    guideNextStepIs: "आपका अगला सबसे महत्वपूर्ण कदम यह है...",

    errorMicPermission: "आवाज़ से पूछने के लिए माइक्रोफ़ोन अनुमति आवश्यक है। कृपया अनुमति दें और पुनः प्रयास करें।",
    errorNotUnderstood: "आपका सवाल समझ नहीं आया। कृपया धीरे और स्पष्ट आवाज़ में फिर से बोलें।",
    errorMicUnavailable: "माइक्रोफ़ोन उपलब्ध नहीं है। आप नीचे लिखकर सवाल पूछ सकती हैं।",
    errorUnsupported: "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। कृपया नीचे लिखकर सवाल पूछें।"
  },

  te: {
    appName: 'SAKHI AI',
    appTitle: 'మహిళల కోసం ప్రభుత్వ పథకాల సహాయకురాలు',
    subtitle: '“మీ గొంతు. మీ భాష. మీ హక్కు.”',
    tapToSpeak: 'మాట్లాడటానికి నొక్కండి',
    stopListening: 'ఆపండి',
    listening: 'మీ మాటలను వింటోంది...',
    processing: 'పథకం వివరాలు సేకరిస్తోంది...',
    ready: 'వినడానికి సిద్ధంగా ఉంది',
    answerReady: 'సమాధానం సిద్ధమైంది',
    askInOwnLanguage: 'మీ ప్రశ్నను మీ స్వంత భాషలోనే అడగండి.',
    typeYourQuestion: 'మీ ప్రశ్నను రాయండి',
    placeholderInput: 'ఇక్కడ మీ ప్రశ్నను టైప్ చేయండి... (ఉదా: మహిళా ఆర్థిక సాయం, రేషన్ కార్డు)',
    send: 'పంపండి',
    replayVoice: 'సమాధానం మళ్లీ వినండి',
    stopVoice: 'వాయిస్ ఆపండి',
    speedNormal: 'సాధారణ వేగం',
    speedSlow: 'నెమ్మదిగా (0.8x)',
    voiceGuidance: 'వాయిస్ గైడెన్స్',
    voiceGuidanceOn: 'వాయిస్ గైడ్ ఆన్',
    voiceGuidanceOff: 'వాయిస్ గైడ్ ఆఫ్',
    playInstructions: 'ఉపయోగించే విధానాన్ని వినండి',
    needHelp: 'మహిళా హెల్ప్‌లైన్',
    helpline: '181 ఉచిత మహిళా హెల్ప్‌లైన్',
    quickQuestionsTitle: 'మహిళల కోసం ముఖ్యమైన పథకాలు',
    quickQuestionsSubtitle: 'పథకంపై నొక్కి పూర్తి సమాచారాన్ని సులభంగా వినండి',
    stepSchemeName: '1. పథకం పేరు',
    stepPurpose: '2. పథకం ఉద్దేశం',
    stepBenefits: '3. లభించే ప్రయోజనాలు & ఆర్థిక సహాయం',
    stepEligibility: '4. అర్హతలు (ఎవరు దరఖాస్తు చేసుకోవచ్చు?)',
    stepDocuments: '5. అవసరమైన పత్రాలు (డాక్యుమెంట్లు)',
    stepProcess: '6. దరఖాస్తు చేసుకునే సరళమైన విధానం',
    stepWhereToApply: '7. ఎక్కడ దరఖాస్తు చేయాలి?',
    stepNextStep: '8. మీరు చేయవలసిన మొదటి ముఖ్యమైన పని',
    askAnotherQuestion: 'మరో ప్రశ్న అడగండి',
    clearChat: 'కొత్త ప్రశ్న',

    // Exact prompt requested text:
    welcomeVoicePrompt: "Namaskaram. Prabhutva pathakam gurinchi telusukovadaniki microphone button-nu press chesi mee prashnanu adagandi. Meeru mee prashnanu type kuda cheyyavachu.",
    welcomeVoicePronounce: "నమస్కారం. ప్రభుత్వ పథకం గురించి తెలుసుకోవడానికి మైక్రోఫోన్ బటన్‌ను ప్రెస్ చేసి మీ ప్రశ్నను అడగండి. మీరు మీ ప్రశ్నను టైప్ కూడా చేయవచ్చు.",
    guideChooseLanguage: "మొదట, మీ భాషను ఎంచుకోండి.",
    guideTapMic: "ఇప్పుడు మైక్రోఫోన్ బటన్‌ను నొక్కి మీ ప్రశ్నను అడగండి.",
    guideQuestionUnderstood: "మీ ప్రశ్న అర్థమైంది.",
    guideSchemeInfo: "పథకం వివరాలు ఇక్కడ ఉన్నాయి.",
    guideNeedDocuments: "తర్వాత, మీకు ఈ పత్రాలు అవసరం.",
    guideNextStepIs: "మీరు చేయాల్సిన తదుపరి ముఖ్యమైన పని ఇది...",

    errorMicPermission: "వాయిస్ ఇన్పుట్ కోసం మైక్రోఫోన్ అనుమతి అవసరం. దయచేసి అనుమతించి మళ్ళీ ప్రయత్నించండి.",
    errorNotUnderstood: "మీ ప్రశ్న సరిగ్గా అర్థం కాలేదు. దయచేసి నెమ్మదిగా మళ్ళీ మాట్లాడండి.",
    errorMicUnavailable: "మైక్రోఫోన్ అందుబాటులో లేదు. మీరు కింద టైప్ చేసి అడగవచ్చు.",
    errorUnsupported: "ఈ బ్రౌజర్‌లో వాయిస్ రికగ్నిషన్ అందుబాటులో లేదు. దయచేసి కింద టైప్ చేయండి."
  }
};
