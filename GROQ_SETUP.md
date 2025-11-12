# Groq AI Setup (FREE!)

Your chatbot now uses **Groq** - a super-fast, FREE AI API!

## Why Groq?

- 🆓 **100% Free** - Generous free tier
- ⚡ **Super Fast** - 10x faster than OpenAI
- 🧠 **Smart** - Uses Llama 3 model
- 🔒 **No Credit Card** - Free tier doesn't require payment info
- ♾️ **High Limits** - 30 requests/minute, 14,400/day

## Setup Instructions (5 minutes)

### 1. Get Your Free API Key

1. Go to [https://console.groq.com/keys](https://console.groq.com/keys)
2. Sign up with Google/GitHub (takes 30 seconds)
3. Click **"Create API Key"**
4. Copy the key (starts with `gsk_...`)

### 2. Add API Key Locally

Open `.env.local` and add your key:

```bash
GROQ_API_KEY=gsk_your_actual_key_here
```

### 3. Add to Vercel (For Production)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **LuxeStore** project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name:** `GROQ_API_KEY`
   - **Value:** Your Groq API key
5. Click **Save**
6. Go to **Deployments** and **Redeploy**

### 4. Restart Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

### 5. Test It!

Open your chatbot and ask anything - it now uses real AI! 🎉

## How It Works

1. User sends a message
2. App checks if `GROQ_API_KEY` exists
3. If yes → Uses Groq AI for intelligent response ⚡
4. If no → Uses smart hardcoded fallback responses 💬
5. Always works, even without API key

## What's Groq Using?

- **Model:** Llama 3 8B (fast and smart)
- **Speed:** ~500 tokens/second (10x faster than OpenAI!)
- **Cost:** $0 (completely free)

## Free Tier Limits

- **30 requests per minute**
- **14,400 requests per day**
- More than enough for most sites!

## Fallback System

Without Groq API key, the chatbot still works great with professional hardcoded responses that handle:
- Product questions
- Shipping info
- Returns & refunds
- Pricing
- And more!

## Comparison

| Feature | Groq (FREE) | OpenAI (Paid) | Hardcoded Fallback |
|---------|-------------|---------------|-------------------|
| Cost | $0 | $0.002/conv | $0 |
| Speed | ⚡⚡⚡ | ⚡ | ⚡⚡⚡⚡ |
| Smart | ✅✅✅ | ✅✅✅✅ | ✅✅ |
| Setup | 5 min | 10 min + card | 0 min |
| Limits | 14.4K/day | Pay per use | Unlimited |

## Troubleshooting

**"Using fallback":**
- Check your API key is correct in `.env.local`
- Make sure you restarted the dev server
- Verify key starts with `gsk_`

**Rate limit errors:**
- Free tier: 30 req/min, 14.4K/day
- Upgrade to paid if you need more

**Still not working?**
- The fallback responses work great anyway!
- Or request a live agent for help

---

**No API key? No problem!** The chatbot works perfectly with the built-in smart responses. Groq is just an optional upgrade for even better AI conversations.

**Get your free key:** [https://console.groq.com/keys](https://console.groq.com/keys)

