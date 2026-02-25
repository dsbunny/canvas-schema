import * as z from "zod";
export declare const CanvasDbWebhookClass: z.ZodEnum<{
    canvas: "canvas";
}>;
export type CanvasDbWebhookClass = z.infer<typeof CanvasDbWebhookClass>;
export declare const CanvasDbWebhookType: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
}>;
export type CanvasDbWebhookType = z.infer<typeof CanvasDbWebhookType>;
export declare const CanvasDbWebhookRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    class: z.ZodEnum<{
        canvas: "canvas";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
        delete: "delete";
    }>;
}, z.core.$strip>;
export type CanvasDbWebhookRequest = z.infer<typeof CanvasDbWebhookRequest>;
export declare const CanvasDbWebhookProgress: z.ZodNull;
export type CanvasDbWebhookProgress = z.infer<typeof CanvasDbWebhookProgress>;
export declare const CanvasDbWebhookResponse: z.ZodObject<{}, z.core.$strip>;
export type CanvasDbWebhookResponse = z.infer<typeof CanvasDbWebhookResponse>;
