import React from "react";
import Card from "../components/Card";
import useUserContext from "../hooks/useUserContext";

const CreateAccountForm = (props) => {
  const { currentUser, setCurrentUser } = useUserContext();
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [availableButton, setAvailableButton] = React.useState(true);

  const handleSubmit = (e) => {
    //
    e.preventDefault();
    setLoading(true);

    (async () => {
      try {
        const response = await fetch(
          `/api/account/create?name=${name}&email=${email}&password=${password}`
        );
        if (response.ok) {
          const res = await response.json();
          props.setShow(false);
        } else {
          const errorMessage = await response.json();
          console.error("Creation error: ", errorMessage.message || "");
          props?.setErrorMessage(errorMessage.message || "");
          setTimeout(() => props?.setErrorMessage(""), 2000);
        }
      } catch (err) {
        console.error("Creation error: ", err);
      } finally {
        setLoading(false);
      }
    })();
  };

  React.useEffect(() => {
    setAvailableButton(
      name?.length > 0 && email?.length > 0 && password?.length > 0
    );
  }, [email, name, password]);

  return (
    <form onSubmit={handleSubmit}>
      <label className="my-2">
        Enter name:
        <input
          type="text"
          name="name"
          className="form-control"
          required
          value={name || ""}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </label>
      <label className="my-2">
        Enter email:
        <input
          required
          type="email"
          name="email"
          className="form-control"
          value={email || ""}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </label>
      <label className="my-2">
        Enter password:
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          className="form-control"
          minLength="8"
          value={password || ""}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <label htmlFor="showPassword">
          <input
            type="checkbox"
            id="showPassword"
            onClick={() => setShowPassword(!showPassword)}
          />{" "}
          Show Password
        </label>
      </label>

      {/* 
      <label className="my-2">Enter balance:
      <input
        required
        type="number"
        name="balance"
        className="form-control"

        value={balance || ''}
        onChange={(e) => setBalance(e.currentTarget.value)}
      />
      </label> */}

      <input
        disabled={!availableButton}
        className="btn btn-light my-3"
        type="submit"
      />

      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </form>
  );
};

function CreateAccount(props) {
  const [show, setShow] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      text=""
      body={
        <>
          {show ? (
            <>
              <CreateAccountForm
                setShow={setShow}
                setErrorMessage={setErrorMessage}
              />
              <span className="text-danger bg-dark">{errorMessage || ""}</span>
            </>
          ) : (
            <Success setShow={setShow} />
          )}
        </>
      }
    />
  );
}

function Success(props) {
  return (
    <>
      <h5>Success!</h5>
      <br />
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Add another account
      </button>
    </>
  );
}

export default CreateAccount;
