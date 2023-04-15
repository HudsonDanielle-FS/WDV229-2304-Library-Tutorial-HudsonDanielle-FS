import "./App.css";
import axios from "axios";

function App() {
  const getPkm = () => {
    axios.get("GET https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section style={styles.cont}>
      <button onClick={getPkm} style={styles.button}>
        Give Me A Pokemon
      </button>
    </section>
  );
}

export default App;

const styles = {
  cont: {
    backgroundColor: "#808080",
    height: "100vh",
  },
  button: {
    marginLeft: "45%",
    marginTop: "10%",
  },
};
