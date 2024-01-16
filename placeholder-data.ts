import { Gist } from "@/types/gists";
import { v4 as uuidv4 } from "uuid";

export const mockData: Gist[] = [
  {
    id: "1",
    name: "Fortune 500 CEO finder",
    description:
      "This gist includes details about how to find CEOs of Fortune 500 companies using LLM that has browsing feature. (OpenAI API + Keymate.AI API)",
    projectName: "choco-bot",
    isPublic: true,
    messages: [
      { id: uuidv4(), role: "user", content: "Find me fortune 500 companies" },
      {
        id: uuidv4(),
        role: "assistant1",
        content: "Sure here is the fortune 500 companies: 1.Facebook",
      },
      {
        id: uuidv4(),
        role: "assistant2",
        content:
          "The result of my fortune 500 companies search is below: 1. Amazon",
      },
      {
        id: uuidv4(),
        role: "user",
        content: "Now for the first company find it’s CEO",
      },
      { id: uuidv4(), role: "assistant1", content: "Mark Zuckerberg" },
      { id: uuidv4(), role: "assistant2", content: "Jeff Bezos" },
    ],
    maxContextWindowAssistant1: 128000,
    maxContextWindowAssistant2: 32000,
    modelAssistant1: "gpt-4-1106-preview",
    modelAssistant2: "gpt-4-32k",
    currentContextWindowAssistant1: 30,
    currentContextWindowAssistant2: 34,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Real time coffee price checker",
    description:
      "This tool provides real-time updates on coffee prices from various sources, ideal for coffee enthusiasts and industry professionals.",
    projectName: "keymate-coffee-bot",
    isPublic: true,
    messages: [
      { id: uuidv4(), role: "user", content: "Check current coffee prices" },
      {
        id: uuidv4(),
        role: "assistant1",
        content: "The current price of Arabica coffee is...",
      },
      {
        id: uuidv4(),
        role: "assistant2",
        content: "Robusta coffee prices are currently...",
      },
    ],
    maxContextWindowAssistant1: 128000,
    maxContextWindowAssistant2: 32000,
    modelAssistant1: "gpt-4-1106-preview",
    modelAssistant2: "gpt-4-32k",
    currentContextWindowAssistant1: 30,
    currentContextWindowAssistant2: 34,
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Milk chocolate brand finder",
    description:
      "This functionality helps users discover popular milk chocolate brands, tailored to their taste preferences and location.",
    projectName: "choco-bot",
    isPublic: true,
    messages: [
      {
        id: uuidv4(),
        role: "user",
        content: "Find milk chocolate brands for me",
      },
      {
        id: uuidv4(),
        role: "assistant1",
        content:
          "Some top milk chocolate brands include Lindt, Godiva, and Hershey's.",
      },
      {
        id: uuidv4(),
        role: "assistant2",
        content:
          "You might like these milk chocolate brands: Ghirardelli, Cadbury, and Milka.",
      },
    ],
    maxContextWindowAssistant1: 128000,
    maxContextWindowAssistant2: 32000,
    modelAssistant1: "gpt-4-1106-preview",
    modelAssistant2: "gpt-4-32k",
    currentContextWindowAssistant1: 30,
    currentContextWindowAssistant2: 34,
    createdAt: new Date(),
  },
];
