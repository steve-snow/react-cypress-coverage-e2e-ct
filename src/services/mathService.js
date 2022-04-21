const add = (a, b) => {
    if (a && b) {
        return a + b
    }
    return 0;
}

const futureNotUsed = (x) => {
    console.log(x)
}

const ultimateAnswerToLifeTheUniverseAndEverything = 42;

export {
    add,
    futureNotUsed,
    ultimateAnswerToLifeTheUniverseAndEverything as getTheAnswer,
};