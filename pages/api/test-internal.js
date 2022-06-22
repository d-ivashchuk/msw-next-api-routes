import { server } from "../../mocks/server";

export default async function handler(req, res) {
  server.listen();

  const x = await fetch("http://localhost:3000/api/call");
  const y = await x.json();

  res.status(200).json(y);
}
