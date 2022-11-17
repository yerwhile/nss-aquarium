
const database = {
    fish: [
        {
            species: "Platinum Angelfish",
            length: 6,
            name: "Berta",
            origin: "Lake Victoria",
            diet: "Omnivore"
        },

        {
            species: "Stardust Discus",
            length: 8,
            name: "Flare",
            origin: "Lake Victoria",
            diet: "Carnivore"
        },

        {
            species: "Clown Loach",
            length: 12,
            name: "Autolycus",
            origin: "Sumatra",
            diet: "Omnivore"
        },

        {
            species: "Tiger Barb",
            length: 3,
            name: "Barbara",
            origin: "Sumatra",
            diet: "Omnivore"
        },

        {
            species: "Tiger Barb",
            length: 2.5,
            name: "Barbarette",
            origin: "Sumatra",
            diet: "Omnivore"
        },

        {
            species: "Gold Doubloon Molly",
            length: 5,
            name: "Danae",
            origin: "Colombia",
            diet: "Omnivore"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}));
}