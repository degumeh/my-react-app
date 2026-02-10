export default function PreviewChanges({ result }) {
  return (
    <div>
      <h2>Preview Changes</h2>

      <h3>Adds</h3>
      <pre>{JSON.stringify(result.adds, null, 2)}</pre>

      <h3>Updates</h3>
      <pre>{JSON.stringify(result.updates, null, 2)}</pre>

      <h3>Archives</h3>
      <pre>{JSON.stringify(result.archives, null, 2)}</pre>
    </div>
  );
}
