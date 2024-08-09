import * as graphql from "@nestjs/graphql";
import { UpdateUserInputDto } from "../userModule/UpdateUserInputDto";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}

  @graphql.Mutation(() => Boolean)
  async UpdateUser(
    @graphql.Args()
    args: UpdateUserInputDto
  ): Promise<boolean> {
    return this.service.UpdateUser(args);
  }
}
