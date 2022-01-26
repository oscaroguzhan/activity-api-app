import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import logo from "./Components/assets/ozzylogo.png";
import Activity from "./Components/Activity";
import Button from "./Components/Button";
import Spinner from "./Components/Spinner";

function App() {
  // set the states
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchNew, setFetchNew] = useState(false);

  

  // useEffect to get the data
  useEffect(() => {
    setIsLoading(true);
    /* define the async function and fetch with axios */
    const fetchItems = async () => {
      const result = await axios(`http://www.boredapi.com/api/activity/`);
      // console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    {
      /* call the async function to get the data */
    }
    fetchItems();
  }, [fetchNew]);

  // definera funktioner
  const getActivityById = () => {
    
    let participant_number = +document.querySelector("#input_field").value;
    console.log(participant_number);
    fetch(
      `http://www.boredapi.com/api/activity?participants=${participant_number}`
    )
      .then((response) => response.json())
      .then((json) => setItems(json));
      
  };

  // retunera till JSX
  return (
    <div className="container">
      {/*  header component*/}
      <Header logo={logo} />
      <div className="form">
        <input type="number" id="input_field" placeholder="Number of participant"/>
        <button
          onClick={() => {
            isLoading ? (<Spinner/>) : (getActivityById());
          }}
        >
          Get activity by participant number
        </button>
      </div>
      
      <Activity isLoading={isLoading} items={items} />
      <Button
        items={items}
        setItems={setItems}
        fetchNew={fetchNew}
        setFetchNew={setFetchNew}
      />
    </div>
  );
}

export default App;
