import React from "react";
import Card from "../components/Card";
// import CardForm from "../components/CardForm";
// import { UserContext } from "../Provider/context";
import useUserContext from "../hooks/useUserContext";

function Balance() {
  const {currentUser, setCurrentUser} = useUserContext();
  // const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState("");
  const [status, setStatus] = React.useState(true);

  function fetchAccount() {
    if (currentUser) {
      fetch(`/account/balance/${currentUser?.email}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData("$" + data[0].balance);
        });
    } else {
      setStatus("Login to see account balance");
      setTimeout(() => setStatus(""), 3000);
    }
  }

  return (
    <>
    <div style={{backgroundColor: 'red', height: 500}}>
      <h1>Balance</h1>
    </div>
    <Card
      bgcolor="info"
      header="Balance"
      text={data}
      status={status}
      body={
        <>
          {/* <CardForm
            showName="none"
            showPassword="none"
            showAmount="none"
            showEmail="none"
          /> */}
          {
            <button
              type="submit"
              className="btn btn-light"
              onClick={fetchAccount}
            >
              See Balance
            </button>
          }
        </>
      }
    />
    </>

  );
}

export default Balance;
