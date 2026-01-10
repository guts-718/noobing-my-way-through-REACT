import { useState, useEffect } from "react";
import "./style.css";

export default function SearchAutoComplete() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  function handleSearch(usr) {
    setUser({});
    setInput(usr);
  }

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/users?limit=100");
      const dat = await response.json();
      setData(dat?.users);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchUsr(usr) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${usr}`
      );
      const data = await response.json();
      setUser(data?.users[0]);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search User"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <button className="search-button" onClick={() => fetchUsr(input)}>
        Search User
      </button>

      {!user?.firstName && input && (
        <ul className="suggestions-list">
          {data.map((u) =>
            u.firstName.toLowerCase().startsWith(input.toLowerCase()) ? (
              <li
                key={u.id}
                className="suggestion-item"
                onClick={() => fetchUsr(u.firstName)}
              >
                {u.firstName}
              </li>
            ) : null
          )}
        </ul>
      )}

      {user?.firstName && (
        <div className="user-card">
          <h2>{user.firstName + " " + user.lastName}</h2>
          <div>Username: {user.username}</div>
          <div>Age: {user.age}</div>
          <div>Weight: {user.weight}</div>
          <div>University: {user.university}</div>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
}
