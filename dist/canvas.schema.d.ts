import { z } from 'zod';
export declare const Viewport: z.ZodObject<{
    reference_id: z.ZodString;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, {}, {}>;
export type Viewport = z.infer<typeof Viewport>;
export declare const CanvasBase: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, {}, {}>>;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, {}, {}>]>>;
}, {}, {}>;
export type CanvasBase = z.infer<typeof CanvasBase>;
export declare const CanvasRegistration: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type CanvasRegistration = z.infer<typeof CanvasRegistration>;
export declare const CanvasMetadata: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type CanvasMetadata = z.infer<typeof CanvasMetadata>;
export declare const Canvas: z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, {}, {}>>;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, {}, {}>]>>;
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type Canvas = z.infer<typeof Canvas>;
export declare const DbDtoFromCanvas: z.ZodPipe<z.ZodObject<{
    name: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodArray<z.ZodObject<{
        reference_id: z.ZodString;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, {}, {}>>;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, {}, {}>]>>;
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>, z.ZodTransform<{
    tags: string;
    viewports: string;
    capabilities: string;
    name: string;
    width: number;
    height: number;
    frame_rate: number;
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    name: string;
    tags: string[];
    width: number;
    height: number;
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        mime_type: "video";
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        mime_type: "audio";
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_subtype: string;
        is_supported: boolean;
        mime_type: "image";
        width: number;
        height: number;
        is_smooth: false;
        is_power_efficient: true;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
export declare const DbDtoToCanvas: z.ZodPipe<z.ZodObject<{
    canvas_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    name: z.ZodString;
    tags: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    viewports: z.ZodString;
    capabilities: z.ZodString;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}, {}>, z.ZodTransform<{
    name: string;
    tags: string[];
    width: number;
    height: number;
    frame_rate: number;
    viewports: {
        reference_id: string;
        x: number;
        y: number;
        width: number;
        height: number;
    }[];
    capabilities: ({
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        mime_type: "video";
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        mime_type: "audio";
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_subtype: string;
        is_supported: boolean;
        mime_type: "image";
        width: number;
        height: number;
        is_smooth: false;
        is_power_efficient: true;
    })[];
    tenant_id: string;
    canvas_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    canvas_id: string;
    tenant_id: string;
    name: string;
    tags: string;
    width: number;
    height: number;
    frame_rate: number;
    viewports: string;
    capabilities: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}>>;
