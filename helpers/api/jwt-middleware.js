import jwt, { expressjwt } from 'express-jwt';
import util from 'util';
// import getConfig from 'next/config';

// const { serverRuntimeConfig } = getConfig();

if (!process.env.JWT_SECRET) {
  throw new Error('Invalid/Missing environment variable: "JWT_SECRET"');
}

const JWT_SECRET = process.env.JWT_SECRET


function jwtMiddleware(req, res) {
  const middleware = expressjwt({ secret: JWT_SECRET, algorithms: ['HS256'] }).unless({
    path: [
      // public routes that don't require authentications
      '/api/account/create',
      // '/api/account/all',
      '/api/account/login'
    ]
  });

  return util.promisify(middleware)(req, res);
}

export default jwtMiddleware;

// export function authorize(roles = []) {
//   // roles param can be a single role string (e.g. Role.User or 'User')
//   // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
//   if (typeof roles === 'string') {
//       roles = [roles];
//   }

//   return [
//       // authenticate JWT token and attach user to request object (req.user)
//       expressjwt({ secret: JWT_SECRET, algorithms: ['HS256'] }),

//       // authorize based on user role
//       (req, res, next) => {
//         console.log('req?.user : ', req?.user)
//         console.log('req?.user?.role : ', req?.user?.role)
//         console.log('req.user.auth : ', req.user.auth)
//           if (roles.length && !roles.includes(req.user.role)) {
//               // user's role is not authorized
//               return res.status(401).json({ message: 'Unauthorized' });
//           }

//           // authentication and authorization successful
//           next();
//       }
//   ];
// }

