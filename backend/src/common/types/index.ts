import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { InterfaceType, Field } from "type-graphql";

export interface Context {
    req: Request;
    res: Response;
    prisma: PrismaClient;
}

@InterfaceType()
export abstract class IError {
    @Field(() => String)
    message!: string;
}
