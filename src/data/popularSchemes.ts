import { QuickTopic, SchemeInfo, LanguageCode } from '../types';

export const QUICK_TOPICS: QuickTopic[] = [
  {
    id: 'monthly_aid',
    icon: '🌸',
    title: {
      ta: 'மாதம் ₹1000 மகளிர் உரிமைத் தொகை',
      en: 'Monthly ₹1,000 Financial Aid',
      hi: 'मासिक ₹1,000 महिला सहायता',
      te: 'నెలకు ₹1,000 మహిళా సహాయం'
    },
    subtitle: {
      ta: 'கலைஞர் மகளிர் உரிமைத் திட்டம் / மாதாந்திர உரிமைத் தொகை',
      en: 'Direct bank transfer for women heads of family',
      hi: 'लाडली बहना / महतारी वंदन जैसी योजनाएं',
      te: 'మహిళల ఖాతాలో నేరుగా నగదు జమ పథకాలు'
    },
    query: {
      ta: 'மகளிர் உரிமைத் தொகை திட்டம் பற்றி சொல்லுங்கள், மாதம் 1000 ரூபாய் எப்படி பெறுவது?',
      en: 'Tell me about the monthly 1000 rupees financial assistance scheme for women.',
      hi: 'महिलाओं के लिए मासिक आर्थिक सहायता योजना और 1000 रुपये कैसे मिलेंगे?',
      te: 'మహిళలకు నెలకు 1000 రూపాయల ఆర్థిక సాయం పథకం వివరాలు చెప్పండి.'
    },
    badge: {
      ta: '₹1,000 / மாதம்',
      en: '₹1,000 / Month',
      hi: '₹1,000 / महीना',
      te: '₹1,000 / నెలకు'
    }
  },
  {
    id: 'maternity',
    icon: '👶',
    title: {
      ta: 'கர்ப்பிணி & பிரசவ நிதியுதவி (PMMVY)',
      en: 'Pregnancy & Maternity Cash (PMMVY)',
      hi: 'मातृत्व वंदना योजना (PMMVY)',
      te: 'గర్భిణీ స్త్రీలకు ఆర్థిక సాయం (PMMVY)'
    },
    subtitle: {
      ta: 'குழந்தை பிறப்பு மற்றும் சத்துணவுக்காக ₹5,000 முதல் ₹18,000 வரை',
      en: '₹5,000 to ₹18,000 cash assistance for mother and child',
      hi: 'गर्भवती महिलाओं को पोषण और स्वास्थ्य के लिए ₹5,000',
      te: 'తల్లీబిడ్డల పోషణ కోసం ₹5,000 నగదు సాయం'
    },
    query: {
      ta: 'கர்ப்பிணி பெண்களுக்கு கிடைக்கும் அரசு உதவித் தொகைகள் என்னென்ன? எப்படி விண்ணப்பிப்பது?',
      en: 'What financial schemes are available for pregnant women and new mothers?',
      hi: 'गर्भवती महिलाओं के लिए प्रधानमंत्री मातृ वंदना योजना की जानकारी दें।',
      te: 'గర్భిణీ స్త్రీల కోసం ఉన్న ప్రభుత్వ పథకాలు ఏమిటి? ఎలా దరఖాస్తు చేయాలి?'
    },
    badge: {
      ta: '₹5,000 - ₹18,000',
      en: '₹5,000 - ₹18,000',
      hi: '₹5,000 सहायता',
      te: '₹5,000 సాయం'
    }
  },
  {
    id: 'shg_loan',
    icon: '💼',
    title: {
      ta: 'சுயஉதவிக்குழு & சிறுதொழில் கடன்',
      en: 'Self-Help Group & Women Business Loan',
      hi: 'महिला स्वयं सहायता समूह व मुद्रा लोन',
      te: 'స్వయం సహాయక సంఘాలు & ముద్రా రుణాలు'
    },
    subtitle: {
      ta: 'குறைந்த வட்டியில் தொழில் துவங்க கடனுதவி',
      en: 'PMMY Mudra loans and revolving fund up to ₹10 Lakhs',
      hi: 'घर से व्यवसाय या सिलाई, दुकान के लिए बिना गारंटी लोन',
      te: 'చిన్న వ్యాపారాల కోసం పూచీకత్తు లేని రుణాలు'
    },
    query: {
      ta: 'பெண்கள் தொழில் துவங்க குறைந்த வட்டியில் என்ன அரசு கடன் கிடைக்கும்?',
      en: 'What government business loans and SHG schemes are available for women?',
      hi: 'महिलाएं अपना छोटा काम या दुकान शुरू करने के लिए सरकारी लोन कैसे लें?',
      te: 'మహిళలు వ్యాపారం ప్రారంభించడానికి ప్రభుత్వం నుండి లోన్ ఎలా పొందాలి?'
    },
    badge: {
      ta: 'பிணையில்லா கடன்',
      en: 'Zero Collateral',
      hi: 'बिना गारंटी',
      te: 'పూచీకత్తు లేకుండా'
    }
  },
  {
    id: 'lpg_gas',
    icon: '🔥',
    title: {
      ta: 'இலவச காஸ் சிலிண்டர் (உஜ்வாலா)',
      en: 'Free LPG Gas Cylinder (Ujjwala)',
      hi: 'मुफ्त गैस सिलेंडर (उज्ज्वला योजना)',
      te: 'ఉచిత గ్యాస్ కనెక్షన్ (ఉజ్వల యోజన)'
    },
    subtitle: {
      ta: 'இலவச சிலிண்டர், அடுப்பு மற்றும் மானியம்',
      en: 'Free gas connection, stove and refill subsidy',
      hi: 'मुफ्त गैस कनेक्शन, चूल्हा और सिलेंडर सब्सिडी',
      te: 'ఉచిత గ్యాస్ కనెక్షన్ మరియు స్టవ్'
    },
    query: {
      ta: 'இலவச காஸ் சிலிண்டர் பெற என்ன செய்ய வேண்டும்? உஜ்வாலா திட்டம் பற்றி சொல்லுங்கள்.',
      en: 'How to get a free LPG gas connection under PM Ujjwala Yojana?',
      hi: 'मुफ्त गैस कनेक्शन के लिए प्रधानमंत्री उज्ज्वला योजना में कैसे आवेदन करें?',
      te: 'ఉజ్వల పథకం కింద ఉచిత గ్యాస్ కనెక్షన్ ఎలా పొందాలి?'
    },
    badge: {
      ta: 'இலவச இணைப்பு',
      en: '100% Free',
      hi: 'निःशुल्क',
      te: 'ఉచితం'
    }
  },
  {
    id: 'girl_child',
    icon: '👧',
    title: {
      ta: 'பெண் குழந்தை சேமிப்பு (சுகன்யா சம்ரிதி)',
      en: 'Girl Child Savings (Sukanya Samriddhi)',
      hi: 'सुकन्या समृद्धि योजना (बेटी बचत)',
      te: 'సుకున్య సమృద్ధి యోజన (ఆడపిల్లల పథకం)'
    },
    subtitle: {
      ta: 'பெண் குழந்தைகளின் படிப்பு மற்றும் எதிர்காலத்திற்கான அதிக வட்டி திட்டம்',
      en: 'Highest interest government savings account for girls up to 10 years',
      hi: 'बेटी की पढ़ाई और शादी के लिए सरकारी बचत खाता (8.2% ब्याज)',
      te: 'ఆడపిల్లల చదువు కోసం పోస్టాఫీసు పొదుపు పథకం'
    },
    query: {
      ta: 'பெண் குழந்தைகளுக்கான சுகன்யா சம்ரிதி சேமிப்பு திட்டம் பற்றி சொல்லுங்கள்.',
      en: 'Explain the Sukanya Samriddhi Yojana for my daughter with benefits and rules.',
      hi: 'मेरी बेटी के लिए सुकन्या समृद्धि योजना की पूरी जानकारी दें।',
      te: 'ఆడపిల్లల కోసం సుకన్య సమృద్ధి యోజన వివరాలు మరియు దరఖాస్తు విధానం చెప్పండి.'
    },
    badge: {
      ta: '8.2% வட்டி',
      en: '8.2% Interest',
      hi: '8.2% ब्याज',
      te: '8.2% వడ్డీ'
    }
  },
  {
    id: 'health_card',
    icon: '🏥',
    title: {
      ta: 'ஆயுஷ்மான் இலவச மருத்துவ அட்டை',
      en: 'Free Medical Card (Ayushman Bharat)',
      hi: 'आयुष्मान भारत कार्ड (₹5 लाख मुफ्त इलाज)',
      te: 'ఆయుష్మాన్ భారత్ ఉచిత వైద్య కార్డు'
    },
    subtitle: {
      ta: 'குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை இலவச சிகிச்சை',
      en: '₹5 Lakh per family per year cashless treatment at private & govt hospitals',
      hi: 'अस्पतालों में 5 लाख रुपये तक का कैशलेस फ्री इलाज',
      te: 'ఆసుపత్రులలో ఉచిత చికిత్స కోసం ₹5 లక్షల ఆరోగ్య కార్డు'
    },
    query: {
      ta: 'ஆயுஷ்மான் பாரத் இலவச மருத்துவ அட்டை பெறுவது எப்படி? எனக்கு சிகிச்சை கிடைக்குமா?',
      en: 'How to get Ayushman Bharat free health card for medical treatment?',
      hi: 'आयुष्मान भारत 5 लाख मुफ्त इलाज कार्ड कैसे बनवाएं?',
      te: 'ఉచిత చికిత్స కోసం ఆయుష్మాన్ భారత్ హెల్త్ కార్డు ఎలా పొందాలి?'
    },
    badge: {
      ta: '₹5 லட்சம் சிகிச்சை',
      en: '₹5 Lakh Cover',
      hi: '₹5 लाख इलाज',
      te: '₹5 లక్షల కవరేజ్'
    }
  },
  {
    id: 'widow_pension',
    icon: '👵',
    title: {
      ta: 'விதவை & முதியோர் மாத ஓய்வூதியம்',
      en: 'Widow & Senior Citizen Monthly Pension',
      hi: 'विधवा एवं वृद्धावस्था मासिक पेंशन',
      te: 'వితంతు & వృద్ధాప్య పింఛను'
    },
    subtitle: {
      ta: 'மாதந்தோறும் வங்கி கணக்கில் நேரடியாக வரும் வாழ்வாதார தொகை',
      en: 'Monthly pension directly into bank account for eligible women',
      hi: 'निराश्रित व विधवा महिलाओं को प्रति माह सरकारी पेंशन',
      te: 'వితంతువులు మరియు వృద్ధులకు ప్రతి నెలా పింఛను'
    },
    query: {
      ta: 'விதவை பெண்கள் மற்றும் முதியோருக்கான மாத ஓய்வூதியம் பெற என்ன செய்ய வேண்டும்?',
      en: 'How to apply for widow pension and elderly women pension?',
      hi: 'विधवा पेंशन योजना के लिए क्या योग्यता और दस्तावेज़ चाहिए?',
      te: 'వితంతు పింఛను కోసం ఎలా దరఖాస్తు చేసుకోవాలి?'
    },
    badge: {
      ta: 'மாத ஓய்வூதியம்',
      en: 'Monthly Pension',
      hi: 'मासिक पेंशन',
      te: 'నెలవారీ పింఛను'
    }
  },
  {
    id: 'ration_card',
    icon: '🌾',
    title: {
      ta: 'இலவச ரேஷன் உணவு தானியங்கள்',
      en: 'Free Ration & Food Security (NFSA)',
      hi: 'मुफ्त राशन व राशन कार्ड योजना',
      te: 'ఉచిత రేషన్ మరియు బియ్యం పథకం'
    },
    subtitle: {
      ta: 'குடும்ப அட்டைதாரர்களுக்கு இலவச அரிசி, கோதுமை, பருப்பு',
      en: 'Free monthly rice, wheat, and pulses for eligible families',
      hi: 'राशन कार्ड पर मुफ्त चावल, गेहूं और दालें',
      te: 'రేషన్ కార్డుపై ఉచిత బియ్యం, గోధుమలు'
    },
    query: {
      ta: 'குடும்ப அட்டை அல்லது இலவச ரேஷன் பெற என்ன ஆவணங்கள் வேண்டும்?',
      en: 'How can a woman apply for a ration card or get free ration grains?',
      hi: 'नया राशन कार्ड बनवाने और मुफ्त राशन पाने के क्या नियम हैं?',
      te: 'కొత్త రేషన్ కార్డు పొందడానికి ఏమి చేయాలి?'
    },
    badge: {
      ta: 'இலவச உணவு',
      en: 'Free Grains',
      hi: 'मुफ्त अनाज',
      te: 'ఉచిత బియ్యం'
    }
  }
];

// Fallback verified curated schemes for instant response or offline reliability
export const CURATED_SCHEMES: Record<string, Record<LanguageCode, SchemeInfo>> = {
  monthly_aid: {
    ta: {
      schemeName: 'கலைஞர் மகளிர் உரிமைத் திட்டம் (மற்றும் தேசிய மகளிர் உதவி திட்டங்கள்)',
      officialName: 'Kalaignar Magalir Urimai Thittam / Ladli Behna Yojana',
      summary: 'குடும்பத் தலைவிகளுக்கு மாதந்தோறும் ₹1,000 வங்கி கணக்கில் நேரடியாக வழங்கப்படும் வாழ்வாதார உரிமைத் தொகை திட்டம்.',
      purpose: 'குடும்பத்தை நிர்வகிக்கும் பெண்களின் உழைப்பை அங்கீகரித்து, அவர்களின் சுயமரியாதை மற்றும் பொருளாதார சுதந்திரத்தை உயர்த்துவதே இதன் நோக்கமாகும்.',
      benefits: 'மாதம்தோறும் ₹1,000 ரூபாய் உங்கள் வங்கி கணக்கிற்கு நேரடியாக வந்து சேரும். ஆண்டுக்கு ₹12,000 ரூபாய் நிதி உதவி கிடைக்கும்.',
      financialAmount: '₹1,000 / மாதம் (ஆண்டுக்கு ₹12,000)',
      eligibility: [
        'குடும்பத்தின் பெண் தலைவராக இருக்க வேண்டும் (21 வயது பூர்த்தி அடைந்திருக்க வேண்டும்).',
        'குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்கு மிகாமல் இருக்க வேண்டும்.',
        'குடும்பத்தில் 5 ஏக்கருக்கு மேல் நன்செய் நிலம் அல்லது 10 ஏக்கருக்கு மேல் புன்செய் நிலம் இருக்கக் கூடாது.',
        'குடும்பத்தில் யாரும் அரசு ஊழியராகவோ அல்லது வருமான வரி செலுத்துபவராகவோ இருக்கக் கூடாது.'
      ],
      documents: [
        'ஆதார் அட்டை (Aadhaar Card)',
        'குடும்ப அட்டை (Smart Ration Card)',
        'வங்கி கணக்கு புத்தகம் (Bank Passbook - ஆதார் இணைக்கப்பட்டது)',
        'மின்சார கட்டண ரசீது (Electricity Bill)'
      ],
      applicationProcess: [
        'படி 1: உங்கள் கிராம நிர்வாக அலுவலகம் அல்லது நியாயவிலைக் கடையில் வழங்கப்படும் விண்ணப்பப் படிவத்தை வாங்கவும்.',
        'படி 2: ஆதார் அட்டை மற்றும் குடும்ப அட்டை நகல்களை விண்ணப்பத்துடன் இணைக்கவும்.',
        'படி 3: சிறப்பு முகாமில் உங்கள் கைரேகை அல்லது பயோமெட்ரிக் பதிவு செய்து படிவத்தை சமர்ப்பிக்கவும்.',
        'படி 4: உங்கள் விண்ணப்பம் அங்கீகரிக்கப்பட்டவுடன் உங்கள் மொபைலுக்கு குறுஞ்செய்தி (SMS) வரும்.'
      ],
      whereToApply: 'உங்கள் உள்ளூர் நியாயவிலைக் கடை (ரேஷன் கடை), கிராம பஞ்சாயத்து அலுவலகம், அல்லது இ-சேவை மையம் (e-Seva Center).',
      nextStep: 'முதலில் உங்கள் வங்கி கணக்குடன் ஆதார் எண் இணைக்கப்பட்டுள்ளதா (Aadhaar Seeding) என்பதை வங்கியில் சென்று உறுதி செய்து கொள்ளுங்கள்.',
      spokenSummary: 'கலைஞர் மகளிர் உரிமைத் திட்டத்தின் மூலம் குடும்ப தலைவிகளுக்கு மாதம் ஆயிரம் ரூபாய் நேரடியாக வங்கி கணக்கில் வழங்கப்படுகிறது. இதற்கு இருபத்தொரு வயது முடிந்திருக்க வேண்டும். ஆதார் அட்டை, ரேஷன் அட்டை மற்றும் வங்கி புத்தகத்தை எடுத்துக்கொண்டு உங்கள் உள்ளூர் இ-சேவை மையம் அல்லது ரேஷன் கடையில் விண்ணப்பிக்கலாம். உங்கள் முதல் படியாக, வங்கி கணக்குடன் ஆதார் இணைக்கப்பட்டுள்ளதா என்பதை உறுதி செய்யுங்கள்.'
    },
    en: {
      schemeName: 'Women Monthly Financial Entitlement Scheme',
      officialName: 'Kalaignar Magalir Urimai Thittam / Ladli Behna Yojana',
      summary: 'A direct cash assistance scheme providing ₹1,000 monthly to eligible women heads of households.',
      purpose: 'To empower women financially, recognize their household labor, and provide monthly social security directly into their bank accounts.',
      benefits: 'Direct cash deposit of ₹1,000 every month (₹12,000 every year) straight into the woman beneficiary\'s bank account.',
      financialAmount: '₹1,000 / Month (₹12,000 / Year)',
      eligibility: [
        'Must be a woman head of the family, aged 21 years or older.',
        'Annual household income must be below ₹2.5 Lakhs.',
        'Should not own a 4-wheeler (tractor/taxi excluded for livelihoods).',
        'No family member should be a government employee or income tax payer.'
      ],
      documents: [
        'Aadhaar Card of the woman applicant',
        'Smart Family Ration Card',
        'Bank Passbook with Aadhaar linked & DBT active',
        'Electricity consumer number / bill copy'
      ],
      applicationProcess: [
        'Step 1: Collect the free application form from your local Ration shop or Panchayat camp.',
        'Step 2: Attach photocopies of your Aadhaar card and Ration card.',
        'Step 3: Complete biometric verification at your local e-Seva camp or Gram Panchayat.',
        'Step 4: Receive confirmation SMS and get ₹1,000 deposited on the 15th of every month.'
      ],
      whereToApply: 'Your local Fair Price Shop (Ration Shop), e-Seva Center, or Gram Panchayat Office.',
      nextStep: 'First, visit your bank and make sure your Aadhaar is linked to your bank account with Direct Benefit Transfer (DBT) enabled.',
      spokenSummary: 'Under this scheme, eligible women heads of family receive 1,000 rupees every month directly into their bank account. You need your Aadhaar card, Ration card, and Bank passbook. You can submit the form at your local ration shop or e-Seva center. Your immediate next step is to ensure your bank account is linked with Aadhaar.'
    },
    hi: {
      schemeName: 'महिला मासिक आर्थिक सहायता योजना',
      officialName: 'लाडली बहना योजना / महतारी वंदन योजना',
      summary: 'परिवार की पात्र महिलाओं के खाते में सीधे हर महीने ₹1,000 से ₹1,250 की नकद राशि जमा की जाती है।',
      purpose: 'महिलाओं को आर्थिक रूप से आत्मनिर्भर बनाना और परिवार में उनके पोषण व सम्मान की सुरक्षा करना।',
      benefits: 'प्रत्येक महीने ₹1,000 से ₹1,250 सीधे आपके बैंक खाते में। साल भर में ₹12,000 से ₹15,000 की पक्की सहायता।',
      financialAmount: '₹1,000 से ₹1,250 प्रति माह',
      eligibility: [
        'महिला की आयु 21 वर्ष से 60 वर्ष के बीच होनी चाहिए।',
        'परिवार की वार्षिक आय ₹2.5 लाख से कम हो।',
        'परिवार में कोई आयकर दाता या सरकारी नौकरी में न हो।',
        'परिवार के पास 5 एकड़ से अधिक कृषि भूमि न हो।'
      ],
      documents: [
        'आधार कार्ड (Aadhaar Card)',
        'राशन कार्ड / समग्र आईडी',
        'बैंक खाता पासबुक (आधार और डीबीटी से लिंक)',
        'मोबाइल नंबर (जो आधार से जुड़ा हो)'
      ],
      applicationProcess: [
        'चरण 1: अपने गाँव की पंचायत या वार्ड कार्यालय से निःशुल्क आवेदन फॉर्म लें।',
        'चरण 2: फॉर्म में अपना नाम, आधार और बैंक खाता नंबर भरें।',
        'चरण 3: पंचायत या सीएससी केंद्र पर बायोमेट्रिक सत्यापन करवाकर फॉर्म जमा करें।',
        'चरण 4: मोबाइल पर एसएमएस आने के बाद हर महीने खाते में पैसे आने शुरू हो जाएंगे।'
      ],
      whereToApply: 'ग्राम पंचायत कार्यालय, आंगनवाड़ी केंद्र, या नजदीकी सीएससी (जन सेवा केंद्र)।',
      nextStep: 'सबसे पहले अपने बैंक जाकर यह जांच लें कि आपका बैंक खाता आधार से लिंक (DBT सक्रिय) है या नहीं।',
      spokenSummary: 'इस योजना के तहत पात्र महिलाओं को हर महीने 1000 रुपये सीधे उनके बैंक खाते में मिलते हैं। इसके लिए आपकी उम्र 21 साल या उससे अधिक होनी चाहिए। आधार कार्ड, राशन कार्ड और बैंक पासबुक लेकर ग्राम पंचायत या जन सेवा केंद्र जाएं। सबसे पहले अपने बैंक खाते में आधार लिंक और डीबीटी चालू करवा लें।'
    },
    te: {
      schemeName: 'మహిళా ఆర్థిక సహాయ పథకం (నెలవారీ సాయం)',
      officialName: 'వైఎస్సార్ చేయూత / మహిళా ఆర్థిక రక్షణ పథకాలు',
      summary: 'కుటుంబానికి చెందిన మహిళల కోసం ప్రతి నెలా లేదా వార్షికంగా నేరుగా వారి బ్యాంక్ ఖాతాలో నగదు జమ చేసే పథకం.',
      purpose: 'మహిళలు స్వతంత్రంగా జీవించడానికి, కుటుంబ పోషణలో ఆర్థిక ఇబ్బందులు లేకుండా చూసుకోవడానికి ఈ పథకం రూపొందించబడింది.',
      benefits: 'ప్రతి నెలా ₹1,000 లేదా ఏటా ₹18,750 వరకు ఆర్థిక సహాయం నేరుగా బ్యాంక్ ఖాతాలో జమ అవుతుంది.',
      financialAmount: 'నెలకు ₹1,000 / ఏటా ₹18,750 వరకు',
      eligibility: [
        'మహిళలకు కనీసం 21 సంవత్సరాల వయస్సు ఉండాలి.',
        'కుటుంబ వార్షిక ఆదాయం ₹2.5 లక్షల లోపు ఉండాలి.',
        'కుటుంబంలో ప్రభుత్వ ఉద్యోగులు లేదా ఆదాయపు పన్ను చెల్లించేవారు ఉండకూడదు.',
        'వైట్ రేషన్ కార్డు కలిగి ఉండాలి.'
      ],
      documents: [
        'ఆధార్ కార్డు (Aadhaar Card)',
        'రైస్ కార్డు లేదా రేషన్ కార్డు (Ration Card)',
        'బ్యాంక్ పాస్‌బుక్ (ఆధార్ మరియు DBT లింక్ అయినది)',
        'పాస్‌పోర్ట్ సైజ్ ఫోటో'
      ],
      applicationProcess: [
        'దశ 1: మీ గ్రామ/వార్డు సచివాలయం నుండి దరఖాస్తు ఫారమ్ పొందండి.',
        'దశ 2: ఆధార్ మరియు రేషన్ కార్డు జిరాక్స్ జతచేయండి.',
        'దశ 3: గ్రామ వాలంటీర్ లేదా సచివాలయంలో బయోమెట్రిక్ నమోదు చేయండి.',
        'దశ 4: దరఖాస్తు ఆమోదం పొందిన తర్వాత బ్యాంక్ ఖాతాలో డబ్బు జమ అవుతుంది.'
      ],
      whereToApply: 'గ్రామ లేదా వార్డు సచివాలయం, లేదా మీ ప్రాంతంలోని మీ-సేవ కేంద్రం.',
      nextStep: 'మొదటగా మీ బ్యాంక్ ఖాతాకు ఆధార్ కార్డు లింక్ (DBT active) అయిందో లేదో మీ బ్యాంకుకు వెళ్లి తెలుసుకోండి.',
      spokenSummary: 'ఈ పథకం ద్వారా అర్హులైన మహిళలకు నెలకు వెయ్యి రూపాయలు లేదా వార్షిక ఆర్థిక సాయం నేరుగా బ్యాంకులో అందుతుంది. ఆధార్ కార్డు, రేషన్ కార్డు మరియు బ్యాంక్ ఖాతా తీసుకొని మీ గ్రామ సచివాలయానికి వెళ్లండి. ముందుగా మీ బ్యాంకు ఖాతాకు ఆధార్ లింక్ అయిందో లేదో తనిఖీ చేసుకోండి.'
    }
  },

  maternity: {
    ta: {
      schemeName: 'பிரதான் மந்திரி மாத்ரு வந்தனா யோஜனா (PMMVY) & டாக்டர் முத்துலட்சுமி ரெட்டி மகப்பேறு உதவி',
      officialName: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      summary: 'கர்ப்பிணி பெண்கள் மற்றும் பாலூட்டும் தாய்மார்களுக்கு சத்துணவு மற்றும் மருத்துவ செலவுகளுக்காக வழங்கப்படும் பண உதவி.',
      purpose: 'கர்ப்ப காலத்தில் பெண்களுக்கு தேவையான சத்துணவு கிடைக்கவும், தாய்-சேய் உடல்நலம் காக்கவும் நிதியுதவி வழங்கப்படுகிறது.',
      benefits: 'PMMVY திட்டத்தில் ₹5,000 வரை தவணைகளாக வங்கி கணக்கில் சேரும். பெண் குழந்தை பிறந்தால் கூடுதல் ஊக்கத்தொகை உண்டு. தமிழகத்தில் டாக்டர் முத்துலட்சுமி ரெட்டி திட்டத்தில் ₹18,000 வரை ஊட்டச்சத்து பெட்டகத்துடன் வழங்கப்படுகிறது.',
      financialAmount: '₹5,000 முதல் ₹18,000 வரை நேரடி உதவி',
      eligibility: [
        '19 வயது அல்லது அதற்கு மேற்பட்ட கர்ப்பிணி பெண்கள்.',
        'அரசு ஆரம்ப சுகாதார நிலையத்தில் (PHC) பதிவு செய்திருக்க வேண்டும்.',
        'தாய் மற்றும் குழந்தையின் மருத்துவ பரிசோதனைகள் முறையாக செய்திருக்க வேண்டும்.'
      ],
      documents: [
        'தாய் சேய் நல அட்டை (RCH ID Card / PICME எண்)',
        'கர்ப்பிணி பெண் மற்றும் கணவரின் ஆதார் அட்டை',
        'தாயின் பெயரில் உள்ள தனி வங்கி கணக்கு புத்தகம்',
        'குழந்தையின் பிறப்பு சான்றிதழ் (பிரசவத்திற்கு பின்)'
      ],
      applicationProcess: [
        'படி 1: கர்ப்பம் உறுதி செய்யப்பட்டவுடன் உள்ளூர் அங்கன்வாடி அல்லது ஆரம்ப சுகாதார நிலையத்தில் PICME பதிவு செய்யவும்.',
        'படி 2: முதல் தவணைக்கு (ரூ. 3,000) கர்ப்ப காலத்தில் தேவையான தடுப்பூசி மற்றும் பரிசோதனை சான்றுடன் விண்ணப்பிக்கவும்.',
        'படி 3: குழந்தை பிறந்த பின் பிறப்பு சான்றிதழ் மற்றும் தடுப்பூசி அட்டையுடன் இரண்டாம் தவணைக்கு விண்ணப்பிக்கவும்.',
        'படி 4: பணம் உங்கள் வங்கிக் கணக்கிற்கு நேரடியாக வந்து சேரும்.'
      ],
      whereToApply: 'உங்கள் கிராம அங்கன்வாடி மையம் (Anganwadi Center) அல்லது ஆரம்ப சுகாதார நிலையம் (Primary Health Centre - PHC).',
      nextStep: 'இன்றே உங்கள் கிராம அங்கன்வாடி டீச்சர் அல்லது கிராம சுகாதார செவிலியரை (VHN) சந்தித்து PICME பதிவு செய்து தாய் சேய் நல அட்டையை வாங்குங்கள்.',
      spokenSummary: 'கர்ப்பிணி பெண்களுக்கு சத்துணவுக்காக ஐயாயிரம் முதல் பதினெட்டாயிரம் ரூபாய் வரை அரசு நிதியுதவி வழங்குகிறது. இதற்கு உங்கள் ஆதார் அட்டை மற்றும் வங்கி கணக்கு புத்தகம் தேவைப்படும். இன்றே உங்கள் ஊர் அங்கன்வாடி டீச்சரை சந்தித்து தாய் சேய் அட்டையை பெறுங்கள்.'
    },
    en: {
      schemeName: 'Pradhan Mantri Matru Vandana Yojana (PMMVY) - Maternity Cash Scheme',
      officialName: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      summary: 'A national maternity benefit program offering ₹5,000 to ₹6,000 cash incentives to pregnant women and lactating mothers.',
      purpose: 'To compensate for wage loss during childbirth, promote institutional delivery, and ensure adequate nutrition for mother and newborn.',
      benefits: 'Cash benefit of ₹5,000 transferred directly into the mother\'s bank account in installments upon registration and vaccination.',
      financialAmount: '₹5,000 - ₹6,000 Direct Cash Benefit',
      eligibility: [
        'Pregnant women and lactating mothers for first living child (or second child if girl child).',
        'Applicant must be at least 19 years old.',
        'Must register at the local Anganwadi or Government Health Center.'
      ],
      documents: [
        'Mother and Child Protection (MCP) card / RCH Portal registration',
        'Aadhaar card of the mother and husband',
        'Bank Passbook in mother\'s single name (Aadhaar linked)',
        'Child birth certificate and immunization card (for subsequent claims)'
      ],
      applicationProcess: [
        'Step 1: Register your pregnancy within 150 days at the nearest Anganwadi or Primary Health Centre.',
        'Step 2: Submit Aadhaar card copy and Bank passbook for the first installment.',
        'Step 3: Complete required antenatal check-ups and child vaccinations for remaining installments.',
        'Step 4: Amount is credited directly to mother\'s bank account.'
      ],
      whereToApply: 'Nearest Anganwadi Center, Government Primary Health Centre (PHC), or through the ASHA worker.',
      nextStep: 'Meet your local Anganwadi worker or ASHA didi today to get registered on the Mother and Child Health portal.',
      spokenSummary: 'Under this scheme, pregnant women receive 5,000 rupees directly into their bank account for nutrition and health. You only need your Aadhaar card and Bank passbook. Visit your local Anganwadi center or primary health center to register your pregnancy.'
    },
    hi: {
      schemeName: 'प्रधानमंत्री मातृ वंदना योजना (PMMVY)',
      officialName: 'Pradhan Mantri Matru Vandana Yojana',
      summary: 'गर्भवती महिलाओं और स्तनपान कराने वाली माताओं को पोषण और स्वास्थ्य के लिए ₹5,000 की सीधी नकद सहायता।',
      purpose: 'गर्भावस्था और प्रसव के समय महिला को आराम, पौष्टिक आहार और नवजात शिशु को सभी टीके लगवाना सुनिश्चित करना।',
      benefits: 'कुल ₹5,000 सीधे महिला के बैंक खाते में किस्तों में दिए जाते हैं। दूसरी संतान कन्या होने पर ₹6,000 दिए जाते हैं।',
      financialAmount: '₹5,000 से ₹6,000 नकद सहायता',
      eligibility: [
        'गर्भवती महिला की उम्र 19 वर्ष या उससे अधिक होनी चाहिए।',
        'पहले जीवित बच्चे के लिए (या दूसरी बेटी होने पर भी)।',
        'महिला किसी सरकारी या सार्वजनिक उपक्रम में नियमित नौकरी में न हो।'
      ],
      documents: [
        'मातृ एवं शिशु सुरक्षा (MCP) कार्ड',
        'महिला और पति का आधार कार्ड',
        'महिला के नाम का बैंक पासबुक (आधार से जुड़ा हुआ)',
        'बच्चे का जन्म प्रमाण पत्र और टीकाकरण कार्ड'
      ],
      applicationProcess: [
        'चरण 1: गर्भावस्था पता चलते ही 150 दिनों के भीतर नजदीकी आंगनवाड़ी में नाम दर्ज कराएं।',
        'चरण 2: आधार कार्ड और बैंक पासबुक की कॉपी आंगनवाड़ी सहायिका को दें।',
        'चरण 3: प्राथमिक स्वास्थ्य केंद्र में आवश्यक जांच और टीके लगवाएं।',
        'चरण 4: पैसे सीधे आपके बैंक खाते में जमा हो जाएंगे।'
      ],
      whereToApply: 'अपने गाँव या मोहल्ले का आंगनवाड़ी केंद्र, आशा दीदी, या प्राथमिक स्वास्थ्य केंद्र (PHC)।',
      nextStep: 'आज ही अपनी स्थानीय आंगनवाड़ी कार्यकर्ता या आशा दीदी से मिलकर अपना नाम रजिस्टर करवाएं और एमसीपी कार्ड प्राप्त करें।',
      spokenSummary: 'प्रधानमंत्री मातृ वंदना योजना के तहत गर्भवती महिलाओं को पोषण के लिए 5000 रुपये सीधे बैंक खाते में मिलते हैं। इसके लिए आधार कार्ड और बैंक पासबुक चाहिए। आज ही अपनी नजदीकी आंगनवाड़ी दीदी से मिलकर अपना नाम दर्ज करवाएं।'
    },
    te: {
      schemeName: 'ప్రధాన మంత్రి మాతృ వందన యోజన (PMMVY)',
      officialName: 'Pradhan Mantri Matru Vandana Yojana',
      summary: 'గర్భిణీ స్త్రీలు మరియు బాలింతలకు పోషకాహారం మరియు వైద్య సేవల కోసం ₹5,000 నగదు సాయం అందించే కేంద్ర ప్రభుత్వ పథకం.',
      purpose: 'గర్భధారణ సమయంలో తగిన విశ్రాంతి, పోషకాహారం మరియు శిశువుకు సంపూర్ణ టీకాలు అందించడం కోసం.',
      benefits: 'మొత్తం ₹5,000 మూడు విడతల్లో నేరుగా తల్లి బ్యాంక్ ఖాతాలో జమ చేయబడుతుంది.',
      financialAmount: '₹5,000 నగదు బదిలీ',
      eligibility: [
        'మహిళ వయస్సు కనీసం 19 సంవత్సరాలు ఉండాలి.',
        'మొదటి సంతానానికి (లేదా రెండవ సంతానం ఆడపిల్ల అయితే కూడా వర్తిస్తుంది).',
        'ప్రభుత్వ ఉద్యోగం చేయని గృహిణులు లేదా కూలీ మహిళలు అర్హులు.'
      ],
      documents: [
        'తల్లి మరియు శిశు సంరక్షణ (MCP) కార్డు',
        'తల్లి మరియు భర్త ఆధార్ కార్డులు',
        'తల్లి పేరు మీద ఉన్న బ్యాంక్ ఖాతా పాస్‌బుక్',
        'శిశువు జనన ధృవీకరణ పత్రం (డెలివరీ తర్వాత)'
      ],
      applicationProcess: [
        'దశ 1: గర్భం ధరించిన వెంటనే సమీపంలోని అంగన్‌వాడీ కేంద్రంలో నమోదు చేసుకోండి.',
        'దశ 2: ఆధార్ మరియు బ్యాంక్ పాస్‌బుక్ జిరాక్స్ కాపీలను అందజేయండి.',
        'దశ 3: ప్రభుత్వ ఆసుపత్రిలో క్రమం తప్పకుండా వైద్య పరీక్షలు చేయించుకోండి.',
        'దశ 4: నేరుగా మీ ఖాతాలో డబ్బు జమ అవుతుంది.'
      ],
      whereToApply: 'మీ స్థానిక అంగన్‌వాడీ కేంద్రం, ఆశా కార్యకర్త లేదా ప్రాథమిక ఆరోగ్య కేంద్రం (PHC).',
      nextStep: 'వెంటనే మీ ప్రాంత అంగన్‌వాడీ టీచర్‌ను లేదా ఆశా వర్కర్‌ను కలిసి మీ పేరును రిజిస్టర్ చేయించుకోండి.',
      spokenSummary: 'ఈ పథకం కింద గర్భిణీ స్త్రీలకు ఐదు వేల రూపాయల ఆర్థిక సాయం అందుతుంది. దీని కోసం మీ ఆధార్ కార్డు మరియు బ్యాంక్ పాస్‌బుక్ అవసరం. మీ సమీప అంగన్‌వాడీ కేంద్రాన్ని సంప్రదించి పేరు నమోదు చేసుకోండి.'
    }
  }
};
