import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CreateUserResponse {
    @Field(() => String)
    email!: string;
}

@ObjectType()
export class ContactFormResponse {
    @Field(() => String)
    status!: string;
}
