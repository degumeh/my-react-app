export default function Controls({ tableData, setTableData, result }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={() => setTableData([])}>
        Clear Schedule
      </button>

      <button
        onClick={() =>
          setTableData([
            ...tableData.filter(
              t => !result.archives.some(
                a => a.movie === t.movie && a.start === t.start
              )
            ),
            ...result.adds
          ])
        }
      >
        Apply Changes
      </button>
    </div>
  );
}
