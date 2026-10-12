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
  { title: "Lego Star Wars: The Skywalker Saga", type: "game", maker: "TT Games · Adventure", age: 7, rating: "ESRB E10+", tags: ["Cartoon combat", "Co-op play"], color: "#dfae52", mark: "★" },
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
const state = { query: "", type: "all", age: "any", view: "discover" };
const savedTitles = new Set(JSON.parse(localStorage.getItem("little-lens-saved") || "[]"));

const results = document.querySelector("#results");
const searchInput = document.querySelector("#search-input");
const ageFilter = document.querySelector("#age-filter");
const resultCount = document.querySelector("#result-count");
const searchContext = document.querySelector("#search-context");

function titleKey(item) {
  return `${item.type}:${item.title}`;
}

function getVisibleTitles() {
  const query = state.query.trim().toLowerCase();
  return titles.filter((item) => {
    const matchesType = state.type === "all" || item.type === state.type;
    const matchesAge = state.age === "any" || (item.age !== null && item.age <= Number(state.age));
    const matchesSaved = state.view !== "saved" || savedTitles.has(titleKey(item));
    const searchable = `${item.title} ${item.type} ${item.maker} ${item.tags.join(" ")}`.toLowerCase();
    return matchesType && matchesAge && matchesSaved && (!query || searchable.includes(query));
  });
}

function cardTemplate(item, index) {
  const key = titleKey(item);
  const isSaved = savedTitles.has(key);
  const tags = item.tags.map((tag) => `<span class="tag${themeNotes[tag]?.concern ? " concern" : ""}">${tag}</span>`).join("");
  const ageBadge = `<span class="age-badge${item.provisional ? " age-provisional" : ""}" aria-label="${item.provisional ? "Provisional, unverified" : "Recommended"} age ${item.age} and up"><strong>${item.provisional ? "~" : ""}${item.age}+</strong><small>${item.provisional ? "ESTIMATE" : "GUIDE AGE"}</small></span>`;
  return `<article class="title-card" style="--cover:${item.color};animation-delay:${Math.min(index * 30, 180)}ms">
    <button class="card-open" type="button" data-details="${escapeHtml(key)}" aria-label="Show age guidance and reasons for ${escapeHtml(item.title)}"></button>
    <div class="cover" aria-hidden="true"><span class="cover-mark">${escapeHtml(item.mark || item.title.slice(0, 1))}</span></div>
    <div class="title-copy"><p class="type-label">${typeIcons[item.type]} &nbsp;${typeNames[item.type]}</p><h3>${escapeHtml(item.title)}</h3><p class="publisher">${escapeHtml(item.maker)}</p><div class="tags">${tags}</div></div>
    <div class="card-side">${ageBadge}<button class="save-button${isSaved ? " saved" : ""}" type="button" data-save="${escapeHtml(key)}" aria-label="${isSaved ? "Remove" : "Save"} ${escapeHtml(item.title)}" aria-pressed="${isSaved}">${isSaved ? "♥" : "♡"}</button></div>
    <div class="rating-line"><span>${escapeHtml(item.rating)}</span><span>·</span><span>${item.provisional ? "Age estimate · not reviewed" : item.type === "creator" ? "Guidance varies by upload" : "Check your local rating"}</span></div>
  </article>`;
}

function render() {
  const visibleTitles = getVisibleTitles();
  const renderedTitles = visibleTitles.slice(0, visibleLimit);
  const query = state.query.trim().toLowerCase();
  const awaitingReviewCount = titles.filter((item) => item.provisional
    && (state.type === "all" || item.type === state.type)
    && (state.view !== "saved" || savedTitles.has(titleKey(item)))
    && (!query || `${item.title} ${item.type} ${item.maker} ${item.tags.join(" ")}`.toLowerCase().includes(query))).length;
  const searchLabel = state.query.trim() || (state.type === "all" ? "All titles" : typePlurals[state.type]);
  const filterSummary = state.age === "any" ? "any age" : `age ${state.age}+`;
  const pendingNotice = awaitingReviewCount
    ? ` ${awaitingReviewCount} imported listings use a provisional ~13+ estimate; their content and official ratings are not verified.`
    : "";
  searchContext.innerHTML = `<span class="context-label">${state.query.trim() ? "YOU SEARCHED FOR" : "YOUR GUIDE"}</span><strong>${escapeHtml(searchLabel)}</strong><span>${visibleTitles.length} ${visibleTitles.length === 1 ? "guide" : "guides"} for ${filterSummary}.${pendingNotice} Select a result to see its notes.</span>`;
  document.querySelector("#breadcrumb-current").textContent = state.view === "saved" ? "SAVED" : "DISCOVER";
  document.querySelector("#page-title").innerHTML = state.view === "saved" ? 'Your family\'s<br /><span>shortlist.</span>' : 'A clearer way<br />to <span>choose.</span>';
  document.querySelector("#results-kicker").textContent = state.view === "saved" ? "KEPT CLOSE FOR LATER" : state.query ? "HERE'S WHAT WE FOUND" : "A FEW GOOD PLACES TO START";
  document.querySelector("#results-title").childNodes[0].textContent = state.view === "saved" ? "Your saved titles " : state.query ? "Guide matches " : "Popular with families ";
  document.querySelector("#saved-count").textContent = savedTitles.size;
  resultCount.textContent = `(${visibleTitles.length})`;

  if (visibleTitles.length) {
    const remaining = visibleTitles.length - renderedTitles.length;
    results.innerHTML = renderedTitles.map(cardTemplate).join("") + (remaining > 0 ? `<div class="load-more-wrap"><button class="load-more-button" type="button" data-load-more>Show ${Math.min(pageSize, remaining)} more <span>(${remaining} left)</span></button></div>` : "");
    return;
  }

  const unknownTitle = state.query.trim() && !titles.some((item) => item.title.toLowerCase() === state.query.trim().toLowerCase());
  const pendingTitle = state.query.trim() && titles.find((item) => item.provisional && item.title.toLowerCase() === state.query.trim().toLowerCase());
  const heading = state.view === "saved" ? "Your shortlist is ready when you are" : pendingTitle ? "The estimate is outside this age filter" : unknownTitle ? "No guide for that title yet" : "No titles match those filters";
  const message = state.view === "saved" ? "Save a title with the heart button and it will be here next time you visit." : pendingTitle ? `This listing has a provisional ~${pendingTitle.age}+ estimate. Clear the age filter to see it; the estimate still needs a title-specific review.` : unknownTitle ? `We don't have a verified guide for “${escapeHtml(state.query.trim())}” yet. We won't guess at an age rating. Try another title, or check the rating board in your region.` : "Try a different age range or media type, or clear your filters to see all titles.";
  results.innerHTML = `<div class="empty-state"><div class="empty-mark" aria-hidden="true">✳</div><h3>${heading}</h3><p>${message}</p><button id="empty-reset" type="button">Browse all guides</button></div>`;
  document.querySelector("#empty-reset").addEventListener("click", resetFilters);
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function resetFilters() {
  state.query = "";
  state.type = "all";
  state.age = "any";
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

results.addEventListener("click", (event) => {
  if (event.target.closest("[data-load-more]")) {
    visibleLimit += pageSize;
    render();
    return;
  }

  const button = event.target.closest("[data-save]");
  if (button) {
    const key = button.dataset.save;
    if (savedTitles.has(key)) savedTitles.delete(key);
    else savedTitles.add(key);
    localStorage.setItem("little-lens-saved", JSON.stringify([...savedTitles]));
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

function showTitleDetails(item) {
  const positives = item.tags.filter((tag) => !themeNotes[tag].concern);
  const concerns = item.tags.filter((tag) => themeNotes[tag].concern);
  const ageNote = item.provisional
    ? `This is a provisional ${item.age}+ placeholder, not a title-specific recommendation. The spreadsheet has no verified age or content data for this listing; check an official rating and preview it before deciding.`
    : state.age === "any"
    ? `Our guide suggests starting around age ${item.age}+. This is a recommendation, not an official classification.`
    : `For the age ${state.age}+ filter, this title is ${item.age <= Number(state.age) ? "within" : "above"} the suggested range. Its guide age is ${item.age}+. Read the themes below and decide what fits your child.`;
  const themeList = (tags) => tags.map((tag) => `<li><strong>${escapeHtml(tag)}</strong><span>${escapeHtml(themeNotes[tag].note)}</span></li>`).join("");

  document.querySelector("#detail-content").innerHTML = `
    <p class="eyebrow detail-kicker">${typeIcons[item.type]} &nbsp;${typeNames[item.type].toUpperCase()} GUIDE <span>·</span> ${escapeHtml(item.maker)}</p>
    <h2 id="detail-title">${escapeHtml(item.title)}</h2>
    <div class="detail-age-row"><div class="detail-age${item.provisional ? " age-provisional" : ""}"><span>${item.provisional ? "ESTIMATED AGE" : "OUR GUIDE AGE"}</span><strong>${item.provisional ? "~" : ""}${item.age}+</strong></div><p>${escapeHtml(ageNote)}</p></div>
    <p class="detail-rating"><strong>${item.provisional ? "Catalog status:" : "Listed label:"}</strong> ${escapeHtml(item.provisional ? "Provisional age estimate · not reviewed" : item.rating)}${item.provisional ? " · No official rating or content notes have been verified." : " · Ratings can vary by region, edition, or platform."}</p>
    <div class="detail-sections">
      <section class="detail-section"><h3>Why it might be a good fit</h3>${positives.length ? `<ul>${themeList(positives)}</ul>` : `<p class="detail-empty">${item.provisional ? "Positive themes have not been reviewed for this listing yet." : "This guide doesn't flag specific positive themes for this title."}</p>`}</section>
      <section class="detail-section detail-consider"><h3>Things to consider</h3>${concerns.length ? `<ul>${themeList(concerns)}</ul>` : "<p class=\"detail-empty\">No specific concerns are flagged in this guide. Check the local rating for full details.</p>"}</section>
    </div>
    <p class="detail-footnote">${item.provisional ? "The ~13+ value is a temporary category-wide placeholder, not a researched age recommendation. The source spreadsheet marks this entry for verification." : item.type === "creator" ? "Creator guidance is a broad starting point, not a rating for every video. Topics, ads, and tone can change between uploads; preview the exact video and review autoplay recommendations." : "These notes summarize common themes; they aren't a scene-by-scene review. Your child's sensitivities and maturity matter too."}</p>`;
  document.querySelector("#title-dialog").showModal();
}

render();

fetch("catalog-review.json")
  .then((response) => {
    if (!response.ok) throw new Error("Catalog could not be loaded");
    return response.json();
  })
  .then((records) => {
    const existingKeys = new Set(curatedTitles.map(titleKey));
    titles = [...curatedTitles, ...records.filter((item) => !existingKeys.has(titleKey(item))).map((item) => ({ ...item, age: 13, provisional: true }))];
    render();
  })
  .catch(() => {});