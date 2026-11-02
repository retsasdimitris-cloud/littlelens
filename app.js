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
const creatorArtworkPromise = fetch("creator-covers.json?v=20261102-local-photos")
  .then((response) => response.ok ? response.json() : {})
  .catch(() => ({}));
const pageSize = 40;
const interfaceMessages = {
  en: {
    family: "YOUR FAMILY", discover: "Discover", profile: "My profile", saved: "Saved", everyFamily: "Every family has its own lens.", familyNote: "Use our guide as a starting point, then decide what feels right for yours.", peaceOfMind: "A little more peace of mind", familyGuide: "FAMILY GUIDE", aboutGuide: "About our guide", showingPicks: "SHOWING PICKS FOR", preferences: "Preferences", manageProfiles: "Manage profiles", welcomeEyebrow: "MAKE ROOM FOR THE GOOD STUFF", welcomeTitle: "A clearer way<br />to <span>choose.</span>", welcomeCopy: "A little context goes a long way. Find the right next watch, read, or play for your family.", welcomeArt: "A warm, quiet corner with a book, film and game for family time", artCaption: "GOOD STORIES<br />GROW WITH THEM", searchLabel: "WHAT ARE YOU CURIOUS ABOUT?", searchHint: "Try a title or a topic", searchPlaceholder: "Search a film, series, game, book, or creator...", findGuide: "Find a guide", everything: "Everything", films: "Films", series: "Series", games: "Games", books: "Books", creators: "Creators", ageUpTo: "AGE UP TO", childAge: "Child's age", resultsKicker: "A FEW GOOD PLACES TO START", popularTitles: "Popular with families", clearFilters: "Clear filters", ageFootnote: "Age guidance is a starting point, not a rulebook. Ratings vary by country, and every kid is different.", aboutTitle: "A NOTE FROM US", aboutHeading: "Helpful context.<br /><span>Your call.</span>", aboutParagraph1: "Little Lens is a small, hand-curated guide to common titles. Ages are recommendations, not guarantees, and a title's official rating can vary by country, edition, or platform.", aboutParagraph2: "We call out common themes to help you decide what fits your child. We don't have a verified guide for every title yet; when we don't, we'll say so rather than guess.", aboutParagraph3: "When there is no verified Greek/PEGI rating, Little Lens uses a title-specific recommendation when a source is available or a Little Lens estimate based on the choice itself. Estimates are not official ratings, and creator channels can vary from video to video.", aboutLast: "You know your kid best. That's the lens that matters.", gotIt: "Got it", close: "Close", closeDetails: "Close title details", profileDialogEyebrow: "A LENS FOR EVERY KID", childProfiles: "Child profiles", profiles: "Profiles", addChild: "+ Add a child", childName: "Child's name", age: "Age", genresPrioritize: "Genres to prioritize", genresHint: "We'll bring these closer to the top.", themesAvoid: "Themes to avoid", avoidHint: "Titles with these content notes won't appear in this child's picks.", deleteProfile: "Delete profile", clearLearning: "Clear learned interests", saveProfile: "Save profile", childNamePlaceholder: "e.g. Alex", all: "All", prev: "Prev", next: "Next", goTo: "Go to", language: "Language", profileYourLens: "YOUR LENS", profile: "My profile", profileLabel: "PROFILE", savedTitles: "saved titles", likes: "likes", saved: "Saved", genres: "Genres", avoid: "Avoid", favoriteGenres: "Favorite genres", noFavoriteGenres: "No favorite genres yet", noThemesFiltered: "No themes are being filtered out", recentSearches: "Recent searches", clear: "Clear", familyAccounts: "Family accounts", active: "Active", switch: "Switch", profilePreferences: "Preferences", profileEdit: "Edit", titlesFor: "Ideas for {name}", savedTitleHeading: "Your saved titles", guideMatches: "Guide matches", guides: "guides", guide: "guide", resultFor: "for", prioritizeSummary: " Prioritizing {genres}.", avoidSummary: " Avoiding {themes}.", learningSummary: " Tuned by {likes} saved {titleWord} and {searches} recent {searchWord}.", learningEmpty: " Save titles or search to make these picks more personal.", pendingNotice: " {count} imported listings are still awaiting a full review; check the official rating before deciding.", searchContext: "Select a result to see its notes.", youSearched: "YOU SEARCHED FOR", picksFor: "PICKS FOR", noResultsSaved: "Your shortlist is ready when you are", noResultsTitle: "No guide for that title yet", noResultsReview: "This title still needs a full review", noResultsFilters: "No titles match those filters", noResultsSavedCopy: "Save a title with the heart button and it will be here next time you visit.", noResultsReviewCopy: "This listing is still awaiting a full content review. Check the official rating and preview the title before deciding.", noResultsSearchCopy: "We don't have a verified guide for “{query}” yet. Try another title, or check the rating board in your region.", noResultsFiltersCopy: "Try a different age range or media type, or clear your filters to see all titles.", browseAll: "Browse all guides", yourLens: "YOUR LENS", profileFor: "Profile for {name}", ageSavedLikes: "Age {age} • {saved} saved titles • {likes} likes", noProfileSearches: "No recent searches yet", familyExperiences: "FAMILY EXPERIENCES", ratingsNotes: "Ratings & notes", noRatings: "No ratings yet", reviewPrivacy: "These notes are saved in this browser only. They are not shared with other families.", noFamilyNotes: "No family notes for this title yet. Add the first one for {name}.", reviewPrompt: "How did it fit your child?", selectStars: "Select one to five stars.", yourRating: "Your rating", overallFit: "Overall fit", chooseFit: "Choose an overall fit", notFit: "Not a fit", poorFit: "Poor fit", mixedFit: "Mixed fit", goodFit: "Good fit", greatFit: "Great fit", commentLabel: "Your comment", commentPlaceholder: "What worked well, or what should another family know?", savedOnDevice: "Saved under {name} on this device.", saveNote: "Save note", oneStar: "star", manyStars: "stars", closeGuide: "Close guide", typeGuide: "{type} GUIDE", officialRating: "OFFICIAL RATING", ageStatus: "AGE STATUS", suggestedAge: "SUGGESTED AGE", description: "Description", themesFit: "Themes & why it might be a good fit", consider: "Things to consider", research: "Review", allAges: "All", ageNeedsResearch: "Age needs title-specific research", estimatedAge: "Estimated age {age} and up", officialAge: "{rating}, age {age} and up", remove: "Remove", save: "Save", showRatingReasons: "Show the official rating and reasons for {title}", searchGuideAge: "guide age {age} or younger", priority: "Prioritizing", avoidLabel: "Avoiding", officialRatingMissing: "Greek official rating not verified", ratingStatuses: "Greek official rating not verified", saveContext: "Saved", estimate: "ESTIMATE", researchLabel: "RESEARCH", profileKicker: "PERSONALIZED FOR {name}", savedKicker: "KEPT CLOSE FOR LATER", searchKicker: "HERE'S WHAT WE FOUND", discoverTitle: "A clearer way<br />to <span>choose.</span>", savedTitle: "Your family's<br /><span>shortlist.</span>", noFavoriteThemes: "No themes are being filtered out", titleSpecificPending: "Title-specific age research needed", officialGreecePegi: "Official Greece/PEGI rating", estimateSource: "Little Lens estimate", estimatedAgeLabel: "ESTIMATE", awaitingReview: "Awaiting review", exploreAll: "All titles", closeButtonLabel: "Close", greekLanguage: "Greek", englishLanguage: "English"
  },
  el: {
    family: "Η ΟΙΚΟΓΕΝΕΙΑ ΣΑΣ", discover: "Ανακάλυψη", profile: "Το προφίλ μου", saved: "Αποθηκευμένα", everyFamily: "Κάθε οικογένεια βλέπει τον κόσμο με τον δικό της φακό.", familyNote: "Χρησιμοποιήστε τον οδηγό ως αφετηρία και αποφασίστε τι ταιριάζει στη δική σας οικογένεια.", peaceOfMind: "Λίγη περισσότερη σιγουριά", familyGuide: "ΟΙΚΟΓΕΝΕΙΑΚΟΣ ΟΔΗΓΟΣ", aboutGuide: "Σχετικά με τον οδηγό", showingPicks: "ΠΡΟΤΑΣΕΙΣ ΓΙΑ", preferences: "Προτιμήσεις", manageProfiles: "Διαχείριση προφίλ", welcomeEyebrow: "ΧΩΡΟΣ ΓΙΑ Ο,ΤΙ ΑΞΙΖΕΙ", welcomeTitle: "Ένας πιο καθαρός<br />τρόπος να <span>επιλέξετε.</span>", welcomeCopy: "Λίγο πλαίσιο βοηθά πολύ. Βρείτε την επόμενη ταινία, σειρά, ανάγνωση ή παιχνίδι για την οικογένειά σας.", welcomeArt: "Μια ζεστή, ήσυχη γωνιά με βιβλίο, ταινία και παιχνίδι για την οικογένεια", artCaption: "ΟΙ ΟΜΟΡΦΕΣ ΙΣΤΟΡΙΕΣ<br />ΜΕΓΑΛΩΝΟΥΝ ΜΑΖΙ ΤΟΥΣ", searchLabel: "ΤΙ ΘΑ ΘΕΛΑΤΕ ΝΑ ΑΝΑΚΑΛΥΨΕΤΕ;", searchHint: "Δοκιμάστε έναν τίτλο ή θέμα", searchPlaceholder: "Αναζητήστε ταινία, σειρά, παιχνίδι, βιβλίο ή δημιουργό...", findGuide: "Βρείτε οδηγό", everything: "Όλα", films: "Ταινίες", series: "Σειρές", games: "Παιχνίδια", books: "Βιβλία", creators: "Δημιουργοί", ageUpTo: "ΗΛΙΚΙΑ ΕΩΣ", childAge: "Ηλικία παιδιού", resultsKicker: "ΜΕΡΙΚΕΣ ΚΑΛΕΣ ΙΔΕΕΣ ΓΙΑ ΑΡΧΗ", popularTitles: "Αγαπημένα των οικογενειών", clearFilters: "Καθαρισμός φίλτρων", ageFootnote: "Οι ηλικιακές προτάσεις είναι αφετηρία, όχι κανόνας. Οι αξιολογήσεις διαφέρουν ανά χώρα και κάθε παιδί είναι διαφορετικό.", aboutTitle: "ΛΙΓΑ ΛΟΓΙΑ ΑΠΟ ΕΜΑΣ", aboutHeading: "Χρήσιμες πληροφορίες.<br /><span>Η επιλογή δική σας.</span>", aboutParagraph1: "Το Little Lens είναι ένας μικρός, επιμελημένος οδηγός για γνωστούς τίτλους. Οι ηλικίες είναι προτάσεις, όχι εγγυήσεις, και η επίσημη αξιολόγηση μπορεί να διαφέρει ανά χώρα, έκδοση ή πλατφόρμα.", aboutParagraph2: "Επισημαίνουμε συχνά θέματα για να σας βοηθήσουμε να κρίνετε τι ταιριάζει στο παιδί σας. Δεν έχουμε ακόμη επιβεβαιωμένο οδηγό για κάθε τίτλο· όταν δεν έχουμε, το λέμε αντί να μαντεύουμε.", aboutParagraph3: "Όταν δεν υπάρχει επιβεβαιωμένη ελληνική αξιολόγηση ή PEGI, το Little Lens χρησιμοποιεί ειδική πρόταση για τον τίτλο, όταν υπάρχει πηγή, ή δική του εκτίμηση. Οι εκτιμήσεις δεν είναι επίσημες αξιολογήσεις και το περιεχόμενο των δημιουργών μπορεί να διαφέρει από βίντεο σε βίντεο.", aboutLast: "Εσείς γνωρίζετε καλύτερα το παιδί σας. Αυτός είναι ο σημαντικότερος φακός.", gotIt: "Εντάξει", close: "Κλείσιμο", closeDetails: "Κλείσιμο λεπτομερειών τίτλου", profileDialogEyebrow: "ΕΝΑΣ ΦΑΚΟΣ ΓΙΑ ΚΑΘΕ ΠΑΙΔΙ", childProfiles: "Προφίλ παιδιών", profiles: "Προφίλ", addChild: "+ Προσθήκη παιδιού", childName: "Όνομα παιδιού", age: "Ηλικία", genresPrioritize: "Προτεραιότητα σε είδη", genresHint: "Θα τα φέρνουμε πιο ψηλά στις προτάσεις.", themesAvoid: "Θέματα προς αποφυγή", avoidHint: "Τίτλοι με αυτές τις σημειώσεις δεν θα εμφανίζονται στις προτάσεις αυτού του παιδιού.", deleteProfile: "Διαγραφή προφίλ", clearLearning: "Εκκαθάριση ενδιαφερόντων", saveProfile: "Αποθήκευση προφίλ", childNamePlaceholder: "π.χ. Αλέξης", all: "Όλα", prev: "Προηγούμενη", next: "Επόμενη", goTo: "Μετάβαση", language: "Γλώσσα", profileYourLens: "Ο ΔΙΚΟΣ ΣΑΣ ΦΑΚΟΣ", profileLabel: "ΠΡΟΦΙΛ", savedTitles: "αποθηκευμένοι τίτλοι", likes: "μου αρέσουν", genres: "Είδη", avoid: "Αποφυγή", favoriteGenres: "Αγαπημένα είδη", noFavoriteGenres: "Δεν έχουν επιλεγεί αγαπημένα είδη", noThemesFiltered: "Δεν αποκλείονται θέματα", recentSearches: "Πρόσφατες αναζητήσεις", clear: "Εκκαθάριση", familyAccounts: "Οικογενειακοί λογαριασμοί", active: "Ενεργό", switch: "Εναλλαγή", profilePreferences: "Προτιμήσεις", profileEdit: "Επεξεργασία", titlesFor: "Ιδέες για {name}", savedTitleHeading: "Οι αποθηκευμένοι τίτλοι σας", guideMatches: "Αποτελέσματα οδηγού", guides: "οδηγοί", guide: "οδηγός", resultFor: "για", prioritizeSummary: " Με προτεραιότητα στα {genres}.", avoidSummary: " Με αποφυγή των θεμάτων: {themes}.", learningSummary: " Προσαρμοσμένο από {likes} αποθηκευμένους τίτλους και {searches} πρόσφατες αναζητήσεις.", learningEmpty: " Αποθηκεύστε τίτλους ή αναζητήστε για πιο προσωπικές προτάσεις.", pendingNotice: " {count} εισαγόμενες καταχωρίσεις χρειάζονται ακόμη πλήρη αξιολόγηση· ελέγξτε την επίσημη ηλικιακή ένδειξη πριν αποφασίσετε.", searchContext: "Επιλέξτε έναν τίτλο για να δείτε τις σημειώσεις του.", youSearched: "ΑΝΑΖΗΤΗΣΑΤΕ", picksFor: "ΠΡΟΤΑΣΕΙΣ ΓΙΑ", noResultsSaved: "Η λίστα σας θα σας περιμένει εδώ", noResultsTitle: "Δεν υπάρχει ακόμη οδηγός για αυτόν τον τίτλο", noResultsReview: "Αυτός ο τίτλος χρειάζεται πλήρη αξιολόγηση", noResultsFilters: "Κανένας τίτλος δεν ταιριάζει στα φίλτρα", noResultsSavedCopy: "Αποθηκεύστε έναν τίτλο με το εικονίδιο καρδιάς για να εμφανιστεί εδώ.", noResultsReviewCopy: "Αυτή η καταχώριση δεν έχει ακόμη πλήρη αξιολόγηση περιεχομένου. Ελέγξτε την επίσημη ένδειξη και δείτε τον τίτλο πριν αποφασίσετε.", noResultsSearchCopy: "Δεν έχουμε επιβεβαιωμένο οδηγό για «{query}» ακόμη. Δοκιμάστε άλλον τίτλο ή ελέγξτε την αρμόδια αρχή αξιολόγησης της περιοχής σας.", noResultsFiltersCopy: "Δοκιμάστε άλλη ηλικία ή κατηγορία ή καθαρίστε τα φίλτρα για να δείτε όλους τους τίτλους.", browseAll: "Περιήγηση σε όλους τους οδηγούς", yourLens: "Ο ΔΙΚΟΣ ΣΑΣ ΦΑΚΟΣ", profileFor: "Προφίλ για {name}", ageSavedLikes: "Ηλικία {age} • {saved} αποθηκευμένοι τίτλοι • {likes} αγαπημένοι", noProfileSearches: "Δεν υπάρχουν πρόσφατες αναζητήσεις", familyExperiences: "ΕΜΠΕΙΡΙΕΣ ΟΙΚΟΓΕΝΕΙΩΝ", ratingsNotes: "Αξιολογήσεις & σημειώσεις", noRatings: "Δεν υπάρχουν αξιολογήσεις", reviewPrivacy: "Οι σημειώσεις αποθηκεύονται μόνο σε αυτό το πρόγραμμα περιήγησης. Δεν κοινοποιούνται σε άλλες οικογένειες.", noFamilyNotes: "Δεν υπάρχουν ακόμη οικογενειακές σημειώσεις για αυτόν τον τίτλο. Προσθέστε την πρώτη για τον/την {name}.", reviewPrompt: "Πόσο ταίριαξε στο παιδί σας;", selectStars: "Επιλέξτε από ένα έως πέντε αστέρια.", yourRating: "Η αξιολόγησή σας", overallFit: "Συνολική καταλληλότητα", chooseFit: "Επιλέξτε καταλληλότητα", notFit: "Δεν ταίριαξε", poorFit: "Ταίριαξε λίγο", mixedFit: "Μέτρια", goodFit: "Ταίριαξε καλά", greatFit: "Ταίριαξε πολύ", commentLabel: "Το σχόλιό σας", commentPlaceholder: "Τι λειτούργησε καλά ή τι θα ήταν χρήσιμο να γνωρίζει μια άλλη οικογένεια;", savedOnDevice: "Αποθηκεύτηκε για τον/την {name} σε αυτή τη συσκευή.", saveNote: "Αποθήκευση σημείωσης", oneStar: "αστέρι", manyStars: "αστέρια", closeGuide: "Κλείσιμο οδηγού", typeGuide: "ΟΔΗΓΟΣ {type}", officialRating: "ΕΠΙΣΗΜΗ ΑΞΙΟΛΟΓΗΣΗ", ageStatus: "ΗΛΙΚΙΑΚΗ ΕΝΔΕΙΞΗ", suggestedAge: "ΠΡΟΤΕΙΝΟΜΕΝΗ ΗΛΙΚΙΑ", description: "Περιγραφή", themesFit: "Θέματα και λόγοι καταλληλότητας", consider: "Τι να λάβετε υπόψη", research: "Έλεγχος", allAges: "Όλες", ageNeedsResearch: "Χρειάζεται ειδική έρευνα ηλικίας για τον τίτλο", estimatedAge: "Εκτιμώμενη ηλικία {age}+", officialAge: "{rating}, ηλικία {age}+", remove: "Αφαίρεση", save: "Αποθήκευση", showRatingReasons: "Δείτε την επίσημη αξιολόγηση και τους λόγους για το {title}", searchGuideAge: "οδηγός για ηλικία {age} ή μικρότερη", priority: "Με προτεραιότητα", avoidLabel: "Με αποφυγή", officialRatingMissing: "Δεν έχει επιβεβαιωθεί επίσημη ελληνική αξιολόγηση", ratingStatuses: "Δεν έχει επιβεβαιωθεί επίσημη ελληνική αξιολόγηση", saveContext: "Αποθηκευμένα", estimate: "ΕΚΤΙΜΗΣΗ", researchLabel: "ΕΛΕΓΧΟΣ", profileKicker: "ΠΡΟΣΑΡΜΟΣΜΕΝΑ ΓΙΑ {name}", savedKicker: "ΑΠΟΘΗΚΕΥΜΕΝΑ ΓΙΑ ΑΡΓΟΤΕΡΑ", searchKicker: "ΑΥΤΑ ΒΡΗΚΑΜΕ", discoverTitle: "Ένας πιο καθαρός<br />τρόπος να <span>επιλέξετε.</span>", savedTitle: "Η οικογενειακή σας<br /><span>λίστα.</span>", noFavoriteThemes: "Δεν αποκλείονται θέματα", titleSpecificPending: "Χρειάζεται ειδική έρευνα ηλικίας για τον τίτλο", officialGreecePegi: "Επίσημη αξιολόγηση Ελλάδας/PEGI", estimateSource: "Εκτίμηση Little Lens", estimatedAgeLabel: "ΕΚΤΙΜΗΣΗ", awaitingReview: "Σε αναμονή αξιολόγησης", exploreAll: "Όλοι οι τίτλοι", closeButtonLabel: "Κλείσιμο", greekLanguage: "Ελληνικά", englishLanguage: "Αγγλικά"
  }
};
let currentLanguage = readStoredJson("little-lens-language", "en");
if (!interfaceMessages[currentLanguage]) currentLanguage = "en";
Object.assign(interfaceMessages.en, {
  film: "Film", book: "Book", creator: "Creator", titleOpenStart: "A clearer way", titleOpenEnd: "choose.", noFavoriteGenres: "No favorite genres yet", savedOnDevice: "Saved under {name} on this device.", footerDisclaimer: "Age guidance is a starting point, not a rulebook. Ratings vary by country, and every kid is different.", discoverWord: "Discover", resultGuide: "guide", resultGuides: "guides", starLabel: "{count} out of 5 stars", ageProfile: "Child's age", titleDialogClose: "Close title details", iconLanguage: "Language", pagination: "Pagination", pageNumber: "Page number", goToPage: "Go to page {page}", familyProfileTitle: "Your family<br /><span>profile.</span>", shortlistTitle: "Your family's<br /><span>shortlist.</span>", discoverTitleHtml: "A clearer way<br />to <span>choose.</span>", profileViewLabel: "PROFILE", profileViewKicker: "YOUR LENS", clearProfileSearches: "Clear", titleResultsKicker: "A FEW GOOD PLACES TO START", titleResultsHeading: "Popular with families", guideLabel: "guide", guidesLabel: "guides", titleDetailKicker: "FAMILY EXPERIENCES", titleDescriptionLabel: "Description", titleConsider: "Things to consider", firstProfile: "My child", ratingMovie: "Greek film classification not verified", ratingSeries: "Greek series rating not verified", ratingGame: "PEGI rating not verified", ratingBook: "No standard official book age rating", ratingCreator: "No channel-wide official rating", noTags: "No specific concerns are flagged in this guide. Check the local rating for full details.", profileAgeSummary: "Age {age} • {saved} saved titles • {likes} likes", searchAgeSummary: "guide age {age} or younger", searchResultIntro: "{count} {guideWord} for {name}.", profileAgeOption: "{age} · age {number}"
});
Object.assign(interfaceMessages.el, {
  film: "Ταινία", book: "Βιβλίο", creator: "Δημιουργός", titleOpenStart: "Ένας πιο καθαρός τρόπος", titleOpenEnd: "να επιλέξετε.", noFavoriteGenres: "Δεν έχουν επιλεγεί αγαπημένα είδη", savedOnDevice: "Αποθηκεύτηκε για τον/την {name} σε αυτή τη συσκευή.", footerDisclaimer: "Οι ηλικιακές προτάσεις είναι αφετηρία, όχι κανόνας. Οι αξιολογήσεις διαφέρουν ανά χώρα και κάθε παιδί είναι διαφορετικό.", discoverWord: "Ανακάλυψη", resultGuide: "οδηγός", resultGuides: "οδηγοί", starLabel: "{count} από 5 αστέρια", ageProfile: "Ηλικία παιδιού", titleDialogClose: "Κλείσιμο λεπτομερειών τίτλου", iconLanguage: "Γλώσσα", pagination: "Σελιδοποίηση", pageNumber: "Αριθμός σελίδας", goToPage: "Μετάβαση στη σελίδα {page}", familyProfileTitle: "Η οικογένειά σας<br /><span>με τον δικό της φακό.</span>", shortlistTitle: "Η οικογενειακή σας<br /><span>λίστα.</span>", discoverTitleHtml: "Ένας πιο καθαρός<br />τρόπος να <span>επιλέξετε.</span>", profileViewLabel: "ΠΡΟΦΙΛ", profileViewKicker: "Ο ΔΙΚΟΣ ΣΑΣ ΦΑΚΟΣ", clearProfileSearches: "Εκκαθάριση", titleResultsKicker: "ΜΕΡΙΚΕΣ ΚΑΛΕΣ ΙΔΕΕΣ ΓΙΑ ΑΡΧΗ", titleResultsHeading: "Αγαπημένα των οικογενειών", guideLabel: "οδηγός", guidesLabel: "οδηγοί", titleDetailKicker: "ΕΜΠΕΙΡΙΕΣ ΟΙΚΟΓΕΝΕΙΩΝ", titleDescriptionLabel: "Περιγραφή", titleConsider: "Τι να λάβετε υπόψη", firstProfile: "Το παιδί μου", ratingMovie: "Δεν έχει επιβεβαιωθεί ελληνική κινηματογραφική κατάταξη", ratingSeries: "Δεν έχει επιβεβαιωθεί ελληνική αξιολόγηση σειράς", ratingGame: "Δεν έχει επιβεβαιωθεί αξιολόγηση PEGI", ratingBook: "Δεν υπάρχει ενιαία επίσημη ηλικιακή αξιολόγηση βιβλίων", ratingCreator: "Δεν υπάρχει επίσημη αξιολόγηση για όλο το κανάλι", noTags: "Δεν επισημαίνονται συγκεκριμένες ανησυχίες σε αυτόν τον οδηγό. Ελέγξτε την τοπική αξιολόγηση για λεπτομέρειες.", profileAgeSummary: "Ηλικία {age} • {saved} αποθηκευμένοι τίτλοι • {likes} αγαπημένοι", searchAgeSummary: "οδηγός για ηλικία {age} ή μικρότερη", searchResultIntro: "{count} {guideWord} για {name}.", profileAgeOption: "{age} · ηλικία {number}"
});
function t(key, values = {}) {
  let message = interfaceMessages[currentLanguage][key] || interfaceMessages.en[key] || key;
  Object.entries(values).forEach(([name, value]) => { message = message.replaceAll(`{${name}}`, value); });
  return message;
}
const greekTerms = {
  "Animation": "Κινούμενα σχέδια", "Fantasy": "Φαντασία", "Adventure": "Περιπέτεια", "Comedy": "Κωμωδία", "Science & nature": "Επιστήμη και φύση", "Family & friendship": "Οικογένεια και φιλία", "Puzzles & building": "Γρίφοι και κατασκευές", "Sports & competition": "Αθλητισμός και ανταγωνισμός", "Mystery & spooky": "Μυστήριο και αγωνία", "Action": "Δράση",
  "Action violence": "Βία δράσης", "Animal peril": "Κίνδυνος για ζώα", "Anxiety": "Άγχος", "Belonging": "Αίσθηση του ανήκειν", "Cartoon action": "Κινούμενη δράση", "Cartoon combat": "Χιουμοριστικές μάχες", "Co-op play": "Συνεργατικό παιχνίδι", "Competition": "Ανταγωνισμός", "Creativity": "Δημιουργικότητα", "Creepy imagery": "Ανατριχιαστικές εικόνες", "Family": "Οικογένεια", "Family life": "Οικογενειακή ζωή", "Family pressure": "Οικογενειακή πίεση", "Family separation": "Οικογενειακός αποχωρισμός", "Family themes": "Οικογενειακά θέματα", "Fantasy action": "Φανταστική δράση", "Fantasy battles": "Φανταστικές μάχες", "Fantasy combat": "Φανταστικές συγκρούσεις", "Fantasy peril": "Φανταστικός κίνδυνος", "Fantasy violence": "Φανταστική βία", "Friendly competition": "Φιλικός ανταγωνισμός", "Friendship": "Φιλία", "Gentle humor": "Ήπιο χιούμορ", "Growing up": "Μεγαλώνοντας", "Horror": "Τρόμος", "Horror imagery": "Εικόνες τρόμου", "Intense peril": "Έντονος κίνδυνος", "Kindness": "Καλοσύνη", "Life themes": "Θέματα ζωής", "Loss": "Απώλεια", "Magic": "Μαγεία", "Mild language": "Ήπια γλώσσα", "Mild peril": "Ήπιος κίνδυνος", "Mythical violence": "Μυθολογική βία", "Ocean peril": "Θαλάσσιος κίνδυνος", "Online chat": "Διαδικτυακή συνομιλία", "Online features": "Διαδικτυακές λειτουργίες", "Online interactions": "Διαδικτυακές αλληλεπιδράσεις", "Online play": "Διαδικτυακό παιχνίδι", "Peril": "Κίνδυνος", "Sacrifice": "Θυσία", "Scary scenes": "Τρομακτικές σκηνές", "Survival themes": "Θέματα επιβίωσης", "Bullying": "Εκφοβισμός", "Awaiting review": "Σε αναμονή αξιολόγησης", "Difficult themes": "Δύσκολα θέματα", "Gentle learning": "Ήπια μάθηση", "Physical stunts": "Σωματικά ακροβατικά", "Science and engineering": "Επιστήμη και μηχανική", "Science topics": "Επιστημονικά θέματα", "Sponsored segments": "Χορηγούμενα τμήματα", "Varies by upload": "Διαφέρει ανά βίντεο", "Wildlife encounters": "Συναντήσεις με άγρια ζώα", "Violence": "Βία", "Not a fit": "Δεν ταίριαξε", "Poor fit": "Ταίριαξε λίγο", "Mixed fit": "Μέτρια", "Good fit": "Ταίριαξε καλά", "Great fit": "Ταίριαξε πολύ"
};
const greekThemeNotes = {
  "Action violence": "Οι υπερηρωικές μάχες και οι σκηνές δράσης περιλαμβάνουν πιο έντονη σωματική σύγκρουση.",
  "Animal peril": "Ζώα αντιμετωπίζουν κίνδυνο, κάτι που μπορεί να αναστατώσει παιδιά ευαίσθητα σε τέτοιες ιστορίες.",
  "Anxiety": "Η ιστορία πραγματεύεται το άγχος και περιλαμβάνει στιγμές συναισθηματικής έντασης.",
  "Belonging": "Η σύνδεση με άλλους και η εύρεση μιας θέσης ανήκουν στα βασικά θετικά θέματα.",
  "Cartoon action": "Η δράση είναι υπερβολική και παιχνιδιάρικη, όχι ρεαλιστική.",
  "Cartoon combat": "Οι χαρακτήρες μάχονται με στυλιζαρισμένο, μη ρεαλιστικό τρόπο.",
  "Co-op play": "Το συνεργατικό παιχνίδι δίνει στα παιδιά την ευκαιρία να δουλέψουν μαζί.",
  "Competition": "Η εκπομπή περιστρέφεται γύρω από έναν διαγωνισμό, συνήθως σε ανάλαφρο τόνο.",
  "Creativity": "Το ελεύθερο παιχνίδι ενθαρρύνει τις κατασκευές, τη διακόσμηση και τη φαντασία.",
  "Creepy imagery": "Οι αλλόκοτες εικόνες και ιδέες μπορεί να αναστατώσουν ευαίσθητους αναγνώστες.",
  "Family": "Οι οικογενειακοί δεσμοί και οι σχέσεις έχουν σημαντικό ρόλο στην ιστορία.",
  "Family life": "Η καθημερινότητα και οι οικογενειακές σχέσεις βρίσκονται στο επίκεντρο της σειράς.",
  "Family pressure": "Οι χαρακτήρες βιώνουν πίεση και συγκρούσεις μέσα στην οικογένειά τους.",
  "Family separation": "Ένας γονέας και ένα παιδί αποχωρίζονται, κάτι που μπορεί να προκαλέσει στενοχώρια.",
  "Family themes": "Η ιστορία εξερευνά τις οικογενειακές σχέσεις, την ταυτότητα και τις προσδοκίες.",
  "Fantasy action": "Υπάρχουν μάχες και κίνδυνοι σε έναν φανταστικό κόσμο.",
  "Fantasy battles": "Πλάσματα μάχονται σε ένα πολύχρωμο, φανταστικό περιβάλλον.",
  "Fantasy combat": "Οι παίκτες μάχονται με φανταστικά πλάσματα· η δράση δεν είναι ρεαλιστική.",
  "Fantasy peril": "Οι χαρακτήρες αντιμετωπίζουν μαγικές απειλές και στιγμές κινδύνου.",
  "Fantasy violence": "Οι συγκρούσεις εκτυλίσσονται σε φανταστικό κόσμο και μπορεί να περιλαμβάνουν μάχες.",
  "Friendly competition": "Οι αγώνες έχουν παιχνιδιάρικο χαρακτήρα και βασίζονται στον φιλικό ανταγωνισμό.",
  "Friendship": "Η υποστηρικτική φιλία και η αλληλοβοήθεια αποτελούν θετικά στοιχεία της ιστορίας.",
  "Gentle humor": "Το χιούμορ είναι ήπιο και συνήθως καλοπροαίρετο.",
  "Growing up": "Οι χαρακτήρες διαχειρίζονται αλλαγές στα συναισθήματα, στις φιλίες ή στις ευθύνες τους.",
  "Horror": "Υπερφυσικός τρόμος και τρομακτικές σκηνές μπορεί να είναι έντονες για μικρότερα παιδιά.",
  "Horror imagery": "Μακάβριες και υπερφυσικές εικόνες μπορεί να φοβίσουν ορισμένους θεατές.",
  "Intense peril": "Οι χαρακτήρες αντιμετωπίζουν παρατεταμένο κίνδυνο και έντονες σκηνές καταδίωξης.",
  "Kindness": "Η ενσυναίσθηση, η καλοσύνη και η φροντίδα για τους άλλους επανέρχονται συχνά.",
  "Life themes": "Μέρος της εμπειρίας αποτελούν καθημερινές ευθύνες και σχέσεις.",
  "Loss": "Η ιστορία περιλαμβάνει πένθος και απώλεια αγαπημένων προσώπων.",
  "Magic": "Η μαγεία και τα ξόρκια αποτελούν μέρος ενός φανταστικού κόσμου.",
  "Mild language": "Υπάρχουν ήπιες βωμολοχίες· ελέγξτε τις λεπτομέρειες αξιολόγησης αν σας απασχολεί.",
  "Mild peril": "Υπάρχουν σύντομες στιγμές κινδύνου, που αντιμετωπίζονται σχετικά ήπια.",
  "Mythical violence": "Ήρωες μάχονται με μυθολογικά τέρατα σε ένα φανταστικό περιβάλλον.",
  "Ocean peril": "Οι χαρακτήρες αντιμετωπίζουν καταιγίδες, θαλάσσια πλάσματα και άλλους κινδύνους στη θάλασσα.",
  "Online chat": "Το διαδικτυακό παιχνίδι μπορεί να περιλαμβάνει συνομιλία· ελέγξτε τις ρυθμίσεις επικοινωνίας.",
  "Online features": "Ορισμένες λειτουργίες συνδέονται με άλλους παίκτες· ελέγξτε τις ρυθμίσεις απορρήτου.",
  "Online interactions": "Οι διαδικτυακές επισκέψεις επιτρέπουν αλληλεπίδραση με άλλους παίκτες· χρησιμοποιήστε τις ρυθμίσεις απορρήτου.",
  "Online play": "Το παιχνίδι πολλών παικτών μπορεί να συνδέσει παίκτες· ελέγξτε ποιοι μπορούν να συμμετέχουν και να επικοινωνούν με το παιδί.",
  "Peril": "Οι χαρακτήρες αντιμετωπίζουν κίνδυνο και αγωνία σε ορισμένα σημεία της ιστορίας.",
  "Sacrifice": "Ένας σημαντικός χαρακτήρας κάνει μια θυσία, κάτι που μπορεί να προκαλέσει λύπη ή συζήτηση.",
  "Scary scenes": "Ορισμένες σκηνές έχουν σχεδιαστεί ώστε να προκαλούν φόβο ή αγωνία.",
  "Survival themes": "Η ιστορία πραγματεύεται την επιβίωση σε επικίνδυνες συνθήκες υψηλού ρίσκου.",
  "Bullying": "Η ιστορία παρουσιάζει τον εκφοβισμό και τις επιπτώσεις του σε ένα παιδί και τους συνομηλίκους του.",
  "Awaiting review": "Η καταχώριση δεν έχει ακόμη ελεγχθεί πλήρως ως προς την ηλικία, την επίσημη αξιολόγηση και τα θέματα περιεχομένου.",
  "Difficult themes": "Ορισμένα θέματα μπορεί να είναι συναισθηματικά σύνθετα· δείτε το περιεχόμενο ή συζητήστε το μαζί.",
  "Gentle learning": "Τραγούδια, επανάληψη ή απλές εξηγήσεις εισάγουν ιδέες πρώιμης μάθησης.",
  "Physical stunts": "Τα βίντεο μπορεί να περιλαμβάνουν ακροβατικά· τονίστε ότι δεν πρέπει να τα μιμούνται στο σπίτι.",
  "Science and engineering": "Πειράματα και κατασκευές μπορούν να κεντρίσουν την περιέργεια· δείτε πρώτα τις οδηγίες.",
  "Science topics": "Τα εκπαιδευτικά βίντεο εξερευνούν επιστήμη και φύση· ορισμένα θέματα μπορεί να είναι σύνθετα.",
  "Sponsored segments": "Ορισμένα βίντεο μπορεί να περιλαμβάνουν συνεργασίες με εταιρείες, προώθηση προϊόντων ή έπαθλα.",
  "Varies by upload": "Ο τόνος και τα θέματα ενός δημιουργού μπορεί να αλλάζουν από βίντεο σε βίντεο· δεν πρόκειται για συνολική αξιολόγηση.",
  "Wildlife encounters": "Τα βίντεο δείχνουν πραγματικά ζώα· κοντινά πλάνα μπορεί να αναστατώσουν ή να μην είναι ασφαλές να μιμηθούν.",
  "Violence": "Η βία αποτελεί σημαντικό μέρος της ιστορίας· η έντασή της μπορεί να διαφέρει ανά επεισόδιο ή σκηνή."
};
function localizeTerm(value) {
  return currentLanguage === "el" ? greekTerms[value] || value : value;
}
function applyTranslations(root = document.body) {
  document.documentElement.lang = currentLanguage;
  const source = currentLanguage === "el" ? interfaceMessages.en : interfaceMessages.el;
  const target = currentLanguage === "el" ? interfaceMessages.el : interfaceMessages.en;
  const translations = new Map(Object.keys(source).map((key) => [source[key], target[key] || source[key]]));
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue.trim();
    if (translations.has(text)) node.nodeValue = node.nodeValue.replace(text, translations.get(text));
  }
  root.querySelectorAll?.("[aria-label], [placeholder], [title]").forEach((element) => {
    ["aria-label", "placeholder", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (translations.has(value)) element.setAttribute(attribute, translations.get(value));
    });
  });
  document.querySelectorAll(".language-switch").forEach((element) => element.setAttribute("aria-label", t("language")));
  document.querySelectorAll("[data-language]").forEach((button) => {
    const selected = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const pageTitle = document.querySelector("#page-title");
  if (pageTitle) {
    pageTitle.innerHTML = state.view === "profile" ? t("familyProfileTitle") : state.view === "saved" ? t("shortlistTitle") : t("discoverTitleHtml");
  }
  const breadcrumbCurrent = document.querySelector("#breadcrumb-current");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = state.view === "profile" ? t("profileLabel") : state.view === "saved" ? t("saved").toUpperCase() : t("discover").toUpperCase();
  const resultsKicker = document.querySelector("#results-kicker");
  if (resultsKicker) {
    resultsKicker.textContent = state.view === "profile" ? t("profileViewKicker") : state.view === "saved" ? t("savedKicker") : state.query ? t("searchKicker") : t("titleResultsKicker");
  }
  const resultsTitle = document.querySelector("#results-title");
  if (resultsTitle?.childNodes[0]) {
    resultsTitle.childNodes[0].textContent = state.view === "profile"
      ? t("profileFor", { name: getActiveProfile().name })
      : state.view === "saved" ? `${t("savedTitleHeading")} ` : state.query ? `${t("guideMatches")} ` : `${t("titlesFor", { name: getActiveProfile().name })} `;
  }
  const artCaption = document.querySelector(".art-caption");
  if (artCaption) {
    artCaption.innerHTML = state.view === "profile"
      ? currentLanguage === "el" ? "ΟΙΚΟΓΕΝΕΙΑΚΟΣ<br />ΦΑΚΟΣ" : "A LENS<br />FOR EVERY KID"
      : state.view === "saved" ? currentLanguage === "el" ? "ΟΙ ΙΣΤΟΡΙΕΣ<br />ΠΟΥ ΚΡΑΤΑΜΕ" : "STORIES<br />KEPT CLOSE"
        : t("artCaption");
  }
  const welcomeArt = document.querySelector(".welcome-art");
  if (welcomeArt) {
    welcomeArt.dataset.scene = state.view;
    welcomeArt.setAttribute("aria-label", currentLanguage === "el"
      ? state.view === "profile" ? "Εικονογράφηση με τα προφίλ γονέα και παιδιού" : state.view === "saved" ? "Εικονογράφηση με αποθηκευμένες ιστορίες" : t("welcomeArt")
      : state.view === "profile" ? "Illustration of the parent and child profiles" : state.view === "saved" ? "Illustration of saved stories" : t("welcomeArt"));
    const parentAvatar = document.querySelector("#art-parent-avatar");
    const childAvatar = document.querySelector("#art-child-avatar");
    if (parentAvatar) parentAvatar.textContent = getParentAvatar();
    if (childAvatar) childAvatar.textContent = getActiveProfile().avatar || defaultProfile.avatar;
  }
  const aboutHeading = document.querySelector(".about-dialog h2");
  if (aboutHeading) aboutHeading.innerHTML = t("aboutHeading");
  document.title = currentLanguage === "el" ? "Little Lens | Ένας πιο καθαρός τρόπος επιλογής" : "Little Lens | A clearer way to choose";
  const description = document.querySelector('meta[name="description"]');
  description.content = currentLanguage === "el"
    ? "Ένας προσεγμένος οδηγός για παιχνίδια, ταινίες, σειρές και βιβλία για την οικογένειά σας."
    : "A thoughtful guide to games, films, series and books for your family.";
}
const typeNames = { get movie() { return t("film"); }, get series() { return t("series"); }, get game() { return t("game"); }, get book() { return t("book"); }, get creator() { return t("creator"); } };
const typePlurals = { get movie() { return t("films"); }, get series() { return t("series"); }, get game() { return t("games"); }, get book() { return t("books"); }, get creator() { return t("creators"); } };
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
const defaultProfile = { id: "child-1", name: "My child", age: 8, avatar: "🐶", genres: [], avoid: [], likes: [], searches: [] };
const defaultParentAccount = { name: "Your name", avatar: "🦉" };
const profileAvatarOptions = ["🐶", "🐱", "🐻", "🦊", "🐼", "🐰", "🐴", "🐸", "🐯", "🐵", "🐨", "🐧"];
const profileAvatarLabels = ["Dog", "Cat", "Bear", "Fox", "Panda", "Rabbit", "Horse", "Frog", "Tiger", "Monkey", "Koala", "Penguin"];
const parentAvatarOptions = ["🦉", "🦅", "🐺", "🦁", "🐘", "🦒", "🐢", "🐬", "🦌", "🐋", "🦈", "🦚"];
const parentAvatarLabels = ["Owl", "Eagle", "Wolf", "Lion", "Elephant", "Giraffe", "Turtle", "Dolphin", "Deer", "Whale", "Shark", "Peacock"];
function readStoredJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}
let parentAccount = readStoredJson("little-lens-parent-account", { ...defaultParentAccount });
parentAccount = {
  ...defaultParentAccount,
  ...parentAccount,
  name: String(parentAccount?.name || "").trim() || defaultParentAccount.name,
  avatar: parentAvatarOptions.includes(parentAccount?.avatar) ? parentAccount.avatar : defaultParentAccount.avatar,
};
let profiles = readStoredJson("little-lens-profiles", [defaultProfile]);
if (!Array.isArray(profiles) || !profiles.length) profiles = [{ ...defaultProfile }];
profiles = profiles.map((profile, index) => ({
  ...defaultProfile,
  ...profile,
  id: profile.id || `child-${index + 1}`,
  age: Math.min(18, Math.max(2, Number(profile.age) || 8)),
  avatar: profileAvatarOptions.includes(profile.avatar) ? profile.avatar : defaultProfile.avatar,
  genres: Array.isArray(profile.genres) ? profile.genres : [],
  avoid: Array.isArray(profile.avoid) ? profile.avoid : [],
  likes: Array.isArray(profile.likes) ? profile.likes : [],
  searches: Array.isArray(profile.searches) ? profile.searches : [],
}));
let activeProfileId = readStoredJson("little-lens-active-profile", profiles[0].id);
if (!profiles.some((profile) => profile.id === activeProfileId)) activeProfileId = profiles[0].id;
const state = { query: "", type: "all", age: "profile", view: "discover", page: 1 };
const savedTitles = new Set(readStoredJson("little-lens-saved", []));
const titleReviews = readStoredJson("little-lens-reviews", {});

function getParentName() {
  return String(parentAccount?.name || "").trim() || defaultParentAccount.name;
}

function getParentAvatar() {
  return parentAvatarOptions.includes(parentAccount?.avatar) ? parentAccount.avatar : defaultParentAccount.avatar;
}

function persistParentAccount() {
  localStorage.setItem("little-lens-parent-account", JSON.stringify(parentAccount));
}

const results = document.querySelector("#results");
const searchInput = document.querySelector("#search-input");
const searchPanel = document.querySelector(".search-panel");
const ageFilter = document.querySelector("#age-filter");
const resultCount = document.querySelector("#result-count");
const searchContext = document.querySelector("#search-context");
const recommendationsContainer = document.querySelector("#recommendations-container");
const resultsSection = document.querySelector(".results-section");
searchContext.addEventListener("click", (event) => {
  const suggestionButton = event.target.closest("[data-search-suggestion]");
  if (!suggestionButton) return;
  state.query = suggestionButton.dataset.searchSuggestion;
  state.page = 1;
  searchInput.value = state.query;
  render();
});

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
  const messageKeys = { movie: "ratingMovie", series: "ratingSeries", game: "ratingGame", book: "ratingBook", creator: "ratingCreator" };
  return t(messageKeys[item.type] || "ratingStatuses");
}

function persistProfiles() {
  localStorage.setItem("little-lens-profiles", JSON.stringify(profiles));
  localStorage.setItem("little-lens-active-profile", JSON.stringify(activeProfileId));
}

function itemSearchText(item) {
  return `${item.title} ${item.type} ${item.maker} ${item.tags.join(" ")}`.toLowerCase();
}

function normalizeSearchTokens(value) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
}

function getEditDistance(first, second) {
  const matrix = Array.from({ length: first.length + 1 }, () => Array(second.length + 1).fill(0));
  for (let firstIndex = 0; firstIndex <= first.length; firstIndex += 1) matrix[firstIndex][0] = firstIndex;
  for (let secondIndex = 0; secondIndex <= second.length; secondIndex += 1) matrix[0][secondIndex] = secondIndex;
  for (let firstIndex = 1; firstIndex <= first.length; firstIndex += 1) {
    for (let secondIndex = 1; secondIndex <= second.length; secondIndex += 1) {
      const substitutionCost = first[firstIndex - 1] === second[secondIndex - 1] ? 0 : 1;
      matrix[firstIndex][secondIndex] = Math.min(
        matrix[firstIndex][secondIndex - 1] + 1,
        matrix[firstIndex - 1][secondIndex] + 1,
        matrix[firstIndex - 1][secondIndex - 1] + substitutionCost,
      );
      if (firstIndex > 1 && secondIndex > 1
        && first[firstIndex - 1] === second[secondIndex - 2]
        && first[firstIndex - 2] === second[secondIndex - 1]) {
        matrix[firstIndex][secondIndex] = Math.min(matrix[firstIndex][secondIndex], matrix[firstIndex - 2][secondIndex - 2] + 1);
      }
    }
  }
  return matrix[first.length][second.length];
}

function findTypoSuggestions(query) {
  const ignoredTerms = new Set(["a", "an", "and", "book", "creator", "film", "game", "of", "series", "the"]);
  const queryTokens = normalizeSearchTokens(query).filter((token) => !ignoredTerms.has(token));
  if (!queryTokens.length) return [];

  const normalizedQuery = normalizeSearchTokens(query).join(" ");
  const hasExactCatalogMatch = titles.some((item) => normalizeSearchTokens(itemSearchText(item)).join(" ").includes(normalizedQuery));
  if (hasExactCatalogMatch) return [];

  const candidates = new Map();
  titles.forEach((item) => {
    const searchableTokens = normalizeSearchTokens(itemSearchText(item));
    let distance = 0;
    for (const queryToken of queryTokens) {
      const maxDistance = queryToken.length < 3 ? 0 : queryToken.length < 4 ? 1 : 2;
      const bestDistance = Math.min(...searchableTokens.map((token) => getEditDistance(queryToken, token)));
      if (bestDistance > maxDistance) return;
      distance += bestDistance;
    }
    const current = candidates.get(item.title);
    if (current === undefined || distance < current) candidates.set(item.title, distance);
  });

  const sortedCandidates = [...candidates.entries()].sort((first, second) => first[1] - second[1]);
  if (!sortedCandidates.length) return [];
  const bestDistance = sortedCandidates[0][1];
  return sortedCandidates
    .filter(([, distance]) => distance <= bestDistance + 1)
    .slice(0, 3)
    .map(([title]) => title);
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

function getLikedRecommendations() {
  const profile = getActiveProfile();
  const savedTitleKeys = new Set([...savedTitles, ...profile.likes]);
  const likedTitles = titles.filter((item) => savedTitleKeys.has(titleKey(item)));
  if (!likedTitles.length) return [];

  const likedTags = new Set(likedTitles.flatMap((item) => item.tags));
  return titles
    .filter((item) => {
      const age = getAgeInfo(item).age;
      return !savedTitleKeys.has(titleKey(item))
        && (age === null || age <= getAgeLimit())
        && !item.tags.some((tag) => profile.avoid.includes(tag))
        && item.tags.some((tag) => likedTags.has(tag));
    })
    .map((item) => ({
      item,
      sharedTagCount: item.tags.filter((tag) => likedTags.has(tag)).length,
    }))
    .sort((first, second) => second.sharedTagCount - first.sharedTagCount
      || recommendationScore(second.item) - recommendationScore(first.item))
    .map(({ item }) => item)
    .slice(0, 12);
}

function renderRecommendedSection() {
  const recommendations = getLikedRecommendations();
  const title = currentLanguage === "el" ? "Προτεινόμενα για εσάς" : "Recommended for you";
  if (!recommendations.length) {
    const emptyMessage = currentLanguage === "el"
      ? "Αποθηκεύστε τίτλους που σας αρέσουν για να δείτε παρόμοιες προτάσεις."
      : "Save titles you like to see similar picks here.";
    return `<section class="recommendations-section" aria-labelledby="recommendations-title"><div class="recommendations-heading"><h2 id="recommendations-title">${title}</h2></div><p class="recommendations-empty">${emptyMessage}</p></section>`;
  }

  return `<section class="recommendations-section" aria-labelledby="recommendations-title">
    <div class="recommendations-heading"><h2 id="recommendations-title">${title}</h2>
      <div class="recommendation-controls">
        <button type="button" class="recommendation-arrow" data-recommend-scroll="-1" aria-label="${currentLanguage === "el" ? "Κύλιση προτάσεων αριστερά" : "Scroll recommendations left"}" title="${currentLanguage === "el" ? "Αριστερά" : "Scroll left"}">←</button>
        <button type="button" class="recommendation-arrow" data-recommend-scroll="1" aria-label="${currentLanguage === "el" ? "Κύλιση προτάσεων δεξιά" : "Scroll recommendations right"}" title="${currentLanguage === "el" ? "Δεξιά" : "Scroll right"}">→</button>
      </div>
    </div>
    <div class="recommendation-viewport" id="recommendation-viewport" tabindex="0" aria-label="${currentLanguage === "el" ? "Προτεινόμενοι τίτλοι" : "Recommended titles"}">
      <div class="recommendation-grid">${recommendations.map(cardTemplate).join("")}</div>
    </div>
  </section>`;
}

function setupRecommendationScroll() {
  const viewport = document.querySelector("#recommendation-viewport");
  if (viewport) {
    const leftButton = document.querySelector('[data-recommend-scroll="-1"]');
    const rightButton = document.querySelector('[data-recommend-scroll="1"]');
    const updateButtons = () => {
      leftButton.disabled = viewport.scrollLeft <= 0;
      rightButton.disabled = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 1;
    };
    viewport.addEventListener("scroll", updateButtons, { passive: true });
    updateButtons();
  }
  observeTitleArtwork();
}

function renderProfileControls() {
  const select = document.querySelector("#profile-select");
  select.innerHTML = profiles.map((profile) => `<option value="${escapeHtml(profile.id)}">${escapeHtml(profile.name)} · ${currentLanguage === "el" ? "ηλικία" : "age"} ${profile.age}</option>`).join("");
  select.value = activeProfileId;
}

function titleKey(item) {
  return `${item.type}:${item.title}`;
}

function getTitleDescription(item) {
  const catalogDetails = item.maker.split("·").map((part) => part.trim());
  const source = catalogDetails[0];
  const descriptor = catalogDetails[1];
  if (currentLanguage === "el") {
    const summaries = {
      movie: ["Η ιστορία ακολουθεί συνήθως έναν χαρακτήρα ή μια οικογένεια που αντιμετωπίζει μια πρόκληση, ένα ταξίδι ή μια σημαντική συναισθηματική στιγμή.", "Η αφήγηση μπορεί να είναι ζεστή, αστεία ή περιπετειώδης, με έμφαση στην ενσυναίσθηση και το θάρρος."],
      series: ["Η πλοκή εξελίσσεται σε επεισόδια και ακολουθεί τους ίδιους χαρακτήρες στην καθημερινότητα, στις φιλίες, στα μυστήρια ή στις περιπέτειές τους.", "Η σειρά συνδυάζει οικείες στιγμές, σχέσεις και συνεργασία με νέες εμπειρίες και μαθήματα."],
      game: ["Το παιχνίδι βασίζεται στην εξερεύνηση, την επίλυση προβλημάτων, τη δημιουργικότητα και την πρόοδο, είτε πρόκειται για αγώνες, κατασκευές ή περιπέτεια.", "Προσφέρει διαδραστική εμπειρία με ανακάλυψη, φαντασία και ευκαιρίες για συνεργασία."],
      book: ["Η ιστορία ακολουθεί έναν χαρακτήρα ή μια ομάδα που αντιμετωπίζει αλλαγές, μυστήριο, κίνδυνο ή μια προσωπική πρόκληση.", "Συνήθως είναι φανταστική και εστιάζει στους χαρακτήρες, με θέματα όπως η φιλία, το θάρρος και το ανήκειν."],
      creator: ["Το περιεχόμενο αποτελείται από σύντομα βίντεο μάθησης, πειράματα, προκλήσεις ή ψυχαγωγία, με διαφορετικό θέμα σε κάθε ανάρτηση.", "Ο τόνος και τα θέματα μπορεί να διαφέρουν ανά δημιουργό και βίντεο· δείτε το συγκεκριμένο περιεχόμενο πριν το επιλέξετε."]
    };
    const [plot, tone] = summaries[item.type] || summaries.movie;
    const tagsLine = item.tags.length ? `Ο οδηγός επισημαίνει θέματα όπως: ${item.tags.map(localizeTerm).join(", ")}.` : "";
    const ageLine = item.age === null || item.age === undefined ? "" : item.age <= 5 ? "Απευθύνεται σε μικρότερα παιδιά που ωφελούνται από ξεκάθαρες, καθησυχαστικές ιστορίες και ήπια σύγκρουση." : item.age <= 9 ? "Ταιριάζει συνήθως σε παιδιά που μπορούν να διαχειριστούν μέτρια ένταση και πιο σύνθετους χαρακτήρες." : item.age <= 12 ? "Ταιριάζει σε παιδιά που είναι έτοιμα για περισσότερη πολυπλοκότητα και εντονότερα συναισθήματα." : "Απευθύνεται περισσότερο σε μεγαλύτερα παιδιά ή εφήβους λόγω της έντασης ή των πιο σύνθετων θεμάτων.";
    return `Ο τίτλος «${item.title}» είναι ${typeNames[item.type].toLowerCase()} από ${source}. ${plot} ${tone} ${tagsLine} ${ageLine}`;
  }
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
    ? reviews.slice().reverse().map((review) => {
        const reviewAuthorName = review.reviewerName || review.profileName || getParentName();
        return `<article class="family-review"><div class="review-heading"><strong>${escapeHtml(reviewAuthorName)}</strong><span class="review-stars" aria-label="${currentLanguage === "el" ? `${review.score} από 5 αστέρια` : `${review.score} out of 5 stars`}">${"★".repeat(review.score)}${"☆".repeat(5 - review.score)}</span></div><p class="review-fit">${escapeHtml(localizeTerm(review.fit))}</p><p class="review-comment">${escapeHtml(review.comment)}</p><time>${escapeHtml(new Date(review.createdAt).toLocaleDateString(currentLanguage === "el" ? "el-GR" : "en-US"))}</time></article>`;
      }).join("")
    : `<p class="reviews-empty">${t("noFamilyNotes", { name: escapeHtml(getActiveProfile().name) })}</p>`;

  return `<section class="review-section" aria-labelledby="reviews-title">
    <div class="review-section-heading"><div><p class="eyebrow">${t("familyExperiences")}</p><h3 id="reviews-title">${t("ratingsNotes")}</h3></div><p class="review-average">${average ? `<strong>${average}</strong><span class="review-stars" aria-label="${currentLanguage === "el" ? `Μέσος όρος ${average} από 5 αστέρια` : `Average ${average} out of 5 stars`}">${"★".repeat(Math.round(Number(average)))}${"☆".repeat(5 - Math.round(Number(average)))}</span><small>${reviews.length} ${currentLanguage === "el" ? "σημειώσεις" : reviews.length === 1 ? "note" : "notes"}</small>` : t("noRatings")}</p></div>
    <p class="review-privacy-note">These notes are saved in this browser only. They are not shared with other families.</p>
    <div class="review-list">${reviewCards}</div>
    <form id="review-form" class="review-form">
      <h4>How did it fit your child?</h4>
      <p class="review-helper">Select one to five stars.</p>
      <fieldset class="star-rating"><legend>Your rating</legend><div class="star-options">${[5, 4, 3, 2, 1].map((score) => `<label title="${score} ${score === 1 ? "star" : "stars"}"><input type="radio" name="review-rating" value="${score}" aria-label="${score} ${score === 1 ? "star" : "stars"}" required><span aria-hidden="true">★</span></label>`).join("")}</div></fieldset>
      <label class="review-fit-label">${t("overallFit")}<select name="fit" required><option value="" selected disabled>${t("chooseFit")}</option><option value="Not a fit">1 ${t("oneStar")} — ${t("notFit")}</option><option value="Poor fit">2 ${t("manyStars")} — ${t("poorFit")}</option><option value="Mixed fit">3 ${t("manyStars")} — ${t("mixedFit")}</option><option value="Good fit">4 ${t("manyStars")} — ${t("goodFit")}</option><option value="Great fit">5 ${t("manyStars")} — ${t("greatFit")}</option></select></label>
      <label class="review-comment-label">Your comment<textarea name="comment" maxlength="600" required placeholder="What worked well, or what should another family know?" rows="3"></textarea></label>
      <div class="review-form-footer"><span>Saved under ${escapeHtml(getParentName())} on this device.</span><button type="submit">Save note</button></div>
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
    reviewerName: getParentName(),
    score,
    fit: String(formData.get("fit")),
    comment,
    createdAt: new Date().toISOString(),
  });
  titleReviews[key] = reviews;
  localStorage.setItem("little-lens-reviews", JSON.stringify(titleReviews));
  showTitleDetails(item);
}

function getVisibleTitles(correctedTitles = []) {
  const query = state.query.trim().toLowerCase();
  const profile = getActiveProfile();
  const correctedTitleSet = new Set(correctedTitles);
  return titles.filter((item) => {
    const matchesType = state.type === "all" || item.type === state.type;
    const age = getAgeInfo(item).age;
    const matchesAge = age === null || age <= getAgeLimit();
    const matchesAvoid = !item.tags.some((tag) => profile.avoid.includes(tag));
    const matchesSaved = state.view !== "saved" || savedTitles.has(titleKey(item));
    const matchesQuery = !query || itemSearchText(item).includes(query) || correctedTitleSet.has(item.title);
    return matchesType && matchesAge && matchesAvoid && matchesSaved && matchesQuery;
  }).sort((first, second) => recommendationScore(second) - recommendationScore(first));
}

function cardTemplate(item, index) {
  const key = titleKey(item);
  const isSaved = savedTitles.has(key);
  const ageInfo = getAgeInfo(item);
  const tags = item.tags.map((tag) => `<span class="tag${themeNotes[tag]?.concern ? " concern" : ""}">${escapeHtml(localizeTerm(tag))}</span>`).join("");
  const ageText = ageInfo.age === null ? "—" : ageInfo.age === 0 ? t("allAges") : `${ageInfo.age}+`;
  const ageBadgeLabel = ageInfo.age === null ? t("ageNeedsResearch") : ageInfo.isEstimated ? t("estimatedAge", { age: ageInfo.age }) : t("officialAge", { rating: ageInfo.officialRating.label, age: ageInfo.age });
  const ageBadge = `<span class="age-badge${ageInfo.isEstimated ? " age-provisional" : ""}" aria-label="${ageBadgeLabel} ${escapeHtml(item.title)}"><strong>${ageText}</strong><small>${ageInfo.age === null ? t("researchLabel") : ageInfo.isEstimated ? t("estimatedAgeLabel") : escapeHtml(ageInfo.officialRating.label)}</small></span>`;
  return `<article class="title-card" style="--cover:${item.color || typeColors[item.type]};animation-delay:${Math.min(index * 30, 180)}ms">
    <button class="card-open" type="button" data-details="${escapeHtml(key)}" aria-label="${t("showRatingReasons", { title: escapeHtml(item.title) })}"></button>
    <div class="cover${item.type === "creator" ? " creator-avatar" : ""}" data-artwork="${escapeHtml(key)}" aria-hidden="true"><img class="cover-image" alt="" loading="lazy" decoding="async"><span class="cover-symbol">${typeIcons[item.type]}</span><span class="cover-mark">${escapeHtml(item.mark || item.title.slice(0, 1))}</span><span class="cover-title">${escapeHtml(item.title)}</span></div>
    <div class="title-copy"><p class="type-label">${typeIcons[item.type]} &nbsp;${typeNames[item.type]}</p><h3>${escapeHtml(item.title)}</h3><p class="publisher">${escapeHtml(item.maker)}</p><div class="tags">${tags}</div></div>
    <div class="card-side">${ageBadge}<button class="save-button${isSaved ? " saved" : ""}" type="button" data-save="${escapeHtml(key)}" aria-label="${isSaved ? t("remove") : t("save")} ${escapeHtml(item.title)}" aria-pressed="${isSaved}">${isSaved ? "♥" : "♡"}</button></div>
    <div class="rating-line"><span>${escapeHtml(ageInfo.officialRating?.label || getGreekRatingStatus(item))}</span><span>·</span><span>${ageInfo.isEstimated ? t("estimateSource") : ageInfo.age === null ? t("titleSpecificPending") : t("officialGreecePegi")}</span></div>
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
  const expectedDescription = {
    movie: /\b(film|movie)\b/i,
    series: /\b(series|television|tv)\b/i,
    book: /\b(book|novel|comic|comics|manga)\b/i,
    game: /\b(video game|game)\b/i,
    creator: /\b(creator|youtuber|youtube channel|streamer|internet personality|content creator|influencer|entertainer|sports entertainment group|educational channel|video blogger|media personality)\b/i,
  }[item.type];
  const normalizeTitle = (value) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\biii\b/g, "3").replace(/\bii\b/g, "2").replace(/\bi\b/g, "1").replace(/[^a-z0-9]/g, "");
  const titleTerms = (value) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\biii\b/g, "3").replace(/\bii\b/g, "2").replace(/\bi\b/g, "1").match(/[a-z]+|[0-9]+/g)?.filter((term) => !["a", "an", "and", "of", "the"].includes(term) && !/^(19|20)\d{2}$/.test(term)) || [];
  const titleVariants = [item.title, item.title.split(/[:–—]/).at(-1), item.title.replace(/,?\s*(volume|vol\.?|book)\s*\d+.*$/i, "")];
  const requestedYear = item.title.match(/\b(?:19|20)\d{2}\b/)?.[0];
  const matchesTitle = (candidate) => titleVariants.some((variant) => {
    const expected = titleTerms(variant);
    const actual = titleTerms(candidate);
    if (!expected.length || !actual.length) return false;
    const overlap = actual.filter((term) => expected.includes(term)).length;
    return overlap / expected.length >= 0.66 && (overlap / actual.length >= 0.66 || expected.length === 1);
  });
  const matchesPage = (page) => {
    const description = page.description || page.terms?.description?.[0] || "";
    return page.type !== "disambiguation"
      && matchesTitle(page.title || "")
      && (!requestedYear || `${page.title} ${description}`.includes(requestedYear))
      && expectedDescription?.test(description);
  };
  const specificPages = {
    "movie:Sing": ["Sing (2016 American film)"],
    "movie:Coco": ["Coco (2017 film)"],
    "series:Hilda": ["Hilda (TV series)"],
  }[titleKey(item)] || [];
  if (item.type === "creator") {
    const artwork = await creatorArtworkPromise;
    return artwork[item.title] || null;
  }
  if (item.type === "series") {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(item.title)}`);
      if (response.ok) {
        const matches = await response.json();
        const exactMatch = matches.find(({ show }) => normalizeTitle(show.name) === normalizeTitle(item.title) && (show.image?.original || show.image?.medium));
        const showImage = exactMatch?.show.image?.original || exactMatch?.show.image?.medium;
        if (showImage) return showImage;
      }
    } catch {
      // Continue with the Wikipedia sources if TVMaze is unavailable.
    }
  }
  const variants = {
    movie: [`${item.title} (film)`, item.title],
    series: [`${item.title} (TV series)`, item.title],
    book: [`${item.title} (novel)`, `${item.title} (book)`, item.title],
    game: [`${item.title} (video game)`, item.title],
    creator: [item.title],
  }[item.type] || [item.title];

  for (const variant of [...specificPages, ...variants]) {
    try {
      const page = encodeURIComponent(variant.replaceAll(" ", "_"));
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${page}`);
      if (!response.ok) continue;
      const summary = await response.json();
      if (matchesPage(summary) && summary.thumbnail?.source) return summary.thumbnail.source;
    } catch {
      continue;
    }
  }

  try {
    const mediaTerms = { movie: "film", series: "television series", book: "book", game: "video game", creator: "YouTube creator" };
    const params = new URLSearchParams({ action: "query", generator: "search", gsrsearch: `${item.title} ${mediaTerms[item.type] || ""}`, gsrlimit: "6", prop: "pageimages|description", piprop: "thumbnail", pithumbsize: "400", format: "json", origin: "*" });
    const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`);
    if (response.ok) {
      const data = await response.json();
      const matchingPages = Object.values(data.query?.pages || {}).filter((page) => matchesTitle(page.title || ""));
      for (const page of matchingPages) {
        try {
          const summaryResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page.title.replaceAll(" ", "_"))}`);
          if (!summaryResponse.ok) continue;
          const summary = await summaryResponse.json();
          if (matchesPage(summary) && summary.thumbnail?.source) return summary.thumbnail.source;
        } catch {
          continue;
        }
      }

      const matchingArticlePages = matchingPages.filter((page) => expectedDescription?.test(page.description || "") && (!requestedYear || `${page.title} ${page.description}`.includes(requestedYear)));

      const articlePage = matchingArticlePages.find((page) => page.pageid);
      if (articlePage) {
        const imageListParams = new URLSearchParams({ action: "query", pageids: String(articlePage.pageid), prop: "images", imlimit: "50", format: "json", origin: "*" });
        const imageListResponse = await fetch(`https://en.wikipedia.org/w/api.php?${imageListParams}`);
        if (imageListResponse.ok) {
          const imageListData = await imageListResponse.json();
          const images = Object.values(imageListData.query?.pages || {}).flatMap((page) => page.images || []);
          const titleToken = normalizeTitle(item.title);
          const matchingFiles = images.filter((image) => {
            const fileName = image.title.split(":").slice(1).join(":");
            return normalizeTitle(fileName).includes(titleToken);
          }).sort((first, second) => {
            const rankFile = (file) => /poster|cover|key.?art/i.test(file.title) ? 0 : /logo/i.test(file.title) ? 1 : 2;
            return rankFile(first) - rankFile(second);
          });
          for (const image of matchingFiles) {
            const imageInfoParams = new URLSearchParams({ action: "query", titles: image.title, prop: "imageinfo", iiprop: "url", iiurlwidth: "400", format: "json", origin: "*" });
            const imageInfoResponse = await fetch(`https://en.wikipedia.org/w/api.php?${imageInfoParams}`);
            if (!imageInfoResponse.ok) continue;
            const imageInfoData = await imageInfoResponse.json();
            const imageInfo = Object.values(imageInfoData.query?.pages || {})[0]?.imageinfo?.[0];
            if (imageInfo?.thumburl || imageInfo?.url) return imageInfo.thumburl || imageInfo.url;
          }
        }
      }
    }
  } catch {
    // Keep the designed fallback if the search API is unavailable.
  }

  if (item.type === "book") {
    try {
      const params = new URLSearchParams({ title: item.title, limit: "10", fields: "title,cover_i" });
      const response = await fetch(`https://openlibrary.org/search.json?${params}`);
      if (response.ok) {
        const data = await response.json();
        const match = data.docs?.find((book) => book.cover_i && matchesTitle(book.title));
        if (match) return `https://covers.openlibrary.org/b/id/${match.cover_i}-M.jpg`;
      }
    } catch {
      return null;
    }
  }
  if (item.type === "game") {
    try {
      const params = new URLSearchParams({ term: item.title, l: "en", cc: "US" });
      const response = await fetch(`https://store.steampowered.com/api/storesearch/?${params}`);
      if (response.ok) {
        const data = await response.json();
        const match = data.items?.find((game) => normalizeTitle(game.name) === normalizeTitle(item.title));
        if (match) return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${match.id}/library_600x900.jpg`;
      }
    } catch {
      return null;
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
    document.querySelectorAll(".cover[data-artwork], .detail-artwork[data-artwork]").forEach((currentCover) => {
      if (currentCover.dataset.artwork !== key) return;
      const image = currentCover.querySelector(".cover-image");
      if (!image || image.src) return;
      image.addEventListener("load", () => currentCover.classList.add("has-image"), { once: true });
      image.addEventListener("error", () => image.removeAttribute("src"), { once: true });
      image.src = imageUrl;
      if (image.complete && image.naturalWidth > 0) currentCover.classList.add("has-image");
    });
  });
}

function observeTitleArtwork() {
  const covers = resultsSection.querySelectorAll(".cover[data-artwork]");
  covers.forEach((cover) => {
    if (artworkObserver) artworkObserver.observe(cover);
    else loadTitleArtwork(cover);
  });
}

function getPageWindow(page, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (page <= 3) {
    return [1, 2, 3, 4, 5, "ellipsis", totalPages - 1, totalPages];
  }

  if (page >= totalPages - 2) {
    return [1, 2, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
  }

  return [page - 1, page, page + 1, "ellipsis", totalPages - 1, totalPages];
}

function renderSquirrelAcorn() {
  const label = isAtBottom ? "Back to top" : "Go to bottom";
  return `<div class="squirrel-acorn${isAtBottom ? " is-bottom" : ""}" id="squirrel-acorn" aria-live="polite">
    <div class="squirrel-scene" aria-hidden="true">
      <svg class="squirrel-art" viewBox="0 0 150 140" role="img" aria-label="An orange squirrel hugging an acorn">
        <g stroke="#71320f" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">
          <path class="squirrel-tail-art" d="M58 120C34 126 12 110 11 84 9 59 18 31 39 23c17-7 35 3 37 19 2 14-8 23-20 21-8-1-12-7-10-13 1-4 5-6 9-5-2-8-12-10-19-3-10 9-12 25-7 40 5 15 17 22 31 18l9-5 8 17Z" fill="#ed6418"/>
          <path d="M42 104c-7-13-6-28 2-39 6-8 16-10 23-5 5 4 4 11-1 14-4 2-8 1-10-2-4 8-2 17 4 24Z" fill="#bd4913"/>
          <path d="M46 81c-2-18 7-39 24-43 13-4 27 8 30 25l8 49c2 13-7 21-20 21H66c-13 0-21-9-20-23Z" fill="#f07820"/>
          <path d="M59 86c8-8 22-9 31-2l8 30c2 7-2 12-10 12H70c-9 0-14-6-12-14Z" fill="#ffd5a1" stroke="none"/>
          <path d="M53 51c-5-5-8-13-6-21 2-8 10-10 15-3l10 14Z" fill="#f07820"/>
          <path d="M84 43c2-9 9-14 15-9 5 4 4 12 0 19Z" fill="#f07820"/>
          <path d="M52 51c-2-6 0-12 4-15l8 11ZM88 48c2-6 5-9 9-9l-1 13Z" fill="#f59b83" stroke="none"/>
          <path d="M49 61c0-17 11-29 26-28 16 1 28 14 27 30-1 14-11 24-27 24-15 0-26-10-26-26Z" fill="#f47b20"/>
          <path d="M54 68c4-11 13-17 24-16 12 1 20 9 21 18-3 12-13 20-26 20-11 0-18-8-19-22Z" fill="#ffe0ad" stroke="none"/>
          <ellipse cx="68" cy="61" rx="4" ry="7" fill="#432516" stroke="none"/><ellipse cx="91" cy="61" rx="4" ry="7" fill="#432516" stroke="none"/>
          <circle cx="69" cy="59" r="1.5" fill="white" stroke="none"/><circle cx="92" cy="59" r="1.5" fill="white" stroke="none"/>
          <ellipse cx="81" cy="75" rx="12" ry="8" fill="#fff0d6" stroke="none"/>
          <path d="M78 70q4-5 8 0-2 5-5 5-3-1-3-5Z" fill="#71320f" stroke="none"/><path d="M75 81q6 5 12 0" fill="none"/>
          <path d="M62 102c8-12 20-13 29-5l12 12c4 4 2 10-3 12-4 1-7-1-11-5l-8-5c-6 4-13 4-19-1Z" fill="#f47b20"/>
          <path d="M70 128q-13 4-24-2-6-4-3-8 3-4 8-1 7 4 17 0Z" fill="#f47b20"/>
        </g>
        <path d="M25 47c5-9 13-14 20-14" fill="none" stroke="#ffad54" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="58" cy="83" rx="5" ry="3" fill="#f8a276"/><ellipse cx="99" cy="83" rx="5" ry="3" fill="#f8a276"/>
      </svg>
    </div>
    <button id="acorn-button" class="acorn-button" type="button" aria-label="${label}"><span class="acorn-text">${label}</span></button>
  </div>`;
}

function renderPageButtons(totalPages) {
  if (totalPages <= 1) return "";

  const buttons = getPageWindow(state.page, totalPages);
  const pageButtons = buttons.map((item) => {
    if (item === "ellipsis") {
      return '<span class="page-ellipsis" aria-hidden="true">…</span>';
    }

    return `<button class="page-button${state.page === item ? " active" : ""}" type="button" data-page="${item}" aria-label="${t("goToPage", { page: item })}">${item}</button>`;
  }).join("");

  return `<div class="pagination-row">
  <div class="page-controls" aria-label="${t("pagination")}">
    <button class="page-button page-button-nav" type="button" data-page="${Math.max(1, state.page - 1)}" ${state.page === 1 ? "disabled" : ""}>${t("prev")}</button>
    ${pageButtons}
    <button class="page-button page-button-nav" type="button" data-page="${Math.min(totalPages, state.page + 1)}" ${state.page === totalPages ? "disabled" : ""}>${t("next")}</button>
    <label class="page-jump-label">
      <span>${t("goTo")}</span>
      <input class="page-jump-input" type="number" min="1" max="${totalPages}" value="${state.page}" aria-label="${t("pageNumber")}" />
    </label>
  </div>
  ${renderSquirrelAcorn()}
  </div>`;
}

function render() {
  document.querySelector("#home").dataset.view = state.view;
  let visibleTitles = getVisibleTitles();
  let typoSuggestions = [];
  if (!visibleTitles.length && state.view !== "profile" && state.query.trim()) {
    const suggestions = findTypoSuggestions(state.query);
    if (suggestions.length) {
      const suggestedTitles = getVisibleTitles(suggestions);
      if (suggestedTitles.length) {
        typoSuggestions = suggestions.filter((title) => suggestedTitles.some((item) => item.title === title));
        visibleTitles = suggestedTitles;
      }
    }
  }
  const totalPages = Math.max(1, Math.ceil(visibleTitles.length / pageSize));
  if (state.page > totalPages) state.page = totalPages;
  const startIndex = (state.page - 1) * pageSize;
  const pageTitles = visibleTitles.slice(startIndex, startIndex + pageSize);
  const profile = getActiveProfile();
  const query = state.query.trim().toLowerCase();
  const awaitingReviewCount = titles.filter((item) => item.provisional
    && (state.type === "all" || item.type === state.type)
    && (state.view !== "saved" || savedTitles.has(titleKey(item)))
    && (!query || `${item.title} ${item.type} ${item.maker} ${item.tags.join(" ")}`.toLowerCase().includes(query))).length;
  const filterSummary = `${t("searchAgeSummary", { age: getAgeLimit() })}${awaitingReviewCount ? currentLanguage === "el" ? ", μαζί με μη αξιολογημένες καταχωρίσεις" : ", plus unreviewed catalog entries" : ""}`;
  const preferenceSummary = profile.genres.length ? t("prioritizeSummary", { genres: profile.genres.map(localizeTerm).join(", ") }) : "";
  const avoidSummary = profile.avoid.length ? t("avoidSummary", { themes: profile.avoid.map(localizeTerm).join(", ") }) : "";
  const learningSummary = profile.likes.length || profile.searches.length
    ? t("learningSummary", { likes: profile.likes.length, titleWord: currentLanguage === "el" ? "τίτλους" : "titles", searches: profile.searches.length, searchWord: currentLanguage === "el" ? "αναζητήσεις" : "searches" })
    : t("learningEmpty");
  const pendingNotice = awaitingReviewCount
    ? t("pendingNotice", { count: awaitingReviewCount })
    : "";
  renderProfileControls();
  recommendationsContainer.innerHTML = state.view === "discover" && !state.query.trim() ? renderRecommendedSection() : "";

  if (searchPanel) {
    searchPanel.style.display = state.view === "profile" ? "none" : "block";
  }

  if (state.view === "profile") {
    const profileAccounts = profiles.map((member) => {
      const isActive = member.id === activeProfileId;
      const avatar = member.avatar || defaultProfile.avatar;
      return `<div class="profile-account-card${isActive ? " selected" : ""}">
        <button class="profile-account-switch" type="button" data-switch-profile="${escapeHtml(member.id)}">
          <span class="profile-avatar" aria-hidden="true">${escapeHtml(avatar)}</span>
          <span class="profile-card-copy"><strong>${escapeHtml(member.name)}</strong><small>${currentLanguage === "el" ? "Ηλικία" : "Age"} ${member.age}</small></span>
          ${isActive ? `<span class="profile-account-tag">${t("active")}</span>` : `<span class="profile-account-tag muted">${t("switch")}</span>`}
        </button>
        <div class="child-avatar-controls">
          <button type="button" class="profile-panel-button" data-child-avatar-toggle aria-expanded="false">Edit avatar</button>
          <div class="child-avatar-picker" role="group" aria-label="Choose ${escapeHtml(member.name)}'s avatar" hidden>${profileAvatarOptions.map((option, index) => `<button type="button" class="avatar-option${avatar === option ? " selected" : ""}" data-child-avatar-profile="${escapeHtml(member.id)}" data-child-avatar="${escapeHtml(option)}" aria-label="${profileAvatarLabels[index]}" aria-pressed="${avatar === option}">${escapeHtml(option)}</button>`).join("")}</div>
        </div>
      </div>`;
    }).join("");
    const profileGenres = profile.genres.length ? profile.genres.map((genre) => `<span class="profile-chip">${escapeHtml(localizeTerm(genre))}</span>`).join("") : `<span class="profile-empty">${t("noFavoriteGenres")}</span>`;
    const avoidedThemes = profile.avoid.length ? profile.avoid.map((theme) => `<span class="profile-chip concern">${escapeHtml(localizeTerm(theme))}</span>`).join("") : `<span class="profile-empty">${t("noThemesFiltered")}</span>`;
    const recentSearches = profile.searches.length ? profile.searches.slice(0, 4).map((term) => `<li>${escapeHtml(term)}</li>`).join("") : `<li class="profile-empty">${t("noProfileSearches")}</li>`;
    document.querySelector("#breadcrumb-current").textContent = "PROFILE";
    document.querySelector("#page-title").innerHTML = `Your family<br /><span>profile.</span>`;
    document.querySelector("#results-kicker").textContent = "YOUR LENS";
    document.querySelector("#results-title").childNodes[0].textContent = `Profile for ${profile.name} `;
    document.querySelector("#saved-count").textContent = savedTitles.size;
    resultCount.textContent = "";
    results.innerHTML = `<div class="profile-view">
      <section class="profile-summary-card">
        <div class="profile-summary-identity">
          <span class="profile-summary-avatar" aria-hidden="true">${escapeHtml(getParentAvatar())}</span>
          <div>
            <p class="eyebrow">PARENT ACCOUNT</p>
            <h3>${escapeHtml(getParentName())}</h3>
            <p class="profile-summary-meta">Child profile: ${escapeHtml(profile.name)} • ${t("profileAgeSummary", { age: profile.age, saved: savedTitles.size, likes: profile.likes.length })}</p>
            <div class="parent-avatar-controls">
              <button type="button" id="parent-avatar-edit-button" class="profile-panel-button" aria-expanded="false" aria-controls="parent-avatar-picker">Edit avatar</button>
              <div id="parent-avatar-picker" class="parent-avatar-picker" role="group" aria-label="Choose parent avatar" hidden>${parentAvatarOptions.map((avatar, index) => `<button type="button" class="avatar-option${getParentAvatar() === avatar ? " selected" : ""}" data-parent-avatar="${escapeHtml(avatar)}" aria-label="${parentAvatarLabels[index]}" aria-pressed="${getParentAvatar() === avatar}">${escapeHtml(avatar)}</button>`).join("")}</div>
            </div>
          </div>
        </div>
        <div class="profile-summary-stats">
          <div class="profile-stat"><span>Saved</span><strong>${savedTitles.size}</strong></div>
          <div class="profile-stat"><span>Profiles</span><strong>${profiles.length}</strong></div>
          <div class="profile-stat"><span>Avoid</span><strong>${profile.avoid.length}</strong></div>
        </div>
      </section>
      <div class="profile-grid">
        <section class="profile-panel">
          <div class="profile-panel-header"><h4>Preferences</h4><button type="button" id="profile-panel-edit-button" class="profile-panel-button">Edit</button></div>
          <div class="profile-detail-block">
            <p class="profile-detail-label">Favorite genres</p>
            <div class="profile-chip-wrap">${profileGenres}</div>
          </div>
          <div class="profile-detail-block">
            <p class="profile-detail-label">Themes to avoid</p>
            <div class="profile-chip-wrap">${avoidedThemes}</div>
          </div>
        </section>
        <section class="profile-panel">
          <div class="profile-panel-header"><h4>Recent searches</h4><button type="button" id="profile-panel-clear-button" class="profile-panel-button">Clear</button></div>
          <ul class="profile-list-compact">${recentSearches}</ul>
        </section>
        <section class="profile-panel profile-panel-wide">
          <div class="profile-panel-header"><h4>My child's profile</h4><button type="button" id="profile-panel-manage-button" class="profile-panel-button">Manage</button></div>
          <div class="profile-account-grid">${profileAccounts}</div>
        </section>
      </div>
    </div>`;
    document.querySelector("#parent-avatar-edit-button").addEventListener("click", (event) => {
      const picker = document.querySelector("#parent-avatar-picker");
      picker.hidden = !picker.hidden;
      event.currentTarget.setAttribute("aria-expanded", String(!picker.hidden));
    });
    document.querySelector("#parent-avatar-picker").addEventListener("click", (event) => {
      const button = event.target.closest("[data-parent-avatar]");
      if (!button) return;
      parentAccount.avatar = button.dataset.parentAvatar;
      persistParentAccount();
      render();
    });
    document.querySelectorAll("[data-child-avatar-toggle]").forEach((button) => {
      button.addEventListener("click", (event) => {
        const picker = event.currentTarget.nextElementSibling;
        picker.hidden = !picker.hidden;
        event.currentTarget.setAttribute("aria-expanded", String(!picker.hidden));
      });
    });
    document.querySelectorAll(".child-avatar-picker").forEach((picker) => {
      picker.addEventListener("click", (event) => {
        const button = event.target.closest("[data-child-avatar-profile]");
        if (!button) return;
        const childProfile = profiles.find((member) => member.id === button.dataset.childAvatarProfile);
        if (!childProfile || !profileAvatarOptions.includes(button.dataset.childAvatar)) return;
        childProfile.avatar = button.dataset.childAvatar;
        persistProfiles();
        render();
      });
    });
    document.querySelector("#profile-panel-edit-button").addEventListener("click", () => openProfileDialog(profile));
    document.querySelector("#profile-panel-manage-button").addEventListener("click", () => openProfileDialog());
    document.querySelector("#profile-panel-clear-button").addEventListener("click", () => {
      profile.searches = [];
      persistProfiles();
      render();
    });
    applyTranslations();
    return;
  }

  const contextCount = t("searchResultIntro", { count: visibleTitles.length, guideWord: visibleTitles.length === 1 ? t("guideLabel") : t("guidesLabel"), name: escapeHtml(state.query.trim() || profile.name) });
  const suggestionLabel = typoSuggestions.length ? `<span class="did-you-mean">${currentLanguage === "el" ? "Μήπως εννοείτε:" : "Did you mean:"} ${typoSuggestions.map((title) => `<button type="button" data-search-suggestion="${escapeHtml(title)}">${escapeHtml(title)}</button>`).join(" ")}</span>` : "";
  searchContext.innerHTML = `<span class="context-label">${state.query.trim() ? t("youSearched") : t("picksFor")}</span><strong>${escapeHtml(state.query.trim() || profile.name)}</strong><span>${contextCount} ${filterSummary}.${preferenceSummary}${avoidSummary}${learningSummary}${pendingNotice} ${t("searchContext")}</span>${suggestionLabel}`;
  document.querySelector("#breadcrumb-current").textContent = state.view === "saved" ? "SAVED" : "DISCOVER";
  document.querySelector("#page-title").innerHTML = state.view === "saved" ? 'Your family\'s<br /><span>shortlist.</span>' : `A clearer way<br />to <span>choose.</span>`;
  document.querySelector("#results-kicker").textContent = state.view === "saved" ? "KEPT CLOSE FOR LATER" : state.query ? "HERE'S WHAT WE FOUND" : `PERSONALIZED FOR ${profile.name.toUpperCase()}`;
  document.querySelector("#results-title").childNodes[0].textContent = state.view === "saved" ? "Your saved titles " : state.query ? "Guide matches " : `Ideas for ${profile.name} `;
  document.querySelector("#saved-count").textContent = savedTitles.size;
  resultCount.textContent = `(${visibleTitles.length})`;

  if (!visibleTitles.length) {
    const unknownTitle = state.query.trim() && !titles.some((item) => item.title.toLowerCase() === state.query.trim().toLowerCase());
    const pendingTitle = state.query.trim() && titles.find((item) => item.provisional && item.title.toLowerCase() === state.query.trim().toLowerCase());
    const heading = state.view === "saved" ? t("noResultsSaved") : pendingTitle ? t("noResultsReview") : unknownTitle ? t("noResultsTitle") : t("noResultsFilters");
    const message = state.view === "saved" ? t("noResultsSavedCopy") : pendingTitle ? t("noResultsReviewCopy") : unknownTitle ? t("noResultsSearchCopy", { query: escapeHtml(state.query.trim()) }) : t("noResultsFiltersCopy");
    results.innerHTML = `<div class="empty-state"><div class="empty-mark" aria-hidden="true">✳</div><h3>${heading}</h3><p>${message}</p><button id="empty-reset" type="button">${t("browseAll")}</button></div>`;
    document.querySelector("#empty-reset").addEventListener("click", resetFilters);
    applyTranslations();
    setupRecommendationScroll();
    return;
  }

  results.innerHTML = pageTitles.map(cardTemplate).join("") + renderPageButtons(totalPages);
  applyTranslations();
  setupRecommendationScroll();
}

function goToPage(nextPage) {
  const totalPages = Math.max(1, Math.ceil(getVisibleTitles().length / pageSize));
  const clampedPage = Math.min(Math.max(1, Number(nextPage) || 1), totalPages);
  state.page = clampedPage;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function resetFilters() {
  state.query = "";
  state.type = "all";
  state.age = "profile";
  state.view = "discover";
  state.page = 1;
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
  state.page = 1;
  const query = state.query.trim();
  if (query) {
    const profile = getActiveProfile();
    profile.searches = [query, ...profile.searches.filter((search) => search.toLowerCase() !== query.toLowerCase())].slice(0, 8);
    persistProfiles();
  }
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("is-active", button.dataset.view === "discover"));
  render();
});

resultsSection.addEventListener("change", (event) => {
  const input = event.target.closest(".page-jump-input");
  if (!input) return;
  const desiredPage = Number(input.value);
  if (!Number.isNaN(desiredPage)) {
    goToPage(desiredPage);
  }
});

resultsSection.addEventListener("keydown", (event) => {
  const input = event.target.closest(".page-jump-input");
  if (!input || event.key !== "Enter") return;
  event.preventDefault();
  const desiredPage = Number(input.value);
  if (!Number.isNaN(desiredPage)) {
    goToPage(desiredPage);
  }
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
  state.page = 1;
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("is-active", link === button));
  render();
}));

const profileDialog = document.querySelector("#profile-dialog");
let editingProfileId = activeProfileId;

function renderProfileList() {
  document.querySelector("#profile-list").innerHTML = profiles.map((profile) => `<button class="profile-list-item${profile.id === editingProfileId ? " selected" : ""}" type="button" data-edit-profile="${escapeHtml(profile.id)}"><span class="profile-avatar" aria-hidden="true">${escapeHtml(profile.avatar || defaultProfile.avatar)}</span><span>${escapeHtml(profile.name)}<small>${currentLanguage === "el" ? "Ηλικία" : "Age"} ${profile.age}</small></span></button>`).join("");
}

function renderProfileEditor(profile) {
  editingProfileId = profile?.id || null;
  const form = document.querySelector("#profile-form");
  form.reset();
  const parentNameInput = document.querySelector("#parent-name");
  parentNameInput.value = getParentName();
  document.querySelector("#profile-name").value = profile?.name || "";
  document.querySelector("#profile-age").value = profile?.age || 8;
  const selectedAvatar = profile?.avatar || defaultProfile.avatar;
  document.querySelector("#avatar-options").innerHTML = profileAvatarOptions.map((avatar) => `<label class="avatar-option${selectedAvatar === avatar ? " selected" : ""}"><input type="radio" name="avatar" value="${escapeHtml(avatar)}" ${selectedAvatar === avatar ? "checked" : ""}><span aria-hidden="true">${escapeHtml(avatar)}</span></label>`).join("");
  document.querySelector("#genre-options").innerHTML = Object.keys(genreOptions).map((genre) => `<label class="preference-option"><input type="checkbox" name="genres" value="${escapeHtml(genre)}"${profile?.genres.includes(genre) ? " checked" : ""}><span>${escapeHtml(localizeTerm(genre))}</span></label>`).join("");
  const avoidThemes = Object.entries(themeNotes).filter(([, details]) => details.concern).map(([theme]) => theme).sort();
  document.querySelector("#avoid-options").innerHTML = avoidThemes.map((theme) => `<label class="preference-option"><input type="checkbox" name="avoid" value="${escapeHtml(theme)}"${profile?.avoid.includes(theme) ? " checked" : ""}><span>${escapeHtml(localizeTerm(theme))}</span></label>`).join("");
  document.querySelector("#delete-profile-button").disabled = !profile || profiles.length <= 1;
  document.querySelector("#clear-learning-button").disabled = !profile || (!profile.likes.length && !profile.searches.length);
  renderProfileList();
  applyTranslations(document.querySelector("#profile-dialog"));
}

function openProfileDialog(profile = getActiveProfile()) {
  renderProfileEditor(profile);
  applyTranslations(document.querySelector("#profile-dialog"));
  if (!profileDialog.open) profileDialog.showModal();
}

document.querySelector("#profile-select").addEventListener("change", (event) => {
  activeProfileId = event.target.value;
  state.age = "profile";
  ageFilter.value = "profile";
  persistProfiles();
  render();
});

document.querySelector("#parent-name").addEventListener("input", (event) => {
  const nextName = String(event.target.value || "").trim();
  parentAccount = {
    ...parentAccount,
    name: nextName || defaultParentAccount.name,
    avatar: getParentAvatar(),
  };
  persistParentAccount();
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
  parentAccount = {
    ...parentAccount,
    name: document.querySelector("#parent-name").value.trim() || defaultParentAccount.name,
  };
  persistParentAccount();
  const selectedAvatar = [...document.querySelectorAll("input[name='avatar']")].find((input) => input.checked)?.value || defaultProfile.avatar;
  const profile = profiles.find((item) => item.id === editingProfileId);
  const updatedProfile = {
    ...(profile || { id: `child-${Date.now()}`, likes: [], searches: [] }),
    name: document.querySelector("#profile-name").value.trim(),
    age: Math.min(18, Math.max(2, Number(document.querySelector("#profile-age").value))),
    avatar: selectedAvatar,
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

resultsSection.addEventListener("click", (event) => {
  const recommendationArrow = event.target.closest("[data-recommend-scroll]");
  if (recommendationArrow) {
    const viewport = document.querySelector("#recommendation-viewport");
    if (viewport) viewport.scrollBy({ left: Number(recommendationArrow.dataset.recommendScroll) * viewport.clientWidth, behavior: "smooth" });
    return;
  }

  const acornButton = event.target.closest("#acorn-button");
  if (acornButton) {
    const squirrelAcorn = acornButton.closest("#squirrel-acorn");
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    squirrelAcorn.classList.add("is-dropping");
    acornButton.disabled = true;
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    window.setTimeout(() => {
      squirrelAcorn.classList.remove("is-dropping");
      acornButton.disabled = false;
      isAtBottom = true;
      updateAcornButton();
    }, 900);
    return;
  }

  const scrollButton = event.target.closest("[data-scroll-top]");
  if (scrollButton) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    const nextPage = Number(pageButton.dataset.page);
    if (!Number.isNaN(nextPage) && nextPage >= 1) {
      goToPage(nextPage);
    }
    return;
  }

  if (event.target.closest("[data-switch-profile]")) {
    const targetId = event.target.closest("[data-switch-profile]").dataset.switchProfile;
    if (targetId) {
      activeProfileId = targetId;
      state.page = 1;
      persistProfiles();
      render();
    }
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
    state.page = Math.min(state.page, Math.max(1, Math.ceil(getVisibleTitles().length / pageSize)));
    render();
    return;
  }

  const detailButton = event.target.closest("[data-details]");
  if (!detailButton) return;
  const item = titles.find((title) => titleKey(title) === detailButton.dataset.details);
  if (item) showTitleDetails(item);
});

let isAtBottom = false;

function updateAcornButton() {
  const acornButton = document.querySelector("#acorn-button");
  const squirrelAcorn = document.querySelector("#squirrel-acorn");
  if (!acornButton || !squirrelAcorn) return;
  const label = isAtBottom ? "Back to top" : "Go to bottom";
  acornButton.setAttribute("aria-label", label);
  acornButton.querySelector(".acorn-text").textContent = label;
  squirrelAcorn.classList.toggle("is-bottom", isAtBottom);
}

function syncScrollState() {
  const nearTop = window.scrollY <= 40;
  const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 40;
  if (nearBottom && !isAtBottom) {
    isAtBottom = true;
    updateAcornButton();
  } else if (nearTop && isAtBottom) {
    isAtBottom = false;
    updateAcornButton();
  }
}

window.addEventListener("scroll", syncScrollState, { passive: true });
updateAcornButton();
syncScrollState();
document.querySelector("#clear-filters").addEventListener("click", resetFilters);
document.querySelector("#about-button").addEventListener("click", () => document.querySelector("#about-dialog").showModal());

function getFallbackPositiveContent(item) {
  if (currentLanguage === "el") {
    if (item.type === "movie") return "Η ιστορία μπορεί να προσφέρει στα παιδιά μια ξεκάθαρη συναισθηματική διαδρομή, αξιομνημόνευτους χαρακτήρες και ένα αισιόδοξο μήνυμα, συνδυάζοντας τη φαντασία με γνώριμες προκλήσεις.";
    if (item.type === "series") return "Οι επαναλαμβανόμενοι χαρακτήρες και οι καθημερινές ιστορίες δημιουργούν ένα οικείο πλαίσιο, συχνά με θέματα καλοσύνης, συνεργασίας και ενηλικίωσης.";
    if (item.type === "game") return "Το παιχνίδι ενθαρρύνει τη δημιουργικότητα, τον πειραματισμό και την εξερεύνηση, με χαμηλή πίεση και έμφαση στη φαντασία ή τη συνεργασία.";
    if (item.type === "book") return "Το βιβλίο προσφέρει μια ξεκάθαρη συναισθηματική διαδρομή και αξιομνημόνευτους χαρακτήρες, με θέματα φιλίας, θάρρους και ελπίδας.";
    return "Ο τίτλος συνδυάζει μάθηση, χιούμορ ή ανακάλυψη με προσιτό περιεχόμενο και ενθαρρύνει την περιέργεια.";
  }
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
  const otherMarketLabel = otherMarketRating && /^(MPA|TV-|ESRB\b)/.test(otherMarketRating) ? currentLanguage === "el" ? "Αξιολόγηση άλλης αγοράς" : "Other market label" : currentLanguage === "el" ? "Υπάρχουσα ένδειξη καταλόγου" : "Existing catalog label";
  const ageLimit = getAgeLimit();
  const ratingSourceLink = ageInfo.officialRating?.source
    ? ` · <a href="${escapeHtml(ageInfo.officialRating.source)}" target="_blank" rel="noopener noreferrer">${currentLanguage === "el" ? "Πηγή PEGI" : "PEGI source"}</a>`
    : "";
  const ageSourceLink = ageInfo.source && !ageInfo.officialRating
    ? ` · <a href="${escapeHtml(ageInfo.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ageInfo.sourceName || (currentLanguage === "el" ? "Πηγή ηλικιακών οδηγιών" : "Age guidance source"))}</a>`
    : "";
  const ageNote = currentLanguage === "el"
    ? ageInfo.age === null
      ? "Δεν έχουμε ακόμη ειδική ηλικιακή αξιολόγηση για αυτόν τον τίτλο. Δεν χρησιμοποιήσαμε γενική ηλικία κατηγορίας· ελέγξτε τις τοπικές οδηγίες και δείτε το περιεχόμενο."
      : ageInfo.isEstimated
        ? `Για τον/την ${escapeHtml(getActiveProfile().name)}, το Little Lens προτείνει ως αφετηρία την ηλικία των ${ageInfo.age}+. Πρόκειται για εκτίμηση, όχι επίσημη ελληνική κατάταξη. Δείτε τον τίτλο και ελέγξτε τις τοπικές οδηγίες. Το όριο του προφίλ είναι ${ageLimit} ετών.`
        : `Η ένδειξη ${escapeHtml(ageInfo.officialRating.label)} είναι η επίσημη αξιολόγηση Ελλάδας/PEGI που καταγράφεται για αυτόν τον τίτλο. Το όριο του προφίλ είναι ${ageLimit} ετών.`
    : ageInfo.age === null
      ? "We don't yet have a title-specific age assessment for this choice. No category-wide age has been substituted; check local guidance and preview the content."
      : ageInfo.isEstimated
        ? `For ${escapeHtml(getActiveProfile().name)}, Little Lens suggests starting around age ${ageInfo.age}+. This is an estimate, not an official Greek classification; preview the title and check local guidance. The current profile limit is ${ageLimit} y/o.`
        : `${escapeHtml(ageInfo.officialRating.label)} is the official Greece/PEGI classification listed for this title. The current profile limit is ${ageLimit} y/o.`;
  const titleDescription = item.provisional
    ? currentLanguage === "el" ? `Ο τίτλος «${item.title}» καταγράφεται ως ${typeNames[item.type].toLowerCase()}. Η πλοκή, η επίσημη αξιολόγηση και τα στοιχεία περιεχομένου δεν έχουν ακόμη ελεγχθεί.` : `${item.title} is listed in the parent content catalog as ${typeNames[item.type].toLowerCase()}. Its plot, official rating, and content details have not been reviewed yet.`
    : getTitleDescription(item);
  const themeList = (tags) => tags.map((tag) => {
    const note = currentLanguage === "el"
      ? greekThemeNotes[tag] || "Το θέμα αναφέρεται στον κατάλογο· ελέγξτε τον τίτλο και την τοπική αξιολόγηση για περισσότερες πληροφορίες."
      : themeNotes[tag]?.note || "This theme is listed in the catalog; check the title and local rating for more context.";
    return `<li><strong>${escapeHtml(localizeTerm(tag))}</strong><span>${escapeHtml(note)}</span></li>`;
  }).join("");
  const goodFitBlock = item.provisional
    ? currentLanguage === "el" ? "<p class=\"detail-empty\">Αυτή η καταχώριση δεν έχει αξιολογηθεί ακόμη, επομένως δεν μπορούμε να επιβεβαιώσουμε για ποια παιδιά είναι κατάλληλη. Ελέγξτε τον τίτλο και την επίσημη αξιολόγηση πριν αποφασίσετε.</p>" : "<p class=\"detail-empty\">This entry has not been assessed yet, so we can’t confirm which children it might suit. Review the title and its official rating before deciding.</p>"
    : positives.length ? `<ul>${themeList(positives)}</ul>` : `<p class="detail-empty">${getFallbackPositiveContent(item)}</p>`;
  const noConcernsCopy = currentLanguage === "el" ? "Δεν επισημαίνονται συγκεκριμένες ανησυχίες σε αυτόν τον οδηγό. Ελέγξτε την τοπική αξιολόγηση για λεπτομέρειες." : "No specific concerns are flagged in this guide. Check the local rating for full details.";

  document.querySelector("#detail-content").innerHTML = `
    <p class="eyebrow detail-kicker">${typeIcons[item.type]} &nbsp;${t("typeGuide", { type: typeNames[item.type].toUpperCase() })} <span>·</span> ${escapeHtml(item.maker)}</p>
    <h2 id="detail-title">${escapeHtml(item.title)}</h2>
    <div class="detail-lead">
      <figure class="detail-artwork" data-artwork="${escapeHtml(titleKey(item))}"><img class="cover-image" alt="${escapeHtml(item.title)}" loading="eager" decoding="async" /></figure>
      <section class="detail-overview"><h3>Description</h3><p>${escapeHtml(titleDescription)}</p></section>
    </div>
    <div class="detail-age-row"><div class="detail-age${ageInfo.isEstimated ? " age-provisional" : ""}"><span>${ageInfo.officialRating ? t("officialRating") : ageInfo.age === null ? t("ageStatus") : t("suggestedAge")}</span><strong>${ageInfo.age === null ? t("research") : ageInfo.age === 0 ? t("allAges") : `${ageInfo.age}+`}</strong>${ageInfo.isEstimated ? `<small class="age-estimation-note">${currentLanguage === "el" ? "Εκτίμηση Little Lens" : "It is Little Lens' estimation"}</small>` : ageInfo.officialRating ? `<small class="age-estimation-note">${escapeHtml(ageInfo.officialRating.label)}</small>` : ""}</div><p>${ageNote}</p></div>
    <p class="detail-rating"><strong>${ageInfo.officialRating ? currentLanguage === "el" ? "Επίσημη αξιολόγηση Ελλάδας:" : "Greek official rating:" : currentLanguage === "el" ? "Κατάσταση ελληνικής αξιολόγησης:" : "Greek rating status:"}</strong> ${escapeHtml(ageInfo.officialRating?.label || getGreekRatingStatus(item))}${ratingSourceLink}${ageSourceLink}${otherMarketRating ? ` · ${otherMarketLabel}: ${escapeHtml(otherMarketRating)}` : ""}${item.type === "creator" ? currentLanguage === "el" ? " · Οι οδηγίες διαφέρουν ανά βίντεο." : " · Guidance varies by upload." : ""}</p>
    <div class="detail-sections">
      <section class="detail-section"><h3>Themes &amp; why it might be a good fit</h3>${goodFitBlock}</section>
      <section class="detail-section detail-consider"><h3>Things to consider</h3>${concerns.length ? `<ul>${themeList(concerns)}</ul>` : `<p class="detail-empty">${noConcernsCopy}</p>`}</section>
    </div>
    <p class="detail-footnote">${currentLanguage === "el" ? item.type === "creator" ? "Οι πληροφορίες για δημιουργούς είναι γενικές και δεν αποτελούν αξιολόγηση κάθε βίντεο. Τα θέματα, οι διαφημίσεις και ο τόνος διαφέρουν· δείτε το συγκεκριμένο βίντεο και ελέγξτε την αυτόματη αναπαραγωγή." : "Οι σημειώσεις συνοψίζουν συχνά θέματα και δεν αποτελούν ανάλυση κάθε σκηνής. Λάβετε υπόψη τις ευαισθησίες και την ωριμότητα του παιδιού σας." : item.type === "creator" ? "Creator guidance is a broad starting point, not a rating for every video. Topics, ads, and tone can change between uploads; preview the exact video and review autoplay recommendations." : "These notes summarize common themes; they aren't a scene-by-scene review. Your child's sensitivities and maturity matter too."}</p>
    ${renderReviews(item)}`;
  applyTranslations(document.querySelector("#detail-content"));
  const reviewForm = document.querySelector("#review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitReview(item, reviewForm);
  });
  const titleDialog = document.querySelector("#title-dialog");
  if (!titleDialog.open) titleDialog.showModal();
  document.querySelector("#title-close-button").onclick = () => titleDialog.close();
  const detailArtwork = document.querySelector(".detail-artwork[data-artwork]");
  const cardArtwork = [...results.querySelectorAll(".cover[data-artwork]")].find((cover) => cover.dataset.artwork === titleKey(item));
  const cardImage = cardArtwork?.querySelector(".cover-image");
  const detailImage = detailArtwork?.querySelector(".cover-image");
  if (cardImage?.complete && cardImage.naturalWidth > 0 && detailImage) {
    detailImage.src = cardImage.currentSrc || cardImage.src;
    detailArtwork.classList.add("has-image");
  }
  if (detailArtwork) loadTitleArtwork(detailArtwork);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    localStorage.setItem("little-lens-language", JSON.stringify(currentLanguage));
    render();
    applyTranslations();
  });
});

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