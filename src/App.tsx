import { Routes, Route, Link } from "react-router-dom";
import ChakraLayout from "./ChakraLayout";
import { Stack } from "@chakra-ui/react";
import ChakraForms from "./ChakraForms";
import ChakraDataDisplay from "./ChakraDataDisplay";

import ChakraFeedback from "./ChakraFeedback";
import ChakraTypography from "./ChakraTypography";
import ChakraOverlay from "./ChakraOverlay";
import ChakraDisclosure from "./ChakraDisclosure";
import ChakraNavigation from "./ChakraNavigation";
import ReduxExample from "./ReduxExample"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <header className="App-header">
              <Stack>
                <Link to="/chakraLayout">Chakra Test</Link>
                <Link to="/chakraForms">Chakra Forms</Link>
                <Link to="/chakraDataDisplay">Chakra Data Display</Link>
                <Link to="/chakraFeedback">Chakra Feedback</Link>
                <Link to="/chakraTypography">Chakra Typography</Link>
                <Link to="/chakraOverlay">Chakra Overlay</Link>
                <Link to="/chakraDisclosure">Chakra Disclosure</Link>
                <Link to="/chakraNavigation">Chakra Navigation</Link>
                <Link to="/redux">Redux Toolkit</Link>
              </Stack>
            </header>
          }
        ></Route>
        <Route path="/chakraLayout" element={<ChakraLayout />} />
        <Route path="/chakraForms" element={<ChakraForms />} />
        <Route path="/chakraDataDisplay" element={<ChakraDataDisplay />} />
        <Route path="/chakraFeedback" element={<ChakraFeedback />} />
        <Route path="/chakraTypography" element={<ChakraTypography />} />
        <Route path="/chakraOverlay" element={<ChakraOverlay />} />
        <Route path="/chakraDisclosure" element={<ChakraDisclosure />} />
        <Route path="/chakraNavigation" element={<ChakraNavigation />} />
        <Route path="/redux" element={<ReduxExample/>}/>
      </Routes>
    </div>
  );
}

export default App;
