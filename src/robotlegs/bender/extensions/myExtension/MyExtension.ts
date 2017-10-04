// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IContext, IExtension } from "@robotlegsjs/core";

import { IService } from "./api/IService";
import { Service } from "./impl/Service";

/**
 *
 */
export class MyExtension implements IExtension {
    /**
     *
     */
    public extend(context: IContext): void {
        context.injector
            .bind(IService)
            .to(Service)
            .inSingletonScope();
    }
}
