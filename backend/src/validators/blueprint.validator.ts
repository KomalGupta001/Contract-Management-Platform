import { z } from "zod";

export const blueprintSchema = z.object({
  name: z.string().min(3),
  fields: z.array(
    z.object({
      type: z.enum(["text", "date", "checkbox", "signature"]),
      label: z.string(),
      position: z.object({
        x: z.number(),
        y: z.number()
      })
    })
  )
});
