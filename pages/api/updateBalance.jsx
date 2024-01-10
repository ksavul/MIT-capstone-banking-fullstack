import apiHandler from "../../helpers/api/api-handler";
import { dal } from "../../helpers/api/dal";

export default apiHandler({
    post: updateBalance
});

async function updateBalance(req, res) {
    const user = await dal.updateBalance(req.body)
    .then((response) => {
      return res.status(200).json(response);
      }
    );
}
