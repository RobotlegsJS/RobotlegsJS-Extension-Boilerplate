// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

export let IService = Symbol("IService");
export interface IService {
    /**
     *
     */
    add(a: number, b: number): number;

    /**
     *
     */
    subtract(a: number, b: number): number;

    /**
     *
     */
    multiply(a: number, b: number): number;

    /**
     *
     */
    divide(a: number, b: number): number;
}
