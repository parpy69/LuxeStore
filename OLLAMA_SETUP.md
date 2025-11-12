# Ollama AI Setup (100% Free)

The chatbot can use **Ollama** for truly intelligent responses without any API costs!

## What is Ollama?

Ollama runs AI models locally on your computer - completely free, no API keys needed.

## Setup Instructions

### 1. Install Ollama

**Mac/Linux:**
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

**Windows:**
Download from [https://ollama.com/download](https://ollama.com/download)

### 2. Download an AI Model

```bash
# Recommended: Llama 2 (fast and smart)
ollama pull llama2

# Or try other models:
ollama pull mistral      # Faster, smaller
ollama pull llama3       # More advanced
```

### 3. Run Ollama

```bash
ollama serve
```

This starts Ollama on `http://localhost:11434`

### 4. Test Your Chatbot

1. Start your Next.js dev server: `npm run dev`
2. Open the chatbot on your site
3. Ask any question - it now uses AI!

The chatbot will automatically:
- ✅ Use Ollama if it's running (smart AI responses)
- ✅ Fall back to hardcoded responses if Ollama isn't available
- ✅ Always work, even without Ollama

## How It Works

1. User sends a message
2. App checks if Ollama is running on `localhost:11434`
3. If yes → Uses Ollama for intelligent response
4. If no → Uses smart hardcoded fallback responses
5. Always provides a helpful answer

## Benefits

- 🆓 **100% Free** - No API costs ever
- 🔒 **Private** - Everything runs locally
- ⚡ **Fast** - Responses in 1-2 seconds
- 🧠 **Smart** - Actual AI, not just pattern matching
- 🔄 **Works Offline** - No internet needed after setup

## Deploy to Production

For production (Vercel), the chatbot uses the smart fallback responses since Ollama runs locally. 

If you want AI in production, you'd need to:
1. Host Ollama on a server (Railway, DigitalOcean, etc.)
2. Update the API endpoint in `app/api/chat/route.ts`

Or keep it simple - the fallback responses are already very good!

## Troubleshooting

**"Ollama not available":**
- Make sure Ollama is running: `ollama serve`
- Check it's on port 11434: `curl http://localhost:11434`

**Slow responses:**
- Try a smaller model: `ollama pull mistral`
- Or use the fast fallback responses

---

**No Ollama? No problem!** The chatbot works great with the built-in smart responses.

