import { z } from 'zod';
export declare const Viewport: z.ZodObject<{
    viewport_id: z.ZodString;
    reference_id: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    viewport_id: string;
    reference_id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}, {
    viewport_id: string;
    reference_id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}>;
export type Viewport = z.infer<typeof Viewport>;
export declare const CanvasCapability: z.ZodObject<Omit<z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    codec: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}, {
    capability_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    row_number: z.ZodNumber;
}>, "create_timestamp" | "modify_timestamp" | "is_deleted">, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    codec: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
    capability_id: string;
    row_number: number;
}, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    codec: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
    capability_id: string;
    row_number: number;
}>;
export type CanvasCapability = z.infer<typeof CanvasCapability>;
export declare const CanvasBase: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        viewport_id: z.ZodString;
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }, {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }>, "many">;
    capabilities: z.ZodArray<z.ZodObject<Omit<z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        fps: z.ZodNumber;
        codec: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        capability_id: z.ZodString;
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }>, "create_timestamp" | "modify_timestamp" | "is_deleted">, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }, {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    fps: number;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
}, {
    width: number;
    height: number;
    fps: number;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
}>;
export type CanvasBase = z.infer<typeof CanvasBase>;
export declare const CanvasRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodString;
    create_timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    create_timestamp: string;
    canvas_id: string;
}, {
    tenant_id: string;
    create_timestamp: string;
    canvas_id: string;
}>;
export type CanvasRegistration = z.infer<typeof CanvasRegistration>;
export declare const CanvasMetadata: z.ZodObject<z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodString;
    create_timestamp: z.ZodString;
}, {
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, "strip", z.ZodTypeAny, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    canvas_id: string;
}, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    canvas_id: string;
    is_deleted?: boolean | undefined;
}>;
export type CanvasMetadata = z.infer<typeof CanvasMetadata>;
export declare const Canvas: z.ZodObject<z.objectUtil.extendShape<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        viewport_id: z.ZodString;
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }, {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }>, "many">;
    capabilities: z.ZodArray<z.ZodObject<Omit<z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        fps: z.ZodNumber;
        codec: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        capability_id: z.ZodString;
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }>, "create_timestamp" | "modify_timestamp" | "is_deleted">, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }, {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }>, "many">;
}, z.objectUtil.extendShape<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodString;
    create_timestamp: z.ZodString;
}, {
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>>, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
    canvas_id: string;
}, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    create_timestamp: string;
    modify_timestamp: string;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
    canvas_id: string;
    is_deleted?: boolean | undefined;
}>;
export type Canvas = z.infer<typeof Canvas>;
export declare const DbDtoToCanvas: z.ZodEffects<z.ZodObject<{
    canvas_id: z.ZodString;
    tenant_id: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        viewport_id: z.ZodString;
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }, {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }>, "many">;
    capabilities: z.ZodArray<z.ZodObject<Omit<z.objectUtil.extendShape<{
        tenant_id: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        fps: z.ZodNumber;
        codec: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        capability_id: z.ZodString;
        create_timestamp: z.ZodString;
        modify_timestamp: z.ZodString;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
        row_number: z.ZodNumber;
    }>, "create_timestamp" | "modify_timestamp" | "is_deleted">, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }, {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }>, "many">;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
    canvas_id: string;
}, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    create_timestamp: string;
    modify_timestamp: string;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
    canvas_id: string;
    is_deleted?: number | undefined;
}>, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
    canvas_id: string;
}, {
    width: number;
    height: number;
    tenant_id: string;
    fps: number;
    create_timestamp: string;
    modify_timestamp: string;
    viewports: {
        viewport_id: string;
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: {
        width: number;
        height: number;
        tenant_id: string;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        capability_id: string;
        row_number: number;
    }[];
    canvas_id: string;
    is_deleted?: number | undefined;
}>;
