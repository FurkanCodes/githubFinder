import { useState } from "react";
import "./App.css";
import { Theme, Button } from "react-daisyui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Theme dataTheme="cyberpunk">
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="text-6xl text-red-600">{count}</div>
          <Button
            color="primary"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count+
          </Button>
        </div>
      </div>
    </Theme>
  );
}

export default App;
