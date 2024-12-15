// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-nested-ternary */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Schema de validación extendido
const formSchema = z
  .object({
    name: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(50),
    contactMethod: z.enum(["email", "instagram", "phone"], {
      required_error: "Selecciona una forma de contacto",
    }),
    contactDetail: z.string(),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  })
  .refine(
    (data) => {
      const { contactMethod, contactDetail } = data;

      // Validación para el mínimo
      if (contactMethod === "instagram") {
        return contactDetail.length >= 1;
      }
      if (contactMethod === "email" || contactMethod === "phone") {
        return contactDetail.length >= 5;
      }

      return true;
    },
    {
      message:
        "El campo debe cumplir con la longitud mínima requerida para el método de contacto seleccionado.",
      path: ["contactDetail"],
    },
  )
  .refine(
    (data) => {
      const { contactMethod, contactDetail } = data;

      // Validación para email
      if (contactMethod === "email") {
        return /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(contactDetail);
      }

      // Validación para phone
      if (contactMethod === "phone") {
        return /^\d+$/.test(contactDetail);
      }

      return true; // Sin validación específica para Instagram
    },
    {
      message:
        "Introduce un dato válido para el método de contacto seleccionado.",
      path: ["contactDetail"],
    },
  );

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactMethod: "email",
      contactDetail: "",
      message: "",
    },
  });

  // Observar cambios en el método de contacto
  const contactMethod = form.watch("contactMethod");

  const getContactInputType = () =>
    contactMethod === "phone" ? "tel" : "text";

  const getContactDetailLabel = () => {
    if (contactMethod === "email") return "Correo Electrónico";
    if (contactMethod === "instagram") return "Usuario de Instagram";
    if (contactMethod === "phone") return "Número de Teléfono";
    return "Detalle de Contacto";
  };

  const getContactDetailPlaceholder = () => {
    if (contactMethod === "email") return "tuemail@ejemplo.com";
    if (contactMethod === "instagram") return "@tuUsuarioDeInstagram";
    if (contactMethod === "phone") return "1234567890";
    return "Introduce tu contacto";
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const req = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (req.ok) {
      form.reset();
      return toast("Mensaje enviado correctamente");
    }

    return toast.error("Error al enviar el mensaje, intenta de nuevo");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre*</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Method */}
        <FormField
          control={form.control}
          name="contactMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Forma de Contacto*</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="phone">Teléfono</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Elige cómo prefieres que te contacten.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Detail */}
        <FormField
          control={form.control}
          name="contactDetail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{getContactDetailLabel()}*</FormLabel>
              <FormControl>
                <Input
                  type={getContactInputType()} // Cambia dinámicamente el tipo de input
                  placeholder={getContactDetailPlaceholder()}
                  {...field}
                  onKeyPress={(e) => {
                    // Evitar caracteres no numéricos si es tipo "phone"
                    if (contactMethod === "phone" && !/\d/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  {...field}
                  className="min-h-[140px]"
                />
              </FormControl>
              <FormDescription>Describe tu consulta o mensaje.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};
