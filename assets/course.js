// course.js — everything that belongs to this webinar only.
// The shared look and features come from study-notebook-design (loaded after this file).
// A webinar has ONE talk page (lessons/talk.html) whose parts are the parts of the talk.

const COURSE_LESSONS = [
  { n: 1, step: "the talk", title: "Generative AI & Prompt Engineering", file: "talk.html", ready: true,
    summary: "Everything from the live session, one part per screen.", leaves: null },
];

const COLAB = "https://colab.research.google.com/github/mo-ri-ch/genai-webinar/blob/main/notebooks/genai_webinar_demo.ipynb";

window.COURSE = {
  id: "genai-webinar",
  pathLabel: "The webinar",
  lessons: COURSE_LESSONS,
  support: false,                  // no support note inside a webinar
  colab: COLAB,
  setup: [],

  // Read by webinar.js on the home page
  webinar: {
    resources: [
      { icon: "📖", title: "The talk", sum: "Every idea from the session, with something to try on each page.", href: "lessons/talk.html", open: "Start" },
      { icon: "🧪", title: "Colab notebook", sum: "Call a real model and turn messy text into JSON. Free with a Gemini key.", href: COLAB },
      { icon: "🎞️", title: "Slides", sum: "The deck from the session.", href: null },
      { icon: "🎥", title: "Recording", sum: "Posted here after the session.", href: null },
    ],
    parts: [
      { title: "How LLMs work", sum: "Next-word guessing, tokens, temperature and made-up answers.", href: "lessons/talk.html#1" },
      { title: "Six prompt techniques", sum: "Before and after, for each one, plus a practice page.", href: "lessons/talk.html#5" },
      { title: "Try it in code", sum: "The live demo, ready to run in Colab.", href: "lessons/talk.html#12" },
      { title: "Next steps", sum: "Pitfalls, a plan for your first week, and where to learn more.", href: "lessons/talk.html#14" },
    ],
    next: [
      { title: "Build a Tiny LLM", sum: "Write a working language model, line by line.", href: "https://gradlabs.in/learn/tiny-llm/" },
      { title: "Transformers & LLMs", sum: "How attention and transformers really work.", href: "https://gradlabs.in/learn/transformers/" },
      { title: "Build an AI Agent", sum: "Teach a model to think, use tools and get things done.", href: "https://gradlabs.in/learn/agents/" },
    ],
  },
};
