export const CHARACTERS = `
query Characters {
    characters(page: 4, filter: null) {
        results {
            id
            name
            status
            species
            type
            gender
            image
            created
        }
        info {
            count
            pages
            next
            prev
        }
    }
}
`;
