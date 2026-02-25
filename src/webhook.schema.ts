// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import {
        WebhookProgress,
        WebhookRequest,
        WebhookResponse,
} from "@dsbunny/webhook-schema";

export const CanvasDbWebhookClass = z.enum(['canvas'])
        .describe('The class of the webhook event related to canvas operations');
export type CanvasDbWebhookClass = z.infer<typeof CanvasDbWebhookClass>;

export const CanvasDbWebhookType = z.enum(['new', 'change', 'delete'])
        .describe('The type of the webhook event related to canvas operations');
export type CanvasDbWebhookType = z.infer<typeof CanvasDbWebhookType>;

export const CanvasDbWebhookRequest = WebhookRequest.extend({
        class: CanvasDbWebhookClass,
        type: CanvasDbWebhookType,
})
        .describe('The schema for webhook requests sent by the CanvasDB');
export type CanvasDbWebhookRequest = z.infer<typeof CanvasDbWebhookRequest>;

export const CanvasDbWebhookProgress = WebhookProgress;
export type CanvasDbWebhookProgress = z.infer<typeof CanvasDbWebhookProgress>;

export const CanvasDbWebhookResponse = WebhookResponse;
export type CanvasDbWebhookResponse = z.infer<typeof CanvasDbWebhookResponse>;
