import React, { useState, useCallback } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

import { debounce } from "lodash";

export default function SearchBar({ callback, wait = 500 }) {
  const [value, setValue] = useState("");

  const debouncedCallback = useCallback(debounce(v => callback(v), wait), [callback]);
  const handleSearch = useCallback(({ target: { value: localValue }}) => {
    // this will update input field val everytime user hits key
    setValue(localValue);
    debouncedCallback(localValue);
  });

  return (
    <div className="rmdb-searchbar">
      <div className="rmdb-searchbar-content">
        <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
        <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Search"
          onChange={handleSearch}
          value={value}
        />
      </div>
    </div>
  );
}
