import React from "react";

export default function SearchForm({ searchTerm, setSearchTerm }) {
  function onChangeHandler(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  return (
    <section className="search-form">
      <form>
        <input
          value={searchTerm}
          onChange={onChangeHandler}
          type="text"
          placeholder="search by name"
        />
      </form>
    </section>
  );
}
