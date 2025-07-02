import { useState, useRef, useEffect } from "react";
import { ModalContext } from "@/context/ModalContext";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export const GlobalModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", date: "" });
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (open) {
      setShow(true);
    } else if (show) {
      timeoutRef.current = setTimeout(() => setShow(false), 300);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const senMessage = (data: { name: string; date: string }) => {
    const phone = "5359017342";
    const text = `Hola, soy ${data.name} y quiero agendar una sesión para el día ${data.date}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    senMessage(formValues);
    toast.success("¡Mensaje enviado! Te contactaremos pronto.", { 
      duration: 2000, position: "top-center"})
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal forceMount>
          {show && (
            <>
              <Dialog.Overlay
                className={`
                  fixed inset-0 bg-black/60 backdrop-blur-sm z-50
                  transition-opacity duration-300
                  ${open ? "opacity-100" : "opacity-0"}
                `}
              />
              <Dialog.Content
                forceMount
                className={`
                  fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-background p-8 rounded-xl shadow-xl w-full max-w-sm focus:outline-none
                  transition-all duration-300
                  ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              >
                <Dialog.Title className="text-2xl font-bold neon-text animate-glow-pulse mb-4">
                  Agendar Sesión
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="block text-sm mb-1" htmlFor="name">
                    Nombre
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm glass-effect transition-all duration-300"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="block text-sm mb-1" htmlFor="date">
                    Fecha a Agendar
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required
                      value={formValues.date}
                      onChange={handleChange}
                      className="w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm glass-effect transition-all duration-300"
                    />
                  </label>
                  <div className="flex justify-end gap-2 pt-2">
                    <Dialog.Close asChild>
                      <Button variant="outline" type="button">
                        Cancelar
                      </Button>
                    </Dialog.Close>
                    <Button type="submit" className="text-black">
                      Agendar
                    </Button>
                  </div>
                </form>
              </Dialog.Content>
            </>
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </ModalContext.Provider>
  );
};