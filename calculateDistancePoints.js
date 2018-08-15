const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let points;
    if (hillSize < 110) {
        points = 60;
        points = points + (distance - kPoint) * 2;
    } else if (hillSize < 185) {
        points = 60;
        points = points + (distance - kPoint) * 1.8;
    } else {
        points = 120;
        points = points + (distance - kPoint) * 1.2;
    }
    return points;
};
module.exports = calculateDistancePoints;