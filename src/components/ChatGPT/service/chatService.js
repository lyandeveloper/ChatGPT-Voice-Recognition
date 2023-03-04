import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_CHAT_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const chatService = {
    callGpt: async (transcript) => {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: transcript || "Olá!" }]
        }); 

        return response.data.choices[0].message.content;
    }
}