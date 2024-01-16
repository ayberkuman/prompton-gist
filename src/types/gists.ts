export interface Gist {
  id: string;
  name: string;
  description: string;
  projectName: string;
  isPublic: boolean;
  messages: Message[];
  maxContextWindowAssistant1: number;
  maxContextWindowAssistant2: number;
  modelAssistant1: string;
  modelAssistant2: string;
  currentContextWindowAssistant1: number;
  currentContextWindowAssistant2: number;
  createdAt: Date;
}

export interface Message {
  id: string;
  role: "user" | "assistant1" | "assistant2";
  content: string;
}
