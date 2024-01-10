import React, { useEffect } from "react";
import Card from "../components/Card";
import useUserContext from "../hooks/useUserContext";
import { userActions } from "../helpers/front/userActions";

function Login(){
  const [showLoginForm, setShowLoginForm]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  // const ctx = React.useContext(UserContext);
  const {currentUser, setCurrentUser} = useUserContext();


  useEffect(() => {
    if (currentUser === null) {
      setShowLoginForm(true);
    } else {
      setShowLoginForm(false);
    }
  }, [currentUser])

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={
        <>
          {showLoginForm ?
            <LoginForm setShowLoginForm={setShowLoginForm} setStatus={setStatus} setErrorMessage={setErrorMessage}/> :
            <LoginMsg setShowLoginForm={setShowLoginForm} setStatus={setStatus}/>}
          <span className="text-danger" >{errorMessage || ''}</span>
        </>
      }
    />
  )
}

function LoginMsg(props){
  // const ctx = React.useContext(UserContext);
  const {currentUser, setCurrentUser} = useUserContext();
  // const user = ctx.users.find(user => ctx.currentUser === user.email)

  const handleLogout = () => {
    setCurrentUser(null);
    props.setShowLoginForm(true);
    userActions.logout();
  }

  return(<>
    <h5>Logged in as {currentUser?.name}</h5>
    <p>With email: {currentUser?.email}</p>
    <button type="submit"
      className="btn btn-light"
      onClick={handleLogout}>
        Logout
    </button>
  </>);
}

function LoginForm(props){
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [availableButton, setAvailableButton] = React.useState(true);
  const {currentUser, setCurrentUser} = useUserContext();

  // const ctx = React.useContext(UserContext);

  console.log('currentUser : ', currentUser)


  React.useEffect(() => {
    setAvailableButton(email?.length > 0 && password?.length > 0)
  }, [email, password]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const freshlyConnectedUser = await userActions.login({email, password})
    .then((user) => {
      setCurrentUser(user);
      props.setShowLoginForm(false)
      // return;
    })
    .catch((error) => {
      console.error('error :', error);
      props.setErrorMessage(error);
      setTimeout(() => props.setErrorMessage(""), 2000);
    })
    .finally(() => setLoading(false))

  }


  return (<>
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="input"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}/>
      </label>

      <label>
        Password
        <input type={showPassword ? "text" : "password"}
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}/>
      </label>

      <label htmlFor="showPassword">
        <input type="checkbox" id='showPassword' onClick={() => setShowPassword(!showPassword)}/> Show Password
      </label>

      <br/>
      <input disabled={!availableButton} className="btn btn-light" type="submit" />

      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </form>

  </>);
}

export default Login;
