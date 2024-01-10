import apiHandler from "../../../helpers/api/api-handler";
import { dal } from "../../../helpers/api/dal";
// import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: login
});

async function login(req, res) {
  console.log('req.body: ', req.body);
    const user = await dal.login(req.body);
    console.log('user before sending back: ', user);
    return res.status(200).json(user);
}
