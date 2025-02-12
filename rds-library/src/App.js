import logo from "./logo.svg";
import "./App.css";
import "@radix-ui/themes/styles.css";

import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  return (
    <div className="App">
      <header className="App-header">radix</header>

      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
    </div>
  );
}

export default App;
