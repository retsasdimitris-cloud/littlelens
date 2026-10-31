const curatedTitles = [
  { title: "Bluey", type: "series", maker: "Ludo Studio · Animated", age: 3, rating: "TV-Y", tags: ["Kindness", "Family life"], color: "#76a99d", mark: "B" },
  { title: "Mario Kart 8 Deluxe", type: "game", maker: "Nintendo · Racing", age: 3, rating: "ESRB E", tags: ["Friendly competition", "Cartoon action"], color: "#db7052", mark: "M" },
  { title: "Finding Nemo", type: "movie", maker: "Pixar · Animation", age: 6, rating: "MPA PG", tags: ["Family separation", "Peril"], color: "#4e9ba7", mark: "N" },
  { title: "The Wild Robot", type: "book", maker: "Peter Brown · Novel", age: 8, rating: "Reading guide", tags: ["Belonging", "Animal peril"], color: "#84986c", mark: "W" },
  { title: "Inside Out 2", type: "movie", maker: "Pixar · Animation", age: 8, rating: "MPA PG", tags: ["Anxiety", "Growing up"], color: "#dd8a65", mark: "2" },
  { title: "Minecraft", type: "game", maker: "Mojang · Sandbox", age: 7, rating: "ESRB E10+", tags: ["Online play", "Fantasy combat"], color: "#729365", mark: "▦" },
  { title: "Paddington 2", type: "movie", maker: "StudioCanal · Comedy", age: 6, rating: "MPA PG", tags: ["Mild peril", "Kindness"], color: "#d38c56", mark: "P" },
  { title: "The Wild Robot", type: "movie", maker: "DreamWorks · Animation", age: 8, rating: "MPA PG", tags: ["Family separation", "Peril"], color: "#677f69", mark: "W" },
  { title: "Pokémon Scarlet", type: "game", maker: "Game Freak · Adventure", age: 7, rating: "ESRB E", tags: ["Fantasy battles", "Online features"], color: "#c95f4c", mark: "P" },
  { title: "The Lion, the Witch and the Wardrobe", type: "book", maker: "C. S. Lewis · Fantasy", age: 9, rating: "Reading guide", tags: ["Fantasy violence", "Sacrifice"], color: "#788655", mark: "L" },
  { title: "Moana", type: "movie", maker: "Disney · Animation", age: 7, rating: "MPA PG", tags: ["Ocean peril", "Family themes"], color: "#57968c", mark: "M" },
  { title: "Avatar: The Last Airbender", type: "series", maker: "Nickelodeon · Animation", age: 8, rating: "TV-Y7", tags: ["Fantasy action", "Loss"], color: "#6c9a9d", mark: "A" },
  { title: "Toy Story", type: "movie", maker: "Pixar · Animation", age: 6, rating: "MPA G", tags: ["Mild peril", "Friendship"], color: "#61a0a0", mark: "T" },
  { title: "Stardew Valley", type: "game", maker: "ConcernedApe · Farming sim", age: 10, rating: "ESRB E10+", tags: ["Mild language", "Life themes"], color: "#83a46c", mark: "✳" },
  { title: "Percy Jackson and the Lightning Thief", type: "book", maker: "Rick Riordan · Fantasy", age: 9, rating: "Reading guide", tags: ["Mythical violence", "Family"], color: "#4c8d9a", mark: "P" },
  { title: "Encanto", type: "movie", maker: "Disney · Animation", age: 6, rating: "MPA PG", tags: ["Family pressure", "Peril"], color: "#b47a91", mark: "E" },
  { title: "The Great British Bake Off", type: "series", maker: "Love Productions · Reality", age: 6, rating: "TV-PG", tags: ["Competition", "Gentle humor"], color: "#c68b66", mark: "B" },
  { title: "The Hobbit", type: "book", maker: "J. R. R. Tolkien · Fantasy", age: 11, rating: "Reading guide", tags: ["Fantasy violence", "Scary scenes"], color: "#73834e", mark: "H" },
  { title: "LEGO Star Wars: The Skywalker Saga", type: "game", maker: "TT Games · Adventure", age: 7, rating: "ESRB E10+", tags: ["Cartoon combat", "Co-op play"], color: "#dfae52", mark: "★" },
  { title: "The Baby-Sitters Club", type: "series", maker: "Netflix · Family drama", age: 8, rating: "TV-G", tags: ["Friendship", "Growing up"], color: "#e08e70", mark: "B" },
  { title: "Coraline", type: "book", maker: "Neil Gaiman · Fantasy", age: 11, rating: "Reading guide", tags: ["Creepy imagery", "Peril"], color: "#577d7a", mark: "C" },
  { title: "The Incredibles", type: "movie", maker: "Pixar · Animation", age: 8, rating: "MPA PG", tags: ["Action violence", "Peril"], color: "#c95848", mark: "i" },
  { title: "Animal Crossing: New Horizons", type: "game", maker: "Nintendo · Life sim", age: 3, rating: "ESRB E", tags: ["Online interactions", "Creativity"], color: "#83aa89", mark: "A" },
  { title: "Harry Potter and the Sorcerer's Stone", type: "book", maker: "J. K. Rowling · Fantasy", age: 9, rating: "Reading guide", tags: ["Magic", "Fantasy peril"], color: "#887b59", mark: "H" },
  { title: "Wednesday", type: "series", maker: "Netflix · Mystery", age: 14, rating: "TV-14", tags: ["Horror imagery", "Violence"], color: "#67596c", mark: "W" },
  { title: "Fortnite", type: "game", maker: "Epic Games · Battle royale", age: 13, rating: "ESRB T", tags: ["Online chat", "Fantasy violence"], color: "#737c9b", mark: "F" },
  { title: "The Hunger Games", type: "book", maker: "Suzanne Collins · Dystopian", age: 13, rating: "Reading guide", tags: ["Violence", "Survival themes"], color: "#8b6754", mark: "H" },
  { title: "Jurassic Park", type: "movie", maker: "Universal · Adventure", age: 12, rating: "MPA PG-13", tags: ["Intense peril", "Scary scenes"], color: "#687b4d", mark: "J" },
  { title: "Stranger Things", type: "series", maker: "Netflix · Sci-fi", age: 14, rating: "TV-14", tags: ["Horror", "Violence"], color: "#a8483f", mark: "S" },
  { title: "Coco", type: "movie", maker: "Pixar · Animation", age: 8, rating: "MPA PG", tags: ["Family", "Loss"], color: "#ce8054", mark: "C" },
  { title: "My Neighbor Totoro", type: "movie", maker: "Studio Ghibli · Animation", age: 5, rating: "MPA G", tags: ["Family", "Mild peril"], color: "#6d9a79", mark: "T" },
  { title: "Ratatouille", type: "movie", maker: "Pixar · Animation", age: 6, rating: "MPA G", tags: ["Creativity", "Mild peril"], color: "#b64e49", mark: "R" },
  { title: "The Mitchells vs. the Machines", type: "movie", maker: "Sony Pictures · Animation", age: 8, rating: "MPA PG", tags: ["Family themes", "Cartoon action"], color: "#6e8b9d", mark: "M" },
  { title: "Spider-Man: Into the Spider-Verse", type: "movie", maker: "Sony Pictures · Animation", age: 10, rating: "MPA PG", tags: ["Action violence", "Growing up"], color: "#bd554d", mark: "S" },
  { title: "Zootopia", type: "movie", maker: "Disney · Animation", age: 8, rating: "MPA PG", tags: ["Peril", "Friendship"], color: "#719a83", mark: "Z" },
  { title: "The Princess Bride", type: "movie", maker: "20th Century · Adventure", age: 10, rating: "MPA PG", tags: ["Fantasy violence", "Gentle humor"], color: "#89915d", mark: "P" },
  { title: "WALL-E", type: "movie", maker: "Pixar · Animation", age: 6, rating: "MPA G", tags: ["Peril", "Kindness"], color: "#d3a458", mark: "W" },
  { title: "Puffin Rock", type: "series", maker: "Cartoon Saloon · Animation", age: 3, rating: "TV-Y", tags: ["Kindness", "Family life"], color: "#78a79a", mark: "P" },
  { title: "Hilda", type: "series", maker: "Silvergate · Animation", age: 7, rating: "TV-Y7", tags: ["Fantasy peril", "Friendship"], color: "#7894a0", mark: "H" },
  { title: "Gravity Falls", type: "series", maker: "Disney · Animation", age: 9, rating: "TV-Y7", tags: ["Creepy imagery", "Gentle humor"], color: "#8f8961", mark: "G" },
  { title: "The Blue Planet II", type: "series", maker: "BBC · Nature documentary", age: 8, rating: "TV-G", tags: ["Animal peril", "Science topics"], color: "#548c9e", mark: "B" },
  { title: "The Good Place", type: "series", maker: "NBC · Comedy", age: 13, rating: "TV-14", tags: ["Difficult themes", "Gentle humor"], color: "#83a283", mark: "G" },
  { title: "The Dragon Prince", type: "series", maker: "Wonderstorm · Fantasy", age: 10, rating: "TV-Y7", tags: ["Fantasy action", "Loss"], color: "#788b64", mark: "D" },
  { title: "Anne with an E", type: "series", maker: "CBC · Family drama", age: 12, rating: "TV-PG", tags: ["Growing up", "Difficult themes"], color: "#b17867", mark: "A" },
  { title: "Our Planet", type: "series", maker: "Silverback Films · Nature documentary", age: 10, rating: "TV-PG", tags: ["Animal peril", "Difficult themes"], color: "#619782", mark: "O" },
  { title: "Super Mario Bros. Wonder", type: "game", maker: "Nintendo · Platformer", age: 6, rating: "ESRB E", tags: ["Cartoon action", "Creativity"], color: "#da7351", mark: "M" },
  { title: "The Legend of Zelda: Tears of the Kingdom", type: "game", maker: "Nintendo · Adventure", age: 12, rating: "ESRB E10+", tags: ["Fantasy combat", "Fantasy peril"], color: "#8d9b6d", mark: "Z" },
  { title: "Splatoon 3", type: "game", maker: "Nintendo · Team shooter", age: 10, rating: "ESRB E10+", tags: ["Cartoon combat", "Online chat"], color: "#df765b", mark: "S" },
  { title: "Rocket League", type: "game", maker: "Psyonix · Sports", age: 7, rating: "ESRB E", tags: ["Friendly competition", "Online play"], color: "#5888a8", mark: "R" },
  { title: "Kirby and the Forgotten Land", type: "game", maker: "Nintendo · Adventure", age: 7, rating: "ESRB E10+", tags: ["Cartoon action", "Co-op play"], color: "#d786a3", mark: "K" },
  { title: "Portal 2", type: "game", maker: "Valve · Puzzle", age: 10, rating: "ESRB E10+", tags: ["Creativity", "Gentle humor"], color: "#7b9b9e", mark: "P" },
  { title: "Overcooked! All You Can Eat", type: "game", maker: "Team17 · Co-op cooking", age: 7, rating: "ESRB E", tags: ["Co-op play", "Competition"], color: "#dfa963", mark: "O" },
  { title: "Celeste", type: "game", maker: "Extremely OK Games · Platformer", age: 12, rating: "ESRB E10+", tags: ["Anxiety", "Growing up"], color: "#7188a9", mark: "C" },
  { title: "Charlotte's Web", type: "book", maker: "E. B. White · Children's novel", age: 8, rating: "Reading guide", tags: ["Animal peril", "Loss"], color: "#82966c", mark: "C" },
  { title: "Wonder", type: "book", maker: "R. J. Palacio · Children's novel", age: 9, rating: "Reading guide", tags: ["Friendship", "Bullying"], color: "#d38a66", mark: "W" },
  { title: "A Wrinkle in Time", type: "book", maker: "Madeleine L'Engle · Science fantasy", age: 10, rating: "Reading guide", tags: ["Fantasy peril", "Family"], color: "#697d9a", mark: "W" },
  { title: "The Graveyard Book", type: "book", maker: "Neil Gaiman · Fantasy", age: 11, rating: "Reading guide", tags: ["Creepy imagery", "Peril"], color: "#667b70", mark: "G" },
  { title: "The Secret Garden", type: "book", maker: "Frances Hodgson Burnett · Classic", age: 9, rating: "Reading guide", tags: ["Loss", "Growing up"], color: "#73936d", mark: "S" },
  { title: "How to Train Your Dragon", type: "book", maker: "Cressida Cowell · Fantasy", age: 8, rating: "Reading guide", tags: ["Friendship", "Animal peril"], color: "#638a96", mark: "D" },
  { title: "Diary of a Wimpy Kid", type: "book", maker: "Jeff Kinney · Illustrated novel", age: 9, rating: "Reading guide", tags: ["Gentle humor", "Growing up"], color: "#c5a65f", mark: "W" },
  { title: "The Giver", type: "book", maker: "Lois Lowry · Science fiction", age: 12, rating: "Reading guide", tags: ["Difficult themes", "Loss"], color: "#718482", mark: "G" },
  { title: "Ms Rachel", type: "creator", maker: "YouTube · Early-learning videos", age: 2, rating: "Not officially rated", tags: ["Gentle learning", "Varies by upload"], color: "#df957b", mark: "R" },
  { title: "Mark Rober", type: "creator", maker: "YouTube · Science and engineering", age: 8, rating: "Not officially rated", tags: ["Science and engineering", "Varies by upload"], color: "#6d94a0", mark: "R" },
  { title: "Dude Perfect", type: "creator", maker: "YouTube · Sports and entertainment", age: 8, rating: "Not officially rated", tags: ["Friendly competition", "Physical stunts", "Varies by upload"], color: "#729a84", mark: "D" },
  { title: "TED-Ed", type: "creator", maker: "YouTube · Animated lessons", age: 11, rating: "Not officially rated", tags: ["Science topics", "Difficult themes", "Varies by upload"], color: "#bd6358", mark: "T" },
  { title: "Kurzgesagt – In a Nutshell", type: "creator", maker: "YouTube · Animated science", age: 12, rating: "Not officially rated", tags: ["Science topics", "Difficult themes", "Varies by upload"], color: "#648aa0", mark: "K" },
  { title: "SciShow Kids", type: "creator", maker: "YouTube · Children's science", age: 7, rating: "Not officially rated", tags: ["Science and engineering", "Gentle learning", "Varies by upload"], color: "#75a38f", mark: "S" },
  { title: "National Geographic Kids", type: "creator", maker: "YouTube · Nature and science", age: 8, rating: "Not officially rated", tags: ["Science topics", "Wildlife encounters", "Varies by upload"], color: "#d2a54f", mark: "N" },
  { title: "Coyote Peterson", type: "creator", maker: "YouTube · Wildlife videos", age: 11, rating: "Not officially rated", tags: ["Wildlife encounters", "Animal peril", "Varies by upload"], color: "#788c68", mark: "C" },
  { title: "MrBeast", type: "creator", maker: "YouTube · Challenges and entertainment", age: 13, rating: "Not officially rated", tags: ["Competition", "Sponsored segments", "Varies by upload"], color: "#6483a1", mark: "M" },
];

let titles = [...curatedTitles];
let visibleLimit = 36;
const pageSize = 36;
const typeNames = { movie: "Film", series: "Series", game: "Game", book: "Book", creator: "Creator" };
const typePlurals = { movie: "Films", series: "Series", game: "Games", book: "Books", creator: "Creators" };
const typeIcons = { movie: "▻", series: "▤", game: "⌘", book: "▧", creator: "◉" };
const typeColors = { movie: "#4e9ba7", series: "#76a99d", game: "#db7052", book: "#84986c", creator: "#d2a54f" };
const themeNotes = {
  "Action violence": { concern: true, note: "Superhero fights and action sequences include more intense physical conflict." },
  "Animal peril": { concern: true, note: "Animals face danger, which may be upsetting for children who are sensitive to animal stories." },
  "Anxiety": { concern: true, note: "The story explores anxiety and includes moments of emotional tension." },
  "Belonging": { note: "Finding connection and a place to belong is a central, positive theme." },
  "Cartoon action": { note: "Action is exaggerated and playful rather than realistic." },
  "Cartoon combat": { concern: true, note: "Characters fight in a stylized, non-realistic way." },
  "Co-op play": { note: "Cooperative play gives children a chance to work together." },
  "Competition": { concern: true, note: "The show centers on a contest, though the tone is generally light." },
  "Creativity": { note: "Open-ended play encourages building, decorating, and imaginative choices." },
  "Creepy imagery": { concern: true, note: "Uncanny images and ideas may be unsettling for sensitive readers." },
  "Family": { note: "Family bonds and relationships are an important part of the story." },
  "Family life": { note: "Everyday family situations and relationships are at the heart of the series." },
  "Family pressure": { concern: true, note: "Characters experience pressure and conflict within their family." },
  "Family separation": { concern: true, note: "A parent and child are separated, which can feel upsetting." },
  "Family themes": { note: "The story explores family relationships, identity, and expectations." },
  "Fantasy action": { concern: true, note: "Animated fantasy battles and danger appear throughout the story." },
  "Fantasy battles": { concern: true, note: "Creatures battle in a colorful, imaginary setting." },
  "Fantasy combat": { concern: true, note: "Players can fight fantasy creatures; the action is not realistic." },
  "Fantasy peril": { concern: true, note: "Characters face magical threats and moments of danger." },
  "Fantasy violence": { concern: true, note: "Conflict takes place in an imaginary setting and may include fighting." },
  "Friendly competition": { note: "Races are playful and built around friendly competition." },
  "Friendship": { note: "Supportive friendships and helping one another are positive parts of the story." },
  "Gentle humor": { note: "The humor is light and generally kind rather than mean-spirited." },
  "Growing up": { note: "Characters navigate changing feelings, friendships, or responsibilities as they grow." },
  "Horror": { concern: true, note: "Supernatural horror and frightening scenes may be intense for younger viewers." },
  "Horror imagery": { concern: true, note: "Macabre and supernatural images may frighten some viewers." },
  "Intense peril": { concern: true, note: "Characters face sustained danger and chase scenes that can feel intense." },
  "Kindness": { note: "Empathy, kindness, and caring for others are recurring themes." },
  "Life themes": { note: "Everyday responsibilities and relationships are part of the experience." },
  "Loss": { concern: true, note: "The story includes grief and the loss of loved ones." },
  "Magic": { note: "Magic and spells are part of an imaginative fantasy setting." },
  "Mild language": { concern: true, note: "Some mild language appears; check the rating details if this is a concern." },
  "Mild peril": { concern: true, note: "There are brief moments of danger, handled in a relatively gentle tone." },
  "Mythical violence": { concern: true, note: "Heroes battle monsters from mythology in a fantasy setting." },
  "Ocean peril": { concern: true, note: "The characters encounter storms, sea creatures, and other ocean dangers." },
  "Online chat": { concern: true, note: "Online play can involve chat with other players; review and adjust voice and text settings." },
  "Online features": { concern: true, note: "Some features connect to other players online; check privacy and communication settings." },
  "Online interactions": { concern: true, note: "Online visits allow interaction with other players; use the platform's privacy settings." },
  "Online play": { concern: true, note: "Multiplayer can connect players online; review who can join and contact your child." },
  "Peril": { concern: true, note: "Characters face danger and suspense at points in the story." },
  "Sacrifice": { concern: true, note: "A major character makes a sacrifice, which may be sad or difficult to discuss." },
  "Scary scenes": { concern: true, note: "Some scenes are designed to feel frightening or suspenseful." },
  "Survival themes": { concern: true, note: "The story deals with survival under dangerous, high-stakes circumstances." },
  "Bullying": { concern: true, note: "The story depicts bullying and its effects on a child and their peers." },
  "Awaiting review": { concern: true, note: "This listing came from the supplied catalog, but its age recommendation, official rating, and content notes have not been reviewed." },
  "Difficult themes": { concern: true, note: "Some topics may be emotionally complex; preview the specific episode or discuss it together." },
  "Gentle learning": { note: "Songs, repetition, or simple explanations introduce early-learning ideas." },
  "Physical stunts": { concern: true, note: "Videos may feature physical tricks; make clear these should not be copied at home." },
  "Science and engineering": { note: "Experiments and builds can spark curiosity; preview demonstrations before trying them." },
  "Science topics": { note: "Educational videos explore science and nature; some topics may be advanced or emotionally complex." },
  "Sponsored segments": { concern: true, note: "Some videos may include brand partnerships, product promotion, or high-value prizes." },
  "Varies by upload": { concern: true, note: "A creator's tone and topics can change between videos; this is not a rating for every upload." },
  "Wildlife encounters": { concern: true, note: "Videos show real animals; close-up footage may be unsettling or unsafe to imitate." },
  "Violence": { concern: true, note: "Violence is a notable part of the story; its intensity can vary across episodes or scenes." },
};
const genreOptions = {
  "Animation": ["animation", "animated", "pixar", "dreamworks", "studio ghibli"],
  "Fantasy": ["fantasy", "magic", "myth", "dragon", "wizard"],
  "Adventure": ["adventure", "peril", "quest", "exploration"],
  "Comedy": ["comedy", "humor", "funny", "sitcom"],
  "Science & nature": ["science", "nature", "documentary", "wildlife", "planet", "engineering"],
  "Family & friendship": ["family", "friendship", "kindness", "relationships"],
  "Puzzles & building": ["puzzle", "sandbox", "building", "creativity", "platformer", "simulation"],
  "Sports & competition": ["sports", "racing", "competition", "football", "soccer"],
  "Mystery & spooky": ["mystery", "horror", "creepy", "scary"],
  "Action": ["action", "combat", "battle", "superhero"],
};
const defaultProfile = { id: "child-1", name: "My child", age: 8, genres: [], avoid: [], likes: [], searches: [] };
function readStoredJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}
let profiles = readStoredJson("little-lens-profiles", [defaultProfile]);
if (!Array.isArray(profiles) || !profiles.length) profiles = [{ ...defaultProfile }];
profiles = profiles.map((profile, index) => ({
  ...defaultProfile,
  ...profile,
  id: profile.id || `child-${index + 1}`,
  age: Math.min(18, Math.max(2, Number(profile.age) || 8)),
  genres: Array.isArray(profile.genres) ? profile.genres : [],
  avoid: Array.isArray(profile.avoid) ? profile.avoid : [],
  likes: Array.isArray(profile.likes) ? profile.likes : [],
  searches: Array.isArray(profile.searches) ? profile.searches : [],
}));
let activeProfileId = readStoredJson("little-lens-active-profile", profiles[0].id);
if (!profiles.some((profile) => profile.id === activeProfileId)) activeProfileId = profiles[0].id;
const state = { query: "", type: "all", age: "profile", view: "discover" };
const savedTitles = new Set(readStoredJson("little-lens-saved", []));
const titleReviews = readStoredJson("little-lens-reviews", {});

const results = document.querySelector("#results");
const searchInput = document.querySelector("#search-input");
const ageFilter = document.querySelector("#age-filter");
const resultCount = document.querySelector("#result-count");
const searchContext = document.querySelector("#search-context");

function getActiveProfile() {
  return profiles.find((profile) => profile.id === activeProfileId) || profiles[0];
}

function getAgeLimit() {
  const profileAge = getActiveProfile().age;
  return state.age === "profile" ? profileAge : Math.min(profileAge, Number(state.age));
}

function getGreekRatingInfo(item) {
  if (item.type === "game" && [3, 7, 12, 16, 18].includes(Number(item.pegiRating))) {
    const pegiAge = Number(item.pegiRating);
    return { label: `PEGI ${pegiAge}`, age: pegiAge, source: item.ratingSource };
  }
  if (item.type === "movie" && item.greekFilmRating) {
    const filmAges = { Unrestricted: 0, "13": 13, "17": 17, "18": 18 };
    if (Object.hasOwn(filmAges, item.greekFilmRating)) {
      return { label: item.greekFilmRating === "Unrestricted" ? "Unrestricted" : `Greece ${item.greekFilmRating}`, age: filmAges[item.greekFilmRating], source: item.ratingSource };
    }
  }
  return null;
}

function getAgeInfo(item) {
  const officialRating = getGreekRatingInfo(item);
  const age = officialRating?.age ?? (item.age === null || item.age === undefined ? null : Number(item.age));
  return {
    age,
    officialRating,
    isEstimated: !officialRating && age !== null,
    source: officialRating?.source || item.ageSource || null,
    sourceName: item.ageSourceName || null,
  };
}

function getGreekRatingStatus(item) {
  return {
    movie: "Greek film classification not verified",
    series: "Greek series rating not verified",
    game: "PEGI rating not verified",
    book: "No standard official book age rating",
    creator: "No channel-wide official rating",
  }[item.type] || "Greek official rating not verified";
}

function persistProfiles() {
  localStorage.setItem("little-lens-profiles", JSON.stringify(profiles));
  localStorage.setItem("little-lens-active-profile", JSON.stringify(activeProfileId));
}

function itemSearchText(item) {
  return `${item.title} ${item.type} ${item.maker} ${item.tags.join(" ")}`.toLowerCase();
}

function matchesGenre(item, genre) {
  const text = itemSearchText(item);
  return genreOptions[genre].some((keyword) => text.includes(keyword));
}

function recommendationScore(item) {
  const profile = getActiveProfile();
  let score = profile.genres.reduce((total, genre) => total + (matchesGenre(item, genre) ? 4 : 0), 0);
  const likedTags = profile.likes
    .map((key) => titles.find((title) => titleKey(title) === key))
    .filter(Boolean)
    .flatMap((title) => title.tags);
  score += item.tags.filter((tag) => likedTags.includes(tag)).length * 2;
  const searchTerms = profile.searches.flatMap((query) => query.toLowerCase().split(/\s+/)).filter((term) => term.length > 2);
  score += searchTerms.reduce((total, term) => total + (itemSearchText(item).includes(term) ? 1 : 0), 0);
  return score;
}

function renderProfileControls() {
  const select = document.querySelector("#profile-select");
  select.innerHTML = profiles.map((profile) => `<option value="${escapeHtml(profile.id)}">${escapeHtml(profile.name)} · age ${profile.age}</option>`).join("");
  select.value = activeProfileId;
}

function titleKey(item) {
  return `${item.type}:${item.title}`;
}

function getTitleDescription(item) {
  const catalogDetails = item.maker.split("·").map((part) => part.trim());
  const source = catalogDetails[0];
  const descriptor = catalogDetails[1];
  const typeLabel = typeNames[item.type] || "Title";
  const format = item.type === "book" && descriptor ? `a ${descriptor.toLowerCase()}` : `a ${typeNames[item.type].toLowerCase()}`;
  const sourceText = item.type === "book" ? `by ${source}` : `from ${source}`;
  const summaryByType = {
    movie: {
      intro: `${item.title} is ${format} ${sourceText}.`,
      plot: "The story usually centres on a character or family facing a challenge, a journey, or an emotional turning point, then explores how they grow, connect, and find a way forward.",
      tone: "It is often warm, funny, adventurous, or reassuring, with a mix of action, heart, and moments that teach empathy or courage."
    },
    series: {
      intro: `${item.title} is ${format} ${sourceText}.`,
      plot: "The plot unfolds across episodes, following recurring characters through daily life, friendships, mysteries, adventures, or a long-term goal. Each episode adds development, emotional beats, and new situations that deepen the world.",
      tone: "The series usually feels comforting, playful, or suspenseful while still being accessible to children, with a focus on relationships, teamwork, and learning through experience."
    },
    game: {
      intro: `${item.title} is ${format} ${sourceText}.`,
      plot: "The experience is built around exploration, problem-solving, creativity, and progress, whether the player is racing, building, adventuring, or working through a challenge with friends or alone.",
      tone: "It is designed to be interactive and engaging, with a mix of gentle discovery, playful competition, imaginative worlds, and moments that reward curiosity and cooperation."
    },
    book: {
      intro: `${item.title} is ${format} ${sourceText}.`,
      plot: "The story develops through a central character or group facing change, mystery, danger, or a personal challenge, and the narrative usually grows around their emotional journey and decisions.",
      tone: "It tends to be imaginative, reflective, and character-led, with themes of belonging, bravery, friendship, and learning how to deal with fear or uncertainty."
    },
    creator: {
      intro: `${item.title} is ${format} ${sourceText}.`,
      plot: "This is a creator-led format built around short-form learning, experiments, challenges, or entertainment, where each video focuses on a specific idea, activity, or topic.",
      tone: "The tone can vary by creator and upload, but it often feels educational, playful, or highly engaging while encouraging curiosity, laughter, and discovery."
    }
  };
  const chosenSummary = summaryByType[item.type] || summaryByType.movie;
  const tagsLine = item.tags.length ? `The guide highlights ${item.tags.join(", ")}.` : "";
  const ageLine = item.age === null || item.age === undefined ? "" : item.age <= 5 ? "This is written for younger children who benefit from clear, reassuring storytelling and less intense conflict." : item.age <= 9 ? "This is aimed at children who can handle moderate stakes, emotional beats, and more layered character development." : item.age <= 12 ? "This usually suits children who are ready for more complexity, bigger choices, and stronger emotional or dramatic tension." : "This is better suited to older children or teens because it often deals with more intense conflict, deeper themes, or heavier emotional material.";
  return `${chosenSummary.intro} ${chosenSummary.plot} ${chosenSummary.tone} ${tagsLine} ${ageLine}`;
}

function getReviews(item) {
  const reviews = titleReviews[titleKey(item)];
  return Array.isArray(reviews) ? reviews : [];
}

function renderReviews(item) {
  const reviews = getReviews(item);
  const average = reviews.length ? (reviews.reduce((sum, review) => sum + review.score, 0) / reviews.length).toFixed(1) : null;
  const reviewCards = reviews.length
    ? reviews.slice().reverse().map((review) => `<article class="family-review"><div class="review-heading"><strong>${escapeHtml(review.profileName)}</strong><span class="review-stars" aria-label="${review.score} out of 5 stars">${"★".repeat(review.score)}${"☆".repeat(5 - review.score)}</span></div><p class="review-fit">${escapeHtml(review.fit)}</p><p class="review-comment">${escapeHtml(review.comment)}</p><time>${escapeHtml(new Date(review.createdAt).toLocaleDateString())}</time></article>`).join("")
    : `<p class="reviews-empty">No family notes for this title yet. Add the first one for ${escapeHtml(getActiveProfile().name)}.</p>`;

  return `<section class="review-section" aria-labelledby="reviews-title">
    <div class="review-section-heading"><div><p class="eyebrow">FAMILY EXPERIENCES</p><h3 id="reviews-title">Ratings &amp; notes</h3></div><p class="review-average">${average ? `<strong>${average}</strong><span class="review-stars" aria-label="Average ${average} out of 5 stars">${"★".repeat(Math.round(Number(average)))}${"☆".repeat(5 - Math.round(Number(average)))}</span><small>${reviews.length} ${reviews.length === 1 ? "note" : "notes"}</small>` : "No ratings yet"}</p></div>
    <p class="review-privacy-note">These notes are saved in this browser only. They are not shared with other families.</p>
    <div class="review-list">${reviewCards}</div>
    <form id="review-form" class="review-form">
      <h4>How did it fit your child?</h4>
      <p class="review-helper">Select one to five stars.</p>
      <fieldset class="star-rating"><legend>Your rating</legend><div class="star-options">${[5, 4, 3, 2, 1].map((score) => `<label title="${score} ${score === 1 ? "star" : "stars"}"><input type="radio" name="review-rating" value="${score}" aria-label="${score} ${score === 1 ? "star" : "stars"}" required><span aria-hidden="true">★</span></label>`).join("")}</div></fieldset>
      <label class="review-fit-label">Overall fit<select name="fit" required><option value="" selected disabled>Choose an overall fit</option><option value="Not a fit">1 star — Not a fit</option><option value="Poor fit">2 stars — Poor fit</option><option value="Mixed fit">3 stars — Mixed fit</option><option value="Good fit">4 stars — Good fit</option><option value="Great fit">5 stars — Great fit</option></select></label>
      <label class="review-comment-label">Your comment<textarea name="comment" maxlength="600" required placeholder="What worked well, or what should another family know?" rows="3"></textarea></label>
      <div class="review-form-footer"><span>Saved under ${escapeHtml(getActiveProfile().name)} on this device.</span><button type="submit">Save note</button></div>
    </form>
  </section>`;
}

function submitReview(item, form) {
  const formData = new FormData(form);
  const score = Number(formData.get("review-rating"));
  const comment = String(formData.get("comment") || "").trim();
  if (!score || !comment) return;
  const key = titleKey(item);
  const reviews = getReviews(item);
  reviews.push({
    profileId: getActiveProfile().id,
    profileName: getActiveProfile().name,
    score,
    fit: String(formData.get("fit")),
    comment,
    createdAt: new Date().toISOString(),
  });
  titleReviews[key] = reviews;
  localStorage.setItem("little-lens-reviews", JSON.stringify(titleReviews));
  showTitleDetails(item);
}

function getVisibleTitles() {
  const query = state.query.trim().toLowerCase();
  const profile = getActiveProfile();
  return titles.filter((item) => {
    const matchesType = state.type === "all" || item.type === state.type;
    const age = getAgeInfo(item).age;
    const matchesAge = age === null || age <= getAgeLimit();
    const matchesAvoid = !item.tags.some((tag) => profile.avoid.includes(tag));
    const matchesSaved = state.view !== "saved" || savedTitles.has(titleKey(item));
    return matchesType && matchesAge && matchesAvoid && matchesSaved && (!query || itemSearchText(item).includes(query));
  }).sort((first, second) => recommendationScore(second) - recommendationScore(first));
}

function cardTemplate(item, index) {
  const key = titleKey(item);
  const isSaved = savedTitles.has(key);
  const ageInfo = getAgeInfo(item);
  const tags = item.tags.map((tag) => `<span class="tag${themeNotes[tag]?.concern ? " concern" : ""}">${tag}</span>`).join("");
    const ageText = ageInfo.age === null ? "—" : ageInfo.age === 0 ? "All" : `${ageInfo.age}+`;
    const ageBadgeLabel = ageInfo.age === null ? "Age needs title-specific research" : ageInfo.isEstimated ? `Estimated age ${ageInfo.age} and up` : `${ageInfo.officialRating.label}, age ${ageInfo.age} and up`;
    const ageBadge = `<span class="age-badge${ageInfo.isEstimated ? " age-provisional" : ""}" aria-label="${ageBadgeLabel} for ${escapeHtml(item.title)}"><strong>${ageText}</strong><small>${ageInfo.age === null ? "RESEARCH" : ageInfo.isEstimated ? "ESTIMATE" : escapeHtml(ageInfo.officialRating.label)}</small></span>`;
  return `<article class="title-card" style="--cover:${item.color || typeColors[item.type]};animation-delay:${Math.min(index * 30, 180)}ms">
    <button class="card-open" type="button" data-details="${escapeHtml(key)}" aria-label="Show the official rating and reasons for ${escapeHtml(item.title)}"></button>
    <div class="cover${item.type === "creator" ? " creator-avatar" : ""}" data-artwork="${escapeHtml(key)}" aria-hidden="true"><img class="cover-image" alt="" loading="lazy" decoding="async"><span class="cover-mark">${escapeHtml(item.mark || item.title.slice(0, 1))}</span></div>
    <div class="title-copy"><p class="type-label">${typeIcons[item.type]} &nbsp;${typeNames[item.type]}</p><h3>${escapeHtml(item.title)}</h3><p class="publisher">${escapeHtml(item.maker)}</p><div class="tags">${tags}</div></div>
    <div class="card-side">${ageBadge}<button class="save-button${isSaved ? " saved" : ""}" type="button" data-save="${escapeHtml(key)}" aria-label="${isSaved ? "Remove" : "Save"} ${escapeHtml(item.title)}" aria-pressed="${isSaved}">${isSaved ? "♥" : "♡"}</button></div>
    <div class="rating-line"><span>${escapeHtml(ageInfo.officialRating?.label || getGreekRatingStatus(item))}</span><span>·</span><span>${ageInfo.isEstimated ? "Little Lens estimate" : ageInfo.age === null ? "Title-specific age research needed" : "Official Greece/PEGI rating"}</span></div>
  </article>`;
}

const artworkCache = new Map();
const artworkObserver = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    loadTitleArtwork(entry.target);
  });
}, { rootMargin: "180px 0px" });

async function findTitleArtwork(item) {
  const variants = {
    movie: [`${item.title} (film)`, item.title],
    series: [`${item.title} (TV series)`, item.title],
    book: [`${item.title} (novel)`, `${item.title} (book)`, item.title],
    game: [`${item.title} (video game)`, item.title],
    creator: [item.title],
  }[item.type] || [item.title];

  for (const variant of variants) {
    try {
      const page = encodeURIComponent(variant.replaceAll(" ", "_"));
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${page}`);
      if (!response.ok) continue;
      const summary = await response.json();
      if (summary.type !== "disambiguation" && summary.thumbnail?.source) return summary.thumbnail.source;
    } catch {
      continue;
    }
  }
  return null;
}

function loadTitleArtwork(cover) {
  const item = titles.find((title) => titleKey(title) === cover.dataset.artwork);
  if (!item) return;
  const key = titleKey(item);
  if (!artworkCache.has(key)) artworkCache.set(key, findTitleArtwork(item));

  artworkCache.get(key).then((imageUrl) => {
    if (!imageUrl) return;
    results.querySelectorAll(".cover[data-artwork]").forEach((currentCover) => {
      if (currentCover.dataset.artwork !== key) return;
      const image = currentCover.querySelector(".cover-image");
      if (!image || image.src) return;
      image.addEventListener("load", () => currentCover.classList.add("has-image"), { once: true });
      image.addEventListener("error", () => image.removeAttribute("src"), { once: true });
      image.src = imageUrl;
    });
  });
}

function observeTitleArtwork() {
  const covers = results.querySelectorAll(".cover[data-artwork]");
  covers.forEach((cover) => {
    if (artworkObserver) artworkObserver.observe(cover);
    else loadTitleArtwork(cover);
  });
}

function render() {
  const visibleTitles = getVisibleTitles();
  const renderedTitles = visibleTitles.slice(0, visibleLimit);
  const profile = getActiveProfile();
  const query = state.query.trim().toLowerCase();
  const awaitingReviewCount = titles.filter((item) => item.provisional
    && (state.type === "all" || item.type === state.type)
    && (state.view !== "saved" || savedTitles.has(titleKey(item)))
    && (!query || `${item.title} ${item.type} ${item.maker} ${item.tags.join(" ")}`.toLowerCase().includes(query))).length;
  const searchLabel = state.query.trim() || (state.type === "all" ? "All titles" : typePlurals[state.type]);
  const filterSummary = `guide age ${getAgeLimit()} or younger${awaitingReviewCount ? ", plus unreviewed catalog entries" : ""}`;
  const preferenceSummary = profile.genres.length ? ` Prioritizing ${profile.genres.join(", ")}.` : "";
  const avoidSummary = profile.avoid.length ? ` Avoiding ${profile.avoid.join(", ")}.` : "";
  const learningSummary = profile.likes.length || profile.searches.length
    ? ` Tuned by ${profile.likes.length} saved ${profile.likes.length === 1 ? "title" : "titles"} and ${profile.searches.length} recent ${profile.searches.length === 1 ? "search" : "searches"}.`
    : " Save titles or search to make these picks more personal.";
  const pendingNotice = awaitingReviewCount
    ? ` ${awaitingReviewCount} imported listings are still awaiting a full review; check the official rating before deciding.`
    : "";
  renderProfileControls();
  searchContext.innerHTML = `<span class="context-label">${state.query.trim() ? "YOU SEARCHED FOR" : "PICKS FOR"}</span><strong>${escapeHtml(state.query.trim() || profile.name)}</strong><span>${visibleTitles.length} ${visibleTitles.length === 1 ? "guide" : "guides"} for ${filterSummary}.${preferenceSummary}${avoidSummary}${learningSummary}${pendingNotice} Select a result to see its notes.</span>`;
  document.querySelector("#breadcrumb-current").textContent = state.view === "saved" ? "SAVED" : "DISCOVER";
  document.querySelector("#page-title").innerHTML = state.view === "saved" ? 'Your family\'s<br /><span>shortlist.</span>' : `A clearer way<br />to <span>choose.</span>`;
  document.querySelector("#results-kicker").textContent = state.view === "saved" ? "KEPT CLOSE FOR LATER" : state.query ? "HERE'S WHAT WE FOUND" : `PERSONALIZED FOR ${profile.name.toUpperCase()}`;
  document.querySelector("#results-title").childNodes[0].textContent = state.view === "saved" ? "Your saved titles " : state.query ? "Guide matches " : `Ideas for ${profile.name} `;
  document.querySelector("#saved-count").textContent = savedTitles.size;
  resultCount.textContent = `(${visibleTitles.length})`;

  if (visibleTitles.length) {
    const remaining = visibleTitles.length - renderedTitles.length;
    results.innerHTML = renderedTitles.map(cardTemplate).join("") + (remaining > 0 ? `<div class="load-more-wrap"><button class="load-more-button" type="button" data-load-more>Show ${Math.min(pageSize, remaining)} more <span>(${remaining} left)</span></button></div>` : "");
    observeTitleArtwork();
    return;
  }

  const unknownTitle = state.query.trim() && !titles.some((item) => item.title.toLowerCase() === state.query.trim().toLowerCase());
  const pendingTitle = state.query.trim() && titles.find((item) => item.provisional && item.title.toLowerCase() === state.query.trim().toLowerCase());
  const heading = state.view === "saved" ? "Your shortlist is ready when you are" : pendingTitle ? "This title still needs a full review" : unknownTitle ? "No guide for that title yet" : "No titles match those filters";
  const message = state.view === "saved" ? "Save a title with the heart button and it will be here next time you visit." : pendingTitle ? "This listing is still awaiting a full content review. Check the official rating and preview the title before deciding." : unknownTitle ? `We don't have a verified guide for “${escapeHtml(state.query.trim())}” yet. Try another title, or check the rating board in your region.` : "Try a different age range or media type, or clear your filters to see all titles.";
  results.innerHTML = `<div class="empty-state"><div class="empty-mark" aria-hidden="true">✳</div><h3>${heading}</h3><p>${message}</p><button id="empty-reset" type="button">Browse all guides</button></div>`;
  document.querySelector("#empty-reset").addEventListener("click", resetFilters);
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function resetFilters() {
  state.query = "";
  state.type = "all";
  state.age = "profile";
  state.view = "discover";
  searchInput.value = "";
  ageFilter.value = "any";
  document.querySelectorAll(".filter-chip").forEach((button) => button.classList.toggle("active", button.dataset.type === "all"));
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("is-active", button.dataset.view === "discover"));
  render();
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = searchInput.value;
  state.view = "discover";
  const query = state.query.trim();
  if (query) {
    const profile = getActiveProfile();
    profile.searches = [query, ...profile.searches.filter((search) => search.toLowerCase() !== query.toLowerCase())].slice(0, 8);
    persistProfiles();
  }
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("is-active", button.dataset.view === "discover"));
  render();
});

searchInput.addEventListener("input", () => {
  if (!searchInput.value.trim()) {
    state.query = "";
    render();
  }
});

document.querySelectorAll(".filter-chip").forEach((button) => button.addEventListener("click", () => {
  state.type = button.dataset.type;
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  render();
}));

ageFilter.addEventListener("change", () => {
  state.age = ageFilter.value;
  render();
});

document.querySelectorAll(".nav-link").forEach((button) => button.addEventListener("click", () => {
  state.view = button.dataset.view;
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("is-active", link === button));
  render();
}));

const profileDialog = document.querySelector("#profile-dialog");
let editingProfileId = activeProfileId;

function renderProfileList() {
  document.querySelector("#profile-list").innerHTML = profiles.map((profile) => `<button class="profile-list-item${profile.id === editingProfileId ? " selected" : ""}" type="button" data-edit-profile="${escapeHtml(profile.id)}"><span class="profile-avatar" aria-hidden="true">${escapeHtml(profile.name.slice(0, 1).toUpperCase())}</span><span>${escapeHtml(profile.name)}<small>Age ${profile.age}</small></span></button>`).join("");
}

function renderProfileEditor(profile) {
  editingProfileId = profile?.id || null;
  const form = document.querySelector("#profile-form");
  form.reset();
  document.querySelector("#profile-name").value = profile?.name || "";
  document.querySelector("#profile-age").value = profile?.age || 8;
  document.querySelector("#genre-options").innerHTML = Object.keys(genreOptions).map((genre) => `<label class="preference-option"><input type="checkbox" name="genres" value="${escapeHtml(genre)}"${profile?.genres.includes(genre) ? " checked" : ""}><span>${escapeHtml(genre)}</span></label>`).join("");
  const avoidThemes = Object.entries(themeNotes).filter(([, details]) => details.concern).map(([theme]) => theme).sort();
  document.querySelector("#avoid-options").innerHTML = avoidThemes.map((theme) => `<label class="preference-option"><input type="checkbox" name="avoid" value="${escapeHtml(theme)}"${profile?.avoid.includes(theme) ? " checked" : ""}><span>${escapeHtml(theme)}</span></label>`).join("");
  document.querySelector("#delete-profile-button").disabled = !profile || profiles.length <= 1;
  document.querySelector("#clear-learning-button").disabled = !profile || (!profile.likes.length && !profile.searches.length);
  renderProfileList();
}

function openProfileDialog(profile = getActiveProfile()) {
  renderProfileEditor(profile);
  if (!profileDialog.open) profileDialog.showModal();
}

document.querySelector("#profile-select").addEventListener("change", (event) => {
  activeProfileId = event.target.value;
  state.age = "profile";
  ageFilter.value = "profile";
  persistProfiles();
  render();
});

document.querySelector("#profile-edit-button").addEventListener("click", () => openProfileDialog());
document.querySelector("#profile-manage-button").addEventListener("click", () => openProfileDialog());
document.querySelector("#add-profile-button").addEventListener("click", () => renderProfileEditor(null));
document.querySelector("#profile-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-edit-profile]");
  const profile = profiles.find((item) => item.id === button?.dataset.editProfile);
  if (profile) renderProfileEditor(profile);
});

document.querySelector("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const profile = profiles.find((item) => item.id === editingProfileId);
  const updatedProfile = {
    ...(profile || { id: `child-${Date.now()}`, likes: [], searches: [] }),
    name: document.querySelector("#profile-name").value.trim(),
    age: Math.min(18, Math.max(2, Number(document.querySelector("#profile-age").value))),
    genres: [...document.querySelectorAll("input[name='genres']:checked")].map((input) => input.value),
    avoid: [...document.querySelectorAll("input[name='avoid']:checked")].map((input) => input.value),
  };
  if (profile) profiles = profiles.map((item) => item.id === profile.id ? updatedProfile : item);
  else profiles.push(updatedProfile);
  activeProfileId = updatedProfile.id;
  state.age = "profile";
  ageFilter.value = "profile";
  persistProfiles();
  profileDialog.close();
  render();
});

document.querySelector("#delete-profile-button").addEventListener("click", () => {
  if (!editingProfileId || profiles.length <= 1) return;
  profiles = profiles.filter((profile) => profile.id !== editingProfileId);
  if (activeProfileId === editingProfileId) activeProfileId = profiles[0].id;
  persistProfiles();
  render();
  renderProfileEditor(getActiveProfile());
});

document.querySelector("#clear-learning-button").addEventListener("click", () => {
  const profile = profiles.find((item) => item.id === editingProfileId);
  if (!profile) return;
  profile.likes = [];
  profile.searches = [];
  persistProfiles();
  render();
  renderProfileEditor(profile);
});

results.addEventListener("click", (event) => {
  if (event.target.closest("[data-load-more]")) {
    visibleLimit += pageSize;
    render();
    return;
  }

  const button = event.target.closest("[data-save]");
  if (button) {
    const key = button.dataset.save;
    const profile = getActiveProfile();
    if (savedTitles.has(key)) {
      savedTitles.delete(key);
      profile.likes = profile.likes.filter((like) => like !== key);
    } else {
      savedTitles.add(key);
      profile.likes = [...new Set([...profile.likes, key])];
    }
    localStorage.setItem("little-lens-saved", JSON.stringify([...savedTitles]));
    persistProfiles();
    render();
    return;
  }

  const detailButton = event.target.closest("[data-details]");
  if (!detailButton) return;
  const item = titles.find((title) => titleKey(title) === detailButton.dataset.details);
  if (item) showTitleDetails(item);
});

document.querySelector("#clear-filters").addEventListener("click", resetFilters);
document.querySelector("#about-button").addEventListener("click", () => document.querySelector("#about-dialog").showModal());

function getFallbackPositiveContent(item) {
  if (item.type === "movie") {
    return "This title is often a good fit for families because it focuses on empathy, perseverance, and heart. It usually gives children a clear emotional journey, reassuring messages, and a sense of progress without needing intense or prolonged conflict.";
  }
  if (item.type === "series") {
    return "This series tends to work well for children because it builds familiarity through recurring characters, everyday routines, and reassuring story arcs. It often explores kindness, routines, teamwork, or growing up in a format that feels easy and comforting to follow.";
  }
  if (item.type === "game") {
    return "This game is often a good fit because it encourages creativity, experimentation, and low-pressure play. Families who value cooperation, discovery, and imagination usually find it engaging without needing a lot of mature or heavy content.";
  }
  if (item.type === "book") {
    return "This book is often a strong fit for young readers because it gives them a clear emotional journey, memorable characters, and a hopeful or helpful message. It usually balances imagination with relatable struggles, which can make it both engaging and manageable.";
  }
  return "This title is often a good fit because it mixes learning, laughter, or discovery with clear, approachable content. It usually feels welcoming for children who enjoy gentle curiosity and a positive, easy-to-follow rhythm.";
}

function showTitleDetails(item) {
  const positives = item.tags.filter((tag) => !themeNotes[tag]?.concern);
  const concerns = item.tags.filter((tag) => themeNotes[tag]?.concern);
  const ageInfo = getAgeInfo(item);
  const otherMarketRating = item.rating && !["Not yet reviewed", "Not officially rated", "To be verified"].includes(item.rating) ? item.rating : null;
  const otherMarketLabel = otherMarketRating && /^(MPA|TV-|ESRB\b)/.test(otherMarketRating) ? "Other market label" : "Existing catalog label";
  const ageLimit = getAgeLimit();
  const ratingSourceLink = ageInfo.officialRating?.source
    ? ` · <a href="${escapeHtml(ageInfo.officialRating.source)}" target="_blank" rel="noopener noreferrer">PEGI source</a>`
    : "";
  const ageSourceLink = ageInfo.source && !ageInfo.officialRating
    ? ` · <a href="${escapeHtml(ageInfo.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ageInfo.sourceName || "Age guidance source")}</a>`
    : "";
  const ageNote = ageInfo.age === null
    ? "We don't yet have a title-specific age assessment for this choice. No category-wide age has been substituted; check local guidance and preview the content."
    : ageInfo.isEstimated
      ? `For ${escapeHtml(getActiveProfile().name)}, Little Lens suggests starting around age ${ageInfo.age}+. This is an estimate, not an official Greek classification; preview the title and check local guidance. The current profile limit is ${ageLimit} y/o.`
      : `${escapeHtml(ageInfo.officialRating.label)} is the official Greece/PEGI classification listed for this title. The current profile limit is ${ageLimit} y/o.`;
  const titleDescription = item.provisional
    ? `${item.title} is listed in the parent content catalog as ${typeNames[item.type].toLowerCase()}. Its plot, official rating, and content details have not been reviewed yet.`
    : getTitleDescription(item);
  const themeList = (tags) => tags.map((tag) => `<li><strong>${escapeHtml(tag)}</strong><span>${escapeHtml(themeNotes[tag]?.note || "This theme is listed in the catalog; check the title and local rating for more context.")}</span></li>`).join("");
  const goodFitBlock = item.provisional
    ? "<p class=\"detail-empty\">This entry has not been assessed yet, so we can’t confirm which children it might suit. Review the title and its official rating before deciding.</p>"
    : positives.length ? `<ul>${themeList(positives)}</ul>` : `<p class="detail-empty">${getFallbackPositiveContent(item)}</p>`;

  document.querySelector("#detail-content").innerHTML = `
    <p class="eyebrow detail-kicker">${typeIcons[item.type]} &nbsp;${typeNames[item.type].toUpperCase()} GUIDE <span>·</span> ${escapeHtml(item.maker)}</p>
    <h2 id="detail-title">${escapeHtml(item.title)}</h2>
    <div class="detail-age-row"><div class="detail-age${ageInfo.isEstimated ? " age-provisional" : ""}"><span>${ageInfo.officialRating ? "OFFICIAL RATING" : ageInfo.age === null ? "AGE STATUS" : "SUGGESTED AGE"}</span><strong>${ageInfo.age === null ? "Review" : ageInfo.age === 0 ? "All" : `${ageInfo.age}+`}</strong>${ageInfo.isEstimated ? "<small class=\"age-estimation-note\">It is Little Lens' estimation</small>" : ageInfo.officialRating ? `<small class="age-estimation-note">${escapeHtml(ageInfo.officialRating.label)}</small>` : ""}</div><p>${ageNote}</p></div>
    <p class="detail-rating"><strong>${ageInfo.officialRating ? "Greek official rating:" : "Greek rating status:"}</strong> ${escapeHtml(ageInfo.officialRating?.label || getGreekRatingStatus(item))}${ratingSourceLink}${ageSourceLink}${otherMarketRating ? ` · ${otherMarketLabel}: ${escapeHtml(otherMarketRating)}` : ""}${item.type === "creator" ? " · Guidance varies by upload." : ""}</p>
    <section class="detail-overview"><h3>Description</h3><p>${escapeHtml(titleDescription)}</p></section>
    <div class="detail-sections">
      <section class="detail-section"><h3>Themes &amp; why it might be a good fit</h3>${goodFitBlock}</section>
      <section class="detail-section detail-consider"><h3>Things to consider</h3>${concerns.length ? `<ul>${themeList(concerns)}</ul>` : "<p class=\"detail-empty\">No specific concerns are flagged in this guide. Check the local rating for full details.</p>"}</section>
    </div>
    <p class="detail-footnote">${item.type === "creator" ? "Creator guidance is a broad starting point, not a rating for every video. Topics, ads, and tone can change between uploads; preview the exact video and review autoplay recommendations." : "These notes summarize common themes; they aren't a scene-by-scene review. Your child's sensitivities and maturity matter too."}</p>
    ${renderReviews(item)}`;
  const reviewForm = document.querySelector("#review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitReview(item, reviewForm);
  });
  const titleDialog = document.querySelector("#title-dialog");
  if (!titleDialog.open) titleDialog.showModal();
}

renderProfileControls();
renderProfileEditor(getActiveProfile());
document.querySelector("#profile-form").reset();
render();

Promise.all([
  fetch("catalog-review.json").then((response) => {
    if (!response.ok) throw new Error("Catalog could not be loaded");
    return response.json();
  }),
  fetch("pegi-ratings.json").then((response) => response.ok ? response.json() : []).catch(() => []),
  fetch("title-age-guidance.json").then((response) => response.ok ? response.json() : []).catch(() => []),
  fetch("title-age-estimates.json").then((response) => response.ok ? response.json() : []).catch(() => []),
])
  .then(([records, ratings, ageGuidance, ageEstimates]) => {
    const existingKeys = new Set(curatedTitles.map(titleKey));
    const ratingsByKey = new Map(ratings.map((rating) => [`game:${rating.title}`, rating]));
    const ageGuidanceByKey = new Map(ageGuidance.map((guidance) => [`${guidance.type}:${guidance.title}`, guidance]));
    const ageEstimatesByKey = new Map(ageEstimates.map((estimate) => [`${estimate.type}:${estimate.title}`, estimate]));
    const applyLocalRating = (item) => {
      const rating = ratingsByKey.get(titleKey(item));
      const guidance = ageGuidanceByKey.get(titleKey(item));
      const estimate = ageEstimatesByKey.get(titleKey(item));
      return {
        ...item,
        ...(rating ? { pegiRating: rating.pegiRating, ratingSource: rating.source } : {}),
        ...(guidance ? { age: guidance.age, ageSource: guidance.source, ageSourceName: guidance.sourceName } : {}),
        ...(estimate ? { age: estimate.age, ageSourceName: "Little Lens" } : {}),
      };
    };
    titles = [
      ...curatedTitles.map(applyLocalRating),
      ...records.filter((item) => !existingKeys.has(titleKey(item))).map((item) => applyLocalRating({ ...item, provisional: item.age === null })),
    ];
    render();
  })
  .catch(() => {});