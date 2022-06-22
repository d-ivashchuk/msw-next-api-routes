import { server } from "../../mocks/server";

export default async function handler(req, res) {
  server.listen();

  const response = await fetch("http://localhost:3001/api/test");
  const json = await response.json();

  server.close();
  res.status(200).json({ name: "John Doe" });
}
