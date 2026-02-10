export function normalize(str) {
    // make strings consistant. removes punctuation, 
    // makes string all lower case and removes spaces
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function key(item) {
    // unique id
    // "spidermanhomecoming" + "18:00" -> "spidermanhomecoming18:00"
  return normalize(item.movie) + item.start;
}

