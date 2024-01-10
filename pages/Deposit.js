import React, { useCallback, useState } from "react";
import Card from "../components/Card";
import Link from "next/link";
import useUserContext from "../hooks/useUserContext";
import { userActions } from "../helpers/front/userActions";
import getBalance from "../helpers/front/getBalance";

const showMessageAndErease = ({message, setStatus}) => {
  setStatus(message)
  setTimeout(() => setStatus(""), 2000);
}

const FormDeposit = (props) => {
  // const ctx = React.useContext(UserContext);
  const [loading, setLoading] = React.useState(false);
  const [amount, setAmount] = React.useState(null);
  const {currentUser, setCurrentUser} = useUserContext();

  // const user = ctx.users.find(user => user.email === ctx.currentUser)

  async function depositAmount(e) {
    e.preventDefault();
    setLoading(true);

    // userActions?.updateBalance({email: currentUser.email, amount: amount})

    // if (ctx.user !== "") {
      if (amount < 1) {
        showMessageAndErease({message : 'Number can\'t be negative', setStatus: props.setErrorMessage});
        return;
      } else {
        await userActions?.updateBalance({email: currentUser.email, amount: amount})
          .then((user) => {
            showMessageAndErease({message: `$${amount} deposit successful!`, setStatus: props.setStatus});
            setCurrentUser({...user, token: currentUser.token})
            setTimeout(() => props?.setStatus(""), 2000);
            setAmount(null);
              })
          .catch((err) => console.error('DESPOSIT ERROR - ', err))
          .finally(() => setLoading(false));
        // user.history += '+' + amount + '; ';
        // user.balance = parseFloat(user.balance || 0) + parseFloat(amount);
        }
    // } else {
    //   props?.setStatus("Login to make a deposit");
    //   setTimeout(() => props?.setStatus(""), 3000);
    // }
  }

  return (
    <form onSubmit={depositAmount}>
    <label>Enter amount to deposit:
    <input
      type="number"
      name="number"
      className="form-control"
      required
      value={amount || ''}
      onChange={(e) => setAmount(e.currentTarget.value)}
      // value={ctx.name}
      // onChange={(e) => (ctx.name = e.currentTarget.value)}
    />
    </label>
      <input disabled={!(amount?.length > 0)} className="btn btn-light my-3" type="submit" />

    {loading && (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)}
  </form>
  )
}

function Deposit() {
  // const ctx = React.useContext(UserContext);
  const {currentUser, setCurrentUser} = useUserContext();
  const [accountBalance, setAccountBalance] = useState(0);

  const [status, setStatus] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  // React.useEffect(() => {
  //   const balance = getBalance({currentUser})
  //   setAccountBalance(balance?.balance);
  // }, [currentUser])


  // useEffect(() => {

  // }, [])
  // const user = ctx.users.find(user => user.email === ctx.currentUser)


  // console.log('ctx :', ctx)

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      text=""
      status={status}
      body={
        <>
        {currentUser ?
          <div>
            <h5 className="text-dark ">Balance :<span className="font-weight-bold"> {currentUser?.balance}$</span></h5>
            <FormDeposit setStatus={setStatus} setErrorMessage={setErrorMessage}/>
            <span className="text-danger" >{errorMessage || ''}</span>
          </div>
           :
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

export default Deposit;
