import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Olá, NLW #5",
  });
});

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));
