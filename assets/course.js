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
    parts: [
      { title: "How LLMs work", sum: "Next-word guessing, tokens, temperature and made-up answers.", href: "lessons/talk.html#1" },
      { title: "Six prompt techniques", sum: "Before and after, for each one, plus a practice page.", href: "lessons/talk.html#5" },
      { title: "Try it in code", sum: "The live demo, ready to run in Colab.", href: "lessons/talk.html#12" },
      { title: "Next steps", sum: "Pitfalls to avoid and a plan for your first week.", href: "lessons/talk.html#14" },
    ],
  },
};
