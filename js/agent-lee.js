// ◇ TAG ID: [Leeway-AgentLee-Core.initAgentLee]   COLOR: #1E90FF
function initAgentLee() {
    // Check if already initialized
    if (window.agentLeeUI) {
        console.warn('Agent Lee already initialized');
        return window.agentLeeUI;
    }
    
    // Create and store UI instance
    window.agentLeeUI = new AgentLeeUI();
    
    // Handle section change
    // Wait for page to load and navigateToPage to be defined
    setTimeout(() => {
        if (typeof navigateToPage === 'function') {
            // Take control of navigation if enabled
            if (agentLeeSettings.navigation.fullControl) {
                // Override the main navigation to route through Agent Lee
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    const onclickStr = link.getAttribute('onclick');
                    if (onclickStr && onclickStr.includes('navigateToPage')) {
                        // Extract the section name
                        const sectionMatch = /navigateToPage\(['"]([^'"]+)['"]\)/.exec(onclickStr);
                        if (sectionMatch && sectionMatch[1]) {
                            const section = sectionMatch[1];
                            
                            // Replace the onclick with Agent Lee navigation
                            link.setAttribute('onclick', `window.agentLeeUI.navigateToSection('${section}')`);
                        }
                    }
                });
            }
            
            // Get current section
            const currentSection = getCurrentSection();
            if (currentSection) {
                // Highlight active button
                document.querySelectorAll('.agent-lee-nav-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.section === currentSection);
                });
                
                // Speak section narration if this is the first load and auto announce is enabled
                if (agentLeeSettings.navigation.autoAnnounce && typeof getSectionNarration === 'function') {
                    const narration = getSectionNarration(currentSection);
                    if (narration) {
                        window.agentLeeUI.addAgentMessage(narration);
                        
                        // Speak a simpler version for first-time guidance
                        if (agentLeeSettings.voice.enabled) {
                            const welcomeSpeech = "Welcome to RapidWebDevelop! I'm Agent Lee, your interactive guide. You can control navigation with your voice by pressing the space bar or clicking the microphone button. Try saying 'go to solution' to navigate or 'help' for more instructions.";
                            speech.speak(welcomeSpeech);
                        }
                    }
                }
            }
        }
    }, 500);
    
    return window.agentLeeUI;
}

// ◇ TAG ID: [Leeway-AgentLee-Core.getCurrentSection]   COLOR: #1E90FF
function getCurrentSection() {
    // Find active section
    const activeSection = document.querySelector('.page-section.active');
    if (activeSection) {
        return activeSection.id;
    }
    return 'intro'; // Default
}

// 🔒 LINE TAG: [Leeway-AgentLee-Core.DOMContentLoaded]   COLOR: #8B0000
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure the main page has loaded
    setTimeout(initAgentLee, 1000);
});