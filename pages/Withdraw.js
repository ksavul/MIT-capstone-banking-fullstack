import React, { useState } from "react";
import Card from "../components/Card";
// import { UserContext } from "../Provider/context";
import { userActions } from "../helpers/front/userActions";
import useUserContext from "../hooks/useUserContext";
import getBalance from "../helpers/front/getBalance";
import Link from "next/link";

const showMessageAndErease = ({message, setStatus}) => {
  setStatus(message)
  setTimeout(() => setStatus(""), 2000);
}

const FormWithdraw = (props) => {
  const [loading, setLoading] = React.useState(false);
  const {currentUser, setCurrentUser} = useUserContext();

  const [amount, setAmount] = React.useState(null);

  async function WithdrawAmount(e) {
    if (loading) return;

    setLoading(true);

    e.preventDefault();
    if (parseFloat(amount) > currentUser?.balance) {
      // alert('transaction failed : Balance is too low');
      showMessageAndErease({message : 'transaction failed : Balance is too low', setStatus: props.setErrorMessage});
      return;
    } else if (amount < 1) {
      showMessageAndErease({message : 'Number must be upper than 0', setStatus: props.setErrorMessage});
      return;
    }

    await userActions?.updateBalance({email: currentUser.email, amount: -1 * parseFloat(amount)})
      .then((user) => {
        console.log('resultat withdraw :', user)
        showMessageAndErease({message: `$${amount} withdraw successful!`, setStatus: props.setStatus});
        setCurrentUser({...user, token: currentUser.token})
        setTimeout(() => props?.setStatus(""), 2000);
        setAmount(null);
          })
      .catch((err) => console.error('WITHDRAW ERROR - ', err))
      .finally(() => setLoading(false));

  }

  return (
    <form onSubmit={WithdrawAmount}>
    <label>Enter amount to withdraw :
    <input
      type="number"
      name="number"
      className="form-control"
      required
      value={amount || ''}
      onChange={(e) => setAmount(e.currentTarget.value)}
    />
    </label>
      <input disabled={!(amount?.length > 0 || loading)} className="btn btn-light my-3" type="submit" />
      {loading && (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)}
  </form>
  )
}


function Withdraw() {
  const {currentUser, setCurrentUser} = useUserContext();
  const [status, setStatus] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [accountBalance, setAccountBalance] = useState(0);


  // React.useEffect(() => {
  //   const balance = getBalance({currentUser})
  //   setAccountBalance(balance?.balance);
  // }, [currentUser])

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      text=""
      status={status}
      body={
        <>
          {currentUser ?
          <div>
            <h5 className="text-dark ">Balance :<span className="font-weight-bold"> {currentUser?.balance}$</span></h5>
            <FormWithdraw setStatus={setStatus} setErrorMessage={setErrorMessage}/>
            <span className="text-danger">{errorMessage || ''}</span>
          </div> :
          <div>
            <h4>You need to login first</h4>
            <Link href={'/Login'} className="btn btn-light">
              Login
            </Link>
          </div>
          }
        </>
      }
    />
  );
}

export default Withdraw;
