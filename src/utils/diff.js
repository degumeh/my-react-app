import { key } from "./normalize";


// Main function that compares existing data with incoming data
export function diff(existing, incoming) {

  // Create a Map to store existing showtimes for fast lookup
  const map = new Map();

  // Loop through existing records
  existing.forEach(e => 
    // Use the generated key as the identifier and store the record
    map.set(key(e), e)
  );

  // Array to hold brand new showtimes
  const adds = [];

  // Array to hold showtimes that exist but changed
  const updates = [];

  // Loop through each incoming showtime
  incoming.forEach(i => {

    // Generate a comparison key for the incoming record
    const k = key(i);

    // If the key does NOT exist in existing data
    if (!map.has(k)) {
      // This is a brand new showtime → ADD
      adds.push(i);
    } else {
      // Fetch the existing record with the same key
      const old = map.get(k);

      // Compare fields to detect changes (example: auditorium renamed)
      if (old.auditorium !== i.auditorium) {
        // Same showtime, different details → UPDATE
        updates.push({ old, new: i });
      }

      // Remove this key so it won't be archived later
      map.delete(k);
    }
  });

  // Any records still left in the map were not in incoming data
  // These should be archived
  const archives = [...map.values()];

  // Return final diff result
  return { adds, updates, archives };
}
