// ... All other functions remain the same ...

function updateNumerologyMeaning(destinyNumber, lifePathNumber, soulNumber) {
    const meaningElement = document.getElementById('numerologyMeaning');
    if (!meaningElement) return;

    const meanings = {
        1: {
            destiny: "a born leader, paving the way with courage and innovation. You thrive in roles that demand independence and initiative, always pushing boundaries.",
            lifePath: "meant to inspire and guide others. Challenges are stepping stones for you, shaping a trailblazing spirit.",
            soul: "driven by originality, ambition, and the desire to make a lasting mark on the world."
        },
        2: {
            destiny: "a harmonious force, bringing people together through empathy and diplomacy. You shine in partnerships and collaborative spaces.",
            lifePath: "meant to nurture peace and balance, often acting as the emotional anchor in relationships.",
            soul: "drawn to unity, emotional depth, and the quiet strength of support."
        },
        3: {
            destiny: "an expressive soul, destined to share joy and creativity. You light up rooms and hearts through communication, art, or humor.",
            lifePath: "meant to uplift others with positivity and imagination, living life as a celebration.",
            soul: "craves beauty, connection, and self-expression in all its forms."
        },
        4: {
            destiny: "the architect of dreams, turning visions into reality with structure and discipline. You thrive on responsibility and loyalty.",
            lifePath: "calls you to build strong foundations in both career and relationships.",
            soul: "seeks stability, order, and tangible results that benefit others."
        },
        5: {
            destiny: "a free spirit and adventurer, drawn to change, travel, and unconventional paths. You’re here to experience life fully.",
            lifePath: "about embracing freedom and inspiring others through adaptability.",
            soul: "yearns for excitement, diversity, and the thrill of the unknown."
        },
        6: {
            destiny: "a nurturer and healer, providing love, support, and protection. Your heart leads, especially in family and community.",
            lifePath: "meant to restore harmony and care deeply for others.",
            soul: "vibrates with compassion, selflessness, and a desire to serve."
        },
        7: {
            destiny: "a seeker of truth, diving deep into mysteries of life and spirit. You're introspective, analytical, and wise beyond years.",
            lifePath: "calls you to pursue knowledge and inner peace.",
            soul: "craves solitude, spiritual connection, and deeper understanding."
        },
        8: {
            destiny: "a powerhouse of ambition and success. You’re meant to master material wealth and use it for greater good.",
            lifePath: "involves overcoming challenges to achieve influence and legacy.",
            soul: "drawn to leadership, achievement, and purposeful authority."
        },
        9: {
            destiny: "a compassionate old soul, called to serve humanity. You inspire through kindness, wisdom, and global thinking.",
            lifePath: "about completion, forgiveness, and leaving a meaningful impact.",
            soul: "resonates with altruism, universal love, and emotional depth."
        }
    };

    const meaning = `
        <div class="mystical-reading">
            <p class="destiny-text">
                ✧ Your Destiny Number ${destinyNumber} reveals you as ${meanings[destinyNumber].destiny}
            </p>
            
            <p class="life-path-text">
                ✧ Walking the Life Path of ${lifePathNumber}, you are ${meanings[lifePathNumber].lifePath}
            </p>
            
            <p class="soul-text">
                ✧ Your Soul Number ${soulNumber} whispers that you are ${meanings[soulNumber].soul}
            </p>
            
            <div class="synthesis">
                <h4>✧ Mystical Synthesis ✧</h4>
                <p>
                    These three numbers form your cosmic fingerprint. Your destiny (${destinyNumber}) gives you outer purpose, 
                    your life path (${lifePathNumber}) guides your journey, and your soul number (${soulNumber}) reveals your inner essence.
                </p>
            </div>
        </div>
    `;

    meaningElement.innerHTML = meaning;
}
