<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Poznati citati</title>
</head>
<body>
  <ul class="quotes">
    <% for(var i=0; i<quotes.length; i++) {%>
      <li class="quote">
        <span><%= quotes[i].name %></span>
        <span><%= quotes[i].quote %></span>
      </li>
    <% } %>
  </ul>

  <div>
    <h2>Poznati citati</h2>
    <button id="update"></button>
  </div>
  <form action="/quotes" method="post">
    <input type="text" placeholder="name" name="name">
    <input type="text" placeholder="quote" name="quote">
    <button type="Submit">Submit</button>
  </form>

  <div>
  <h2>Poznati citati</h2>
  <button id="delete"></button>
</div>
  <script src="main.js"></script>

</body>
</html>