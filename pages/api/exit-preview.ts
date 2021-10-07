import { NextApiHandler } from "next";

const exitPreview: NextApiHandler = (req, res) => {
  res.clearPreviewData();
  res.redirect("/");
  res.end();
};

export default exitPreview;
