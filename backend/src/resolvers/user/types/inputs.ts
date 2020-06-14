import { InputType, Field } from "type-graphql";
import { IsEmail } from "class-validator";

@InputType()
export class CreateUserInput {
    @IsEmail()
    @Field(() => String)
    email!: string;
}

@InputType()
export class ContactFormInput {
    @IsEmail()
    @Field(() => String)
    email!: string;
    @Field(() => String)
    name!: string;
    @Field(() => String)
    message!: string;
    @Field(() => Boolean, { defaultValue: false })
    subscribe!: boolean;
}
