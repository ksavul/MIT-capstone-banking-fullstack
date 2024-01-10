import React from "react";
import Card from "../components/Card";
import useUserContext from "../hooks/useUserContext";
import { userActions } from "../helpers/front/userActions";

function UserDataCard(props) {

  return (
    <Card
      bgcolor="secondary"
      header={`${props.userData.name}`}
      // text={'test de text'}
      status=""
      body={
        <div className="">
          <p>User : {props.userData.name}</p>
          <p>Email : {props.userData.email}</p>
          <p>Password : {props.userData.hash}</p>
          <p className="fw-bold font-weight-bold">Balance : <span className="text-success bg-dark width-medium p-2 rounded">$ {props.userData.balance}</span></p>
          <hr className="hr" />
          <h4 className="text-center">History</h4>
          <div className="d-flex flex-wrap flex-column-reverse">
            {props?.userData?.history?.map((item) => (
              <div className="bg-lightGray rounded width-meduim  my-2 d-flex " style={{width: "16rem"}}>
                <div className="border border-2 rounded bg-light border-light date-item text-dark" style={{width: 180}}>{item?.date}</div>
                {''}
                <div className={"text-center " + (item?.amount > 0 ? "text-success" : "text-danger")} style={{fontWeight: 'bold', width: 80, alignSelf: 'center'}}>{item?.amount > 0 ? '+' : '-'} {Math.abs(item?.amount)}</div>
              </div>
            ))}
          </div>
          <hr className="hr" />
        </div>
      }
    />
  );

}

function AllData() {
  const {currentUser, setCurrentUser} = useUserContext();

  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);


    const getData = async () => {
      await userActions?.getAll()
      .then((allData) => {
        setData(allData)
      })
      .catch((error) => console.error('error :', error))
      .finally(() => setLoading(false))
    }

    getData()
  }, [])


  return (
    <div className="justify-content-center align-items-center d-flex flex-wrap justify-content-around w-100">
      {data?.length > 0 ?
      <>
        {data.map((user, index) => {
          return (
            <UserDataCard userData={user} key={index}/>
          );
        })}
        </>
        : loading ?
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : <h2>No data to display</h2>
      }
    </div>
  );
}

export default AllData;
