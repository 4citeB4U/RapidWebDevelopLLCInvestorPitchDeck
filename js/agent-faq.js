// ▸ MODULE ID: [Leeway-AgentLee-FAQ]   COLOR: #FF1493
// Agent Lee FAQ Database for RapidWebDevelop Investor Deck

// ◇ TAG ID: [Leeway-AgentLee-FAQ.faqDatabase]   COLOR: #FF1493
const faqDatabase = {
    // Voice command help
    "how do i use voice": {
        answer: "To use voice commands, click the microphone button or press and hold the space bar. You can say commands like 'go to problem', 'explain the solution', 'tell me about the market', or 'what is leeway'. I'll navigate and explain everything for you!",
        tags: ["voice", "commands", "help", "tutorial"],
        section: "intro"
    },
    
    "voice commands": {
        answer: "Here are the main voice commands you can use: 'go to [section]' to navigate (e.g., 'go to solution'), 'explain [topic]' for detailed explanations, 'tell me about [section]' for section overviews, and 'help' for assistance. Try saying 'go to problem' to see how it works!",
        tags: ["voice", "commands", "navigation", "tutorial"],
        section: "intro"
    },
    
    "how to navigate": {
        answer: "I have complete control of navigation! You can navigate in three ways: 1) Use my navigation buttons below the chat, 2) Use voice commands by pressing SPACE or clicking the microphone and saying 'go to solution', or 3) Type navigation commands like 'go to market section'. I'll guide you through each section!",
        tags: ["navigation", "tutorial", "help"],
        section: "intro"
    },
    
    "tutorial": {
        answer: "Welcome to the RapidWebDevelop presentation! I'm Agent Lee, and I have complete control of navigation. To use me effectively: Press SPACE anytime for voice commands (try 'go to solution'), use my navigation buttons below, or type questions in the text box. I'll explain our revolutionary platform and guide you through our investor deck. Need help anytime? Just say 'help'!",
        tags: ["tutorial", "help", "introduction"],
        section: "intro"
    },

    // Investor & Business Questions
    "what is rapidwebdevelop": {
        answer: "RapidWebDevelop LLC is a revolutionary platform that empowers independent artists with true ownership of their digital presence. We offer a one-time payment model that ensures artists keep 100% of their revenue, built on our proprietary LEEWAY™ standard.",
        tags: ["company", "overview", "mission"],
        section: "intro"
    },
    
    "what is the leeway standard": {
        answer: "LEEWAY™ (Logically Enhanced Web Engineering Architecture Yield) is our proprietary framework that creates modular, colorized, and AI-ready web applications. It ensures artist platforms are high-performance, SEO-maximized, and future-proof.",
        tags: ["technology", "leeway", "framework"],
        section: "solution"
    },
    
    "how much does it cost": {
        answer: "Our pricing tiers range from $399 (Essential) to $1,299+ (Ultimate), with an average selling price of $609. This is a one-time payment with no recurring platform fees - artists keep 100% of their revenue forever.",
        tags: ["pricing", "cost", "business model"],
        section: "model"
    },
    
    "revenue projections": {
        answer: "We project $157K+ revenue in Year 1 with 250+ artists, growing to over $1.7M by Year 3 with 1,920+ artists. Our gross margin is approximately 96% due to our efficient LEEWAY™ framework.",
        tags: ["revenue", "projections", "growth"],
        section: "financials"
    },
    
    "what makes you different": {
        answer: "Unlike traditional platforms that take 9-15% commissions and charge endless fees, we offer true ownership with zero ongoing costs. Artists get their platform as a single HTML file they own forever, powered by LEEWAY™ technology.",
        tags: ["differentiation", "value proposition", "competitive advantage"],
        section: "solution"
    },
    
    "investment ask": {
        answer: "We're seeking $200,000 in pre-seed funding to accelerate artist empowerment and scale our platform. This investment will fuel product development, marketing, operations, and pilot program expansion.",
        tags: ["investment", "funding", "ask"],
        section: "ask"
    },
    
    "market opportunity": {
        answer: "We're targeting 10,000-15,000 independent artists in Midwest creative hubs initially, with a growing market of artists seeking alternatives to exploitative platforms. The creator economy is ripe for disruption.",
        tags: ["market", "opportunity", "tam"],
        section: "market"
    },
    
    "team background": {
        answer: "Our leadership is spearheaded by Leonard Lee of Milwaukee, combining deep technical expertise with unwavering passion for artist advocacy. We're building a company that embodies a positive, charming outlook because we genuinely believe in the artists we serve.",
        tags: ["team", "leadership", "background"],
        section: "team"
    },
    
    // Platform & Technology Questions
    "how does the platform work": {
        answer: "We create custom digital platforms delivered as single HTML files using our LEEWAY™ standard. Artists get complete ownership, integrated monetization tools, and AI-ready architecture - all without ongoing platform fees.",
        tags: ["platform", "technology", "how it works"],
        section: "product"
    },
    
    "what features are included": {
        answer: "Our platforms include advanced music players, HD video galleries, art portfolios, integrated merch stores, digital downloads, direct music sales, events calendars, live streaming integration, and built-in analytics - all yours to keep.",
        tags: ["features", "functionality", "product"],
        section: "product"
    },
    
    "traction and progress": {
        answer: "We have LEEWAY™ v1.0 fully developed, active discussions with MARN and House of RAD, pilot programs with Backline MKE, and our core platform template ready for deployment. 50+ potential partners mapped in our AI CRM.",
        tags: ["traction", "progress", "partnerships"],
        section: "traction"
    },
    
    // Navigation & General Help
    "help": {
        answer: "I'm Agent Lee, your guide through the RapidWebDevelop investor presentation. I have complete control of navigation! Press SPACE anytime for voice commands, use my buttons below, or ask me questions. Try saying 'go to solution' or 'explain the market opportunity'. What would you like to explore?",
        tags: ["help", "navigation", "general"],
        section: "intro"
    },
    
    "navigation": {
        answer: "I have complete control of navigation! Press SPACE anytime to activate voice commands (try 'go to problem'), use my navigation buttons below, or type commands like 'show financials'. I'll guide you through each section with detailed explanations!",
        tags: ["navigation", "menu", "sections"],
        section: "intro"
    },
    
    "agent lee": {
        answer: "I'm Agent Lee, your AI guide with complete navigation control. I represent the intelligence and user experience that powers our LEEWAY™ standard. I can navigate you through sections using voice commands (press SPACE anytime), answer questions, and help you understand why RapidWebDevelop is the future of artist empowerment.",
        tags: ["agent lee", "ai", "guide"],
        section: "intro"
    }
};

// ◇ TAG ID: [Leeway-AgentLee-FAQ.voiceCommands]   COLOR: #00CED1
const voiceCommands = {
    navigation: {
        patterns: [
            /^(go to|navigate to|show me|take me to|open)\s+(.+)$/i,
            /^(show|display)\s+(.+)\s+(section|page)$/i,
            /^(.+)\s+(section|page)$/i
        ],
        sections: {
            'intro': ['intro', 'introduction', 'home', 'start', 'beginning'],
            'problem': ['problem', 'problems', 'issues', 'pain points'],
            'solution': ['solution', 'solutions', 'our solution', 'approach'],
            'product': ['product', 'products', 'features', 'platform'],
            'market': ['market', 'opportunity', 'market opportunity'],
            'model': ['model', 'business model', 'business', 'revenue model'],
            'traction': ['traction', 'progress', 'milestones', 'achievements'],
            'team': ['team', 'leadership', 'about us', 'founders'],
            'financials': ['financials', 'financial', 'numbers', 'revenue', 'projections'],
            'ask': ['ask', 'investment', 'funding', 'investment ask'],
            'downloads': ['downloads', 'download', 'resources', 'materials']
        }
    },
    explanation: {
        patterns: [
            /^(explain|tell me about|describe|what is|what are)\s+(.+)$/i,
            /^(how does|how do)\s+(.+)\s+(work|function)$/i,
            /^(what's|what is)\s+(.+)$/i
        ]
    },
    general: {
        patterns: [
            /^(help|tutorial|how to use|how do i|instructions)$/i,
            /^(voice commands|voice|commands)$/i,
            /^(navigation|navigate|how to navigate)$/i
        ]
    }
};

// ◇ TAG ID: [Leeway-AgentLee-FAQ.findBestMatch]   COLOR: #FF1493
function findBestMatch(userInput) {
    const input = userInput.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;
    
    // → SUB-TAG: [Leeway-AgentLee-FAQ.findBestMatch.KeywordMatching]   COLOR: #FFD700
    Object.keys(faqDatabase).forEach(key => {
        const faq = faqDatabase[key];
        let score = 0;
        
        // Check direct key match
        if (input.includes(key)) {
            score += 10;
        }
        
        // Check tag matches
        faq.tags.forEach(tag => {
            if (input.includes(tag)) {
                score += 5;
            }
        });
        
        // Check partial matches in key
        const keyWords = key.split(' ');
        keyWords.forEach(word => {
            if (input.includes(word)) {
                score += 2;
            }
        });
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = { key, ...faq };
        }
    });
    
    return bestMatch;
}

// ◇ TAG ID: [Leeway-AgentLee-FAQ.parseVoiceCommand]   COLOR: #00CED1
function parseVoiceCommand(transcript) {
    const input = transcript.toLowerCase().trim();
    
    // → SUB-TAG: [Leeway-AgentLee-FAQ.parseVoiceCommand.NavigationCheck]   COLOR: #FFD700
    // Check for navigation commands
    for (const pattern of voiceCommands.navigation.patterns) {
        const match = pattern.exec(input);
        if (match) {
            const targetText = match[2] || match[1];
            
            // Find matching section
            for (const [sectionId, keywords] of Object.entries(voiceCommands.navigation.sections)) {
                if (keywords.some(keyword => targetText.includes(keyword))) {
                    return {
                        type: 'navigation',
                        section: sectionId,
                        originalText: transcript
                    };
                }
            }
        }
    }
    
    // → SUB-TAG: [Leeway-AgentLee-FAQ.parseVoiceCommand.ExplanationCheck]   COLOR: #FFD700
    // Check for explanation commands
    for (const pattern of voiceCommands.explanation.patterns) {
        const match = pattern.exec(input);
        if (match) {
            return {
                type: 'explanation',
                topic: match[2] || match[1],
                originalText: transcript
            };
        }
    }
    
    // → SUB-TAG: [Leeway-AgentLee-FAQ.parseVoiceCommand.GeneralCheck]   COLOR: #FFD700
    // Check for general help commands
    for (const pattern of voiceCommands.general.patterns) {
        if (pattern.test(input)) {
            return {
                type: 'general',
                command: input,
                originalText: transcript
            };
        }
    }
    
    // Default to explanation attempt
    return {
        type: 'question',
        query: transcript,
        originalText: transcript
    };
}

// ◇ TAG ID: [Leeway-AgentLee-FAQ.getContextualResponses]   COLOR: #FF1493
function getContextualResponses(currentSection) {
    const responses = [];
    
    Object.keys(faqDatabase).forEach(key => {
        const faq = faqDatabase[key];
        if (faq.section === currentSection) {
            responses.push({
                question: key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, l => l.toUpperCase()),
                answer: faq.answer,
                tags: faq.tags
            });
        }
    });
    
    return responses;
}

// ◇ TAG ID: [Leeway-AgentLee-FAQ.getSectionNarration]   COLOR: #FF1493
function getSectionNarration(sectionId) {
    const narrations = {
        "intro": "Welcome, esteemed investor! I'm Agent Lee, your interactive guide with complete navigation control. I can navigate for you using voice commands - just press SPACE or click the microphone and say 'go to solution' or 'explain the market'. You can also use my navigation buttons below or ask me any questions. We're not just building websites - we're liberating artists with our LEEWAY™ standard, creating strong deals and positive outcomes for everyone involved.",
        
        "problem": "Let's examine the harsh reality artists face today. Traditional platforms are financial parasites - taking 9-15% commissions, charging endless fees, and controlling artist data. They profit from artist struggle while creators barely survive. Press SPACE and say 'explain the platform fees' or use voice command 'tell me about artist problems' to dive deeper into this $50+ billion problem we're solving.",
        
        "solution": "Our solution is revolutionary: true ownership through LEEWAY™ technology. We deliver complete digital platforms as single HTML files that artists own forever. No recurring fees, no revenue cuts, no platform dependency. Press SPACE and say 'what is LEEWAY' or 'explain true ownership' to understand how this creates a strong, transparent deal for artists and investors alike.",
        
        "product": "The LEEWAY™ platform includes everything artists need: music players, video galleries, e-commerce integration, analytics, and more. We deliver this through AI-assisted development with collaborative refinement. It's digital sovereignty for creators, beautifully packaged and efficiently delivered. Press SPACE and try 'show me the features' or 'go to market' to continue.",
        
        "market": "Artists are demanding change, and we're positioned to lead it. Our initial market of 10,000-15,000 Midwest artists represents immediate opportunity, scaling globally. We're the leader artists have been waiting for - offering the strong deal and positive vision they deserve. Press SPACE and ask about 'market size' or say 'go to business model' to see our strategy.",
        
        "model": "Our business model is elegant: we profit through artist prosperity, not exploitation. With 96% gross margins and scalable LEEWAY™ framework, we grow as artists succeed. This alignment creates sustainable value for all stakeholders. Press SPACE and try 'explain revenue model' or say 'go to traction' to see our progress.",
        
        "traction": "We're not just conceptualizing - we're building real partnerships. MARN, House of RAD, and Backline MKE see our value. Our LEEWAY™ technology is production-ready, pilot programs are launching, and our AI CRM tracks 50+ potential partners. The momentum is strong and growing. Press SPACE and ask 'what partnerships' or say 'go to team'.",
        
        "team": "Led by Leonard Lee's technical vision and artist advocacy, we're building more than a company - we're leading a movement. Our team embodies the positive, charming outlook we promise because we genuinely believe in empowering artists and creating fair deals. Press SPACE and say 'tell me about Leonard' or 'go to financials'.",
        
        "financials": "The numbers tell a compelling story: $157K+ Year 1 revenue, 96% gross margins, and clear profitability path. We project 3-5x investor returns while empowering thousands of artists. This isn't just good business - it's profitable justice for creators. Press SPACE and ask about 'revenue projections' or say 'go to ask'.",
        
        "ask": "We're seeking $200,000 to accelerate the artist revolution. This investment fuels technology development, market expansion, and pilot programs proving our model. Join us in building a future where artists thrive, platforms serve creators, and investors profit from positive change. Press SPACE and try 'investment details' or say 'go to downloads'.",
        
        "downloads": "Here you can access our complete business plan and LEEWAY™ documentation. These materials detail our technology, market strategy, and vision for transforming the creator economy. Press SPACE and use voice commands like 'explain LEEWAY documentation' or navigate back to any section for deeper exploration. Thank you for considering this opportunity!"
    };
    
    return narrations[sectionId] || "I'm ready to help you explore this section. Press SPACE anytime to use voice commands like 'explain this section' or navigate using 'go to [section name]'.";
}

// ◇ TAG ID: [Leeway-AgentLee-FAQ.getWelcomeMessage]   COLOR: #FF1493
function getWelcomeMessage() {
    return `🎯 Welcome to RapidWebDevelop! I'm Agent Lee, your interactive guide with complete navigation control.

🎤 **Voice Control**: Press SPACE or click the microphone and try:
   • "Go to solution" - I'll navigate to any section
   • "Explain the market" - Get detailed explanations  
   • "Tell me about LEEWAY" - Learn about our technology

🧭 **Navigation**: I control all navigation! Use my buttons below or voice commands like "go to problem"

💬 **Ask Questions**: Type or speak any questions about our platform, technology, or investment opportunity

Ready to explore how we're revolutionizing the creator economy? Press SPACE and try saying "go to problem" to start!`;
}

// 🔒 LINE TAG: [Leeway-AgentLee-FAQ.ExportGlobals]   COLOR: #8B0000
if (typeof window !== 'undefined') {
    window.faqDatabase = faqDatabase;
    window.voiceCommands = voiceCommands;
    window.findBestMatch = findBestMatch;
    window.parseVoiceCommand = parseVoiceCommand;
    window.getContextualResponses = getContextualResponses;
    window.getSectionNarration = getSectionNarration;
    window.getWelcomeMessage = getWelcomeMessage;
}