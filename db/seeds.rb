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

note1 = Note.create({
    body: "Got this print in paris when I was visiting the louvre, Seemed appropriate!",
    artwork_id: mona_lisa1.id
})

note2 = Note.create({
    body: "I got this print at recycled books",
    artwork_id: mona_lisa2.id
})
note3 = Note.create({
    body: "I got also this print at recycled books",
    artwork_id: persistence.id
})

