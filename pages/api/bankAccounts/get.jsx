// import clientPromise from "../../../lib/mongodb";
import { dal } from "../../../helpers/api/dal";
import apiHandler from "../../../helpers/api/api-handler";

export default apiHandler({
  post: getBankAccounts
});


async function getBankAccounts (req, res) {
   try {
    const user = await dal.getBankAccounts({email: req?.body?.email})
    // .then((result) => {
    //   console.log('result: ', result);
    //   res.json(result);
    //   return result
    // })
    // .catch((err) => {res.json(err)})
    console.log('user', user);

      res.json(user);

   } catch (e) {
       console.error(e);
       res.json(e);
   }
};
