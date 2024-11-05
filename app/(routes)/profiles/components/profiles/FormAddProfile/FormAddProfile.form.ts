import { z } from "zod";

export const formSchema = z.object({
    profileName: z.string().min(2).max(50),
    avatarUrl:z.enum([
        "/profiles/imagen1.png",
        "/profiles/imagen22.png",
        "/profiles/imagen23.png",
        "/profiles/imagen24.png",
    ]),
});