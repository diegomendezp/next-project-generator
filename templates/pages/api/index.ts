import { NextApiRequest, NextApiResponse } from "next";

export default (req:NextApiRequest, res:NextApiResponse) => {
  switch (req.method) {
    case "GET":
        // 
        res.status(200).json({msg: ""})
        break;
    case 'POST':
        //
        res.status(200).json({msg: ""})
        break
    default:
        res.status(404).end();
        break;
}
}