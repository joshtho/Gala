# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

leonardo = Artist.create(
    {
        name: "Leonardo da Vinci",
        description: "Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
        image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT5Kgg1RnlEarSfN2dSR6lxFxG1vS5QtLdnnqBPTiFaNDVm4CTX_v9SP4SzbquTqKQIIlUEnTZTxxzDwS8"

    }
)
salvador = Artist.create(
    {
        name: "Salvador Dali",
        description: "Salvador Dalí, was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work.",
        image: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT5x_-9owpIbWmMDVmlDCGt0TGKU0ez3IU4Z99J2_R_stMAszyy3nN09VP3NdBoRkFx2CVpmasGN9zu3x8"

    }
)
donatello = Artist.create(
    {
        name: "Donatello",
        description: "An Italian sculptor of the Renaissance period. Born in Florence, he studied classical sculpture and used his knowledge to develop an Early Renaissance style of sculpture.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Cinq_ma%C3%AEtres_de_la_Renaissance_florentine_Mus%C3%A9e_du_Louvre_Peintures_INV_267_-_Donatello.jpg"

    }
)

michelangelo = Artist.create(
    {
        name: "Michelangelo",
        description: "An Italian sculptor, painter, architect, and poet of the High Renaissance. His work was inspired by models from classical antiquity and had a lasting influence on Western art.Given the sheer volume of surviving correspondence, sketches, and reminiscences, Michelangelo is one of the best-documented artists of the 16th century.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/800px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg"

    }
)

banksy = Artist.create(
    {
        name: "Banksy",
        description: "Banksy is a pseudonymous England-based street artist, political activist and film director whose real name and identity remain unconfirmed and the subject of speculation. Active since the 1990s, his satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stenciling technique.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Banksy-art.jpg"

    }
)
warhol = Artist.create(
    {
        name: "Andy Warhol",
        description: "An american visual artist, film director, producer, and leading figure in the pop art movement. His works explore the relationship between artistic expression, advertising, and celebrity culture that flourished by the 1960s, and span a variety of media, including painting, silkscreening, photography, film, and sculpture.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg/800px-Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg"

    }
)
raphael = Artist.create(
    {
        name: "Raphael",
        description: "An Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human grandeur.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/800px-Raffaello_Sanzio.jpg"

    }
)

frida = Artist.create(
    {
        name: "Frida Kahlo",
        description: "a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society. Her paintings often had strong autobiographical elements and mixed realism with fantasy.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/800px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg"

    }
)

user1 = User.create(
    {
        username: "user1@abc.com",
        password: "password1"
    }
)

user2 = User.create(
    {
        username: "user2@abc.com",
        password: "abc123"
    }
)

mona_lisa1 = Artwork.create(
    {
        title: "The Mona Lisa",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        medium: "Oil on canvas",
        location: "Louvre, Paris",
        artist_id: leonardo.id,
        user_id: user1.id
    }
)
last_supper = Artwork.create(
    {
        title: "The last supper",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The-Last-Supper-Restored-Da-Vinci_32x16.jpg/2560px-The-Last-Supper-Restored-Da-Vinci_32x16.jpg",
        medium: "Oil on canvas",
        location: "Santa Maria delle Grazie",
        artist_id: leonardo.id,
        user_id: user1.id
    }
)
mona_lisa2 = Artwork.create(
    {
        title: "The Mona Lisa",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        medium: "Oil on canvas",
        location: "Louvre, Paris",
        artist_id: leonardo.id,
        user_id: user2.id
    }
)

persistence = Artwork.create(
    {
        title: "The persistence of memory",
        image: "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg",
        medium: "Oil paint, Bronze",
        location: "Museum of Modern Art",
        artist_id: salvador.id,
        user_id: user1.id
    }
)
swans = Artwork.create(
    {
        title: "Swans Reflecting Elephants",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Swans_reflecting_elephants.jpg",
        medium: "Oil paint",
        location: "private collection",
        artist_id: salvador.id,
        user_id: user1.id
    }
)

david = Artwork.create(
    {
        title: 'Bronze David', 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/David%2C_Donatello%2C_ca._1440%2C_Bargello_Florenz-02.jpg/800px-David%2C_Donatello%2C_ca._1440%2C_Bargello_Florenz-02.jpg",
        medium: 'bronze sculpture',
        location: 'Museo Nazionale del Bargello',
        artist_id: donatello.id,
        user_id: user2.id
    }
)

adam = Artwork.create(
    {
        title: 'The creation of adam', 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/63/The_Creation_of_Adam.jpg",
        medium: "Oil paint",
        location: 'The sistine chapel, Vatican city',
        artist_id: michelangelo.id,
        user_id: user1.id
    }
)
balloon = Artwork.create(
    {
        title: 'Balloon Girl', 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg/1920px-Banksy_Girl_and_Heart_Balloon_%282840632113%29.jpg",
        medium: 'grafitti mural',
        location: 'London, UK',
        artist_id: banksy.id,
        user_id: user2.id
    }
)

marylin = Artwork.create(
    {
        title: "Shot Marylins",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Shot_Marilyns.jpg",
        medium: "silkscreen",
        location: "multiple locations",
        artist_id: warhol.id,
        user_id: user2.id
    }
)

athens = Artwork.create(
    {
        title: "School of Athens",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Escola_de_atenas_-_vaticano.jpg",
        medium: "fresco",
        location: "Apostolic Palace, Vatican City",
        artist_id: raphael.id,
        user_id: user1.id
    }
)

portrait = Artwork.create(
    {
        title: "Self portrait with thorn necklace and hummingbird",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Frida_Kahlo_%28self_portrait%29.jpg",
        medium: "Oil on Canvas",
        location: "Harry Ransom Center, Austin, TX",
        artist_id: frida.id,
        user_id: user2.id
    }
)




note1 = Note.create({
    body: "Got this print in paris when I was visiting the louvre, Seemed appropriate!",
    artwork_id: mona_lisa1.id
})

note2 = Note.create({
    body: "I got this print at recycled books",
    artwork_id: mona_lisa2.id
})
note3 = Note.create({
    body: "I got this print at recycled books",
    artwork_id: persistence.id
})
note4 = Note.create({
    body: "I just love this painting",
    artwork_id: last_supper.id
})
note5 = Note.create({
    body: "This one is trippy",
    artwork_id: swans.id
})
note6 = Note.create({
    body: "Want this in my garden",
    artwork_id: david.id
})
note7 = Note.create({
    body: "Saw this in person at the vatican",
    artwork_id: adam.id
})
note8 = Note.create({
    body: "I have wanted this mural on one of my walls for a long time",
    artwork_id: balloon.id
})
note9 = Note.create({
    body: "Gf owns this print",
    artwork_id: marylin.id
})
note10 = Note.create({
    body: "Loved his frescos while I was in the vatican",
    artwork_id: athens.id
})
note11 = Note.create({
    body: "Saw this in austin",
    artwork_id: portrait.id
})


