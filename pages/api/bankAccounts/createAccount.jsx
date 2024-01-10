import apiHandler from "../../../helpers/api/api-handler";
import { dal } from "../../../helpers/api/dal";
// import { apiHandler, usersRepo } from 'helpers/api';

async function create(req, res) {
  console.log("Create bank account", req.body);
  await dal.createBankAccount(req?.body);
  return res.status(200).json({});
}

export default apiHandler({
  post: create,
});
