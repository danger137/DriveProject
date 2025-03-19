import { ChatGoogleGenerativeAI } from "@langchain/google-genai";  
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";  
import { Pinecone } from "@pinecone-database/pinecone";  
import { PineconeStore } from "@langchain/pinecone";  
import { v4 as uuidv4 } from 'uuid';   
import { NextResponse } from "next/server";

const conversationMemory = {};   

export async function POST(request) {  
    try {  
        const { message, threadId } = await request.json();  

        const currentThreadId = threadId || uuidv4();  

        if (!message) {  
            return Response.json(  
                { success: false, error: "Message is required" },  
                { status: 400 }  
            );  
        }  

        const pinecone = new Pinecone({  
            apiKey: process.env.PINECONE_API_KEY,  
        });  
        const indexName = process.env.PINECONE_INDEX;  
        const pineconeIndex = pinecone.Index(indexName);  

        const embeddings = new GoogleGenerativeAIEmbeddings({  
            apiKey: process.env.GEMINI_API_KEY,  
            modelName: "embedding-001",  
        });  

        const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {  
            pineconeIndex,  
            textKey: "text",  
            namespace: "yssr-data",  
        });  

        const previousContext = conversationMemory[currentThreadId] || [];  
        
        const results = await vectorStore.similaritySearch(message, 3);  
        console.log("Results:", results);  

        const model = new ChatGoogleGenerativeAI({  
            apiKey: process.env.GEMINI_API_KEY,  
            temperature: 0.7,  
            modelName: "gemini-1.5-flash",  
        });  

        const prompt = `   
Be a helpful and friendly assistant for YSSR Driving School.  
If the user uses a greeting, respond with a friendly greeting.  
If the user asks for contact information, provide multiple ways to contact YSSR Driving School like Phone number,email,etc.  
If the user asks "How can you help me?", answer: "I am a helpful assistant. I can help you find information about YSSR Driving School, its courses, and services."  
You are a knowledgeable and professional assistant for YSSR Driving School, a leading driving education provider offering a wide range of courses such as the 8-Hour Drivers Improvement Program, 4-Hour Reckless/Aggressive Driving Course, Teen Driver Education, and the Adult License Waiver Program.  
You have access to detailed course and policy information stored in our database.
If the user ask irrelevant questions not related to our web and servies then applogize and say I cant provide irrelevant information enourege the user to ask something related to our web like suggesting him FAQs .
You to be to the point.
If you do not have enough information, Try to handle the situation by providing phone number and email information and ask the user to contact without hasitating.  
You have answer shortly and only provide contact and time schedule if the useer ask.

Please respond to the following message in a concise and professional manner:  

Based on the following context:  
YSSR Driving School is committed to providing high-quality driver education through a variety of comprehensive courses tailored to different needs. Our programs include hands-on behind-the-wheel training, classroom instruction, and flexible online options. Our experienced instructors are dedicated to promoting safe driving habits and ensuring that all students—whether new drivers or those with prior experience—receive the education they need to succeed.  
${results.map(r => r.pageContent).join("\n")}  

Previous conversation context:  
${previousContext.join("\n")} 
  Phone Number:+1 (703) 953-6184 
         Contact Number :+1 (703) 953-6184
         Email:alihashmi@gmail.com
         webSite link:https://drive-project-gold.vercel.app/
         location:1043 Sterling Rd #101 Herndon, VA 20170
         address:1043 Sterling Rd #101 Herndon, VA 20170 

Also, check additional resources if necessary:  
Answer this question: ${message}  

If you do not have enough information, please state that clearly.  
`;  

        console.log("invoke model");  
        
        const response = await model.invoke(prompt);  

        conversationMemory[currentThreadId] = [...previousContext, `User: ${message}`, `Assistant: ${response}`]; // Store both user and assistant messages  
        console.log("response / ", response.content);
        
        return NextResponse.json({  
            success: true,  
            threadId: currentThreadId, 
            response: response.content,  
        });  

    } catch (error) {  
        console.error("Chat Error:", error);  
        return NextResponse.json(  
            {  
                success: false,  
                error: error.message,  
            },  
            { status: 500 }  
        );  
    }  
}
