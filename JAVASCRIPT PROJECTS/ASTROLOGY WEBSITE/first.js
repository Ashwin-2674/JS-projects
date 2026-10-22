// based on month size 22
    const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];
//based on date
    const compliments = [
        "You have an amazing sense of humor.",
        "Your creativity is inspiring.",
        "You light up the room with your presence.",
        "You are incredibly thoughtful.",
        "Your kindness is a breath of fresh air.",
        "You have a contagious enthusiasm for life.",
        "You always find the best solutions.",
        "You make people feel valued and appreciated.",
        "Your smile brightens everyone's day.",
        "You have a unique and wonderful perspective.",
        "You are a great listener.",
        "You bring out the best in others.",
        "Your determination is inspiring.",
        "You handle challenges with grace and courage.",
        "You are a fantastic team player.",
        "Your positive energy is infectious.",
        "You have an exceptional talent for making others laugh.",
        "Your attention to detail is impressive.",
        "You make difficult tasks look easy.",
        "You are a role model for perseverance.",
        "You have an incredible work ethic.",
        "You are a treasure to everyone who knows you.",
        "Your passion for what you do is truly admirable.",
        "You have a heart of gold.",
        "You make the world a better place just by being in it.",
        "Your optimism is refreshing.",
        "You are a fountain of wisdom and insight.",
        "You are unconditionally supportive.",
        "Your courage inspires those around you.",
        "You bring joy wherever you go.",
        "You are truly one of a kind."
      ];
      



      const victimCardCompliments = [
        "You always do good for others, even when it goes unnoticed.",
        "Your kindness is unmatched, yet people often take it for granted.",
        "You give so much to others, but rarely receive the same in return.",
        "Your heart is so big, it’s a shame not everyone appreciates it.",
        "You’re always there for everyone, even when they’re not there for you.",
        "You put others first, even when they don’t reciprocate.",
        "Your generosity knows no bounds, even when others fail to acknowledge it.",
        "You’re a true friend, even to those who don’t deserve it.",
        "You spread love and positivity, even when it isn’t returned.",
        "You always listen to others, yet your voice often goes unheard.",
        "Your loyalty is unwavering, even when it’s not appreciated.",
        "You work so hard for others, even when your efforts are overlooked.",
        "You’re always the bigger person, even when it’s not fair to you.",
        "You forgive easily, even when people don’t deserve your forgiveness.",
        "You care so deeply, even when others don’t show the same care for you.",
        "You’re always the one to make peace, even when it’s not your fault.",
        "You keep giving, even when you’re left empty-handed.",
        "You stay strong for others, even when no one checks on you.",
        "You always share your happiness, even when others don’t share theirs.",
        "You believe in the good in people, even when they let you down."
      ];
      
// array of size 30 
      const lifeRecommendations = [
        "Feed a street dog or cat and see the joy it brings.",
        "Take a long walk in nature and appreciate the beauty around you.",
        "Smile at a stranger—it might make their day.",
        "Start a gratitude journal and write three things you’re thankful for daily.",
        "Plant a tree or take care of a plant in your home.",
        "Donate clothes you no longer wear to someone in need.",
        "Call a loved one and let them know you’re thinking of them.",
        "Volunteer at a local shelter or community center.",
        "Cook a homemade meal and share it with someone.",
        "Read a book that inspires you to grow as a person.",
        "Spend a day without your phone and connect with the present moment.",
        "Learn a new skill or hobby that excites you.",
        "Help a neighbor with a small chore or task.",
        "Write a thank-you note to someone who’s made a difference in your life.",
        "Meditate for ten minutes to calm your mind and center yourself.",
        "Compliment someone sincerely—it might uplift them more than you know.",
        "Pick up litter in your local park or neighborhood.",
        "Offer to babysit or help a friend who needs a break.",
        "Spend time at an old age home and listen to their stories.",
        "Bake cookies or treats and share them with friends or coworkers.",
        "Share inspiring quotes or positive thoughts on social media.",
        "Try to learn a few words of a new language to expand your horizons.",
        "Write down your goals and take a small step towards achieving them.",
        "Spend quality time with your pet or consider adopting one.",
        "Take care of your health by drinking more water and exercising.",
        "Start a creative project like painting, writing, or crafting.",
        "Help someone carry their groceries or open a door for them.",
        "Spend a day exploring your city like a tourist.",
        "Invest time in nurturing your relationships with friends and family.",
        "Practice random acts of kindness whenever you can."
      ];
      

// size 20
      const futurePredictions = [
        "You will become a crorepati and live a life of abundance.",
        "Your hard work will lead you to incredible success soon.",
        "A dream you've been nurturing will come true this year.",
        "You will travel to your dream destination and create unforgettable memories.",
        "A surprise opportunity will bring you immense happiness and growth.",
        "You’ll make a significant positive impact on someone’s life.",
        "Financial stability and prosperity are on the horizon for you.",
        "Your talents will gain recognition and appreciation worldwide.",
        "You will find the love and companionship you deserve.",
        "You’re destined to achieve a milestone that will make you proud.",
        "A challenging time will transform into a stepping stone for greatness.",
        "You will find clarity and fulfillment in your life’s purpose.",
        "A new friendship will bring joy and valuable connections into your life.",
        "Your creativity will lead to an innovative idea that changes lives.",
        "You’ll soon enjoy the fruits of your patience and perseverance.",
        "Your health will improve, and you’ll feel more energetic and vibrant.",
        "You will receive a windfall or unexpected financial gain soon.",
        "You will inspire others with your courage and determination.",
        "A promotion or career shift will align perfectly with your aspirations.",
        "You’ll achieve a balance between work and personal happiness."
      ];
      
      document.addEventListener("DOMContentLoaded", function () {
        const submitButton = document.getElementById("submitButton");
    
        if (submitButton) {
            submitButton.addEventListener("click", function () {
                const firstName = document.getElementById("firstName").value;
                const lastName = document.getElementById("lastName").value;
                const birthDay = document.getElementById("birthDay").value;
                const birthMonth = document.getElementById("birthMonth").value;
                const birthYear = document.getElementById("birthYear").value;




                console.log(firstName,lastName,birthDay,birthMonth,birthYear)
    
                // Validate input and display result
                if (firstName && lastName && birthDay && birthMonth && birthYear) {
                    const resultDiv = document.getElementById("result");
                    if (resultDiv) {
                        resultDiv.innerHTML = `
                            <p>Hello, ${firstName} ${lastName}!</p>
                            <p>Your date of birth is ${birthDay}/${birthMonth}/${birthYear}.</p>
                            <p>Your astrological insights are on the way!</p>
                        `;
                    }
                } else {
                    alert("Please fill out all fields!");
                }
            });
        } else {
            console.error("Submit button not found in the DOM.");
        }
    });









