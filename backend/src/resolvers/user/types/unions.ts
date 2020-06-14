import { createUnionType } from "type-graphql";
import { CreateUserError } from "./errors";
import { CreateUserResponse, ContactFormResponse } from "./outputs";

export const CreateUserResult = createUnionType({
    name: "CreateUserResult",
    types: () => [CreateUserResponse, CreateUserError] as const,
    resolveType: (value) => {
        if ("message" in value) return "CreateUserError";
        else {
            return "CreateUserResponse";
        }
    },
});

export const ContactFormResult = createUnionType({
    name: "ContactFormResult",
    types: () => [ContactFormResponse, CreateUserError] as const,
    resolveType: (value) => {
        if ("message" in value) return "CreateUserError";
        else {
            return "ContactFormResponse";
        }
    },
});
