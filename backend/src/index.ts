require("dotenv").config();
import "reflect-metadata";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { Context } from "./common/types";
import { UserResolver } from "./resolvers";

(async (): Promise<void> => {


    const prisma = new PrismaClient();

    const schema = await buildSchema({
        resolvers: [UserResolver],
        emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
        validate: false,
        dateScalarMode: "timestamp",
    });

    const server = new ApolloServer({
        schema,
        playground: true,
        context: ({ req, res }): Context => ({
            req,
            res,
            prisma
        }),
    });

    const app = express();

    app.get("/health", function (req, res) {
        res.status(200).send("OK");
    });

    app.use(cors());

    server.applyMiddleware({ app, cors: false });

    app.listen(3000, () => {
        console.log("🚀 Server ready at: http://localhost:3000");
    });
})().catch((err) => console.log(err));
