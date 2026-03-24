const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, currPoint) => {
if (locations.length === 0) {
  return null; 
  } 
  
let [nearLocation] = locations;
const [, nearestPoint] = nearLocation;
let lDistance = getDistance(currPoint, nearestPoint);

for (const location of locations) {
const [, point] = location;
const distance = getDistance(currPoint, point);
if (distance < lDistance) {
lDistance = distance;
nearLocation = location;
}
}

return nearLocation;
};

export {getTheNearestLocation};
// END
