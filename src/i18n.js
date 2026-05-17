import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "HOME",
        services: "SERVICES",
        why: "WHY THIRAN",
        projects: "PROJECTS",
        contact: "CONTACT",
        launch: "LAUNCH NOW"
      },
      intro: {
        tagline: "Launching Ideas Into Digital Reality",
        button: "Initialize Launch"
      },
      hero: {
        badge: "FROM IDEAS TO DIGITAL SUCCESS",
        heading: "Build Your Digital Presence With Thiran",
        cta_start: "Get Started",
        cta_services: "Our Services"
      },
      services: {
        heading: "Premium Service Packages",
        subheading: "Choose the perfect launchpad for your digital journey. Tailored solutions for every ambition.",
        for: "For",
        learn_more: "Learn More",
        elite: "Elite",
        active: "Active"
      },
      why: {
        heading: "Why Thiran?",
        subheading: "The Launchpad for Digital Excellence and Unmatched Growth.",
        reasons: {
          r1_t: "Innovative Solutions",
          r1_d: "We don't just build websites; we build digital ecosystems that push the boundaries of what's possible.",
          r2_t: "Strategic Impact",
          r2_d: "Our approach is data-driven and results-oriented, ensuring every pixel serves a business purpose.",
          r3_t: "Expert Team",
          r3_d: "A collective of visionary designers and elite developers dedicated to launching your ideas.",
          r4_t: "Agile Execution",
          r4_d: "Speed meets precision. We deliver high-performance digital products at the speed of your startup."
        }
      },
      quote: {
        text: "If you don't build your dream, someone else will hire you to help them build theirs.",
        author: "Tony Gaskins"
      },
      projects: {
        heading: "Our Projects",
        subheading: "Innovation born within the Thiran ecosystem.",
        view: "View Project Case Study"
      },
      contact: {
        heading: "Start Your Project",
        subheading: "Ready to launch? Fill out the form and our team will get back to you within 24 hours.",
        email_us: "Email Us",
        call_us: "Call Us",
        form: {
          name: "Full Name",
          email: "Email Address",
          business: "Business Type",
          package: "Selected Package",
          phone: "Phone Number",
          desc: "Project Description",
          submit: "Send Message",
          success: "Request Sent! Redirecting to WhatsApp for confirmation."
        }
      }
    }
  },
  ta: {
    translation: {
      nav: {
        home: "முகப்பு",
        services: "சேவைகள்",
        why: "ஏன் திறன்?",
        projects: "திட்டங்கள்",
        contact: "தொடர்பு",
        launch: "இப்போதே தொடங்கு"
      },
      intro: {
        tagline: "யோசனைகளை டிஜிட்டல் யதார்த்தமாக மாற்றுதல்",
        button: "தொடங்கு"
      },
      hero: {
        badge: "யோசனைகளிலிருந்து டிஜிட்டல் வெற்றி வரை",
        heading: "திறனுடன் உங்கள் டிஜிட்டல் அடையாளத்தை உருவாக்குங்கள்",
        cta_start: "தொடங்குங்கள்",
        cta_services: "எங்கள் சேவைகள்"
      },
      services: {
        heading: "சிறப்பு சேவை தொகுப்புகள்",
        subheading: "உங்கள் டிஜிட்டல் பயணத்திற்கான சரியான தளத்தைத் தேர்ந்தெடுக்கவும்.",
        for: "யாருக்கு",
        learn_more: "மேலும் அறிய",
        elite: "சிறப்பு",
        active: "செயலில்"
      },
      why: {
        heading: "ஏன் திறன்?",
        subheading: "டிஜிட்டல் மேன்மை மற்றும் வளர்ச்சிக்கான தளம்.",
        reasons: {
          r1_t: "புதுமையான தீர்வுகள்",
          r1_d: "நாங்கள் இணையதளங்களை மட்டும் உருவாக்குவதில்லை; சாத்தியமானவற்றின் எல்லைகளைத் தாண்டிய டிஜிட்டல் அமைப்புகளை உருவாக்குகிறோம்.",
          r2_t: "மூலோபாய தாக்கம்",
          r2_d: "எங்கள் அணுகுமுறை தரவு சார்ந்தது, ஒவ்வொரு பிக்சலும் ஒரு வணிக நோக்கத்திற்காக இருப்பதை உறுதி செய்கிறது.",
          r3_t: "நிபுணர் குழு",
          r3_d: "உங்கள் யோசனைகளைச் செயல்படுத்த அர்ப்பணிக்கப்பட்ட தொலைநோக்கு வடிவமைப்பாளர்கள் மற்றும் சிறந்த டெவலப்பர்களின் குழு.",
          r4_t: "விரைவான செயல்பாடு",
          r4_d: "வேகம் மற்றும் துல்லியம். உங்கள் தொடக்க நிறுவனத்தின் வேகத்தில் உயர் செயல்திறன் கொண்ட டிஜிட்டல் தயாரிப்புகளை வழங்குகிறோம்."
        }
      },
      quote: {
        text: "உங்கள் கனவை நீங்கள் கட்டியெழுப்பவில்லை என்றால், தங்களது கனவை கட்டியெழுப்ப யாராவது ஒருவர் உங்களை வேலைக்கு அமர்த்துவார்கள்.",
        author: "டோனி காஸ்கின்ஸ்"
      },
      projects: {
        heading: "எங்கள் திட்டங்கள்",
        subheading: "திறன் சூழலில் பிறந்த கண்டுபிடிப்புகள்.",
        view: "திட்ட விவரங்களைக் காண்க"
      },
      contact: {
        heading: "உங்கள் திட்டத்தைத் தொடங்குங்கள்",
        subheading: "தொடங்க தயாரா? படிவத்தை நிரப்பவும், 24 மணிநேரத்திற்குள் எங்கள் குழு உங்களைத் தொடர்பு கொள்ளும்.",
        email_us: "மின்னஞ்சல்",
        call_us: "அழைப்பு",
        form: {
          name: "முழு பெயர்",
          email: "மின்னஞ்சல் முகவரி",
          business: "வணிக வகை",
          package: "தேர்ந்தெடுக்கப்பட்ட தொகுப்பு",
          phone: "தொலைபேசி எண்",
          desc: "திட்ட விவரம்",
          submit: "செய்தி அனுப்பு",
          success: "கோரிக்கை அனுப்பப்பட்டது! உறுதிப்படுத்த வாட்ஸ்அப்பிற்கு மாற்றப்படுகிறது."
        }
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        services: "सेवाएं",
        why: "थिरन क्यों?",
        projects: "प्रोजेक्ट्स",
        contact: "संपर्क",
        launch: "अभी शुरू करें"
      },
      intro: {
        tagline: "विचारों को डिजिटल हकीकत में बदलना",
        button: "शुरू करें"
      },
      hero: {
        badge: "विचारों से डिजिटल सफलता तक",
        heading: "थिरन के साथ अपनी डिजिटल उपस्थिति बनाएं",
        cta_start: "शुरू करें",
        cta_services: "हमारी सेवाएं"
      },
      services: {
        heading: "प्रीमियम सेवा पैकेज",
        subheading: "अपनी डिजिटल यात्रा के लिए सही लॉन्चपैड चुनें। हर महत्वाकांक्षा के लिए अनुकूल समाधान।",
        for: "के लिए",
        learn_more: "और जानें",
        elite: "अभिजात",
        active: "सक्रिय"
      },
      why: {
        heading: "थिरन क्यों?",
        subheading: "डिजिटल उत्कृष्टता और बेजोड़ विकास के लिए लॉन्चपैड।",
        reasons: {
          r1_t: "अभिनव समाधान",
          r1_d: "हम सिर्फ वेबसाइट नहीं बनाते; हम डिजिटल पारिस्थितिकी तंत्र बनाते हैं जो संभावनाओं की सीमाओं को पार करते हैं।",
          r2_t: "रणनीतिक प्रभाव",
          r2_d: "हमारा दृष्टिकोण डेटा-संचालित है, यह सुनिश्चित करता है कि हर पिक्सेल एक व्यावसायिक उद्देश्य की पूर्ति करे।",
          r3_t: "विशेषज्ञ टीम",
          r3_d: "आपके विचारों को लॉन्च करने के लिए समर्पित दूरदर्शी डिजाइनरों और विशिष्ट डेवलपर्स की एक टीम।",
          r4_t: "त्वरित निष्पादन",
          r4_d: "गति और सटीकता। हम आपके स्टार्टअप की गति से उच्च प्रदर्शन वाले डिजिटल उत्पाद प्रदान करते हैं।"
        }
      },
      quote: {
        text: "यदि आप अपने सपने का निर्माण नहीं करते हैं, तो कोई और आपको उनके सपनों के निर्माण में मदद करने के लिए काम पर रखेगा।",
        author: "टोनी गास्किन्स"
      },
      projects: {
        heading: "हमारे प्रोजेक्ट्स",
        subheading: "थिरन पारिस्थितिकी तंत्र के भीतर नवाचार।",
        view: "प्रोजेक्ट केस स्टडी देखें"
      },
      contact: {
        heading: "अपना प्रोजेक्ट शुरू करें",
        subheading: "लॉन्च के लिए तैयार हैं? फॉर्म भरें और हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।",
        email_us: "ईमेल करें",
        call_us: "कॉल करें",
        form: {
          name: "पूरा नाम",
          email: "ईमेल पता",
          business: "व्यवसाय का प्रकार",
          package: "चुना गया पैकेज",
          phone: "फ़ोन नंबर",
          desc: "प्रोजेक्ट विवरण",
          submit: "संदेश भेजें",
          success: "अनुरोध भेज दिया गया! पुष्टि के लिए व्हाट्सएप पर रीडायरेक्ट किया जा रहा है।"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
