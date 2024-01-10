// import clientPromise from "../../../lib/mongodb";
import { dal } from "../../../helpers/api/dal";
import apiHandler from "../../../helpers/api/api-handler";

export default apiHandler({
  get: getAll
});


async function getAll (req, res) {
   try {
    // const client = await clientPromise;
    // const db = client?.db("bank");

    dal.getAll()
    .then((result) => {
      res.json(result);
      return result
    })
    .catch((err) => {res.json(err)})

   } catch (e) {
       console.error(e);
       res.json(e);
   }
};
