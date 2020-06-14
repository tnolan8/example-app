import { ObjectType } from "type-graphql";
import { IError } from "../../../common/types";

@ObjectType({ implements: IError })
export class CreateUserError {
    // @Field(() => String)
    // uniqueEmailErrorMessage?: string;
    // @Field(() => String)
    // invalidEmailErrorMessage?: string;
}
