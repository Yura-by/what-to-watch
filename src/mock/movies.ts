import {Movie} from '../types';

const Movies: Movie[] = [
  {
    id: 1,
    backgroundColor: `#795433`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Pulp_Fiction.jpg`,
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    director: `Quentin Tarantino`,
    genre: `Crime`,
    isFavorite: false,
    name: `Pulp Fiction`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Pulp_Fiction.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/pulp-fiction.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 1.5,
    released: 1994,
    runTime: 153,
    scoresCount: 1635992,
    starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
  {
    id: 2,
    backgroundColor: `#828585`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Midnight_Special.jpg`,
    description: `A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.`,
    director: `Jeff Nichols`,
    genre: `Action`,
    isFavorite: false,
    name: `Midnight Special`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Midnight_Special.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/midnight-special.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2016,
    runTime: 112,
    scoresCount: 67815,
    starring: [`Michael Shannon`, `Joel Edgerton`, `Kirsten Dunst `],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
  {
    backgroundColor: `#977461`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Shutter_Island.jpg`,
    description: `In 1954, a U,.S. Marshal investigates the disappearance of a murderer, who escaped from a h,ospital for the criminally insane.`,
    director: `Martin Scorsese,`,
    genre: `Thriller`,
    id: 3,
    isFavorite: false,
    name: `Shutter Island`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Shutter_Island.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/shutter-island.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 4.1,
    released: 2010,
    runTime: 138,
    scoresCount: 1002557,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    backgroundColor: `#CBAC79`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
    description: `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years ,later, where he once again must confront the ghosts and regrets of his old life.`,
    director: `Sergio Leone`,
    genre: `Crime`,
    id: 4,
    isFavorite: false,
    name: `Once Upon a Time in, America`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big,_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 9.9,
    released: 1984,
    runTime: 229,
    scoresCount: 276395,
    starring: [`Robert De Niro`, `James Woods`, `Elizabeth McGovern`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    backgroundColor: `#D8E3E5`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Moonrise_Kingdom.jpg`,
    description: `A pair of yo,ung lovers flee their New England town, which causes a local search party to fan, out to find them.`,
    director: `Wes Anderson`,
    genre: `Adventure`,
    id: 5,
    isFavorite: false,
    name: `Moonrise Kingdom`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Moonrise_Kingdom.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/moonrise-kingdom.jpg`,
    previewVideoLink: `https:/,/download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 7.9,
    released: 2012,
    runTime: 94,
    scoresCount: 291183,
    starring: [`Jared Gilman`, `Kara Hayward`, `Bruce Willis`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    backgroundColor: `#A39E81`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/What-We-Do-in-the-Shadows.jpg`,
    description: `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100, years, in Staten Island.`,
    director: `Jemaine Clement`,
    genre: `Comedy`,
    id: 6,
    isFavorite: false,
    name: `What We Do in the Shadows`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/What-We-Do-in-the-Shadows.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/what-we-do-in-the-shadows.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 7.2,
    released: 2019,
    runTime: 30,
    scoresCount: 6173,
    starring: [`Kayvan Novak`, `Matt Berry`, `Natasia Demetriou`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    backgroundColor: `#D6CDAF`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Aviator.jpg`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    director: `Martin Scorsese`,
    genre: `Drama`,
    id: 7,
    isFavorite: false,
    name: `Aviator`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Aviator.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/aviator.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 9.8,
    released: 2014,
    runTime: 170,
    scoresCount: 307174,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    backgroundColor: `#B6A99F`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Fantastic_Beasts.jpg`,
    description: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
    director: `David Yates`,
    genre: `Fantasy`,
    id: 8,
    isFavorite: false,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Fantastic_Beasts.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.4,
    released: 2018,
    runTime: 134,
    scoresCount: 160757,
    starring: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    backgroundColor: `#9B7E61`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/War_of_the_Worlds.jpg`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    director: `Steven Spielberg`,
    genre: `Adventure`,
    id: 9,
    isFavorite: false,
    name: `War of the Worlds`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/War_of_the_Worlds.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/war-of-the-worlds.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 9.3,
    released: 2005,
    runTime: 116,
    scoresCount: 386834,
    starring: [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    backgroundColor: `#BDAD8F`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/No_Country_for_Old_Men.jpg`,
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    director: `Ethan Coen`,
    genre: `Crime`,
    id: 10,
    isFavorite: false,
    name: `No Country for Old Men`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/No_Country_for_Old_Men.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/no-country-for-old-men.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 4.1,
    released: 2007,
    runTime: 122,
    scoresCount: 764976,
    starring: [`Tommy Lee Jones`, `Javier Bardem`, `Josh Brolin`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  },
  {
    backgroundColor: `#F1E9CE`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 11,
    isFavorite: false,
    name: `Macbeth`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Macbeth.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/macbeth.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scoresCount: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  },
  {
    backgroundColor: `#C6CADF`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Seven_Years_in_Tibet.jpg`,
    description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
    director: `Jean-Jacques Annaud`,
    genre: `Adventure`,
    id: 12,
    isFavorite: false,
    name: `Seven Years in Tibet`,
    posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Seven_Years_in_Tibet.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 3.6,
    released: 1997,
    runTime: 136,
    scoresCount: 112612,
    starring: [`Brad Pitt`, `David Thewlis`, `BD Wong`],
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  }
];

export {Movies};