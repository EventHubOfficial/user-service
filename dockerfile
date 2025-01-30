# Используем Node.js как базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --only=production

# Копируем остальные файлы проекта
COPY . .

# Собираем Prisma
RUN npx prisma generate

# Открываем порт сервиса
EXPOSE 3000

# Команда запуска
CMD ["npm", "run", "start"]

