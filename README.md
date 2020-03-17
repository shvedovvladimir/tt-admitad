## Запуск локально:

Утановить docker-compose и Make (если нет)
- docker-compose: https://github.com/Yelp/docker-compose/blob/master/docs/install.md
- Make: brew install make (или другой пакетный менеджер)

1. git clone git@github.com:shvedovvladimir/tt-admitad.git
2. cd tt-admitad

4. `make dev-init` - инициализация, установка зависимостей, создание директорий
5. `make dev-up` - запуск в docker-compose сервиса + Postgres, Redis, Nginx

http://localhost/swagger/ - свагер с апи.

## Скрипты запуска
:
1. start.sh - запуск приложения.
2. migrations.sh - выполнение миграций.
3. dev.sh выполнение миграций + тестовые данные + запуск в watch and rebuild режиме.

## Зависимости:

1. Postgres
2. Redis
3. Nginx

## Порты:

    - app port: 9080
    - redis port: 6379
    - postgres port: 5432
    - nginx port: 80

## Конфиги

Переменных окружения берутся из файла variables.env, примеры можно посмотреть в файле variables.sample.env. При инициализации создается копия variables.sample.env -> variables.env, запуск можно производить с параметрами по умолчанию. В случае необходимости смены переменных окружения, проверьте скрипт инициализации бд, создание базы и назначение прав происходит в нем.

## Тесты

1. unit: 
    - npm run test - тесты для SenderService, кэширование и отправка файлов клиенту
    ![Screenshot](./docs/unit.jpg)
2. e2e: 
    - make dev-up
    - npm run test:e2e - тесты по ручкам api
    ![Screenshot](./docs/e2e.jpg)
3. coverage: 
    - make dev-up
    - npm run test:cov
    ![Screenshot](./docs/cov.jpg)
