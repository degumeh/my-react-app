import { useState } from "react";

export default function ShowtimesTable({ tableData }) {
  const [filter, setFilter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = tableData
    .filter(r => r.movie.toLowerCase().includes(filter.toLowerCase()))
    .sort((a,b) =>
      sortAsc
        ? a.movie.localeCompare(b.movie)
        : b.movie.localeCompare(a.movie)
    );

  return (
    <div>
      <h2>Current Showtimes</h2>

      <input
        placeholder="Filter movie..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <button onClick={() => setSortAsc(!sortAsc)}>
        Toggle Sort
      </button>

      <table border="1">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Auditorium</th>
            <th>Start</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r,i) => (
            <tr key={i}>
              <td>{r.movie}</td>
              <td>{r.auditorium}</td>
              <td>{r.start}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
