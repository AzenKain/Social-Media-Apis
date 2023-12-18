import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class CommentPostDto {
    @IsString()
    @IsNotEmpty()
    @Field()
    userId: string;

    @IsString()
    @IsNotEmpty()
    @Field()
    postId: string;

    @IsString()
    @IsNotEmpty()
    @Field()
    content: string;

    @IsOptional()
    @Field(() => [String])
    fileUrl: string[];
}