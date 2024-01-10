import jwtMiddleware from "./jwt-middleware";
import errorHandler from "./error-handler";
import { authorize } from "./jwt-middleware";
// import { errorHandler, jwtMiddleware } from 'helpers/api';

function apiHandler(handler) {
    return async (req, res) => {
      console.log('request : ' ,req.body)
        const method = req.method.toLowerCase();

        // check handler supports HTTP method
        if (!handler[method])
            return res.status(405).end(`Method ${req.method} Not Allowed`);

        try {
            // global middleware
            await jwtMiddleware(req, res)
            // await authorize('Admin')

            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            console.error('Global error handler - ', err);
            // throw err;
            errorHandler(err, res);
        }
    }
}

export default apiHandler;
