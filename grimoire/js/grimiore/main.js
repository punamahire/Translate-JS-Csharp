// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

const makeEvilSpellBook = (allSpells) => {
    const tmpEvilBook = { title: "Evil Book", spells: allSpells.filter(spell => spell.isEvil) }
    return tmpEvilBook;
}


const makeGoodSpellBook = (allSpells) => {
    tmpGoodBook = { title: "Good Book", spells: allSpells.filter(spell => !spell.isEvil) }
    return tmpGoodBook;
}


const getAllSpells = () => {
    const allSpells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyReqired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyReqired: 2.99
        },
        {
            name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyReqired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyReqired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyReqired: 2921.5
        }
    ];

    return allSpells;
}

const allSpells = getAllSpells();
const goodBook = makeGoodSpellBook(allSpells);
const evilBook = makeEvilSpellBook(allSpells);

const displaySpellBook = (book) => {
    console.log(book.title);

    book.spells.forEach(aSpell => {
        console.log('  ', aSpell.name);
    });

}


displaySpellBook(goodBook);
console.log();
displaySpellBook(evilBook);




