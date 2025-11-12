# AI Chatbot Setup

The chatbot now uses **OpenAI's GPT-3.5** for intelligent responses!

## Setup Instructions

### 1. Get an OpenAI API Key

1. Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)

### 2. Add the API Key

**For Local Development:**
1. Open `.env.local` in the project root
2. Add your key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```
3. Restart the dev server: `npm run dev`

**For Vercel Deployment:**
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key
4. Redeploy

### 3. Test It

Open the chatbot and try:
- "What products do you sell?"
- "I don't like how the website looks"
- "Do you have shoes?"
- Any other question!

The AI will now respond intelligently to ANY question about your store!

---

## Cost

GPT-3.5-turbo costs about **$0.002 per conversation** (very cheap). 
You can set spending limits in your OpenAI account settings.

## Without API Key

If no API key is configured, the chatbot will show a friendly fallback message and suggest requesting a live agent.

