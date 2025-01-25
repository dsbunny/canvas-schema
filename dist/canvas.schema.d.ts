import { z } from 'zod';
export declare const Viewport: z.ZodObject<{
    reference_id: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    reference_id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}, {
    reference_id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}>;
export type Viewport = z.infer<typeof Viewport>;
export declare const CanvasBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }, {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }>, "many">;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
}, {
    width: number;
    height: number;
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
}>;
export type CanvasBase = z.infer<typeof CanvasBase>;
export declare const CanvasRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodString;
    create_timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
}, {
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
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
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type CanvasMetadata = z.infer<typeof CanvasMetadata>;
export declare const Canvas: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }, {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }>, "many">;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }>]>, "many">;
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
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    width: number;
    height: number;
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type Canvas = z.infer<typeof Canvas>;
export declare const DbDtoFromCanvas: z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }, {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }>, "many">;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }>]>, "many">;
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
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    width: number;
    height: number;
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>, {
    tags: string;
    viewports: string;
    capabilities: string;
    width: number;
    height: number;
    name: string;
    frame_rate: number;
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    width: number;
    height: number;
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export declare const DbDtoToCanvas: z.ZodEffects<z.ZodObject<{
    canvas_id: z.ZodString;
    tenant_id: z.ZodString;
    name: z.ZodString;
    tags: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodString;
    capabilities: z.ZodString;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    name: string;
    tags: string;
    frame_rate: number;
    viewports: string;
    capabilities: string;
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}, {
    width: number;
    height: number;
    name: string;
    tags: string;
    frame_rate: number;
    viewports: string;
    capabilities: string;
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: number | undefined;
}>, {
    width: number;
    height: number;
    name: string;
    tags: string[];
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    width: number;
    height: number;
    name: string;
    tags: string;
    frame_rate: number;
    viewports: string;
    capabilities: string;
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: number | undefined;
}>;
