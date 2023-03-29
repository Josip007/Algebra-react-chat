const adjectives = ['lijep', 'zgodan', 'pametan'];
const nouns = ['Snake', 'Raiden', 'Jack'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
