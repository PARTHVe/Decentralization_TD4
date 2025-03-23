import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { REGISTRY_PORT as DEFAULT_REGISTRY_PORT } from "../config";
import net from "net";

export type Node = { nodeId: number; pubKey: string };

export type RegisterNodeBody = {
  nodeId: number;
  pubKey: string;
};

export type GetNodeRegistryBody = {
  nodes: Node[];
};

async function getAvailablePort(preferredPort: number): Promise<number> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(preferredPort, () => {
      server.close(() => resolve(preferredPort));
    });
    server.on("error", () => resolve(preferredPort + 1)); // Try next port if in use
  });
}

export async function launchRegistry() {
  const REGISTRY_PORT = await getAvailablePort(DEFAULT_REGISTRY_PORT);
  const _registry = express();
  _registry.use(express.json());
  _registry.use(bodyParser.json());

  // GET /status
  _registry.get("/status", (req: Request, res: Response) => {
    res.send("live");
  });

  // POST /registerNode
  const nodes: Node[] = [];
  _registry.post("/registerNode", (req: Request, res: Response) => {
    const { nodeId, pubKey }: RegisterNodeBody = req.body;
    nodes.push({ nodeId, pubKey });
    res.json({ result: "success" });
  });

  // GET /getNodeRegistry
  _registry.get("/getNodeRegistry", (req: Request, res: Response) => {
    res.json({ nodes });
  });

  const server = _registry.listen(REGISTRY_PORT, () => {
    console.log(`Registry is listening on port ${REGISTRY_PORT}`);
  });

  return server;
}