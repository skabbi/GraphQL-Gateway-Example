# GraphQL-Gateway-Example
Example GraphQL gateway which calls multiple HTTP endpoints

To start up the servers, run
```
npm install
npm start
```
Then in your browser:
&nbsp;&nbsp;&nbsp;&nbsp; the URL "http://localhost:3000/" will show you a GraphQL client for the gateway.
&nbsp;&nbsp;&nbsp;&nbsp; the URL "http://localhost:3001/" will run the Author HTTP server.
&nbsp;&nbsp;&nbsp;&nbsp; the URL "http://localhost:3002/" will run the Book HTTP server.
&nbsp;&nbsp;&nbsp;&nbsp; the URL "http://localhost:3003/" will run the Review HTTP server.

The gateway allows you to get information about authors, books and in a single query.

**Example gateway request:**
```
{
  authors {
    name
    books {
      title
      review
    }
  }
}

```

**Example gateway response:**
```
{
  "data": {
    "authors": [
      {
        "name": "J.K. Rowling",
        "books": [
          {
            "title": "Harry Potter and the Chamber of Secrets",
            "review": 4.4
          },
          {
            "title": "Fantastic Beasts and Where to Find Them",
            "review": 4
          },
          {
            "title": "The Casual Vacancy",
            "review": 3.3
          }
        ]
      },
      ...
```
