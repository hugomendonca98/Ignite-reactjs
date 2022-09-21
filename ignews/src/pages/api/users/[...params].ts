import { NextApiRequest, NextApiResponse } from "next";

const user = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query);

  const users = [
    {
      id: 1,
      name: "Hugo",
    },
    {
      id: 2,
      name: "Jorge",
    },
    {
      id: 3,
      name: "Vera",
    },
  ];

  return res.json(users);
};

export default user;
