import { Component } from "react";
class SearchPeopleClassBased extends Component {
  constructor() {
    super();
    this.state = {
      char: "",
      results: [],
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, char: event.target.value });
  }

  handleClick() {
    // setLoading(true);//
    this.setState({ ...this.state, loading: true });
    fetch(`https://swapi.dev/api/people/?search=${this.state.char}`)
      .then((res) => res.json())
      .then((data) => {
        // setResults(data.results);
        // setLoading(false);
        this.setState({ ...this.state, results: data.results, loading: false });
      });
  }
  render() {
    const { loading, char, results } = this.state;
    return (
      <div>
        <div>
          <input
            onChange={this.handleChange}
            placeholder="Enter Your character"
            style={{ width: 250 }}
          />
          <div>
            <button onClick={this.handleClick} style={{ marginLeft: 10 }}>
              Search
            </button>
          </div>
        </div>
        <div>
          <div>Searching for {char}</div>
          <div>
            {loading ? (
              <div>Data is Loading ...</div>
            ) : (
              <ul>
                {results.map((char) => (
                  <li key={char.name}>{char.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPeopleClassBased;
