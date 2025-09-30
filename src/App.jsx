import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/pricingOptions/PricingOptions";
import ResultsChart from "./components/resultsChart/ResultsChart";
// import Example from "./components/resultChart/resultsChart";


const pricingPromise = fetch("./pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-bold">Pricing data is loading..........</p>
              <div>
                <span className="loading loading-spinner loading-xl"></span>
                <span className="loading loading-spinner loading-xl"></span>
                <span className="loading loading-spinner loading-xl"></span>
                <span className="loading loading-spinner loading-xl"></span>
                <span className="loading loading-spinner loading-xl"></span>
              </div>
            </div>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <div className="w-[800px] h-[500px]"><ResultsChart></ResultsChart></div>
        {/* <div className="w-[800px] h-[800px]" ><Example></Example></div> */}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
