// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
import { sqliteDateSchema } from './sqlite-date.schema.js';
import { Capability } from '@dsbunny/capability-schema';
export const Viewport = z.object({
    viewport_id: z.string().uuid()
        .describe('The UUID of the viewport'),
    reference_id: z.string()
        .describe('The reference ID of the viewport'),
    x: z.number().int()
        .describe('The X coordinate of the viewport'),
    y: z.number().int()
        .describe('The Y coordinate of the viewport'),
    width: z.number().int()
        .describe('The width of the viewport'),
    height: z.number().int()
        .describe('The height of the viewport'),
});
export const CanvasCapability = Capability.omit({
    create_timestamp: true,
    modify_timestamp: true,
    is_deleted: true,
});
export const CanvasBase = z.object({
    width: z.number().int().min(1).max(99999)
        .describe('The width of the canvas'),
    height: z.number().int().min(1).max(99999)
        .describe('The height of the canvas'),
    fps: z.number().int().min(1).max(1000)
        .describe('The maximum frames per second of the content'),
    viewports: z.array(Viewport)
        .describe('The viewports of the canvas'),
    capabilities: z.array(CanvasCapability)
        .describe('The capabilities of the canvas'),
});
export const CanvasRegistration = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the canvas'),
    canvas_id: z.string().uuid()
        .describe('The UUID of the canvas'),
    create_timestamp: z.string().datetime() // ISO 8601
        .describe('The timestamp of the canvas creation'),
})
    .describe('The registration of the canvas');
export const CanvasMetadata = CanvasRegistration.merge(z.object({
    modify_timestamp: z.string().datetime()
        .describe('The timestamp of when the canvas was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the canvas is deleted'),
}))
    .describe('The metadata of the canvas');
export const Canvas = CanvasBase.merge(CanvasMetadata);
export const DbDtoToCanvas = z.object({
    canvas_id: z.string().uuid(),
    tenant_id: z.string().uuid(),
    width: z.number().int().min(1).max(99999),
    height: z.number().int().min(1).max(99999),
    fps: z.number().int().min(1).max(1000),
    viewports: z.array(Viewport),
    capabilities: z.array(CanvasCapability),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto, ctx) => {
    return {
        ...dto,
        is_deleted: Boolean(dto.is_deleted),
    };
});
//# sourceMappingURL=canvas.schema.js.map