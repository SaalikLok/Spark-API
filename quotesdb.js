const quotesdb = [
    {
        id: "001",
        body: "All's well that ends better",
        author: "JRR Tolkein",
        authorType: "Author",
        dateAdded: '2020-08-03',
        category: [{name: "Optimistic"}]
    },
    {
        id: "002",
        body: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        authorType: "Author",
        dateAdded: '2020-08-08',
        category: [{name: "Dreams"}]
    },
    {
        id: "003",
        body: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Global"}, {name: "Dreams"}]
    },
    {
        id: "004",
        body: "Sometimes you will never know the value of a moment, until it becomes a memory.",
        author: "Dr. Suess",
        authorType: "Author",
        dateAdded: '2020-08-08',
        category: [{name: "Mindfulness"}]
    },
    {
        id: "005",
        body: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
        author: "Sheryl Sandberg",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}]
    },
    {
        id: "006",
        body: "Today you are you. That is truer than true. There is no one alive who is youer than you!",
        author: "Dr. Suess",
        authorType: "Author",
        dateAdded: '2020-08-08',
        category: [{name: "Optimistic"}, {name: "Self"}]
    },
    {
        id: "007",
        body: "Our greatest glory is not in never falling, but in rising every time we fall.",
        author: "Confucius",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}, {name: "Resilience"}]
    },
    {
        id: "008",
        body: "Learn from the mistakes of others. You can't live long enough to make them all yourself",
        author: "Eleanor Roosevelt",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}, {name: "Growth"}]
    },
    {
        id: "009",
        body: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
        author: "Barack Obama",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}, {name: "Growth"}]
    },
    {
        id: "010",
        body: "When you reach the end of your rope, tie a knot and hang on.",
        author: "Abraham Lincoln",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Resilience"}]
    },
    {
        id: "011",
        body: "We can complain because rose bushes have thorns, or rejoice because thorn bushes have roses.",
        author: "Abraham Lincoln",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}]
    },
    {
        id: "012",
        body: "Don’t compare yourself with anyone in this world… if you do so, you are insulting yourself.",
        author: "Bill Gates",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Self"}]
    },
    {
        id: "013",
        body: "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
        author: "Bill Gates",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}, {name: "Growth"}]
    },
    {
        id: "014",
        body: "We got dreams and we got the right to chase ’em.",
        author: "J Cole",
        authorType: "Musician",
        dateAdded: '2020-08-08',
        category: [{name: "Dreams"}]
    },
    {
        id: "015",
        body: "To appreciate the sun, you gotta know what rain is.",
        author: "J Cole",
        authorType: "Musician",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}]
    },
    {
        id: "016",
        body: "Dare to wear the foolish clown face.",
        author: "Frank Sinatra",
        authorType: "Musician",
        dateAdded: '2020-08-08',
        category: [{name: "Optimistic"}, {name: "Self"}]
    },
    {
        id: "017",
        body: "You can’t knock on opportunity’s door and not be ready.",
        author: "Bruno Mars",
        authorType: "Musician",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}, {name: "Self"}]
    },
    {
        id: "018",
        body: "You build on failure. Use it as a stepping stone and close the door on the past. Don’t try to forget the mistakes, but don’t dwell on it.",
        author: "Johnny Cash",
        authorType: "Musician",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}, {name: "Growth"}]
    },
    {
        id: "019",
        body: "Stop acting so small. You are the universe in ecstatic motion.",
        author: "Rumi",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Optimistic"}, {name: "Self"}]
    },
    {
        id: "020",
        body: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        author: "Rumi",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Mindfulness"}, {name: "Self"}]
    },
    {
        id: "021",
        body: "Set your life on fire. Seek those who fan your flames.",
        author: "Rumi",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Optimistic"}, {name: "Growth"}]
    },
    {
        id: "022",
        body: "These pains you feel are messengers. Listen to them.",
        author: "Rumi",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}, {name: "Self"}]
    },
    {
        id: "023",
        body: "Don’t you know yet? It is your light that lights the worlds.",
        author: "Rumi",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Optimistic"}, {name: "Self"}]
    },
    {
        id: "024",
        body: "In each moment the fire rages, it will burn away a hundred veils. And carry you a thousand steps toward your goal.",
        author: "Rumi",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Dreams"}]
    },
    {
        id: "025",
        body: "Real knowledge is to know the extent of one’s ignorance.",
        author: "Confucius",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}]
    },
    {
        id: "026",
        body: "It is better to conquer yourself than to win a thousand battles. Then the victory is yours. It cannot be taken from you, not by angels or by demons, heaven or hell.",
        author: "Buddha",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Mindfulness"}, {name: "Self"}]
    },
    {
        id: "027",
        body: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
        author: "John F. Kennedy",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}]
    },
    {
        id: "028",
        body: "Gratitude for the present moment and the fullness of life now is the true prosperity.",
        author: "Eckhart Tolle",
        authorType: "Author",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}, {name: "Mindfulness"}]
    },
    {
        id: "029",
        body: "The roots of all goodness lie in the soil of appreciation for goodness.",
        author: "Dalai Lama",
        authorType: "Spiritual Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}]
    },
    {
        id: "030",
        body: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein",
        authorType: "Inventor",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}]
    },
    {
        id: "031",
        body: "Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.",
        author: "Charles Dickens",
        authorType: "Author",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}]
    },
    {
        id: "032",
        body: "A thankful heart is not only the greatest virtue, but the parent of all the other virtues.",
        author: "Cicero",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Gratitude"}]
    },
    {
        id: "033",
        body: "Study without desire spoils the memory, and it retains nothing that it takes in.",
        author: "Leonardo da Vinci",
        authorType: "Inventor",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}]
    },
    {
        id: "034",
        body: "A man who carries a cat by the tail learns something he can learn in no other way.",
        author: "Mark Twain",
        authorType: "Author",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}]
    },
    {
        id: "035",
        body: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
        author: "Benjamin Franklin",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}]
    },
    {
        id: "036",
        body: "The more that you read, the more things you will know. The more that you learn, the more places you'll go",
        author: "Dr. Suess",
        authorType: "Author",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}]
    },
    {
        id: "037",
        body: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
        author: "Abigail Adams",
        authorType: "Political Figure",
        dateAdded: '2020-08-08',
        category: [{name: "Learning"}]
    },
    {
        id: "038",
        body: "Play by the rules, but be ferocious.",
        author: "Phil Knight",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}]
    },
    {
        id: "039",
        body: "Business opportunities are like buses, there’s always another one coming.",
        author: "Richard Branson",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}]
    },
    {
        id: "040",
        body: "There’s no shortage of remarkable ideas, what’s missing is the will to execute them.",
        author: "Seth Godin",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}]
    },
    {
        id: "041",
        body: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}]
    },
    {
        id: "042",
        body: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}]
    },
    {
        id: "043",
        body: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas Edison",
        authorType: "Inventor",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}, {name: "Learning"}]
    },
    {
        id: "044",
        body: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr.",
        authorType: "Businessperson",
        dateAdded: '2020-08-08',
        category: [{name: "Growth"}]
    },
]

module.exports = {quotesdb}