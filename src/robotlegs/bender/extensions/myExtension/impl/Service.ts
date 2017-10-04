// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IService } from "../api/IService";

import { injectable } from "@robotlegsjs/core";

@injectable()
export class Service implements IService {
    public add(a: number, b: number): number {
        return a + b;
    }

    public subtract(a: number, b: number): number {
        return a - b;
    }

    public multiply(a: number, b: number): number {
        return a * b;
    }

    public divide(a: number, b: number): number {
        return a / b;
    }
}
