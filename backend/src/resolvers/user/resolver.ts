import { Resolver, Mutation, Arg, Ctx, Query, ClassType, ArgumentValidationError } from "type-graphql";
import { CreateUserResponse } from "./types/outputs";
import { CreateUserInput, ContactFormInput } from "./types/inputs";
import { Context } from "../../common/types";
import { CreateUserResult, ContactFormResult } from "./types/unions";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

@Resolver()
export class UserResolver {
    async validateArgs(type: ClassType, args: any): Promise<any> {
        const instance = plainToClass(type, args);
        const validationErrors = await validate(instance);
        if (validationErrors.length > 0) {
            for (const e of validationErrors) {
                switch (e.property) {
                    case "email":
                        return Promise.resolve({
                            __typename: "CreateUserError",
                            message: "Email address must be a valid email address.",
                        });
                    default:
                        throw new ArgumentValidationError(validationErrors);
                }
            }
        }
        return;
    }

    @Mutation(() => CreateUserResult)
    async createUser(@Arg("data") data: CreateUserInput, @Ctx() ctx: Context): Promise<typeof CreateUserResult> {
        const validate = await this.validateArgs(CreateUserInput, data);
        if (!validate) {
            const { email } = data;
            return Promise.resolve(
                ctx.prisma.user.create({
                    data: {
                        email: email,
                    },
                })
            ).catch((err) => {
                if (err.code === "P2002") {
                    return Promise.resolve({
                        message: "Email already in use, please try another email.",
                    });
                }
                return Promise.reject(new Error("Unexpected Error"));
            });
        } else {
            return Promise.resolve(validate);
        }
    }

    @Mutation(() => ContactFormResult)
    async contactForm(@Arg("data") data: ContactFormInput, @Ctx() ctx: Context): Promise<typeof ContactFormResult> {
        const error = await this.validateArgs(ContactFormInput, data);
        if (!error) {
            const { name, email, message, subscribe } = data;
            let response;
            if (subscribe) {
                response = await ctx.prisma.user
                    .create({
                        data: {
                            email: email,
                        },
                    })
                    .then(() =>
                        Promise.resolve({
                            status: "Submission successful",
                        })
                    )
                    .catch((err: any) => {
                        if (err.code === "P2002") {
                            return Promise.resolve({
                                message: "Email already in use, please try another email.",
                            });
                        }
                        return Promise.reject(new Error("Unexpected Error"));
                    });
            } else {
                response = {
                    status: "Submission successful",
                };
            }
            return Promise.resolve(response);
        } else {
            return Promise.resolve(error);
        }
    }

    @Query(() => [CreateUserResponse])
    async listUsers(@Ctx() ctx: Context): Promise<CreateUserResponse[]> {
        return Promise.resolve(ctx.prisma.user.findMany());
    }
}
