import { NextApiRequest, NextApiResponse } from "next";

const usersApi = (req: NextApiRequest, res: NextApiResponse) => {
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

export default usersApi;
