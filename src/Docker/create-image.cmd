docker build --no-cache -f SQL\Dockerfile.PostgreSql -t my_books/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t my_books/app ../..
