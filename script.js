// Cricket team players data
const players = [
    {
        id: 1,
        name: "Virat Thunder",
        role: "Captain & Batsman",
        avatar: "VT",
        runs: "2847",
        wickets: "2",
        matches: 89,
        strikeRate: "142.5",
        jerseyNumber: 18,
        bestPerformance: "156* vs Lightning Strikers - Match winning knock with 12 fours and 8 sixes in the final over thriller"
    },
    {
        id: 2,
        name: "Rohit Storm",
        role: "Opening Batsman",
        avatar: "RS",
        runs: "3124",
        wickets: "0",
        matches: 95,
        strikeRate: "138.7",
        jerseyNumber: 45,
        bestPerformance: "189 vs Fire Eagles - Highest individual score in team history with 15 sixes"
    },
    {
        id: 3,
        name: "Jasprit Bolt",
        role: "Fast Bowler",
        avatar: "JB",
        runs: "234",
        wickets: "127",
        matches: 78,
        strikeRate: "95.2",
        jerseyNumber: 93,
        bestPerformance: "7/23 vs Desert Warriors - Best bowling figures including a hat-trick in the powerplay"
    },
    {
        id: 4,
        name: "MS Lightning",
        role: "Wicket Keeper",
        avatar: "MS",
        runs: "2456",
        wickets: "0",
        matches: 102,
        strikeRate: "156.8",
        jerseyNumber: 7,
        bestPerformance: "98* vs Mountain Lions - Finished the match with a six off the last ball, 6 stumpings"
    },
    {
        id: 5,
        name: "Hardik Power",
        role: "All-Rounder",
        avatar: "HP",
        runs: "1876",
        wickets: "67",
        matches: 84,
        strikeRate: "165.4",
        jerseyNumber: 33,
        bestPerformance: "87* & 4/31 vs Ocean Sharks - Perfect all-round performance in the semi-final"
    },
    {
        id: 6,
        name: "Rashid Spin",
        role: "Spin Bowler",
        avatar: "RS",
        runs: "445",
        wickets: "98",
        matches: 72,
        strikeRate: "112.3",
        jerseyNumber: 19,
        bestPerformance: "6/18 vs Valley Vipers - Career best figures with 4 wickets in one over"
    },
    {
        id: 7,
        name: "KL Flash",
        role: "Batsman",
        avatar: "KL",
        runs: "2234",
        wickets: "1",
        matches: 76,
        strikeRate: "134.6",
        jerseyNumber: 1,
        bestPerformance: "132* vs River Rapids - Anchored the innings with 11 boundaries and 4 maximums"
    },
    {
        id: 8,
        name: "Shikhar Dash",
        role: "Opening Batsman",
        avatar: "SD",
        runs: "2678",
        wickets: "0",
        matches: 91,
        strikeRate: "128.9",
        jerseyNumber: 25,
        bestPerformance: "145 vs Storm Chasers - Explosive opening partnership of 201 runs in 16 overs"
    }
];

// DOM elements
const playersGrid = document.getElementById('playersGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

// Modal elements
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalJersey = document.getElementById('modalJersey');
const modalMatches = document.getElementById('modalMatches');
const modalStrikeRate = document.getElementById('modalStrikeRate');
const modalRuns = document.getElementById('modalRuns');
const modalWickets = document.getElementById('modalWickets');
const modalBestPerformance = document.getElementById('modalBestPerformance');

// Generate player cards
function generatePlayerCards() {
    playersGrid.innerHTML = '';
    
    players.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.style.animationDelay = `${index * 0.1}s`;
        
        playerCard.innerHTML = `
            <div class="player-avatar">${player.avatar}</div>
            <h3 class="player-name">${player.name}</h3>
            <p class="player-role">${player.role}</p>
            <div class="player-stats">
                <div class="stat">
                    <div class="stat-value">${player.runs}</div>
                    <div class="stat-label">Runs</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${player.wickets}</div>
                    <div class="stat-label">Wickets</div>
                </div>
            </div>
        `;
        
        // Add click event to open modal
        playerCard.addEventListener('click', () => openModal(player));
        
        playersGrid.appendChild(playerCard);
    });
}

// Open modal with player details
function openModal(player) {
    modalAvatar.textContent = player.avatar;
    modalName.textContent = player.name;
    modalRole.textContent = player.role;
    modalJersey.textContent = player.jerseyNumber;
    modalMatches.textContent = player.matches;
    modalStrikeRate.textContent = player.strikeRate;
    modalRuns.textContent = player.runs;
    modalWickets.textContent = player.wickets;
    modalBestPerformance.textContent = player.bestPerformance;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Add entrance animation to cards
function addEntranceAnimation() {
    const cards = document.querySelectorAll('.player-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
}

// CSS animation for card entrance
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generatePlayerCards();
    setTimeout(addEntranceAnimation, 100);
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Add particle effect on card hover
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.player-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', createParticles);
    });
});

function createParticles(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: particleFloat 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0);
        }
    }
`;
document.head.appendChild(particleStyle);
