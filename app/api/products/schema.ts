import { z } from "zod";

const schema = z.object({
    id: z.number().gt(0),
    name: z.string().min(3).max(50),
    price: z.number().gt(0).max(4000)
})

export default schema