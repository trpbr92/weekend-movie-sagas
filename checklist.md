
CHECKLIST:

--Setup--

[x] Create a database name `saga_movies_weekend`

[x] Run the queries from `database.sql` on `saga_movies_weekend` database

[x] Install dependencies (npm install, npm run server, npm run client)

[] OPTIONAL: Add my own movie posters to `public/images`


--Features--

[x] Create inventory of existing code:

    - genre.router.js for GET call to get all genres from db
    
    - movie.router.js for POST to create new movie & adding genre to new movie

    - MovieList.jsx displays movie title and poster from store

    - index.js contains axios GET call in SAGA & store

[] When movie poster is clicked user should be brought to `/details` view for that movie.

[] Create `Add Movie` page and create a way to get there


--Details Page--

[] Show all details, including all genres for each movie (data is stored in redux)

[] Create a `Back to List` button that brings user back to Home/List Page

--Add Movie Page--

[] Create `input field` for movie title

[] Create `input field`for movie poster image URL

[] Create a `text area` for the movie description

[] Create a `dropdown menu` for movie genres (use genres from db)

[] Create a `Cancel button` that sends user back to Home/List Page

[] Create `Save button` which updates the title and description in the database and brings user back to Home/List page (now also displaying new movie)