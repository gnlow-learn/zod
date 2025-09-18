import { z } from "https://esm.sh/zod@4.1.9"

const Person = z.object({
    name: z.string(),
    age: z.number().min(0).max(200),
})

const parsed = Person.parse({
    name: "John",
    age: 10,
    foo: "bar",
})
console.log(parsed)
