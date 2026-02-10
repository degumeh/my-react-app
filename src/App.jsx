import { useState } from "react";
import { existing } from "./data/existing";
import { incoming } from "./data/incoming";
import { diff } from "./utils/diff";

import PreviewChanges from "./components/PreviewChanges";
import ShowtimesTable from "./components/ShowtimesTable";
import Controls from "./components/Controls";

function App() {
  const [tableData, setTableData] = useState(existing);
  const result = diff(existing, incoming);

  return (
    <div style={{ padding: 20 }}>
      <h1>Schedule Diff Tool</h1>

      {/* <PreviewChanges result={result} /> */}

      <Controls
        tableData={tableData}
        setTableData={setTableData}
        result={result}
      />

      <ShowtimesTable tableData={tableData} />
    </div>
  );
}

export default App;


