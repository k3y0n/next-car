import { CustomFilter, Main, SearchBar } from "./components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Main />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-containter">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
