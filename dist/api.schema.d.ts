import { z } from 'zod/v4';
export declare const ErrorResponse: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;
export declare const WebHookRequest: z.ZodObject<{
    ref_id: z.ZodString;
    class: z.ZodString;
}, {}, {}>;
export type WebHookRequest = z.infer<typeof WebHookRequest>;
export declare const WebHookResponse: z.ZodObject<{}, {}, {}>;
export type WebHookResponse = z.infer<typeof WebHookResponse>;
export declare const ListCanvasesRequest: z.ZodObject<{}, {}, {}>;
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
    }, {}, {}>>;
    next_token: z.ZodNullable<z.ZodString>;
}, {}, {}>;
export type ListCanvasesResponse = z.infer<typeof ListCanvasesResponse>;
export declare const ListDeletedCanvasesRequest: z.ZodObject<{}, {}, {}>;
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
    }, {}, {}>>;
    next_token: z.ZodNullable<z.ZodString>;
}, {}, {}>;
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
export type CreateCanvasRequest = z.infer<typeof CreateCanvasRequest>;
export declare const CreateCanvasResponse: z.ZodObject<{
    tenant_id: z.ZodString;
    canvas_id: z.ZodUUID;
    create_timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type CreateCanvasResponse = z.infer<typeof CreateCanvasResponse>;
export declare const GetCanvasRequest: z.ZodObject<{}, {}, {}>;
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
export type GetCanvasResponse = z.infer<typeof GetCanvasResponse>;
export declare const DeleteCanvasRequest: z.ZodObject<{}, {}, {}>;
export type DeleteCanvasRequest = z.infer<typeof DeleteCanvasRequest>;
export declare const DeleteCanvasResponse: z.ZodObject<{}, {}, {}>;
export type DeleteCanvasResponse = z.infer<typeof DeleteCanvasResponse>;
export declare const RecoverCanvasRequest: z.ZodObject<{}, {}, {}>;
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
export type RecoverCanvasResponse = z.infer<typeof RecoverCanvasResponse>;
export declare const UpdateCanvasRequest: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"add">;
    value: z.ZodAny;
}, {}, {}>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"remove">;
}, {}, {}>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"replace">;
    value: z.ZodAny;
}, {}, {}>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"move">;
    from: z.ZodString;
}, {}, {}>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"copy">;
    from: z.ZodString;
}, {}, {}>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"test">;
    value: z.ZodAny;
}, {}, {}>, z.ZodObject<{
    path: z.ZodString;
    op: z.ZodLiteral<"_get">;
    value: z.ZodAny;
}, {}, {}>]>>;
export type UpdateCanvasRequest = z.infer<typeof UpdateCanvasRequest>;
export declare const UpdateCanvasResponse: z.ZodObject<{
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
export type UpdateCanvasResponse = z.infer<typeof UpdateCanvasResponse>;
