// course.js — everything that belongs to this webinar only.
// The shared look and features come from study-notebook-design (loaded after this file).
// A webinar has ONE talk page (lessons/talk.html) whose parts are the parts of the talk.

const COURSE_LESSONS = [
  { n: 1, step: "the talk", title: "Generative AI & Prompt Engineering", file: "talk.html", ready: true,
    summary: "Everything from the live session, one part per screen.", leaves: null },
];

const COLAB = "https://colab.research.google.com/github/mo-ri-ch/genai-webinar/blob/main/notebooks/genai_webinar_demo.ipynb";

// Tap-to-explain words for this webinar's code (the shared list is in codewalk.js)
window.PYWORDS_EXTRA = {
  "json": { what: "Python's built-in tools for JSON text.", ex: "import json\nprint(json.loads('[1, 2]'))", out: "[1, 2]" },
  "loads": { what: "Turns JSON text into Python data (a dictionary or a list).", ex: "data = json.loads('{\"urgency\": \"high\"}')\nprint(data[\"urgency\"])", out: "high" },
  "f": { what: "Makes an f-string: text with {slots} that Python fills in.", ex: "name = \"Priya\"\nprint(f\"Hi {name}!\")", out: "Hi Priya!" },
  "ask": { what: "A small helper in the notebook: sends instructions and a message to the model, and returns its reply as text.", ex: "reply = ask(\"Be brief.\", \"Say hi\")\nprint(reply)", out: "Hi!   (the model's answer)" },
  "clean": { what: "A small helper in the notebook: removes the ```json fences some models put around their answer.", ex: "print(clean(\"```json\\n{}\\n```\"))", out: "{}" },
  "upper": { what: "Gives the same text in capital letters.", ex: "print(\"hi\".upper())", out: "HI" },
};

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
      { title: "Next steps", sum: "Pitfalls to avoid and a plan for your first week.", href: "lessons/talk.html#15" },
    ],
  },
};
