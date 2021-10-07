import { NextApiHandler } from "next";

const preview: NextApiHandler = (_req, res) => {
  res.setPreviewData({});
  res.redirect("/");
  res.end();
};

export default preview;
