// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { Canvas, CanvasBase, CanvasRegistration } from './canvas.schema.js';
import { JsonPatchOperation } from './patch-operation.schema.js';
// #region Errors
export const ErrorResponse = z.object({
    code: z.string()
        .describe('Error code representing the type of error.'),
    message: z.string()
        .describe('Error message describing the issue.'),
    detail: z.string()
        .describe('Additional details about the error, if available.'),
    timestamp: z.iso.datetime()
        .describe('Timestamp when the error occurred (ISO_8601 format).'),
})
    .describe('Error response schema');
// #endregion
// #region WebHook
export const WebHookRequest = z.object({
    ref_id: z.string(),
    class: z.string(),
})
    .describe('WebHook request schema');
export const WebHookResponse = z.object({})
    .describe('WebHook response schema');
// #endregion
// #region Canvases
export const ListCanvasesRequest = z.object({})
    .describe('List canvases request schema');
export const ListCanvasesResponse = z.object({
    canvases: z.array(Canvas),
    next_token: z.string().nullable(),
})
    .describe('List canvases response schema');
export const GetCanvasSuggestionsRequest = z.object({})
    .describe('Get canvas suggestions request schema');
export const GetCanvasSuggestionsResponse = z.object({
    c: z.string()
        .describe('Canvas name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Canvas name suggestions for given input'),
})
    .describe('Get canvas suggestions response schema');
export const GetCanvasAvailabilityRequest = z.object({})
    .describe('Get canvas availability request schema');
export const GetCanvasAvailabilityResponse = z.object({
    is_available: z.boolean()
        .describe('Indicates if the canvas name is available'),
})
    .describe('Get canvas availability response schema');
export const ListDeletedCanvasesRequest = z.object({})
    .describe('List deleted canvases request schema');
export const ListDeletedCanvasesResponse = z.object({
    canvases: z.array(Canvas),
    next_token: z.string().nullable(),
})
    .describe('List deleted canvases response schema');
export const CreateCanvasRequest = CanvasBase
    .describe('Create canvas request schema');
export const CreateCanvasResponse = CanvasRegistration
    .describe('Create canvas response schema');
export const GetCanvasRequest = z.object({})
    .describe('Get canvas request schema');
export const GetCanvasResponse = Canvas
    .describe('Get canvas response schema');
export const DeleteCanvasRequest = z.object({})
    .describe('Delete canvas request schema');
export const DeleteCanvasResponse = z.object({})
    .describe('Delete canvas response schema');
export const RecoverCanvasRequest = z.object({})
    .describe('Recover canvas request schema');
export const RecoverCanvasResponse = Canvas
    .describe('Recover canvas response schema');
export const PatchCanvasRequest = z.array(JsonPatchOperation).max(50)
    .describe('Patch canvas request schema');
export const PatchCanvasResponse = Canvas
    .describe('Patch canvas response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map