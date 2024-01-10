// import clientPromise from "../../lib/mongodb";
// import dal from "../../lib/dal";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
    // console.log('avant get3Movies called clientPromise')
        res.json({name: 'johndoe',});
   } catch (e) {
       console.error(e);
   }
};
