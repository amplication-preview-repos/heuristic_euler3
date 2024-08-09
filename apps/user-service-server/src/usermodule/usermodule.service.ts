import { Injectable } from "@nestjs/common";
import { UpdateUserInputDto } from "../userModule/UpdateUserInputDto";

@Injectable()
export class UserModuleService {
  constructor() {}
  async UpdateUser(args: UpdateUserInputDto): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
