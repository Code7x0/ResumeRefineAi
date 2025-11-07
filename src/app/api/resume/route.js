import { GoogleGenerativeAI } from "@google/generative-ai";
import pdfParse from "pdf-parse";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const resumeFile = formData.get("resume");
    const jobDescription = formData.get("jobDescription") || "";

    if (!resumeFile) {
      return new Response(JSON.stringify({ error: "No resume uploaded" }), {
        status: 400,
      });
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const parsed = await pdfParse(buffer);
    const resumeText = parsed.text;

    let prompt = `
You are a resume analysis assistant. Analyze the following resume and return ONLY valid JSON.

{
  "jobApplicantName": string,
  "matchScore": number,
  "keywordMetrics": [
    {
      "keyword": string,
      "matchPercent": number,
      "suggestion": string
    }
  ],
  "breakdowns": [
    { "title": "Skills", "percentage": number },
    { "title": "Experience", "percentage": number },
    { "title": "Education", "percentage": number }
  ],
  "suggestions": [
    {
      "title": string,
      "description": string,
      "priority": "High" | "Medium" | "Low",
      "type": "Add" | "Edit" | "Delete"
    }
  ],
  "strengths": [
    { "title": string }
  ]
}

Resume:
${resumeText}
`;

    if (jobDescription) {
      prompt += `\nJob Description:\n${jobDescription}\n\nCompare resume to job description when scoring.`;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent([{ text: prompt }]);
    const text = result.response.text();

    const match = text.match(/\{[\s\S]*\}/);
    if (!match) {
      return new Response(
        JSON.stringify({ error: "No JSON found in Gemini response" }),
        { status: 500 }
      );
    }

    const json = JSON.parse(match[0]);

    return new Response(JSON.stringify(json), { status: 200 });

  } catch (err) {
    console.error("Resume error:", err);
    return new Response(
      JSON.stringify({ error: "Error processing resume" }),
      { status: 500 }
    );
  }
}
