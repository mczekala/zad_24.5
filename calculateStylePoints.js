const calculateStylePoints = (styleNotes) => {
    let min = Math.min(...styleNotes);
    let indexMin = styleNotes.indexOf(min);
    styleNotes[indexMin] = 0;

    let max = Math.max(...styleNotes)
    let indexMax = styleNotes.indexOf(max);
    styleNotes[indexMax] = 0;
    let score = 0;
    styleNotes.map(note => {
        score = score + note;
    });
    return score;
};
module.exports = calculateStylePoints;