import { NextApiHandler } from "next";

const test: NextApiHandler = async (_req, res) => {
  res.send({
    message: `API routes work too. This content was generated server-side.`,
    date: new Date().toISOString(),
  });
};
export default test;
