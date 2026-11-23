import express from "./node_modules/express/index.js"; // tentei assim e sem a estrutura, deu erro em ambas
import maquinaRoutes from "./routes/maquinaRoutes.js";
import leituraEnergiaRoutes from "./routes/leituraEnergiaRoutes.js";
import conexao from "./config/conexao.js";
import dotenv from 'dotenv';

const app = express();
const port = Number(process.env.PORT);

app.use(express.json());
app.use("/maquinas", maquinaRoutes);
app.use("/leituras", leituraEnergiaRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "API EnergyTrack em execução" });
});

try {
  await conexao();
  app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
  });
} catch (erro) {
  console.error("Não foi possível iniciar a API:", erro.message);
  process.exit(1);
}
