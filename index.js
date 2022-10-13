function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = `*`) {
    const inner = function(word = `special`) {
        return `You are ${visualFlair}${word}${visualFlair}!`;
    };
    return inner;
}