export default function Search({ searcTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searcTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
