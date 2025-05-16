// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
import { CapabilityTypes } from '@dsbunny/capability-schema';
import { sqliteDateSchema } from './sqlite-date.schema.js';
export const Viewport = z.object({
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
})
    .describe('The viewport');
export const CanvasBase = z.object({
    name: z.string()
        .describe('A descriptive name for the canvas'),
    tags: z.array(z.string())
        .describe('The tags of the canvas'),
    width: z.number().int().min(1).max(99999)
        .describe('The width of the canvas'),
    height: z.number().int().min(1).max(99999)
        .describe('The height of the canvas'),
    frame_rate: z.number().int().min(1).max(1000)
        .describe('The maximum frames per second of the canvas'),
    viewports: z.array(Viewport)
        .describe('The viewports of the canvas'),
    capabilities: z.array(CapabilityTypes)
        .describe('The capabilities of the canvas'),
});
export const CanvasRegistration = z.object({
    tenant_id: z.string()
        .describe('The tenant ID of the canvas'),
    canvas_id: z.uuid()
        .describe('The UUID of the canvas'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the canvas creation'),
})
    .describe('The registration of the canvas');
export const CanvasMetadata = CanvasRegistration.extend({
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of when the canvas was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the canvas is deleted'),
})
    .describe('The metadata of the canvas');
export const Canvas = CanvasBase.extend(CanvasMetadata.shape);
export const DbDtoFromCanvas = Canvas.transform((canvas) => {
    return {
        ...canvas,
        tags: JSON.stringify(canvas.tags),
        viewports: JSON.stringify(canvas.viewports),
        capabilities: JSON.stringify(canvas.capabilities),
    };
});
export const DbDtoToCanvas = z.object({
    canvas_id: z.uuid(),
    tenant_id: z.uuid(),
    name: z.string(),
    tags: z.string(),
    width: z.number().int().min(1).max(99999),
    height: z.number().int().min(1).max(99999),
    frame_rate: z.number().int().min(1).max(1000),
    viewports: z.string(),
    capabilities: z.string(),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto, ctx) => {
    return {
        ...dto,
        tags: JSON.parse(dto.tags),
        viewports: JSON.parse(dto.viewports),
        capabilities: JSON.parse(dto.capabilities),
        is_deleted: Boolean(dto.is_deleted),
    };
});
//# sourceMappingURL=canvas.schema.js.map