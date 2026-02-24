// import { GoogleGenAI } from "@google/genai";

// export const ai=new GoogleGenAI({
//     apiKey:process.env.GEMINI_API_KEY
// })

import Bytez from "bytez.js";

const ai = new Bytez(process.env.BYTEZ_API_KEY);

export default ai;

