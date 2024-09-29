import { Token } from "@/auth/token.entity";
import { Controller, Get, Inject, Post } from "@outwalk/firefly";
import { Request } from "express";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { AuthService } from "@/auth/auth.service";
import { Unauthorized } from "@outwalk/firefly/errors";

@Controller()
export class UserController {

    @Inject() authService: AuthService;
    @Inject() userService: UserService;

    @Get()
    async getUser(req) {
        const token: Token = await this.authService.getTokenFromRequest(req);

        if (!token) return new Unauthorized("You are not authorized");

        return this.userService.getUserByToken(token);
    }

    @Post()
    createUser({ body }) {
        console.log("BODY", body);
    }

}