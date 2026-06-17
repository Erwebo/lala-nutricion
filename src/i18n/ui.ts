export type Lang = 'es' | 'en';

export const SITE = 'https://lalanutricion.com';
export const WA_NUMBER = '50764123914';

export const languages: Record<Lang, string> = { es: 'Español', en: 'English' };
export const defaultLang: Lang = 'es';

/** URL de la página en cada idioma (rutas reales para SEO). */
export const langPath: Record<Lang, string> = { es: '/', en: '/en/' };

/** Metadatos por idioma para <head>. */
export const meta: Record<Lang, {
  htmlLang: string;
  ogLocale: string;
  ogLocaleAlt: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twTitle: string;
  twDescription: string;
}> = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_PA',
    ogLocaleAlt: 'en_US',
    title: 'Laura Araúz · Nutricionista Dietista en Ciudad de Panamá | Lala Nutrición',
    description: 'Nutricionista dietista en Ciudad de Panamá (Reg. 1366). Te ayudo a entender tu alimentación y construir hábitos sostenibles. Sin restricciones, sin extremos. Consulta presencial y online.',
    keywords: 'nutricionista Panamá, dietista Ciudad de Panamá, Laura Araúz, Lala Nutrición, nutrición sostenible, plan nutricional, consulta nutricional, nutricionista online Panamá, hábitos alimenticios',
    ogTitle: 'Laura Araúz · Nutricionista Dietista en Ciudad de Panamá',
    ogDescription: 'Te ayudo a entender tu alimentación y construir hábitos que realmente puedas mantener. Sin restricciones, sin extremos.',
    twTitle: 'Laura Araúz · Nutricionista Dietista',
    twDescription: 'Nutrición sostenible y personalizada en Ciudad de Panamá. Sin restricciones, sin extremos.',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    ogLocaleAlt: 'es_PA',
    title: 'Laura Araúz · Registered Dietitian in Panama City | Lala Nutrition',
    description: 'Registered dietitian in Panama City (Lic. 1366). I help you understand your nutrition and build sustainable habits. No restrictions, no extremes. In-person and online.',
    keywords: 'dietitian Panama, registered dietitian Panama City, Laura Araúz, Lala Nutrition, sustainable nutrition, nutrition plan, nutrition consultation, online dietitian Panama, eating habits',
    ogTitle: 'Laura Araúz · Registered Dietitian in Panama City',
    ogDescription: 'I help you understand your nutrition and build habits you can actually maintain. No restrictions, no extremes.',
    twTitle: 'Laura Araúz · Registered Dietitian',
    twDescription: 'Sustainable, personalized nutrition in Panama City. No restrictions, no extremes.',
  },
};

/** Mensajes de WhatsApp por idioma. */
export const waMsg: Record<Lang, Record<string, string>> = {
  es: {
    caso: 'Hola Laura, quiero evaluar mi caso',
    entender: 'Hola Laura, quiero entender qué me pasa',
    primera: 'Hola Laura, quiero agendar una primera sesión',
    pareja: 'Hola Laura, quiero info sobre el Plan en Pareja',
    programa: 'Hola Laura, quiero empezar el Programa de Nutrición Sostenible',
    evaluacion: 'Hola Laura, quiero agendar una evaluación',
  },
  en: {
    caso: 'Hi Laura, I want to evaluate my case',
    entender: "Hi Laura, I want to understand what's happening to me",
    primera: "Hi Laura, I'd like to schedule a first session",
    pareja: "Hi Laura, I'd like info about the Couples Plan",
    programa: 'Hi Laura, I want to start the Sustainable Nutrition Program',
    evaluacion: "Hi Laura, I'd like to schedule an evaluation",
  },
};

/** Construye el enlace de WhatsApp para un mensaje dado. */
export function waLink(lang: Lang, key: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg[lang][key])}`;
}

/** Devuelve las 6 preguntas/respuestas de FAQ en orden (para FAQPage schema y la sección). */
export function faqItems(lang: Lang): { q: string; a: string }[] {
  return [1, 2, 3, 4, 5, 6].map((n) => ({
    q: ui[lang][`faq.q${n}`],
    a: ui[lang][`faq.a${n}`],
  }));
}

/** Textos de la interfaz por idioma. */
export const ui: Record<Lang, Record<string, string>> = {
  es: {
    'skip': 'Saltar al contenido',
    'nav.sobre': 'Sobre Laura', 'nav.proceso': 'Cómo Funciona', 'nav.planes': 'Planes',
    'nav.contacto': 'Contacto', 'nav.cta': 'Evaluar mi caso', 'nav.testimonios': 'Testimonios',
    'h1.tag': 'Nutricionista Dietista · Reg. 1366 · Ciudad de Panamá',
    'h1.title': 'No es disciplina,<em>es dirección.</em>',
    'h1.sub': 'El enfoque lo cambia todo.',
    'h1.desc': 'Te ayudo a entender tu alimentación y construir hábitos que realmente puedas mantener.',
    'h1.cta1': 'Evaluar mi caso', 'h1.cta2': 'Ver los planes ↓',
    'h2s.tag': 'Nutrición sostenible · Sin restricciones',
    'h2s.title': 'Nutrición Sostenible<em>con Laura Araúz</em>',
    'h2s.desc': 'Aprende a comer bien, sin reglas innecesarias. Un proceso guiado para lograr cambios reales que se adapten a tu vida.',
    'h2s.cta2': 'Conoce a Lala ↓',
    'prob.label': '¿Te suena familiar?',
    'prob.h2': 'Puede que algo de esto te esté pasando',
    'prob.p': 'Si alguno de estos te identifica, estás en el lugar correcto.',
    'prob.cta': 'Quiero entender qué me pasa →',
    'prob.alt1': 'Me inflamo aunque coma bien',
    'prob.alt2': 'Siempre quiero algo dulce o salado',
    'prob.alt3': 'Me siento pesado después de comer',
    'prob.alt4': 'Hago todo bien y no veo cambios',
    'prob.alt5': 'No sé por dónde empezar',
    'prob.alt6': 'Tengo hambre a cada rato',
    'sobre.label': 'Sobre Laura', 'sobre.h2': 'No necesitas hacerlo perfecto',
    'sobre.credential': 'Nutricionista Dietista · Reg. 1366',
    'sobre.p1': 'Soy Lala, nutricionista dietista, y trabajo contigo para mejorar tu alimentación sin extremos, de una forma que realmente funcione en tu vida.',
    'sobre.p2': 'No se trata de seguir un plan perfecto. Se trata de entender qué necesita tu cuerpo y construir desde ahí — con paciencia, sin restricciones y con resultados que duran.',
    'sobre.p3': 'Nutrición sin extremos. Sin dietas imposibles. Sin presión.',
    'sobre.pill1': 'Sin restricciones', 'sobre.pill2': '100% personalizado',
    'sobre.pill3': 'Sostenible en el tiempo', 'sobre.pill4': 'Presencial y online',
    'proc.h2': 'Cómo funciona el proceso',
    'proc.p': 'No empezamos desde cero — empezamos desde donde estás tú.',
    'proc.s1h': 'Entender tu caso', 'proc.s1p': 'Qué está pasando, tus hábitos y lo que ya has intentado.',
    'proc.s2h': 'Definir estrategia', 'proc.s2p': 'Qué cambiar y cómo adaptarlo a tu vida real, sin fórmulas genéricas.',
    'proc.s3h': 'Ajustar y avanzar', 'proc.s3p': 'Seguimiento y ajustes para que funcione y se mantenga en el tiempo.',
    'proc.lema': '"No se trata de hacerlo perfecto, se trata de hacerlo sostenible."',
    'plan.label': 'Cómo puedo ayudarte', 'plan.h2': 'Encuentra tu punto de partida',
    'plan.p': 'Cada persona es diferente. Cada plan, también.',
    'plan1.h': 'Evaluación Nutricional', 'plan1.p': 'Una primera sesión para entender qué está pasando y definir el mejor camino contigo.', 'plan1.a': 'Agendar primera sesión →',
    'plan2.h': 'Plan en Pareja', 'plan2.p': 'Un proceso para avanzar juntos y sostener los cambios como equipo, adaptado a cada uno.', 'plan2.a': 'Quiero este plan →',
    'plan3.rec': '★ Recomendado', 'plan3.h': 'Programa de Nutrición Sostenible',
    'plan3.p': 'Un proceso guiado para lograr cambios reales y sostenibles en tu alimentación.', 'plan3.a': 'Quiero empezar mi proceso →',
    'plan.note1': '* Cada proceso se adapta a ti y a tu estilo de vida.',
    'plan.note2': '¿No sabes cuál es el tuyo? Te oriento sin compromiso.', 'plan.cta': 'Evaluar mi caso →',
    'emp.label': 'Empieza tu proceso', 'emp.h2': 'No necesitas hacerlo perfecto.',
    'emp.sub': 'Solo empezar con dirección.',
    'emp.p': 'Primero entendemos tu caso y desde ahí definimos el mejor camino para ti. Sin fórmulas genéricas, sin dietas imposibles.',
    'emp.cta': 'Agendar evaluación por WhatsApp', 'emp.note': '* La cita se coordina contigo directamente por WhatsApp.',
    'insta.h2': 'Aprende a comer mejor sin complicarte',
    'insta.p': 'Comparto contenido para que entiendas tu alimentación y construyas hábitos que puedas mantener.',
    'insta.btn': 'Ver más en Instagram →',
    'testi.label': 'Testimonios', 'testi.h2': 'Lo que dicen quienes ya empezaron',
    'testi.t1': 'Una de las cosas que más me gustó fue que se tomó el tiempo de oírme y ajustar el plan a mis necesidades y gustos personales, sus menús eran saludables pero sin dejar de ser ricos y atractivos.',
    'testi.t2': 'No me siento presionada a pensar que tengo que cumplir una meta cada mes, porque realmente estoy construyendo un estilo de vida que sea sostenible.',
    'testi.t3': 'Desde que empecé a seguir las recomendaciones, me siento con más energía y he aprendido a cuidar mi alimentación de forma sencilla y efectiva.',
    'cont.h2': 'Empieza hoy tu proceso', 'cont.p': 'Cuéntame tu caso y juntos encontramos el mejor punto de partida para ti.',
    'cont.pres': 'Consulta presencial', 'cont.cta': 'Escríbeme por WhatsApp',
    'foot.desc': 'Nutrición sostenible y personalizada en Ciudad de Panamá. Sin restricciones, sin extremos.',
    'foot.nav': 'Navegar',
    'faq.label': 'Preguntas frecuentes', 'faq.h2': 'Lo que muchas personas me preguntan',
    'faq.p': 'Si tienes otra duda, escríbeme por WhatsApp y te respondo personalmente.',
    'faq.q1': '¿Cómo es la primera consulta?',
    'faq.a1': 'Es una sesión de evaluación donde escucho tu caso, revisamos tus hábitos, lo que has intentado y qué necesita tu cuerpo. Salimos con un plan inicial claro y adaptado a ti.',
    'faq.q2': '¿Atiendes online o solo presencial?',
    'faq.a2': 'Ambas. Si estás en Ciudad de Panamá puedes venir a la consulta presencial en Clínica Mollin. Si estás fuera, agendamos por videollamada con el mismo seguimiento.',
    'faq.q3': '¿Voy a hacer una dieta estricta?',
    'faq.a3': 'No. Mi enfoque es nutrición sostenible: nada de eliminar grupos de alimentos ni reglas imposibles. Trabajamos con tu rutina, tu cultura y lo que realmente puedas mantener.',
    'faq.q4': '¿Cuánto dura el proceso?',
    'faq.a4': 'Depende de tu caso y objetivo. La mayoría logra cambios sostenidos en 3 a 6 meses de acompañamiento, con sesiones de seguimiento cada pocas semanas.',
    'faq.q5': '¿Atiendes condiciones específicas (resistencia a la insulina, SOP, gastritis, etc.)?',
    'faq.a5': 'Sí. Trabajo con condiciones como resistencia a la insulina, SOP, hipotiroidismo, gastritis, colon irritable y más. Cada plan se diseña según tu diagnóstico y necesidades.',
    'faq.q6': '¿Atiendes en inglés?',
    'faq.a6': 'Sí, las consultas pueden ser en español o en inglés. Solo dímelo al agendar y coordinamos en el idioma que prefieras.',
    'nav.faq': 'FAQ',
  },
  en: {
    'skip': 'Skip to content',
    'nav.sobre': 'About Laura', 'nav.proceso': 'How It Works', 'nav.planes': 'Plans',
    'nav.contacto': 'Contact', 'nav.cta': 'Evaluate my case', 'nav.testimonios': 'Testimonials',
    'h1.tag': 'Registered Dietitian · Lic. 1366 · Panama City',
    'h1.title': "It's not discipline,<em>it's direction.</em>",
    'h1.sub': 'The right approach changes everything.',
    'h1.desc': 'I help you understand your nutrition and build habits you can actually maintain.',
    'h1.cta1': 'Evaluate my case', 'h1.cta2': 'See plans ↓',
    'h2s.tag': 'Sustainable nutrition · No restrictions',
    'h2s.title': 'Sustainable Nutrition<em>with Laura Araúz</em>',
    'h2s.desc': 'Learn to eat well, without unnecessary rules. A guided process to achieve real changes that fit your life.',
    'h2s.cta2': 'Meet Lala ↓',
    'prob.label': 'Does this sound familiar?',
    'prob.h2': 'Maybe some of this is happening to you',
    'prob.p': "If any of these resonate with you, you're in the right place.",
    'prob.cta': "I want to understand what's happening →",
    'prob.alt1': 'I get bloated even when I eat well',
    'prob.alt2': "I'm always craving something sweet or salty",
    'prob.alt3': 'I feel uncomfortable after eating',
    'prob.alt4': "I'm doing everything right but not seeing results",
    'prob.alt5': "I don't know where to start",
    'prob.alt6': "I'm always hungry",
    'sobre.label': 'About Laura', 'sobre.h2': "You don't need to do it perfectly",
    'sobre.credential': 'Registered Dietitian · Lic. 1366',
    'sobre.p1': "I'm Lala, a registered dietitian nutritionist, and I work with you to improve your nutrition without extremes, in a way that truly works in your life.",
    'sobre.p2': "It's not about following a perfect plan. It's about understanding what your body needs and building from there — with patience, no restrictions, and results that last.",
    'sobre.p3': 'Nutrition without extremes. No impossible diets. No pressure.',
    'sobre.pill1': 'No restrictions', 'sobre.pill2': '100% personalized',
    'sobre.pill3': 'Sustainable long-term', 'sobre.pill4': 'In-person & online',
    'proc.h2': 'How the process works',
    'proc.p': "We don't start from scratch — we start from where you are.",
    'proc.s1h': 'Understanding your case', 'proc.s1p': "What's happening, your habits, and what you've already tried.",
    'proc.s2h': 'Defining the strategy', 'proc.s2p': 'What to change and how to adapt it to your real life, no generic formulas.',
    'proc.s3h': 'Adjust and move forward', 'proc.s3p': 'Follow-up and adjustments so it works and lasts over time.',
    'proc.lema': '"It\'s not about doing it perfectly, it\'s about doing it sustainably."',
    'plan.label': 'How I can help you', 'plan.h2': 'Find your starting point',
    'plan.p': 'Every person is different. Every plan, too.',
    'plan1.h': 'Nutritional Assessment', 'plan1.p': "A first session to understand what's happening and define the best path with you.", 'plan1.a': 'Schedule first session →',
    'plan2.h': 'Couples Plan', 'plan2.p': 'A process to move forward together and sustain changes as a team, adapted for each person.', 'plan2.a': 'I want this plan →',
    'plan3.rec': '★ Recommended', 'plan3.h': 'Sustainable Nutrition Program',
    'plan3.p': 'A guided process to achieve real and lasting changes in your nutrition.', 'plan3.a': 'I want to start my process →',
    'plan.note1': '* Each process adapts to you and your lifestyle.',
    'plan.note2': "Not sure which one? I'll guide you, no commitment.", 'plan.cta': 'Evaluate my case →',
    'emp.label': 'Start your process', 'emp.h2': "You don't need to do it perfectly.",
    'emp.sub': 'Just start with direction.',
    'emp.p': 'First we understand your case, and from there we define the best path for you. No generic formulas, no impossible diets.',
    'emp.cta': 'Schedule evaluation via WhatsApp', 'emp.note': '* The appointment is coordinated with you directly via WhatsApp.',
    'insta.h2': 'Learn to eat better without overcomplicating it',
    'insta.p': 'I share content to help you understand your nutrition and build habits you can maintain.',
    'insta.btn': 'See more on Instagram →',
    'testi.label': 'Testimonials', 'testi.h2': 'What those who already started say',
    'testi.t1': 'One of the things I liked most was that she took the time to listen to me and adjust the plan to my personal needs and tastes. Her menus were healthy but still delicious and appealing.',
    'testi.t2': "I don't feel pressured to meet a monthly goal, because I'm truly building a sustainable lifestyle.",
    'testi.t3': 'Since I started following the recommendations, I feel more energetic and have learned to take care of my nutrition in a simple and effective way.',
    'cont.h2': 'Start your process today', 'cont.p': "Tell me about your case and together we'll find the best starting point for you.",
    'cont.pres': 'In-person consultation', 'cont.cta': 'Message me on WhatsApp',
    'foot.desc': 'Sustainable and personalized nutrition in Panama City. No restrictions, no extremes.',
    'foot.nav': 'Navigate',
    'faq.label': 'Frequently asked questions', 'faq.h2': 'What people often ask me',
    'faq.p': "Have another question? Message me on WhatsApp and I'll reply personally.",
    'faq.q1': 'What is the first consultation like?',
    'faq.a1': "It's an evaluation session where I listen to your case, we review your habits, what you've tried, and what your body needs. You leave with a clear initial plan tailored to you.",
    'faq.q2': 'Do you offer online consultations or only in-person?',
    'faq.a2': "Both. If you're in Panama City, you can come to the in-person consultation at Clínica Mollin. If you're elsewhere, we schedule via video call with the same follow-up.",
    'faq.q3': 'Will I have to follow a strict diet?',
    'faq.a3': 'No. My approach is sustainable nutrition: no eliminating food groups, no impossible rules. We work with your routine, your culture, and what you can actually maintain.',
    'faq.q4': 'How long does the process take?',
    'faq.a4': 'It depends on your case and goal. Most people achieve lasting changes in 3 to 6 months of follow-up, with sessions every few weeks.',
    'faq.q5': 'Do you treat specific conditions (insulin resistance, PCOS, gastritis, etc.)?',
    'faq.a5': 'Yes. I work with conditions like insulin resistance, PCOS, hypothyroidism, gastritis, irritable bowel and more. Each plan is designed based on your diagnosis and needs.',
    'faq.q6': 'Do you offer consultations in English?',
    'faq.a6': "Yes, sessions can be in Spanish or English. Just let me know when scheduling and we'll coordinate in your preferred language.",
    'nav.faq': 'FAQ',
  },
};

/** Helper de traducción para un idioma. */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}
