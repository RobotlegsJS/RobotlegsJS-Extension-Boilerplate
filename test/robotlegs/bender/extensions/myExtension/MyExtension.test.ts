// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import "../../../../entry";

import { assert } from "chai";

import { IContext, Context } from "@robotlegsjs/core";

import { IService, MyExtension } from "../../../../../src";

describe("MyExtension", () => {
    let context: IContext;
    let service: IService;

    beforeEach(() => {
        context = new Context();
        context.install(MyExtension);
    });

    afterEach(() => {
        context = null;
    });

    it("MyExtension is properly installed into context", () => {
        let initialized: boolean = false;
        context.whenInitializing(function(): void {
            initialized = true;
        });
        context.initialize();
        assert.isTrue(initialized);
    });

    it("IService is mapped into injector", () => {
        context.initialize();
        assert.isDefined(context.injector.get(IService));
    });

    it("IService provide concrete implementation of addition method", () => {
        context.initialize();
        service = context.injector.get(IService);
        assert.equal(service.add(5, 3), 8);
    });

    it("IService provide concrete implementation of subtraction method", () => {
        context.initialize();
        service = context.injector.get(IService);
        assert.equal(service.subtract(5, 3), 2);
    });

    it("IService provide concrete implementation of multiplication method", () => {
        context.initialize();
        service = context.injector.get(IService);
        assert.equal(service.multiply(5, 3), 15);
    });

    it("IService provide concrete implementation of division method", () => {
        context.initialize();
        service = context.injector.get(IService);
        assert.equal(service.divide(15, 5), 3);
    });
});
