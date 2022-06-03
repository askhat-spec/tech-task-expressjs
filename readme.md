# Тестовая задача №2

## Описание задачи:
Необходимо создать сервис по конвертации изображения из .png в .webp, работающий на REST API. \
Изображение сервис получает в form-data, пример запроса:

```
curl --location --request POST 'http://localhost/image-service/webp' \ 
--header 'ticket: null' \
--form 'image=@/Users/ds/dev/tmp/img.jpg'
```
Желательно реализовать с использованием express и sharp.

## Решение
В проекте используется express, \
для конвертации изображения - sharp, \
для загрузки изображения - multer. \

Запуск через команду:
> ` - npm start`

Либо с помощью nodemon:
> ` - npm run dev`