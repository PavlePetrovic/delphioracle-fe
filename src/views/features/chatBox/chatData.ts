import { messageType, questionsArrayType } from "./chatBoxTypes";

export const initialChatMessages: Array<messageType> = [
  {
    message:
      "Initially, I shall offer you a brief overview based on what the stars reveal at first glance. Thereafter, your heart's queries are welcome - feel free to ask anything your soul yearns to know.",
    from: "bot",
    created_at: Date.now(),
  },
];

export const coolPunchLines: string[] = [
  "Even oracles need a moment to ponder. Consulting the stars - they're older and wiser, but not faster.",
  "Patience, seeker. The secrets of the universe reveal themselves not in haste, but in due time.",
  "Momentarily, I shall return with insights drawn from the wellspring of timeless wisdom.",
  "Peering into the cosmic depths... if only the stars would stop moving for a second!",
  "One moment, please. I'm aligning the planets for you, and they're not exactly rushing…",
  "Be right with you after I finish this quick game of chess with Athena. She's a tough opponent!",
  "In the realm of eternal knowledge, a short wait ensures a reading of great precision and depth.",
  "Consulting the stars on your behalf. They're a bit chatty today, so give me a cosmic minute.",
  "Decoding the universe's mysteries. It's like untangling cosmic headphone cords - tricky, but I've got this.",
  "Hang tight! I'm currently weaving through the constellations to fetch your insights. Astral navigation takes a moment!",
  "The stars are aligning for your query. Such celestial orchestration takes a brief span of time.",
  "Please hold, I'm currently in a deep conversation with the Moon. She sends her regards, by the way!",
  "Navigating the celestial bureaucracy. Even the cosmos has its red tape!",
  "Awaiting the latest gossip from Mercury. He's always got the inside scoop on the cosmos.",
  "The wisdom of the ages takes a moment to gather. Please hold as I consult the ancient celestial archives.",
  "The stars are whispering their secrets. Give me a moment to eavesdrop on the cosmos.",
  "I'm on a celestial call with Jupiter. He likes to talk... a lot.",
  "Translating cosmic runes into your personalized insight. Please hold.",
  "Beaming up your request from the astral plane. This might take a lightyear... just kidding!",
  "The galaxies are aligning. Your answer is on its way through the space-time continuum.",
  "Hold on! I'm consulting with the universe's librarian for the perfect answer.",
  "Even cosmic downloads need buffering time. Hold tight, your wisdom is coming.",
  "Currently decoding the celestial matrix. It's a bit complex but worth the wait.",
  "Aligning your request with the cosmic frequency. This takes a smidgen of time.",
  "One moment please, I'm in the middle of an interstellar coffee break with Orion.",
  "Navigating through a meteor shower of information. Your answer will arrive shortly.",
  "Channeling ancient wisdom from the Akashic Records. This requires a cosmic moment.",
  "Consulting with the Zodiac council. They're meticulous but thorough.",
  "The stars are cross-referencing their notes. I'll be back with your insight soon.",
  "Interpreting your cosmic coordinates. Astral precision takes a moment.",
  "The universe is a big place. I'm pinpointing your answer among the stars.",
  "Currently syncing with Saturn's rings for a crystal-clear reading. Hang tight!",
  "Downloading your cosmic insight from the starry cloud. This won't take long.",
  "I'm decoding the constellations' messages for you. Patience, seeker.",
  "Peering through the cosmic telescope. Your insight will be crystal clear shortly.",
  "Consulting with the stars' oracle. They're a bit slow, but their wisdom is timeless.",
  "Aligning your celestial chart for precision. This requires a moment of cosmic patience.",
  "The universe is whispering. I'm listening intently to bring you the answer.",
  "Currently interpreting a solar flare of information. Your insight is on its way.",
  "Star mapping your query. The universe takes its time for perfection.",
  "In the middle of a cosmic translation session. I'll be right back with your insight.",
  "Navigating the nebula of knowledge. Your answer will shine through shortly.",
  "The stars are aligning their stories. Hold on for a stellar revelation.",
  "Even cosmic sages take a moment to gather their thoughts. Please hold.",
  "Your query is in the queue with the cosmos. Precision takes a brief moment.",
  "I'm in a celestial conference call with the planets. They're thorough but slow.",
  "Downloading the universe's latest updates. Your insight is just a moment away.",
  "Channeling the wisdom of the Milky Way. This takes a cosmic heartbeat.",
  "Consulting the starry archives for your answer. This requires a moment of patience.",
  "Interpreting the celestial signals. Your insight will beam through shortly.",
];

const knowThyselfQuestions: Array<questionsArrayType> = [
  {
    id: "knowThyself-1",
    question: "What are the main traits that define who I am?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-2",
    question: "What are my top strengths and abilities?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-3",
    question: "Where can I grow in my personal development?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-4",
    question: "How can I make the most of my strengths?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-5",
    question: "What personality traits should I focus on developing?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-6",
    question: "How do my core values influence my decisions?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-7",
    question: "What drives and motivates me in my life?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-8",
    question: "Which habits are preventing me from reaching my potential?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-9",
    question: "How do I typically cope with stress and adversity?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
  {
    id: "knowThyself-10",
    question: "How does my past influence who I am today?",
    premium: false,
    category: "Know Thyself",
    credits: 1,
  },
];

const loveQuestions: Array<questionsArrayType> = [
  {
    id: "love-1",
    question: "What can I expect in my romantic relationships?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-2",
    question:
      "What Sun, Moon, and Rising combination is ideal for my romantic partner?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-3",
    question: "How does my approach to relationships shape my experiences?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-4",
    question: "What qualities can I cultivate to attract a loving partner?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-5",
    question: "What relationship patterns do I tend to repeat?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-6",
    question:
      "What strategies can I use to effectively navigate conflicts in love?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-7",
    question: "How do my astrological signs influence my romantic life?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-8",
    question: "What are my primary love languages?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-9",
    question: "What red flags should I be aware of in relationships?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
  {
    id: "love-10",
    question:
      "What steps can I take to build lasting love in my relationships?",
    premium: false,
    category: "Love Realm",
    credits: 1,
  },
];

const careerAndFinancesQuestions: Array<questionsArrayType> = [
  {
    id: "careerAndFinances-1",
    question:
      "What career paths are indicated by my Sun, Moon, and Rising signs?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-2",
    question:
      "How do the positions of my planets influence my financial outlook?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-3",
    question: "What daily habits will help me enhance my productivity?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-4",
    question: "What is my ideal work environment?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-5",
    question: "What does my 2nd house reveal about my values around money?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-6",
    question:
      "What lessons about work and finances can I learn from my Saturn placement?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-7",
    question:
      "How do my Mercury aspects affect my communication and negotiation skills at work?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-8",
    question: "What talents and skills are highlighted by my North Node?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-9",
    question:
      "How can I use my Chiron placement to overcome financial challenges?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
  {
    id: "careerAndFinances-10",
    question:
      "How do my Venus and Mars placements influence my earning potential and spending habits?",
    premium: false,
    category: "Career & Finances",
    credits: 1,
  },
];

const healthQuestions: Array<questionsArrayType> = [
  {
    id: "health-1",
    question:
      "What types of exercise align with my astrological signs and support my body?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-2",
    question:
      "How can I improve my mental health based on my Moon sign's influences?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-3",
    question:
      "What dietary habits should I adopt, considering my 6th house of health?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-4",
    question:
      "How can I create a sustainable wellness routine that reflects my personal needs and chart?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-5",
    question:
      "What health risks should I be mindful of according to my natal chart?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-6",
    question:
      "How does stress impact my health, and how can my chart help me manage it?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-7",
    question:
      "What self-care practices are best suited for me based on my Venus and Moon placements?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-8",
    question:
      "How can I maintain a positive mindset during tough times, as influenced by my Jupiter placement?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-9",
    question:
      "How do my planetary aspects influence my energy levels and overall vitality?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
  {
    id: "health-10",
    question:
      "How can my natal chart help me set healthy boundaries for my emotional and physical well-being?",
    premium: false,
    category: "Health & Wellbeing",
    credits: 1,
  },
];

const socialLifeQuestions: Array<questionsArrayType> = [
  {
    id: "socialLife-1",
    question: "What type of people should I surround myself with to thrive?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-2",
    question:
      "How can I resolve conflicts with loved ones in a constructive way?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-3",
    question: "How can my 7th house guide me in setting healthy boundaries?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-4",
    question: "What qualities make me a supportive friend or family member?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-5",
    question: "What is my role in my social circle?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-6",
    question:
      "How do my relationships and my 5th house influence my personal growth?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-7",
    question: "How do others perceive me based on my astrological chart?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-8",
    question: "How can I manage social anxiety?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-9",
    question: "How can I build a supportive social network?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
  {
    id: "socialLife-10",
    question:
      "How can my Moon placement help me become a more empathetic listener?",
    premium: false,
    category: "Social Sphere",
    credits: 1,
  },
];

const synastryRomanceQuestions: Array<questionsArrayType> = [
  {
    id: "synastryRomance-1",
    question: "What qualities do we both share that strengthen our connection?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-2",
    question: "How do our Moon signs influence how we feel about each other?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-3",
    question: "What makes me compatible with my partner?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-4",
    question: "How do our Venus signs affect how we show love and care?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-5",
    question:
      "What fiery challenges could our Mars placements bring to our relationship journey?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-6",
    question:
      "What common goals and dreams do we have based on our combined charts?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-7",
    question:
      "What do our 7th house placements reveal about our approach to commitment and partnership?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-8",
    question:
      "In what ways do our communication styles help or hurt our relationship?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-9",
    question: "What can we learn about our love from our Saturn placements?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
  {
    id: "synastryRomance-10",
    question:
      "How do our attachment styles influence our emotional connection?",
    premium: false,
    category: "Romance",
    credits: 5,
  },
];

const synastryFriendShipQuestions: Array<questionsArrayType> = [
  {
    id: "synastryFriendship-1",
    question: "What shared qualities create a strong bond between us?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-2",
    question:
      "How do our Moon signs shape our emotional support for each other?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-3",
    question:
      "What joys and interests do our 5th house placements reveal we can enjoy together?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-4",
    question:
      "How can our Venus placements bring more fun and laughter into our friendship?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-5",
    question:
      "What potential misunderstandings might arise from our Mars placements?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-6",
    question:
      "In what ways do our Mercury placements enhance or challenge our conversations?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-7",
    question:
      "What unique strengths do we each contribute to our friendship, based on our charts?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-8",
    question:
      "How can understanding our attachment styles deepen our trust and connection?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-9",
    question:
      "What insights do our Saturn placements offer about commitment and loyalty in our friendship?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
  {
    id: "synastryFriendship-10",
    question:
      "What valuable lessons can our synastry teach us about supporting each other through life's ups and downs?",
    premium: false,
    category: "Friendship",
    credits: 5,
  },
];

const synastryBusinessQuestions: Array<questionsArrayType> = [
  {
    id: "synastryBusiness-1",
    question: "How can our Sun signs empower our professional partnership?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-2",
    question:
      "What strengths do our Mercury placements bring to our communication in business?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-3",
    question:
      "What potential challenges might our Mars placements create in our work dynamic?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-4",
    question:
      "How can our combined charts reveal opportunities for growth in our ventures?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-5",
    question:
      "What insights do our 10th house placements provide about our shared career goals?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-6",
    question:
      "How can our Venus signs enhance our teamwork and create a positive work environment?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-7",
    question:
      "Do we have the potential for generating profit together based on our charts?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-8",
    question:
      "What unique strengths do we each bring to the table based on our charts?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-9",
    question:
      "What conflicts might arise from our Saturn placements, and how can we navigate them?",
    premium: false,
    category: "Business",
    credits: 5,
  },
  {
    id: "synastryBusiness-10",
    question:
      "How can understanding our attachment styles improve our collaboration and trust?",
    premium: false,
    category: "Business",
    credits: 5,
  },
];

const chatBoxQuestions: Array<questionsArrayType> = [
  ...knowThyselfQuestions,
  ...loveQuestions,
  ...careerAndFinancesQuestions,
  ...healthQuestions,
  ...socialLifeQuestions,
];

const synastryQuestions: Array<questionsArrayType> = [
  ...synastryRomanceQuestions,
  ...synastryFriendShipQuestions,
  ...synastryBusinessQuestions,
];

const shuffleQuestions = (
  questionsList: Array<questionsArrayType>
): Array<questionsArrayType> => {
  let array = questionsList;

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

export const shuffledQuestions = shuffleQuestions(chatBoxQuestions);
export const shuffledSynastryQuestions = shuffleQuestions(synastryQuestions);
