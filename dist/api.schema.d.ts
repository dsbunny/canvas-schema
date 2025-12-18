import * as z from "zod";
export declare const ErrorResponse: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;
export declare const WebHookRequest: z.ZodObject<{
    ref_id: z.ZodString;
    class: z.ZodString;
}, z.core.$strip>;
export type WebHookRequest = z.infer<typeof WebHookRequest>;
export declare const WebHookResponse: z.ZodObject<{}, z.core.$strip>;
export type WebHookResponse = z.infer<typeof WebHookResponse>;
export declare const ListCanvasesRequest: z.ZodObject<{}, z.core.$strip>;
export type ListCanvasesRequest = z.infer<typeof ListCanvasesRequest>;
export declare const ListCanvasesResponse: z.ZodObject<{
    canvases: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
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
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, z.core.$strip>], "mime_type">>;
        tenant_id: z.ZodString;
        canvas_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListCanvasesResponse = z.infer<typeof ListCanvasesResponse>;
export declare const GetCanvasSuggestionsRequest: z.ZodObject<{}, z.core.$strip>;
export type GetCanvasSuggestionsRequest = z.infer<typeof GetCanvasSuggestionsRequest>;
export declare const GetCanvasSuggestionsResponse: z.ZodObject<{
    c: z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>;
    s: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNullable<z.ZodString>], null>>;
}, z.core.$strip>;
export type GetCanvasSuggestionsResponse = z.infer<typeof GetCanvasSuggestionsResponse>;
export declare const GetCanvasAvailabilityRequest: z.ZodObject<{}, z.core.$strip>;
export type GetCanvasAvailabilityRequest = z.infer<typeof GetCanvasAvailabilityRequest>;
export declare const GetCanvasAvailabilityResponse: z.ZodObject<{
    is_available: z.ZodBoolean;
}, z.core.$strip>;
export type GetCanvasAvailabilityResponse = z.infer<typeof GetCanvasAvailabilityResponse>;
export declare const ListDeletedCanvasesRequest: z.ZodObject<{}, z.core.$strip>;
export type ListDeletedCanvasesRequest = z.infer<typeof ListDeletedCanvasesRequest>;
export declare const ListDeletedCanvasesResponse: z.ZodObject<{
    canvases: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
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
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, z.core.$strip>], "mime_type">>;
        tenant_id: z.ZodString;
        canvas_id: z.ZodUUID;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListDeletedCanvasesResponse = z.infer<typeof ListDeletedCanvasesResponse>;
export declare const CreateCanvasRequest: z.ZodObject<{
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
    }, z.core.$strip>>;
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
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">>;
}, z.core.$strip>;
export type CreateCanvasRequest = z.infer<typeof CreateCanvasRequest>;
export declare const CreateCanvasResponse: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreateCanvasResponse = z.infer<typeof CreateCanvasResponse>;
export declare const GetCanvasRequest: z.ZodObject<{}, z.core.$strip>;
export type GetCanvasRequest = z.infer<typeof GetCanvasRequest>;
export declare const GetCanvasResponse: z.ZodObject<{
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
    }, z.core.$strip>>;
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
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">>;
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type GetCanvasResponse = z.infer<typeof GetCanvasResponse>;
export declare const DeleteCanvasRequest: z.ZodObject<{}, z.core.$strip>;
export type DeleteCanvasRequest = z.infer<typeof DeleteCanvasRequest>;
export declare const DeleteCanvasResponse: z.ZodObject<{}, z.core.$strip>;
export type DeleteCanvasResponse = z.infer<typeof DeleteCanvasResponse>;
export declare const RecoverCanvasRequest: z.ZodObject<{}, z.core.$strip>;
export type RecoverCanvasRequest = z.infer<typeof RecoverCanvasRequest>;
export declare const RecoverCanvasResponse: z.ZodObject<{
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
    }, z.core.$strip>>;
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
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">>;
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type RecoverCanvasResponse = z.infer<typeof RecoverCanvasResponse>;
export declare const PatchCanvasRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
    not: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>], "op">>;
export type PatchCanvasRequest = z.infer<typeof PatchCanvasRequest>;
export declare const PatchCanvasResponse: z.ZodObject<{
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
    }, z.core.$strip>>;
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
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">>;
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type PatchCanvasResponse = z.infer<typeof PatchCanvasResponse>;
