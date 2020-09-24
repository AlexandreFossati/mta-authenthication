var conn = $.hdb.getConnection();
var query = 'SELECT * FROM "mta1.db.tables::products"';
var results = conn.executeQuery(query);
conn.close();

$.response.contentType = "text/json";
$.response.setBody(results);
$.response.status = $.net.http.OK;