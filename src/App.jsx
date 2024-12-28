import { useState } from "react";
import { SparkiflyLoader } from "./components/sparkifly_loader/sparkifly_loader"
import { SearchHeader } from "./components/search_header/search_header";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000)


  return (
    <div className="">
      <SparkiflyLoader loading={isLoading} />
      <SearchHeader />
    </div >
  )
}

export default App
