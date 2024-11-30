# Etapa 1: Construcción del proyecto
FROM node:20-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Instala PNPM
RUN npm install -g pnpm

# Copia los archivos del proyecto
COPY . .

# Instala dependencias y construye el proyecto
RUN pnpm install
RUN pnpm build

# Etapa 2: Configuración del servidor estático
FROM nginx:stable-alpine AS server

# Copia los archivos construidos al servidor
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Arranca NGINX
CMD ["nginx", "-g", "daemon off;"]
