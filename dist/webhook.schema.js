// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { WebhookProgress, WebhookRequest, WebhookResponse, } from "@dsbunny/webhook-schema";
export const CanvasDbWebhookClass = z.enum(['canvas'])
    .describe('The class of the webhook event related to canvas operations');
export const CanvasDbWebhookType = z.enum(['new', 'change', 'delete'])
    .describe('The type of the webhook event related to canvas operations');
export const CanvasDbWebhookRequest = WebhookRequest.extend({
    class: CanvasDbWebhookClass,
    type: CanvasDbWebhookType,
})
    .describe('The schema for webhook requests sent by the CanvasDB');
export const CanvasDbWebhookProgress = WebhookProgress;
export const CanvasDbWebhookResponse = WebhookResponse;
//# sourceMappingURL=webhook.schema.js.map