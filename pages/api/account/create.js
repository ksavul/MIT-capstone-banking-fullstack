import apiHandler from "../../../helpers/api/api-handler";
import { dal } from "../../../helpers/api/dal";


async function create(req, res) {
  await dal.create(req?.query);
  return res.status(200).json({});
}

export default apiHandler({
    get: create
});
