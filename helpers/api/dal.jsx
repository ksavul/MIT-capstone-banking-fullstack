import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import { db } from 'helpers/api';
import clientPromise from '../../lib/mongodb';

const { serverRuntimeConfig } = getConfig();
// const User = db.User;
// const userDB = clientPromise.

export const dal = {
    login,
    getAll,
    // getById,
    create,
    updateBalance,
    getBankAccounts,
    createBankAccount,
    // update,
    // delete: _delete
};

async function getUserDB() {
  const client = await clientPromise
  const db = await client?.db("bank")
  const users = db?.collection("users")

  return users;
}

async function login({ email, password }) {
  const userDB = await getUserDB();
    const user = await userDB.findOne({ email });

    if (!(user && bcrypt.compareSync(password, user.hash))) {
        throw 'Username or password is incorrect';
    }

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    return {
        ...user,
        token
    };
}

async function getAll() {
  const UserDb = await getUserDB();
    return await UserDb.find().toArray();
}

// async function getById(id) {
//     return await User.findById(id);
// }

async function create({email, name, password}) {
    const UserDB = await getUserDB();
    // validate
    if (await UserDB.findOne({ email })) {
        throw 'Username "' + email + '" is already taken';
    }

    const user = {name, email, hash: bcrypt.hashSync(password, 10), balance: 0}

    UserDB
    .insertOne(user, {w:1})
      .then((resultat) => {
        console.log('UserCréé');
      })
      .catch((err) => {throw err})
}

async function updateBalance({email, amount}) {
  const UserDB = await getUserDB();

  const now = new Date();
  const datetime = now.getDate() + "/"
    + (now.getMonth()+1)  + "/" + now.getFullYear() + " @ "
    + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();


  const user = await UserDB
  .findOneAndUpdate(
    {email: email},
    { $inc: { balance: amount}})
    .then((res) => {
      console.log('Modification Successful', res.value)
      // return res.value
    })
    .catch((err) => {throw err})

  const userModyfied = await UserDB.findOneAndUpdate(
    { email },
    {$push: {history: { amount, date: datetime}}}
    );
  return userModyfied.value
}

async function createBankAccount({email, accountName}) {
  const UserDB = await getUserDB();

  const user = await UserDB.findOneAndUpdate({email}, {$push: {bankAccounts: {accountName, balance: 0} }})
  .then((res) => {
  })
  .catch((err) => {throw err})

}

async function getBankAccounts({email}) {
  const UserDB = await getUserDB();

  const user = await UserDB.find({email}).toArray();

  return user;
}


// async function update(id, params) {
//     const user = await User.findById(id);

//     // validate
//     if (!user) throw 'User not found';
//     if (user.username !== params.username && await User.findOne({ username: params.username })) {
//         throw 'Username "' + params.username + '" is already taken';
//     }

//     // hash password if it was entered
//     if (params.password) {
//         params.hash = bcrypt.hashSync(params.password, 10);
//     }

//     // copy params properties to user
//     Object.assign(user, params);

//     await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }
