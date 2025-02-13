import { z } from "zod";

export const referralSchema = z.object({
    yourFirstName: z
        .string()
        .min(3, "First name must be at least 3 characters")
        .regex(/^[A-Za-z\s]+$/, "First name must only contain letters and spaces"),
    
    yourLastName: z
        .string()
        .min(3, "Last name must be at least 3 characters")
        .regex(/^[A-Za-z\s]+$/, "Last name must only contain letters and spaces"),
    
    yourEmail: z.string().email("Invalid email format"),
    
    yourPhone: z
        .string()
        .min(8, "Phone number must be at least 8 digits")
        .regex(/^[0-9]+$/, "Phone number must only contain digits"),
    
    friendFirstName: z
        .string()
        .min(2, "Friend's first name must be at least 2 characters")
        .regex(/^[A-Za-z\s]+$/, "Friend's first name must only contain letters and spaces"),
    
    friendLastName: z
        .string()
        .min(2, "Friend's last name must be at least 2 characters")
        .regex(/^[A-Za-z\s]+$/, "Friend's last name must only contain letters and spaces"),
    
    friendEmail: z.string().email("Invalid friend's email format"),
    
    friendPhone: z
        .string()
        .min(8, "Friend's phone number must be at least 8 digits")
        .regex(/^[0-9]+$/, "Friend's phone number must only contain digits"),
    
    major: z.string().nonempty("Major is required"),
    
    nicheCourse: z.string().nonempty("Niche course is required")
});
